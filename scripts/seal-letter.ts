/**
 * Encrypts a private letter so it can live in this public repo.
 *
 *   npm run seal-letter -- letters-src/<name>.txt --key <your-key>
 *
 * Writes data/letters/<name>.json (ciphertext, safe to commit) and prints the
 * link to send: /letters/<name>#<key>. The filename is public, so pick one
 * that doesn't give anything away. The key is only in the link's #fragment
 * and in letters-src/<name>.link.json (gitignored), so re-sealing after an
 * edit keeps the same link. --key is required the first time (at least
 * MIN_KEY_LENGTH characters).
 *
 * The key is stretched with PBKDF2 (600k rounds) to make offline guessing
 * against the public ciphertext expensive, but that only multiplies the cost:
 * the key itself still needs to be hard to guess (not a word or a name).
 */
import { execFileSync } from "node:child_process";
import { webcrypto as crypto } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { parseArgs } from "node:util";
import { SITE_URL } from "../lib/site";

const OUT_DIR = path.join("data", "letters");
const ITERATIONS = 600_000;
const MIN_KEY_LENGTH = 12;
const b64url = (bytes: Uint8Array) => Buffer.from(bytes).toString("base64url");

function isGitIgnored(file: string): boolean {
  try {
    execFileSync("git", ["check-ignore", "-q", file]);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const { values, positionals } = parseArgs({
    allowPositionals: true,
    options: { key: { type: "string" } },
  });
  const input = positionals[0];
  if (!input || !fs.existsSync(input)) {
    console.error(
      "Usage: npm run seal-letter -- letters-src/<name>.txt --key <your-key>",
    );
    process.exit(1);
  }
  if (!isGitIgnored(input)) {
    console.error(
      `Refusing: ${input} is not gitignored, so the plaintext could end up on GitHub.\n` +
        "Put it in letters-src/ (and don't start the name with _).",
    );
    process.exit(1);
  }

  const linkFile = input.replace(/\.txt$/, "") + ".link.json";
  const saved: { key?: string } = fs.existsSync(linkFile)
    ? JSON.parse(fs.readFileSync(linkFile, "utf8"))
    : {};
  const slug = path.basename(input).replace(/\.txt$/, "");
  const keyText = values.key ?? saved.key;
  if (!keyText) {
    console.error(`Pick a key with --key (at least ${MIN_KEY_LENGTH} characters).`);
    process.exit(1);
  }

  if (!/^[a-z0-9-]+$/.test(slug)) {
    console.error(
      `The filename becomes the URL, so it can only use lowercase letters, digits and dashes (got "${slug}").`,
    );
    process.exit(1);
  }
  if (!/^[A-Za-z0-9._~-]+$/.test(keyText)) {
    console.error("Key can only use letters, digits and . _ ~ - (so it survives in a link).");
    process.exit(1);
  }
  if (keyText.length < MIN_KEY_LENGTH) {
    console.error(
      `Key must be at least ${MIN_KEY_LENGTH} characters: the encrypted letter is public, so short keys can be cracked offline.`,
    );
    process.exit(1);
  }

  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const baseKey = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(keyText),
    "PBKDF2",
    false,
    ["deriveKey"],
  );
  const aesKey = await crypto.subtle.deriveKey(
    { name: "PBKDF2", salt, iterations: ITERATIONS, hash: "SHA-256" },
    baseKey,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt"],
  );
  const ciphertext = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    aesKey,
    new TextEncoder().encode(fs.readFileSync(input, "utf8")),
  );

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const out = path.join(OUT_DIR, `${slug}.json`);
  fs.writeFileSync(
    out,
    JSON.stringify({
      v: 2,
      iter: ITERATIONS,
      salt: b64url(salt),
      iv: b64url(iv),
      ct: b64url(new Uint8Array(ciphertext)),
    }) + "\n",
  );
  fs.writeFileSync(linkFile, JSON.stringify({ key: keyText }, null, 2) + "\n");

  console.log(`Sealed → ${out} (safe to commit)`);
  console.log(`Link   → ${SITE_URL}/letters/${slug}#${keyText}`);
  console.log(`Local  → http://localhost:3000/letters/${slug}#${keyText}`);
}

main();

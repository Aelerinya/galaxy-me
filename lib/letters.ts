import fs from "node:fs";
import path from "node:path";

/** Encrypted letters, written by `npm run seal-letter`. Safe to commit. */
const SEALED_DIR = path.join(process.cwd(), "data", "letters");

export interface SealedLetter {
  v: 2;
  iter: number; // PBKDF2-SHA256 rounds
  salt: string; // base64url
  iv: string; // base64url
  ct: string; // base64url, AES-256-GCM ciphertext + tag
}

export function listSealedSlugs(): string[] {
  if (!fs.existsSync(SEALED_DIR)) return [];
  return fs
    .readdirSync(SEALED_DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.slice(0, -".json".length));
}

export function getSealedLetter(slug: string): SealedLetter | null {
  if (!listSealedSlugs().includes(slug)) return null;
  return JSON.parse(
    fs.readFileSync(path.join(SEALED_DIR, `${slug}.json`), "utf8"),
  ) as SealedLetter;
}

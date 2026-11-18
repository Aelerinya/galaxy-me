"use client";

import { useEffect, useState } from "react";
import { parseLetter, type Letter } from "@/lib/letter-format";
import type { SealedLetter as Sealed } from "@/lib/letters";

type State =
  | { status: "loading" }
  | { status: "locked" }
  | { status: "open"; letter: Letter };

function fromBase64Url(s: string): Uint8Array<ArrayBuffer> {
  const b64 = s.replace(/-/g, "+").replace(/_/g, "/");
  const bin = atob(b64 + "===".slice((b64.length + 3) % 4));
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

async function openLetter(sealed: Sealed): Promise<State> {
  // The key lives in the URL fragment, which browsers never send to the server.
  const key = decodeURIComponent(window.location.hash.slice(1));
  if (!key) return { status: "locked" };
  try {
    const baseKey = await crypto.subtle.importKey(
      "raw",
      new TextEncoder().encode(key),
      "PBKDF2",
      false,
      ["deriveKey"],
    );
    const aesKey = await crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt: fromBase64Url(sealed.salt),
        iterations: sealed.iter,
        hash: "SHA-256",
      },
      baseKey,
      { name: "AES-GCM", length: 256 },
      false,
      ["decrypt"],
    );
    const plaintext = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv: fromBase64Url(sealed.iv) },
      aesKey,
      fromBase64Url(sealed.ct),
    );
    return {
      status: "open",
      letter: parseLetter(new TextDecoder().decode(plaintext)),
    };
  } catch {
    return { status: "locked" };
  }
}

export function SealedLetter({ sealed }: { sealed: Sealed }) {
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => {
    // Re-check when only the #key changes (pasting a link into an open tab
    // doesn't reload the page).
    const open = () => void openLetter(sealed).then(setState);
    open();
    window.addEventListener("hashchange", open);
    return () => window.removeEventListener("hashchange", open);
  }, [sealed]);

  if (state.status === "loading") return <div className="min-h-[60vh]" />;

  if (state.status === "locked") {
    return (
      <p className="py-24 text-center font-mono text-sm text-muted">
        This letter only opens with the full link it was sent with.
      </p>
    );
  }

  const { letter } = state;
  return (
    <article className="font-display text-[1.1875rem] leading-[1.8]">
      {letter.date && (
        <p className="mb-14 text-right font-mono text-xs uppercase tracking-widest text-muted">
          {letter.date}
        </p>
      )}
      <div className="space-y-6">
        {letter.paragraphs.map((p, i) => (
          <p key={i} className="whitespace-pre-line text-pretty">
            {p}
          </p>
        ))}
      </div>
      {letter.signature && (
        <p className="mt-10 text-3xl italic">{letter.signature}</p>
      )}
    </article>
  );
}

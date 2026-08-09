"use client";

import { useState } from "react";

interface CopyButtonProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export function CopyButton({ value, children, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be unavailable (permissions, http) — select-nothing is
      // better than a crash; the handle is visible right next to the button.
    }
  }

  return (
    <button type="button" onClick={copy} className={className}>
      {children}
      <span
        className={`ml-auto font-mono text-xs transition-opacity ${
          copied ? "opacity-100" : "text-muted opacity-0 group-hover:opacity-100"
        }`}
        style={copied ? { color: "var(--accent, var(--color-spark))" } : undefined}
        aria-live="polite"
      >
        {copied ? "copied ✦" : "click to copy"}
      </span>
    </button>
  );
}

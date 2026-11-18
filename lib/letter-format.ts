export interface Letter {
  date?: string;
  signature?: string;
  paragraphs: string[];
}

/**
 * Parses a letter source file: optional "key: value" header lines
 * (date, signature), a line containing only ---, then the body.
 * Paragraphs are separated by blank lines; single line breaks are kept.
 */
export function parseLetter(source: string): Letter {
  const raw = source.replace(/\r\n/g, "\n");
  const match = raw.match(/^([\s\S]*?)\n---\n([\s\S]*)$/);
  const headerText = match ? match[1] : "";
  const body = match ? match[2] : raw;

  const header: Record<string, string> = {};
  for (const line of headerText.split("\n")) {
    const m = line.match(/^(\w+):\s*(.*)$/);
    if (m) header[m[1].toLowerCase()] = m[2].trim();
  }

  return {
    date: header.date || undefined,
    signature: header.signature || undefined,
    paragraphs: body
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter(Boolean),
  };
}

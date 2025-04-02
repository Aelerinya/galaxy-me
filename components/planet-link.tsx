"use client";

import { useState } from "react";

interface PlanetLinkProps {
  label: string;
  url?: string;
  iconUrl?: string;
  isSectionHeader?: boolean;
  action?: string;
  baseColor: string;
  darkColor: string;
}

export default function PlanetLink({
  label,
  url = "#",
  iconUrl,
  isSectionHeader,
  action,
  baseColor,
  darkColor,
}: PlanetLinkProps) {
  const [copied, setCopied] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (action === "copy to clipboard") {
      e.preventDefault();
      navigator.clipboard.writeText(label);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (isSectionHeader) {
    return (
      <div className="w-full">
        <div className="text-sm font-semibold text-starlight-white/90 mt-4 mb-2 w-full text-center">
          {label}
        </div>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-starlight-white/20 to-transparent mb-2" />
      </div>
    );
  }

  const isEmoji = iconUrl && !iconUrl.startsWith("http");

  return (
    <div className="relative">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-sm px-3 py-1 rounded-full bg-gradient-to-r ${baseColor} ${darkColor} hover:opacity-90 transition-opacity flex items-center gap-2 justify-center`}
        onClick={handleClick}
      >
        {iconUrl &&
          (isEmoji ? (
            <span className="text-base">{iconUrl}</span>
          ) : (
            <img src={iconUrl} alt={`${label} icon`} className="w-4 h-4" />
          ))}
        {label}
      </a>
      {copied && (
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-starlight-white text-space-blue text-xs px-2 py-1 rounded shadow-md whitespace-nowrap">
          Copied!
        </div>
      )}
    </div>
  );
}

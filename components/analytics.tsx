"use client";

import { Analytics as VercelAnalytics } from "@vercel/analytics/react";

/** Vercel Analytics, minus URL fragments (letter keys live there). */
export function Analytics() {
  return (
    <VercelAnalytics
      beforeSend={(event) => ({ ...event, url: event.url.split("#")[0] })}
    />
  );
}

"use client";

/**
 * Badge (aka "signal tag")
 * ---------------------------------------------------------------------------
 * The site's signature structural device: a monospace pill with a pulsing
 * dot, styled like a terminal status line. Used as the eyebrow above every
 * section heading and on cards. `index` renders as a zero-padded counter
 * (e.g. "01") when the badge is part of a real, ordered sequence — omit it
 * for non-sequential labels.
 */
export default function Badge({ children, index, tone = "primary", className = "" }) {
  const toneClasses =
    tone === "secondary"
      ? "text-secondary border-secondary/30 bg-secondary-soft"
      : "text-primary border-primary/30 bg-primary-soft";

  const dotClasses = tone === "secondary" ? "bg-secondary" : "bg-primary";

  return (
    <span
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border font-mono text-xs tracking-wider uppercase ${toneClasses} ${className}`}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className={`absolute inline-flex h-full w-full rounded-full ${dotClasses} opacity-60 animate-ping`} />
        <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${dotClasses}`} />
      </span>
      {typeof index !== "undefined" && (
        <span className="opacity-60">{String(index).padStart(2, "0")} ·</span>
      )}
      {children}
    </span>
  );
}

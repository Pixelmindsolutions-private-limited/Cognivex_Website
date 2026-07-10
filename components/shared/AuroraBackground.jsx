"use client";

import { motion } from "framer-motion";
import { floatSlow } from "../../utils/animations";

/**
 * AuroraBackground
 * ---------------------------------------------------------------------------
 * The site's signature atmosphere: three soft, slowly-drifting gradient
 * blobs (violet / cyan / amber) layered over a faint dot-grid and an SVG
 * grain texture. Used behind the Hero and CTA sections instead of a flat
 * gradient — it's the one place the design "spends its boldness" per the
 * brief, so it stays out of every other section.
 *
 * Pure CSS/SVG — no images, no external assets.
 */
export default function AuroraBackground({ variant = "hero" }) {
  const isCompact = variant === "compact";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      {/* Gradient blobs */}
      <motion.div
        {...floatSlow}
        className={`absolute -top-24 -left-24 rounded-full bg-primary/30 blur-[100px] ${
          isCompact ? "w-64 h-64" : "w-[28rem] h-[28rem]"
        }`}
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -16, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute top-10 right-0 rounded-full bg-secondary/25 blur-[100px] ${
          isCompact ? "w-56 h-56" : "w-[24rem] h-[24rem]"
        }`}
      />
      {!isCompact && (
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-accent/10 blur-[100px]"
        />
      )}

      {/* Grain texture (SVG feTurbulence, no external asset) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05] mix-blend-overlay">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  );
}

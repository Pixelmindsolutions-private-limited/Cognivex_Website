"use client";

import { motion } from "framer-motion";

/**
 * GlassCard
 * ---------------------------------------------------------------------------
 * The primary glassmorphism surface: translucent fill, backdrop blur, and a
 * 1px gradient border achieved with a padding-box/border-box double
 * background (no extra wrapper element needed). `glow` adds a soft colored
 * shadow that intensifies on hover — used for cards that should feel
 * "active" (pricing highlight, featured testimonial, etc).
 */
export default function GlassCard({ children, className = "", glow = false, hover = true }) {
  return (
    <motion.div
      whileHover={hover ? { y: -8 } : undefined}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`relative rounded-brand p-8 bg-white/[0.04] backdrop-blur-xl border border-white/10 transition-shadow duration-500 ${
        glow ? "shadow-glow-primary hover:shadow-glow-secondary" : "hover:border-white/20"
      } ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.01))",
      }}
    >
      {children}
    </motion.div>
  );
}

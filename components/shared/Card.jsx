"use client";

import { motion } from "framer-motion";

/**
 * Card
 * ---------------------------------------------------------------------------
 * Solid (non-glass) surface card for use on light or already-busy
 * backgrounds — e.g. stacked on top of GlassCards, or on the void background
 * where a glass card would disappear. Gains a soft gradient border and lift
 * on hover.
 */
export default function Card({ children, className = "", hover = true, as: Component = motion.div, ...props }) {
  return (
    <Component
      whileHover={hover ? { y: -8 } : undefined}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`relative rounded-brand bg-elevated border border-border p-8 transition-colors duration-300 hover:border-primary/40 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

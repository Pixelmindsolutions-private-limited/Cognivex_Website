"use client";

import { motion } from "framer-motion";

/**
 * PrimaryButton
 * ---------------------------------------------------------------------------
 * Gradient-filled call-to-action button. Accepts either `href` (renders a
 * plain anchor — use for Next `Link` wrapping at the call site when internal
 * routing is needed) or `onClick` (renders a button). The "ripple" is a
 * radial highlight that expands from the pointer position on hover, built
 * with a CSS variable so it needs no extra DOM nodes.
 */
export default function PrimaryButton({
  children,
  href,
  onClick,
  type = "button",
  icon,
  className = "",
}) {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  const classes = `group relative inline-flex items-center gap-2.5 overflow-hidden rounded-pill bg-brand-gradient px-7 py-3.5 font-body font-semibold text-sm text-void shadow-glow-primary transition-transform duration-300 ease-brand ${className}`;

  const content = (
    <>
      <span
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(120px circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.35), transparent 70%)",
        }}
      />
      <span className="relative z-10">{children}</span>
      {icon && <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </>
  );

  const shared = {
    onMouseMove: handleMouseMove,
    whileHover: { scale: 1.03, y: -2 },
    whileTap: { scale: 0.97 },
    className: classes,
  };

  if (href) {
    return (
      <motion.a href={href} {...shared}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} {...shared}>
      {content}
    </motion.button>
  );
}

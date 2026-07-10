"use client";

import { motion } from "framer-motion";

/**
 * SecondaryButton
 * ---------------------------------------------------------------------------
 * Low-emphasis companion to PrimaryButton — hairline border, transparent
 * fill, used for "Talk to us" / "Explore" style actions that shouldn't
 * compete with the primary CTA.
 */
export default function SecondaryButton({
  children,
  href,
  onClick,
  type = "button",
  icon,
  inverted = false,
  className = "",
}) {
  const classes = inverted
    ? `inline-flex items-center gap-2.5 rounded-pill border-2 border-void/20 text-void px-7 py-3.5 font-body font-semibold text-sm transition-colors duration-300 ease-brand hover:bg-void hover:text-white ${className}`
    : `inline-flex items-center gap-2.5 rounded-pill border border-border text-ink px-7 py-3.5 font-body font-semibold text-sm backdrop-blur-sm transition-colors duration-300 ease-brand hover:border-primary/50 hover:bg-primary-soft ${className}`;

  const shared = {
    whileHover: { scale: 1.03, y: -2 },
    whileTap: { scale: 0.97 },
    className: classes,
  };

  const content = (
    <>
      {children}
      {icon && <span>{icon}</span>}
    </>
  );

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

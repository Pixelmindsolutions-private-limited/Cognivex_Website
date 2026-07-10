/**
 * animations.js
 * ---------------------------------------------------------------------------
 * Reusable Framer Motion variants. Import what a component needs instead of
 * redefining transition/initial/animate objects inline — keeps every fade,
 * stagger, and hover feeling identical across the site and makes global
 * timing changes a one-file edit (see theme.motion for durations/easing).
 * ---------------------------------------------------------------------------
 */

import theme from "../theme/theme.js";

const { base, fast, ease, stagger } = theme.motion;

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: base, ease } },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -32 },
  show: { opacity: 1, y: 0, transition: { duration: base, ease } },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -48 },
  show: { opacity: 1, x: 0, transition: { duration: base, ease } },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 48 },
  show: { opacity: 1, x: 0, transition: { duration: base, ease } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: base, ease } },
};

export const staggerContainer = (staggerAmount = stagger, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: staggerAmount,
      delayChildren,
    },
  },
});

// Applied to a wrapping element; children opt in with `variants={fadeUp}` etc.
export const viewport = { once: true, margin: "-80px" };

// Hover helpers — spread directly onto motion.* components
export const hoverLift = {
  whileHover: { y: -8, transition: { duration: fast, ease } },
};

export const hoverTilt = {
  whileHover: { rotate: -1, scale: 1.02, transition: { duration: fast, ease } },
};

export const hoverScale = {
  whileHover: { scale: 1.04, transition: { duration: fast, ease } },
  whileTap: { scale: 0.97 },
};

// Gentle ambient float for decorative elements (blobs, icons)
export const floatY = {
  animate: {
    y: [0, -16, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

export const floatSlow = {
  animate: {
    y: [0, -24, 0],
    x: [0, 12, 0],
    transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
  },
};

// Full page reveal wrapper (used once per page, wrapping the top-level fragment)
export const pageReveal = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: fast } },
};

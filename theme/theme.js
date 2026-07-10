/**
 * theme.js
 * ---------------------------------------------------------------------------
 * Single source of truth for the Cognivexsolutionsdesign system.
 *
 * Two ways this gets consumed:
 *   1. `tailwind.config.js` imports `colors`, `fontFamily`, `borderRadius`
 *      and `boxShadow` so components can use plain Tailwind utilities
 *      (bg-primary, text-secondary, rounded-brand, shadow-glow, etc).
 *   2. Components import `theme` directly when a value can't be expressed
 *      as a Tailwind class (inline gradients, SVG stops, motion durations).
 *
 * Changing a value here — e.g. `colors.primary` — propagates everywhere
 * that uses the matching Tailwind class or the theme object, with no
 * hunting through component files for hardcoded hex codes.
 * ---------------------------------------------------------------------------
 */

const colors = {
  // Base surfaces
  void: "#0A0A0F", // page background
  surface: "#0F0F16", // alternate section background
  elevated: "#14141C", // card base (pre-glass)
  overlay: "#1A1A24", // hover / raised state

  // Borders
  border: "rgba(255,255,255,0.08)",
  borderStrong: "rgba(255,255,255,0.16)",

  // Brand
  primary: "#7C5CFC", // electric violet
  primaryDark: "#5B3FD9",
  primarySoft: "rgba(124,92,252,0.12)",
  secondary: "#29D9C8", // signal cyan
  secondarySoft: "rgba(41,217,200,0.12)",
  accent: "#FFB020", // amber — CTA emphasis only, use sparingly

  // Text
  textPrimary: "#F5F5F7",
  textSecondary: "#9A9AB0",
  textMuted: "#6B6B80",
  onPrimary: "#0A0A0F",

  // Status (used minimally, e.g. form validation)
  success: "#3DDC97",
  danger: "#FF6B6B",
};

const gradients = {
  brand: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
  brandSoft: `linear-gradient(135deg, ${colors.primarySoft} 0%, ${colors.secondarySoft} 100%)`,
  aurora: `radial-gradient(60% 60% at 20% 20%, rgba(124,92,252,0.35) 0%, rgba(124,92,252,0) 60%),
           radial-gradient(50% 50% at 80% 30%, rgba(41,217,200,0.28) 0%, rgba(41,217,200,0) 60%),
           radial-gradient(40% 40% at 50% 90%, rgba(255,176,32,0.10) 0%, rgba(255,176,32,0) 60%)`,
  text: `linear-gradient(135deg, #F5F5F7 0%, #C9C4FF 50%, #7C5CFC 100%)`,
};

const fontFamily = {
  display: ["var(--font-display)", "Space Grotesk", "sans-serif"],
  body: ["var(--font-body)", "Inter", "sans-serif"],
  mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
};

const borderRadius = {
  brand: "28px", // large cards
  brandLg: "36px", // hero panels
  brandSm: "16px", // small chips / inputs
  pill: "999px",
};

const boxShadow = {
  soft: "0 4px 24px rgba(0,0,0,0.35)",
  elevated: "0 20px 60px rgba(0,0,0,0.45)",
  glowPrimary: "0 0 0 1px rgba(124,92,252,0.4), 0 8px 40px rgba(124,92,252,0.25)",
  glowSecondary: "0 0 0 1px rgba(41,217,200,0.4), 0 8px 40px rgba(41,217,200,0.2)",
};

const spacing = {
  sectionY: "clamp(4.5rem, 8vw, 8rem)", // vertical section rhythm
  sectionYTight: "clamp(3rem, 5vw, 5rem)",
};

const motion = {
  fast: 0.25,
  base: 0.6,
  slow: 0.9,
  ease: [0.16, 1, 0.3, 1], // expo-out — premium, decisive settle
  stagger: 0.09,
};

const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

const theme = {
  colors,
  gradients,
  fontFamily,
  borderRadius,
  boxShadow,
  spacing,
  motion,
  fontWeight,
};

export default theme;

"use client";

import { motion } from "framer-motion";
import Badge from "./Badge";
import { fadeUp, viewport } from "../../utils/animations";

/**
 * SectionTitle
 * ---------------------------------------------------------------------------
 * Standardizes the eyebrow + heading + supporting copy pattern used at the
 * top of nearly every section. `align` controls left vs centered layout so
 * it can serve both split layouts (About) and centered layouts (Services).
 */
export default function SectionTitle({
  eyebrow,
  index,
  title,
  description,
  align = "center",
  tone = "primary",
  light = false,
  className = "",
}) {
  const alignClasses = align === "left" ? "text-left items-start" : "text-center items-center mx-auto";

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={fadeUp}
      className={`flex flex-col gap-5 max-w-3xl ${alignClasses} ${className}`}
    >
      {eyebrow && (
        <Badge index={index} tone={tone}>
          {eyebrow}
        </Badge>
      )}

      <h2
        className={`font-display font-semibold leading-[1.08] tracking-tight text-[clamp(2rem,4.2vw,3.25rem)] ${
          light ? "text-ink" : "text-ink"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p className="text-ink-secondary text-base sm:text-lg leading-8 max-w-2xl font-body">
          {description}
        </p>
      )}
    </motion.div>
  );
}

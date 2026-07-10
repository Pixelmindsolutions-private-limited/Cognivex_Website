"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import Badge from "./Badge";
import AuroraBackground from "./AuroraBackground";
import { fadeUp, staggerContainer, viewport } from "../../utils/animations";

/**
 * PageHero
 * ---------------------------------------------------------------------------
 * Replaces the near-identical inline banner section that was copy-pasted
 * into every inner page (about, blog, contact, portfolio, services). Same
 * visual language as the homepage Hero at smaller scale, sharing
 * AuroraBackground so the whole site feels like one system.
 *
 * Optional `image` prop layers a background photo under the aurora +
 * gradient scrim, for pages where a literal image (team photo, office,
 * project shot) fits better than pure atmosphere. Omit it and the section
 * behaves exactly as before — gradient mesh only.
 */
export default function PageHero({ eyebrow, title, description, image, imageAlt = "" }) {
  return (
    <section className="relative pt-40 pb-24 bg-void overflow-hidden">
      {image && (
        <div className="absolute inset-0">
          <img
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Scrim: fades the photo into the void background so the aurora
              glow and text on top stay readable at any image brightness */}
          <div className="absolute inset-0 bg-void/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-void/70 to-void" />
        </div>
      )}

      <AuroraBackground variant="compact" />

      <Container className="relative">
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.12)}
          className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto"
        >
          {eyebrow && (
            <motion.div variants={fadeUp}>
              <Badge>{eyebrow}</Badge>
            </motion.div>
          )}

          <motion.h1
            variants={fadeUp}
            className="font-display font-semibold text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-ink"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p variants={fadeUp} className="text-ink-secondary text-lg leading-8 font-body">
              {description}
            </motion.p>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
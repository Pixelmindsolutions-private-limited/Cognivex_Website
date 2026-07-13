"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import Badge from "./Badge";
import AuroraBackground from "./AuroraBackground";
import { fadeUp, staggerContainer } from "../../utils/animations";

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
}) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {image && (
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black" />
        </div>
      )}

      {/* Aurora Background */}
      <div className="absolute inset-0 z-10">
        <AuroraBackground variant="compact" />
      </div>

      {/* Content */}
      <Container className="relative z-20">
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.12)}
          className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto px-4"
        >
          {eyebrow && (
            <motion.div variants={fadeUp}>
              <Badge>{eyebrow}</Badge>
            </motion.div>
          )}

          <motion.h1
            variants={fadeUp}
            className="font-display font-semibold text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-white"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              variants={fadeUp}
              className="text-lg leading-8 font-body text-gray-200"
            >
              {description}
            </motion.p>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
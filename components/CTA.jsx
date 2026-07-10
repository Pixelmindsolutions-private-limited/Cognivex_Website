"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import Container from "./shared/Container";
import Badge from "./shared/Badge";
import PrimaryButton from "./shared/PrimaryButton";
import SecondaryButton from "./shared/SecondaryButton";
import AuroraBackground from "./shared/AuroraBackground";
import { fadeUp, staggerContainer, viewport } from "../utils/animations";

export default function CTA() {
  return (
    <section className="relative py-24 sm:py-32 bg-void overflow-hidden">
      <AuroraBackground variant="compact" />

      <Container className="relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={staggerContainer(0.1)}
          className="text-center max-w-3xl mx-auto flex flex-col items-center gap-6"
        >
          <motion.div variants={fadeUp}>
            <Badge>Ready to start?</Badge>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display font-semibold text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.08] text-ink"
          >
            Let's build your
            <br />
            next digital product
          </motion.h2>

          <motion.p variants={fadeUp} className="text-ink-secondary text-lg leading-8 font-body">
            Whether you're launching a startup, scaling your business, or
            transforming your enterprise, Cognivexsolutionsis ready to turn your
            ideas into powerful digital solutions.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-5 mt-4">
            <Link href="/contact">
              <PrimaryButton icon={<FaArrowRight />}>Start Your Project</PrimaryButton>
            </Link>
            <a href="tel:+919876543210">
              <SecondaryButton icon={<FaPhoneAlt size={13} />}>Talk To Us</SecondaryButton>
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Container from "./shared/Container";
import SectionTitle from "./shared/SectionTitle";
import { fadeUp, staggerContainer, viewport } from "../utils/animations";

const clients = ["Google", "Microsoft", "Amazon", "Meta", "Adobe", "IBM", "Oracle", "Infosys"];

export default function Clients() {
  return (
    <section className="py-20 sm:py-24 bg-surface">
      <Container className="flex flex-col items-center gap-14">
        <SectionTitle eyebrow="Trusted Worldwide" title="Trusted by innovative businesses" />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={staggerContainer(0.06)}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-5 w-full"
        >
          {clients.map((client) => (
            <motion.div
              key={client}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="h-24 rounded-brand-sm border border-border bg-elevated hover:border-primary/40 transition-colors duration-300 flex items-center justify-center"
            >
              <h3 className="font-display font-semibold text-ink-secondary text-lg">{client}</h3>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

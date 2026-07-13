"use client";

import { motion } from "framer-motion";
import Container from "./shared/Container";
import SectionTitle from "./shared/SectionTitle";
import { fadeUp, staggerContainer, viewport } from "../utils/animations";

const clients = [
  { name: "Vegiffy", logo: "/logos/Vegiffy.png" },
  { name: "Narada Media", logo: "/logos/narada.png" },
  { name: "SimCuraRx", logo: "/logos/simcurarx.png" },
  { name: "V Farms", logo: "/logos/vfarms.png" },
  { name: "Editezy", logo: "/logos/editezy.png" },
  { name: "Varahi Self Drive", logo: "/logos/varahi.png" },
  { name: "PixelMind Solutions", logo: "/logos/pms.png" },
];

export default function Clients() {
  return (
    <section className="py-20 sm:py-24 bg-surface">
      <Container className="flex flex-col items-center gap-14">
        <SectionTitle
          eyebrow="Trusted Worldwide"
          title="Trusted by innovative businesses"
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={staggerContainer(0.06)}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5 w-full"
        >
          {clients.map((client) => (
            <motion.div
              key={client.name}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.05 }}
              className="h-28 rounded-brand-sm border border-border bg-elevated flex items-center justify-center p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-14 w-auto object-contain hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "./shared/Container";
import SectionTitle from "./shared/SectionTitle";
import GlassCard from "./shared/GlassCard";
import ServiceIcon from "./ServiceIcon";
import { services } from "../data/Services";
import { fadeUp, staggerContainer, viewport } from "../utils/animations";

export default function Services() {
  return (
    <section className="py-24 sm:py-32 bg-void">
      <Container className="flex flex-col items-center gap-16">
        <SectionTitle
          eyebrow="Our Services"
          index={1}
          title="Complete digital solutions"
          description="From idea to deployment, Cognivix delivers powerful technology solutions that help businesses grow faster and smarter."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={staggerContainer(0.08)}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
          {services.map((service) => (
            <motion.div key={service.slug} variants={fadeUp}>
              <Link href={`/services/${service.slug}`}>
                <GlassCard className="h-full group">
                  <div className="w-16 h-16 rounded-2xl bg-white text-void flex items-center justify-center text-2xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <ServiceIcon name={service.icon} />
                  </div>

                  <h3 className="text-xl font-display font-semibold mb-3 text-ink">{service.title}</h3>
                  <p className="text-ink-secondary leading-7 font-body">{service.shortDescription}</p>

                  <span className="mt-7 text-primary font-semibold font-body inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn more →
                  </span>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

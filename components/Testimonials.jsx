"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import Container from "./shared/Container";
import SectionTitle from "./shared/SectionTitle";
import GlassCard from "./shared/GlassCard";
import { fadeUp, staggerContainer, viewport } from "../utils/animations";

const testimonials = [
  {
    name: "John Anderson",
    company: "TechNova Inc.",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "Cognivexsolutionstransformed our idea into a scalable web platform. Their professionalism, communication, and technical expertise exceeded our expectations.",
  },
  {
    name: "Sarah Williams",
    company: "Bright Solutions",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "Their mobile app development team delivered a beautiful Flutter application ahead of schedule. Highly recommended for startups.",
  },
  {
    name: "Michael Brown",
    company: "Global Enterprises",
    image: "https://i.pravatar.cc/150?img=15",
    review:
      "Excellent digital marketing strategies and SEO services. Our website traffic increased significantly within just a few months.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-surface">
      <Container className="flex flex-col items-center gap-16">
        <SectionTitle
          eyebrow="Testimonials"
          title="What our clients say"
          description="We believe long-term relationships are built on trust, transparency, and delivering exceptional digital solutions."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={staggerContainer(0.12)}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
          {testimonials.map((item) => (
            <motion.div key={item.name} variants={fadeUp}>
              <GlassCard className="h-full relative">
                <FaQuoteLeft className="absolute top-8 right-8 text-primary/10 text-5xl" />

                <div className="flex gap-1 text-accent mb-6">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <p className="text-ink-secondary leading-8 mb-8 relative z-10 font-body">
                  {item.review}
                </p>

                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/30 shrink-0">
                    <Image src={item.image} alt={item.name} fill sizes="56px" className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-ink">{item.name}</h3>
                    <p className="text-ink-muted text-sm font-body">{item.company}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

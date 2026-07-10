"use client";

import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaLaptopCode,
  FaBullhorn,
  FaPaintBrush,
  FaCloud,
  FaRobot,
} from "react-icons/fa";
import Container from "./shared/Container";
import SectionTitle from "./shared/SectionTitle";
import GlassCard from "./shared/GlassCard";
import { fadeUp, staggerContainer, viewport } from "../utils/animations";

const services = [
  {
    title: "App Development",
    icon: <FaMobileAlt />,
    description: "Build high-performance Android, iOS and Flutter applications for your business.",
  },
  {
    title: "Web Development",
    icon: <FaLaptopCode />,
    description: "Modern websites using React, Next.js, Node.js and scalable backend solutions.",
  },
  {
    title: "Digital Marketing",
    icon: <FaBullhorn />,
    description: "SEO, Google Ads, Social Media Marketing and branding strategies.",
  },
  {
    title: "UI / UX Design",
    icon: <FaPaintBrush />,
    description: "Beautiful and user-friendly interfaces designed to maximize conversions.",
  },
  {
    title: "Cloud Solutions",
    icon: <FaCloud />,
    description: "Cloud deployment, AWS, Azure, Firebase and server infrastructure.",
  },
  {
    title: "AI Solutions",
    icon: <FaRobot />,
    description: "AI chatbots, automation, machine learning and intelligent systems.",
  },
];

export default function Services() {
  return (
    <section className="py-24 sm:py-32 bg-void">
      <Container className="flex flex-col items-center gap-16">
        <SectionTitle
          eyebrow="Our Services"
          index={1}
          title="Complete digital solutions"
          description="From idea to deployment, Cognivexsolutionsdelivers powerful technology solutions that help businesses grow faster and smarter."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={staggerContainer(0.08)}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={fadeUp}>
              <GlassCard className="h-full group">
                <div className="w-16 h-16 rounded-2xl bg-brand-gradient text-void flex items-center justify-center text-2xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {service.icon}
                </div>

                <h3 className="text-xl font-display font-semibold mb-3 text-ink">{service.title}</h3>
                <p className="text-ink-secondary leading-7 font-body">{service.description}</p>

                <button className="mt-7 text-secondary font-semibold font-body inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more →
                </button>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

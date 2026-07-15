"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import {
  FaProjectDiagram,
  FaUsers,
  FaGlobeAsia,
  FaLaptopCode,
} from "react-icons/fa";
import Container from "./shared/Container";
import SectionTitle from "./shared/SectionTitle";
import { fadeUp, staggerContainer, viewport } from "../utils/animations";

const stats = [
  { icon: <FaProjectDiagram />, number: 30, suffix: "+", title: "Projects Completed" },
  { icon: <FaUsers />, number: 50, suffix: "+", title: "Happy Clients" },
  { icon: <FaGlobeAsia />, number: 5, suffix: "+", title: "Countries Served" },
  { icon: <FaLaptopCode />, number: 30, suffix: "+", title: "Employees" },
];

export default function Stats() {
  return (
    <section className="relative py-24 sm:py-32 bg-surface overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(124,92,252,0.18), transparent 50%), radial-gradient(circle at 85% 80%, rgba(41,217,200,0.15), transparent 50%)",
        }}
      />

      <Container className="relative flex flex-col items-center gap-16">
        <SectionTitle
          eyebrow="Our Achievements"
          title="Trusted by businesses worldwide"
          description="Our numbers reflect our commitment to delivering high-quality software solutions and building long-term client relationships."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={staggerContainer(0.1)}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          {stats.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="rounded-brand bg-white/[0.04] backdrop-blur-xl border border-white/10 p-8 text-center transition-colors duration-300 hover:border-primary/40"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-brand-gradient flex items-center justify-center text-void text-2xl">
                {item.icon}
              </div>

              <h3 className="text-4xl sm:text-5xl font-display font-bold text-ink mt-7">
                <CountUp end={item.number} duration={3} enableScrollSpy />
                {item.suffix}
              </h3>

              <p className="text-ink-secondary mt-3 text-base font-body">{item.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import Container from "./shared/Container";
import SectionTitle from "./shared/SectionTitle";
import PrimaryButton from "./shared/PrimaryButton";
import { fadeLeft, staggerContainer, fadeUp, viewport } from "../utils/animations";

const features = [
  "Experienced Software Development Team",
  "Agile Development Process",
  "100% Client Satisfaction",
  "Latest Technologies & AI Solutions",
  "24/7 Technical Support",
  "Affordable & Scalable Solutions",
];

const stats = [
  { value: "200+", label: "Projects" },
  { value: "150+", label: "Clients" },
  { value: "25+", label: "Developers" },
  { value: "12+", label: "Countries" },
];

export default function About() {
  return (
    <section className="py-24 sm:py-32 bg-surface">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeLeft}
            className="relative"
          >
            <div className="relative rounded-brand-lg h-[480px] sm:h-[520px] bg-elevated border border-border overflow-hidden flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 20%, rgba(124,92,252,0.25), transparent 55%), radial-gradient(circle at 80% 80%, rgba(41,217,200,0.2), transparent 55%)",
                }}
              />

              <div className="relative rounded-brand bg-white/[0.05] backdrop-blur-xl border border-white/10 shadow-glow-primary p-10 w-[84%]">
                <h2 className="text-6xl font-display font-bold text-transparent bg-clip-text bg-text-gradient mb-2">
                  5+
                </h2>
                <p className="text-xl font-semibold text-ink font-body">Years of Experience</p>

                <hr className="my-8 border-border" />

                <div className="grid grid-cols-2 gap-6">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <h3 className="text-3xl sm:text-4xl font-display font-bold text-ink">{s.value}</h3>
                      <p className="text-ink-muted font-body">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side */}
          <div>
            <SectionTitle
              align="left"
              eyebrow="About congnivexsolutions "
              title="Building smart digital products that drive business growth"
              description="Cognivexsolutionsis a technology company focused on creating innovative web applications, mobile apps, AI-powered solutions, digital marketing strategies, and cloud infrastructure for businesses worldwide."
            />

            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={fadeUp}
              className="text-ink-secondary mt-6 leading-8 font-body max-w-2xl"
            >
              Our mission is to transform ideas into scalable digital products
              using cutting-edge technologies and user-centric design.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={staggerContainer(0.06)}
              className="grid sm:grid-cols-2 gap-5 mt-10"
            >
              {features.map((item) => (
                <motion.div key={item} variants={fadeUp} className="flex items-start gap-3">
                  <FaCheckCircle className="text-secondary mt-1 text-lg shrink-0" />
                  <p className="text-ink-secondary font-body">{item}</p>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-12">
              <PrimaryButton>Learn More About Us</PrimaryButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

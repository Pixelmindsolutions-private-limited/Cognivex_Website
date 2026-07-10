"use client";

import { motion } from "framer-motion";
import {
  FaAward,
  FaClock,
  FaHeadset,
  FaShieldAlt,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";
import Container from "./shared/Container";
import SectionTitle from "./shared/SectionTitle";
import { fadeUp, staggerContainer, viewport } from "../utils/animations";

const reasons = [
  { icon: <FaAward />, title: "Quality Assurance", description: "Every project undergoes rigorous testing to ensure top-notch quality and performance." },
  { icon: <FaClock />, title: "On-Time Delivery", description: "We follow agile methodologies to deliver projects on schedule without compromising quality." },
  { icon: <FaUsers />, title: "Expert Team", description: "Our experienced developers, designers, and marketers work together to build exceptional products." },
  { icon: <FaLightbulb />, title: "Innovative Solutions", description: "We leverage modern technologies like AI, Cloud, and Automation to solve business challenges." },
  { icon: <FaShieldAlt />, title: "Secure Development", description: "Security is integrated into every stage of development, protecting your business and users." },
  { icon: <FaHeadset />, title: "24/7 Support", description: "Our support team is always available to assist with maintenance, updates, and technical issues." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32 bg-void text-ink">
      <Container className="flex flex-col items-center gap-16">
        <SectionTitle
          eyebrow="Why Choose Cognivix"
          title="Delivering technology that creates impact"
          description="We combine innovation, technical expertise, and business strategy to deliver reliable digital solutions that help organizations grow."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={staggerContainer(0.08)}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
          {reasons.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="relative rounded-brand p-8 bg-white/[0.03] border border-white/10 overflow-hidden transition-all duration-500 hover:bg-brand-gradient group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary-soft text-primary group-hover:bg-white group-hover:text-primary flex items-center justify-center text-2xl mb-6 transition-colors duration-500">
                {item.icon}
              </div>

              <h3 className="text-xl font-display font-semibold mb-4 group-hover:text-void transition-colors duration-500">
                {item.title}
              </h3>

              <p className="text-ink-secondary group-hover:text-void/80 leading-7 font-body transition-colors duration-500">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

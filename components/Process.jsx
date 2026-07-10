"use client";

import { motion } from "framer-motion";
import {
  FaClipboardList,
  FaSearch,
  FaPencilRuler,
  FaCode,
  FaBug,
  FaRocket,
  FaHeadset,
} from "react-icons/fa";
import Container from "./shared/Container";
import SectionTitle from "./shared/SectionTitle";
import { fadeLeft, fadeRight, viewport } from "../utils/animations";

const process = [
  { icon: <FaClipboardList />, title: "Requirement Analysis", description: "We understand your business goals, users, and project requirements." },
  { icon: <FaSearch />, title: "Planning & Research", description: "Market research, technical planning, and project roadmap preparation." },
  { icon: <FaPencilRuler />, title: "UI / UX Design", description: "Creating intuitive user experiences with modern and attractive designs." },
  { icon: <FaCode />, title: "Development", description: "Building scalable web and mobile applications using modern technologies." },
  { icon: <FaBug />, title: "Testing & QA", description: "Comprehensive testing to ensure quality, security, and performance." },
  { icon: <FaRocket />, title: "Deployment", description: "Launching your application on secure and reliable cloud infrastructure." },
  { icon: <FaHeadset />, title: "Support & Maintenance", description: "Continuous monitoring, updates, feature enhancements, and support." },
];

export default function Process() {
  return (
    <section className="py-24 sm:py-32 bg-void">
      <Container className="flex flex-col items-center gap-20">
        <SectionTitle
          eyebrow="Our Process"
          title="From idea to successful product"
          description="We follow a proven development methodology that ensures every project is delivered on time, within budget, and with exceptional quality. Each stage below runs in sequence."
        />

        {/* Timeline */}
        <div className="relative w-full">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-4">
            {process.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  variants={isEven ? fadeRight : fadeLeft}
                  className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-0 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div className="lg:w-5/12 w-full">
                    <div className="rounded-brand bg-elevated border border-border p-8 hover:border-primary/40 transition-colors duration-300">
                      <div className="flex items-center gap-4 mb-5">
                        <div className="w-14 h-14 rounded-2xl bg-primary-soft text-primary flex items-center justify-center text-xl shrink-0">
                          {step.icon}
                        </div>
                        <span className="font-mono text-xs text-ink-muted tracking-wider">
                          STEP {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h3 className="text-2xl font-display font-semibold text-ink mb-3">{step.title}</h3>
                      <p className="text-ink-secondary leading-7 font-body">{step.description}</p>
                    </div>
                  </div>

                  {/* Circle */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className="w-12 h-12 rounded-full bg-brand-gradient text-void flex items-center justify-center font-display font-bold shadow-glow-primary border-4 border-void">
                      {index + 1}
                    </div>
                  </div>

                  <div className="hidden lg:block lg:w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

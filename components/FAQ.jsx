"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import Container from "./shared/Container";
import SectionTitle from "./shared/SectionTitle";
import { fadeUp, staggerContainer, viewport } from "../utils/animations";

const faqs = [
  { question: "What services does Cognivexsolutionsprovide?", answer: "We specialize in Web Development, Mobile App Development, UI/UX Design, Digital Marketing, Cloud Solutions, AI Solutions, and Custom Software Development." },
  { question: "How long does it take to complete a project?", answer: "Project timelines depend on complexity. A basic website may take 2–4 weeks, while enterprise applications can take several months." },
  { question: "Do you provide post-launch support?", answer: "Yes. We provide maintenance, security updates, bug fixes, feature enhancements, and technical support after deployment." },
  { question: "Can you redesign our existing website?", answer: "Absolutely. We modernize outdated websites with responsive designs, improved performance, and better user experiences." },
  { question: "Do you develop Android and iOS apps?", answer: "Yes. We build native and cross-platform mobile applications using Flutter and modern technologies." },
  { question: "How can I get a quotation?", answer: "Simply contact us through the contact form or schedule a consultation. We'll discuss your requirements and provide a detailed proposal." },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="py-24 sm:py-32 bg-void">
      <Container className="max-w-5xl flex flex-col items-center gap-16">
        <SectionTitle
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Find answers to the most common questions about our services, development process, pricing, and support."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={staggerContainer(0.06)}
          className="space-y-4 w-full"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              variants={fadeUp}
              layout
              className="rounded-brand overflow-hidden border border-border bg-elevated hover:border-primary/30 transition-colors"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center gap-6 p-6 text-left"
              >
                <h3 className="text-base sm:text-lg font-semibold text-ink font-body">{faq.question}</h3>

                <span
                  className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    active === index ? "bg-brand-gradient text-void" : "bg-white/5 text-ink-secondary"
                  }`}
                >
                  {active === index ? <FaMinus size={12} /> : <FaPlus size={12} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {active === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-ink-secondary leading-8 font-body">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

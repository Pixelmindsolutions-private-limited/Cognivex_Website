"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import Container from "./shared/Container";
import SectionTitle from "./shared/SectionTitle";
import PrimaryButton from "./shared/PrimaryButton";
import { fadeLeft, fadeRight, staggerContainer, fadeUp, viewport } from "../utils/animations";

const inputClasses =
  "w-full mt-2 text-ink bg-white/[0.03] border border-border rounded-brand-sm p-4 outline-none placeholder:text-ink-muted focus:border-primary/60 focus:bg-white/[0.05] transition-colors font-body";

const contactInfo = [
  { icon: <FaEnvelope />, title: "Email", value: "info@congnivexsolutions .com", tint: "bg-primary-soft text-primary" },
  { icon: <FaPhoneAlt />, title: "Phone", value: "+91 98765 43210", tint: "bg-secondary-soft text-secondary" },
  { icon: <FaMapMarkerAlt />, title: "Office", value: "Hyderabad, Telangana, India", tint: "bg-accent/10 text-accent" },
  { icon: <FaClock />, title: "Working Hours", value: "Monday - Saturday, 9:00 AM - 6:00 PM", tint: "bg-primary-soft text-primary" },
];

export default function Contact() {
  return (
    <section className="py-24 sm:py-32 bg-surface">
      <Container>
        <SectionTitle
          eyebrow="Contact Us"
          title="Let's build something amazing"
          description="Have an idea or project in mind? Reach out to our team. We'd love to discuss how Cognivexsolutionscan help your business grow."
          className="mb-16"
        />

        <div className="grid lg:grid-cols-2 gap-10 mt-16">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={staggerContainer(0.08)}
            className="space-y-5"
          >
            {contactInfo.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeLeft}
                className="flex items-start gap-5 bg-elevated border border-border p-6 rounded-brand hover:border-primary/40 transition-colors"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl shrink-0 ${item.tint}`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-ink">{item.title}</h3>
                  <p className="text-ink-secondary mt-2 font-body">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeRight}
            className="rounded-brand-lg bg-white/[0.04] backdrop-blur-xl border border-white/10 p-8 space-y-6"
          >
            <div>
              <label className="font-semibold text-ink font-body text-sm">Full Name</label>
              <input type="text" placeholder="John Doe" className={inputClasses} />
            </div>

            <div>
              <label className="font-semibold text-ink font-body text-sm">Email</label>
              <input type="email" placeholder="john@example.com" className={inputClasses} />
            </div>

            <div>
              <label className="font-semibold text-ink font-body text-sm">Phone</label>
              <input type="text" placeholder="+91 XXXXX XXXXX" className={inputClasses} />
            </div>

            <div>
              <label className="font-semibold text-ink font-body text-sm">Service</label>
              <select className={`${inputClasses} appearance-none`}>
                <option className="bg-elevated">Web Development</option>
                <option className="bg-elevated">App Development</option>
                <option className="bg-elevated">Digital Marketing</option>
                <option className="bg-elevated">UI/UX Design</option>
                <option className="bg-elevated">Cloud Services</option>
                <option className="bg-elevated">AI Solutions</option>
              </select>
            </div>

            <div>
              <label className="font-semibold text-ink font-body text-sm">Message</label>
              <textarea rows="5" placeholder="Tell us about your project..." className={inputClasses}></textarea>
            </div>

            <PrimaryButton className="w-full justify-center" type="submit">
              Send Message
            </PrimaryButton>
          </motion.form>
        </div>
      </Container>
    </section>
  );
}

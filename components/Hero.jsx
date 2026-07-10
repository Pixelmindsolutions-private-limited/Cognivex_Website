"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaLaptopCode,
  FaMobileAlt,
  FaBullhorn,
} from "react-icons/fa";
import Container from "./shared/Container";
import Badge from "./shared/Badge";
import PrimaryButton from "./shared/PrimaryButton";
import SecondaryButton from "./shared/SecondaryButton";
import AuroraBackground from "./shared/AuroraBackground";
import GlassCard from "./shared/GlassCard";
import { fadeUp, fadeRight, staggerContainer, floatY } from "../utils/animations";

const highlights = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    stack: "Next.js · React · Node.js",
    tint: "text-primary bg-primary-soft",
  },
  {
    icon: <FaMobileAlt />,
    title: "App Development",
    stack: "Android · iOS · Flutter",
    tint: "text-secondary bg-secondary-soft",
  },
  {
    icon: <FaBullhorn />,
    title: "Digital Marketing",
    stack: "SEO · Ads · Branding",
    tint: "text-accent bg-accent/10",
  },
];

export default function Hero() {
  return (
    <section className="relative pt-40 pb-28 bg-void overflow-hidden">
      <AuroraBackground variant="hero" />

      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div initial="hidden" animate="show" variants={staggerContainer(0.12)}>
            <motion.div variants={fadeUp}>
              <Badge>Welcome to congnivexsolutions </Badge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-7 font-display font-semibold leading-[1.02] tracking-tight text-[clamp(2.75rem,6.5vw,5rem)] text-ink"
            >
              Transform your
              <span className="block text-transparent bg-clip-text bg-text-gradient">
                digital vision
              </span>
              into reality
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 text-lg text-ink-secondary leading-8 max-w-xl font-body"
            >
              Cognivexsolutionsdelivers modern web applications, mobile apps, UI/UX
              design, digital marketing, AI-powered solutions, and cloud
              services that help businesses grow faster.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-10">
              <Link href="/contact">
                <PrimaryButton icon={<FaArrowRight />}>Get Started</PrimaryButton>
              </Link>
              <Link href="/services">
                <SecondaryButton>Explore Services</SecondaryButton>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeRight}
            className="relative"
          >
            <motion.div {...floatY}>
              <GlassCard glow className="p-6 sm:p-8">
                <div className="grid gap-4">
                  {highlights.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-5 p-5 rounded-brand-sm bg-white/[0.03] border border-white/5 hover:border-white/15 transition-colors"
                    >
                      <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center text-2xl ${item.tint}`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-lg text-ink">{item.title}</h3>
                        <p className="text-ink-muted text-sm font-mono">{item.stack}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

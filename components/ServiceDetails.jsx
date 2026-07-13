"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaArrowRight, FaClock } from "react-icons/fa";
import Container from "./shared/Container";
import Badge from "./shared/Badge";
import GlassCard from "./shared/GlassCard";
import PrimaryButton from "./shared/PrimaryButton";
import SecondaryButton from "./shared/SecondaryButton";
import AuroraBackground from "./shared/AuroraBackground";
import CTA from "./CTA";
import ServiceIcon from "./ServiceIcon";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewport } from "../utils/animations";

/**
 * ServiceDetail
 * ---------------------------------------------------------------------------
 * Full single-service page template. Receives plain data (from
 * data/services.js) rather than fetching or importing it itself, so it stays
 * reusable if service content ever moves to a CMS.
 */
export default function ServiceDetail({ service, related }) {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-void overflow-hidden">
        {service.image && (
          <div className="absolute inset-0">
            <Image
              src={service.image}
              alt={service.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            {/* Scrim: blends the photo into bg-void so text and the aurora
                glow on top stay readable regardless of image brightness */}
            <div className="absolute inset-0 bg-void/70" />
            <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-void/75 to-void" />
          </div>
        )}

        <AuroraBackground variant="compact" />

        <Container className="relative">
          {/* Breadcrumb */}
          <motion.nav
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="flex items-center gap-2 text-sm font-mono text-ink-muted mb-8"
          >
            <Link href="/services" className="hover:text-ink transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-ink-secondary">{service.title}</span>
          </motion.nav>

          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer(0.12)}
            className="grid lg:grid-cols-[auto,1fr] gap-8 items-start"
          >
            <motion.div
              variants={fadeUp}
              className="w-20 h-20 rounded-2xl bg-white text-void flex items-center justify-center text-3xl shrink-0"
            >
              <ServiceIcon name={service.icon} />
            </motion.div>

            <div>
              <motion.div variants={fadeUp}>
                <Badge>{service.tagline}</Badge>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-6 font-display font-semibold text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.05] tracking-tight text-ink"
              >
                {service.title}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 text-lg text-ink-secondary leading-8 font-body max-w-2xl"
              >
                {service.shortDescription}
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-9">
                <Link href="/contact">
                  <PrimaryButton icon={<FaArrowRight />}>Start a Project</PrimaryButton>
                </Link>
                <Link href="/portfolio">
                  <SecondaryButton>View Related Work</SecondaryButton>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Overview + timeline card */}
      <section className="py-24 sm:py-32 bg-surface">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={fadeLeft}
              className="lg:col-span-2"
            >
              <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink mb-6">
                Overview
              </h2>
              <p className="text-ink-secondary leading-8 font-body text-lg">{service.overview}</p>

              <div className="flex flex-wrap gap-3 mt-10">
                {service.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-primary-soft text-primary px-4 py-2 rounded-pill text-sm font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={fadeRight}>
              <GlassCard glow>
                <div className="flex items-center gap-3 text-secondary mb-4">
                  <FaClock />
                  <span className="font-mono text-xs tracking-wider uppercase">Typical Timeline</span>
                </div>
                <p className="text-2xl font-display font-semibold text-ink mb-8">{service.timeline}</p>

                <div className="border-t border-white/10 pt-6">
                  <span className="font-mono text-xs tracking-wider uppercase text-ink-muted">
                    What you receive
                  </span>
                  <ul className="mt-4 space-y-3">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-ink-secondary font-body text-sm">
                        <FaCheckCircle className="text-secondary mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-24 sm:py-32 bg-void">
        <Container className="flex flex-col items-center gap-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp}
            className="text-center max-w-2xl"
          >
            <Badge>What's Included</Badge>
            <h2 className="mt-6 font-display font-semibold text-[clamp(2rem,4vw,3rem)] text-ink">
              How we deliver {service.title.toLowerCase()}
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={staggerContainer(0.08)}
            className="grid sm:grid-cols-2 gap-6 w-full"
          >
            {service.features.map((feature) => (
              <motion.div key={feature.title} variants={fadeUp}>
                <GlassCard className="h-full">
                  <h3 className="text-xl font-display font-semibold text-ink mb-3">{feature.title}</h3>
                  <p className="text-ink-secondary leading-7 font-body">{feature.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="py-24 sm:py-32 bg-surface">
          <Container className="flex flex-col items-center gap-16">
            <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={fadeUp}>
              <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink text-center">
                Other services
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={staggerContainer(0.08)}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
            >
              {related.map((item) => (
                <motion.div key={item.slug} variants={fadeUp}>
                  <Link href={`/services/${item.slug}`}>
                    <div className="group rounded-brand bg-elevated border border-border hover:border-primary/40 transition-colors duration-300 p-7 h-full">
                      <div className="w-14 h-14 rounded-2xl bg-primary-soft text-primary flex items-center justify-center text-xl mb-5 transition-transform duration-300 group-hover:scale-110">
                        <ServiceIcon name={item.icon} />
                      </div>
                      <h3 className="text-lg font-display font-semibold text-ink mb-2">{item.title}</h3>
                      <p className="text-ink-secondary text-sm font-body leading-6">{item.shortDescription}</p>
                      <span className="mt-5 inline-flex items-center gap-2 text-secondary text-sm font-semibold font-body group-hover:gap-3 transition-all">
                        Learn more <FaArrowRight size={12} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>
      )}

      <CTA />
    </>
  );
}

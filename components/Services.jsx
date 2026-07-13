"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "./shared/Container";
import SectionTitle from "./shared/SectionTitle";
import ServiceIcon from "./ServiceIcon";
import { services } from "../data/Services";
import { fadeUp, staggerContainer, viewport } from "../utils/animations";

/**
 * Per-service styling + exact grid placement, keyed by slug.
 *
 * `position` are the lg: grid-column/row classes that reproduce the fixed
 * bento layout. Below `lg` the grid falls back to plain 1–2 column stacking.
 *
 * `variant` controls internal card layout since slot sizes vary a lot:
 *  - "compact"     narrow + short → icon, title, description only
 *  - "horizontal"  wide + short   → icon and text side-by-side
 *  - "full"        tall           → icon, title, description, bullets, chips
 */
const cardConfig = {
  "web-development": {
    bg: "bg-[#E4DBFB]",
    iconBg: "bg-[#C9B8FA]/90",
    icon: "text-[#5B3FD9]",
    chip: "bg-white/90 text-slate-800 backdrop-blur-sm",
    glow: "rgba(201,184,250,0.6)",
    position: "lg:col-start-1 lg:row-start-1 lg:row-span-2",
    variant: "full",
    overlay: "from-[#E4DBFB]/95 via-[#E4DBFB]/90 to-[#E4DBFB]/80",
  },
  "app-development": {
    bg: "bg-[#EAF6B8]",
    iconBg: "bg-[#D8ED8A]/90",
    icon: "text-[#5C6B1A]",
    chip: "bg-white/90 text-slate-800 backdrop-blur-sm",
    glow: "rgba(216,237,138,0.6)",
    position: "lg:col-start-2 lg:row-start-1",
    variant: "compact",
    overlay: "from-[#EAF6B8]/95 via-[#EAF6B8]/90 to-[#EAF6B8]/80",
  },
  "digital-marketing": {
    bg: "bg-[#FFD9CB]",
    iconBg: "bg-[#FFB69C]/90",
    icon: "text-[#C6461B]",
    chip: "bg-white/90 text-slate-800 backdrop-blur-sm",
    glow: "rgba(255,182,156,0.6)",
    position: "lg:col-start-2 lg:row-start-2",
    variant: "compact",
    overlay: "from-[#FFD9CB]/95 via-[#FFD9CB]/90 to-[#FFD9CB]/80",
  },
  "web-app-maintenance": {
    bg: "bg-[#D3E1FF]",
    iconBg: "bg-[#AFC6FF]/90",
    icon: "text-[#3757C4]",
    chip: "bg-white/90 text-slate-800 backdrop-blur-sm",
    glow: "rgba(175,198,255,0.6)",
    position: "lg:col-start-3 lg:row-start-1 lg:row-span-2",
    variant: "full",
    overlay: "from-[#D3E1FF]/95 via-[#D3E1FF]/90 to-[#D3E1FF]/80",
  },
  "software-development": {
    bg: "bg-[#F6DDFB]",
    iconBg: "bg-[#EEB8F7]/90",
    icon: "text-[#A233B0]",
    chip: "bg-white/90 text-slate-800 backdrop-blur-sm",
    glow: "rgba(238,184,247,0.6)",
    position: "lg:col-start-4 lg:row-start-1 lg:row-span-2",
    variant: "full",
    overlay: "from-[#F6DDFB]/95 via-[#F6DDFB]/90 to-[#F6DDFB]/80",
  },
  "ui-ux-design": {
    bg: "bg-[#CDEBFC]",
    iconBg: "bg-[#9FD8F7]/90",
    icon: "text-[#1D6FBF]",
    chip: "bg-white/90 text-slate-800 backdrop-blur-sm",
    glow: "rgba(159,216,247,0.6)",
    position: "lg:col-start-1 lg:col-span-2 lg:row-start-3",
    variant: "horizontal",
    overlay: "from-[#CDEBFC]/95 via-[#CDEBFC]/90 to-[#CDEBFC]/80",
  },
  "ecommerce-development": {
    bg: "bg-[#F0E6D3]",
    iconBg: "bg-[#E0CEB3]/90",
    icon: "text-[#8B6B3D]",
    chip: "bg-white/90 text-slate-800 backdrop-blur-sm",
    glow: "rgba(224,206,179,0.6)",
    position: "lg:col-start-3 lg:col-span-2 lg:row-start-3",
    variant: "horizontal",
    overlay: "from-[#F0E6D3]/95 via-[#F0E6D3]/90 to-[#F0E6D3]/80",
  },
};

export default function Services() {
  return (
    <section className="py-24 sm:py-32 bg-void">
      <Container className="flex flex-col items-center gap-16">
        <SectionTitle
          eyebrow="Our Services"
          index={1}
          title="Complete digital solutions"
          description="From idea to deployment, Cognivix delivers powerful technology solutions that help businesses grow faster and smarter."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={staggerContainer(0.08)}
          className="w-full"
        >
          {/* Desktop Masonry Grid - 4 columns */}
          <div className="hidden lg:grid lg:grid-cols-[1fr_1fr_1fr_1fr] lg:auto-rows-[210px] gap-5">
            {services.map((service) => {
              const cfg = cardConfig[service.slug] || cardConfig["web-development"];
              const bullets = service.features.slice(0, cfg.variant === "full" ? 4 : 2);

              return (
                <motion.div key={service.slug} variants={fadeUp} className={cfg.position}>
                  <Link href={`/services/${service.slug}`} className="block h-full group">
                    <motion.div
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: `0 25px 60px -12px ${cfg.glow}`,
                      }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className={`relative h-full overflow-hidden rounded-brand text-slate-900 ${cfg.bg}`}
                    >
                      {/* Background Image - hidden by default, shows on hover */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
                        style={{
                          backgroundImage: `url(${service.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          transform: 'scale(1.05)',
                          transition: 'transform 0.6s ease-out',
                        }}
                      />
                      
                      {/* Gradient Overlay for text readability */}
                      <div 
                        className={`absolute inset-0 bg-gradient-to-br ${cfg.overlay} opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out`}
                      />

                      {/* Content - always on top */}
                      <div 
                        className={`relative z-10 h-full ${cfg.variant === "horizontal" ? "p-6 flex items-center gap-6" : "p-7 flex flex-col"}`}
                      >
                        {/* Icon badge */}
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: -6 }}
                          transition={{ duration: 0.3 }}
                          className={`w-[52px] h-[52px] rounded-2xl ${cfg.iconBg} flex items-center justify-center text-xl shrink-0 backdrop-blur-sm ${cfg.variant === "horizontal" ? "" : "mb-5"
                            }`}
                        >
                          <ServiceIcon name={service.icon} className={cfg.icon} />
                        </motion.div>

                        {/* Content */}
                        <div className={cfg.variant === "horizontal" ? "min-w-0 flex-1" : "flex flex-col flex-1"}>
                          <motion.h3
                            whileHover={{ x: 4 }}
                            className={`font-display font-bold leading-tight ${cfg.variant === "full" ? "text-xl sm:text-2xl mb-2.5" : "text-lg mb-1.5"
                              }`}
                          >
                            {service.title}
                          </motion.h3>

                          <motion.p
                            whileHover={{ x: 4 }}
                            className={`font-body text-slate-700 leading-6 ${cfg.variant === "compact" ? "text-sm line-clamp-2" : "text-sm mb-4"
                              }`}
                          >
                            {service.shortDescription}
                          </motion.p>

                          {cfg.variant !== "compact" && (
                            <motion.ul
                              initial={false}
                              className={
                                cfg.variant === "horizontal"
                                  ? "hidden sm:flex flex-wrap gap-x-5 gap-y-1.5 mt-2"
                                  : "flex flex-col gap-2 mb-5"
                              }
                            >
                              {bullets.map((f, idx) => (
                                <motion.li 
                                  key={f.title} 
                                  className="flex items-start gap-2"
                                  whileHover={{ x: 4 }}
                                  transition={{ delay: idx * 0.05 }}
                                >
                                  <span
                                    className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${cfg.icon.replace(
                                      "text-",
                                      "bg-"
                                    )}`}
                                  />
                                  <span className="text-sm font-body leading-5 text-slate-800">{f.title}</span>
                                </motion.li>
                              ))}
                            </motion.ul>
                          )}

                          {cfg.variant === "full" && (
                            <>
                              <motion.div 
                                className="mt-auto flex flex-wrap gap-2 pt-1"
                                whileHover={{ y: -2 }}
                              >
                                {service.techStack.slice(0, 3).map((tech) => (
                                  <span key={tech} className={`px-3 py-1 rounded-pill text-xs font-mono ${cfg.chip}`}>
                                    {tech}
                                  </span>
                                ))}
                              </motion.div>
                              <motion.span 
                                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold font-body text-slate-900"
                                whileHover={{ gap: "0.75rem" }}
                                transition={{ duration: 0.2 }}
                              >
                                Learn more →
                              </motion.span>
                            </>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Tablet Grid - 2 columns */}
          <div className="grid lg:hidden sm:grid-cols-2 gap-5">
            {services.map((service) => {
              const cfg = cardConfig[service.slug] || cardConfig["web-development"];

              return (
                <motion.div key={service.slug} variants={fadeUp}>
                  <Link href={`/services/${service.slug}`} className="block h-full group">
                    <motion.div
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: `0 25px 60px -12px ${cfg.glow}`,
                      }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className={`relative h-full overflow-hidden rounded-brand text-slate-900 ${cfg.bg} p-7 flex flex-col`}
                    >
                      {/* Background Image - hidden by default, shows on hover */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
                        style={{
                          backgroundImage: `url(${service.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          transform: 'scale(1.05)',
                          transition: 'transform 0.6s ease-out',
                        }}
                      />
                      
                      {/* Gradient Overlay for text readability */}
                      <div 
                        className={`absolute inset-0 bg-gradient-to-br ${cfg.overlay} opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out`}
                      />

                      {/* Content */}
                      <div className="relative z-10 flex flex-col flex-1">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: -6 }}
                          transition={{ duration: 0.3 }}
                          className={`w-[52px] h-[52px] rounded-2xl ${cfg.iconBg} flex items-center justify-center text-xl shrink-0 backdrop-blur-sm mb-5`}
                        >
                          <ServiceIcon name={service.icon} className={cfg.icon} />
                        </motion.div>

                        <motion.h3 
                          whileHover={{ x: 4 }}
                          className="font-display font-bold text-xl mb-2.5"
                        >
                          {service.title}
                        </motion.h3>

                        <motion.p 
                          whileHover={{ x: 4 }}
                          className="font-body text-slate-700 text-sm leading-6 mb-4 line-clamp-2"
                        >
                          {service.shortDescription}
                        </motion.p>

                        <motion.div 
                          className="mt-auto"
                          whileHover={{ y: -2 }}
                        >
                          <motion.span 
                            className="inline-flex items-center gap-2 text-sm font-semibold font-body text-slate-900"
                            whileHover={{ gap: "0.75rem" }}
                            transition={{ duration: 0.2 }}
                          >
                            Learn more →
                          </motion.span>
                        </motion.div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Grid - 1 column */}
          <div className="grid sm:hidden gap-5">
            {services.map((service) => {
              const cfg = cardConfig[service.slug] || cardConfig["web-development"];

              return (
                <motion.div key={service.slug} variants={fadeUp}>
                  <Link href={`/services/${service.slug}`} className="block h-full group">
                    <motion.div
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: `0 25px 60px -12px ${cfg.glow}`,
                      }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className={`relative h-full overflow-hidden rounded-brand text-slate-900 ${cfg.bg} p-7 flex flex-col`}
                    >
                      {/* Background Image - hidden by default, shows on hover */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
                        style={{
                          backgroundImage: `url(${service.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          transform: 'scale(1.05)',
                          transition: 'transform 0.6s ease-out',
                        }}
                      />
                      
                      {/* Gradient Overlay for text readability */}
                      <div 
                        className={`absolute inset-0 bg-gradient-to-br ${cfg.overlay} opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out`}
                      />

                      {/* Content */}
                      <div className="relative z-10 flex flex-col flex-1">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: -6 }}
                          transition={{ duration: 0.3 }}
                          className={`w-[52px] h-[52px] rounded-2xl ${cfg.iconBg} flex items-center justify-center text-xl shrink-0 backdrop-blur-sm mb-5`}
                        >
                          <ServiceIcon name={service.icon} className={cfg.icon} />
                        </motion.div>

                        <motion.h3 
                          whileHover={{ x: 4 }}
                          className="font-display font-bold text-xl mb-2.5"
                        >
                          {service.title}
                        </motion.h3>

                        <motion.p 
                          whileHover={{ x: 4 }}
                          className="font-body text-slate-700 text-sm leading-6 mb-4"
                        >
                          {service.shortDescription}
                        </motion.p>

                        <motion.div 
                          className="mt-auto"
                          whileHover={{ y: -2 }}
                        >
                          <motion.span 
                            className="inline-flex items-center gap-2 text-sm font-semibold font-body text-slate-900"
                            whileHover={{ gap: "0.75rem" }}
                            transition={{ duration: 0.2 }}
                          >
                            Learn more →
                          </motion.span>
                        </motion.div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
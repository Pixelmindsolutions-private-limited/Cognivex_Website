"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaGlobe, FaMobileAlt } from "react-icons/fa";
import Container from "./shared/Container";
import SectionTitle from "./shared/SectionTitle";
import { fadeUp, staggerContainer, viewport } from "../utils/animations";

const projects = [
  { title: "E-Commerce Platform", category: "Web Development", image: "/images/portfolioImage.jpg", type: "Website", icon: <FaGlobe />, tech: ["Next.js", "Node.js", "MongoDB"] },
  { title: "Food Delivery App", category: "App Development", image: "/images/portfolioImage.jpg", type: "Mobile App", icon: <FaMobileAlt />, tech: ["Flutter", "Firebase", "Node.js"] },
  { title: "Healthcare CRM", category: "Web Application", image: "/images/portfolioImage.jpg", type: "Dashboard", icon: <FaGlobe />, tech: ["React", "Express", "MongoDB"] },
  { title: "Education Portal", category: "Learning Platform", image: "/images/portfolioImage.jpg", type: "Website", icon: <FaGlobe />, tech: ["Next.js", "Tailwind", "MySQL"] },
  { title: "Taxi Booking App", category: "Mobile Application", image: "/images/portfolioImage.jpg", type: "Mobile App", icon: <FaMobileAlt />, tech: ["Flutter", "Firebase", "Maps"] },
  { title: "AI Chat Platform", category: "Artificial Intelligence", image: "/images/portfolioImage.jpg", type: "Web App", icon: <FaGlobe />, tech: ["Next.js", "OpenAI", "Node.js"] },
];

export default function Portfolio() {
  return (
    <section className="py-24 sm:py-32 bg-void">
      <Container className="flex flex-col items-center gap-16">
        <SectionTitle
          eyebrow="Portfolio"
          index={3}
          title="Our recent projects"
          description="Explore some of our successful projects that helped businesses improve customer engagement, streamline operations, and grow their digital presence."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={staggerContainer(0.1)}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="rounded-brand overflow-hidden bg-elevated border border-border hover:border-primary/40 transition-colors duration-300 group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-elevated via-transparent to-transparent" />

                <span className="absolute top-5 left-5 bg-void/70 backdrop-blur-md border border-white/10 text-ink px-4 py-2 rounded-pill text-xs font-mono flex items-center gap-2">
                  {project.icon}
                  {project.type}
                </span>
              </div>

              {/* Content */}
              <div className="p-7">
                <p className="text-secondary font-mono text-xs tracking-wider uppercase">{project.category}</p>
                <h3 className="text-2xl font-display font-semibold mt-3 text-ink">{project.title}</h3>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-primary-soft text-primary px-3 py-1 rounded-pill text-xs font-mono">
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="mt-8 flex items-center gap-2 text-ink font-semibold font-body group-hover:gap-4 group-hover:text-secondary transition-all">
                  View Project
                  <FaArrowRight />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

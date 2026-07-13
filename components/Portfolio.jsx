"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaGlobe, FaMobileAlt } from "react-icons/fa";
import Container from "./shared/Container";
import SectionTitle from "./shared/SectionTitle";
import { fadeUp, staggerContainer, viewport } from "../utils/animations";
import Link from "next/link";

const projects = [
  {
    title: "Vegiffy",
    category: "Food Delivery Platform",
    image: "/logos/Vegiffy.png",
    url: "https://vegiffy.com/",
    type: "Web Application",
    icon: <FaGlobe />,
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "SimCuraRx",
    category: "Healthcare Platform",
    image: "/logos/simcurarx.png",
    url: "https://simcurarx.com/",
    type: "Healthcare Website",
    icon: <FaGlobe />,
    tech: ["Next.js", "Node.js", "MongoDB"],
  },
  {
    title: "Narada Media",
    category: "Digital Marketing Agency",
    image: "/logos/narada.png",
    url: "https://naradamedia.com/",
    type: "Corporate Website",
    icon: <FaGlobe />,
    tech: ["Next.js", "Tailwind CSS", "SEO"],
  },
  {
    title: "Varahi Self Drive Cars",
    category: "Car Rental Platform",
    image: "/logos/varahi.png",
    url: "https://varahiselfdrivecars.com/",
    type: "Booking Platform",
    icon: <FaGlobe />,
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Editezy",
    category: "Creative Design Platform",
    image: "/logos/editezy.png",
    url: "https://editezy.com/",
    type: "Business Website",
    icon: <FaGlobe />,
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "V Farm Stays",
    category: "Hospitality & Resort",
    image: "/logos/vfarms.png",
    url: "http://vfarmstays.com/",
    type: "Booking Website",
    icon: <FaGlobe />,
    tech: ["React", "Bootstrap", "Node.js"],
  },
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
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
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

                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-ink font-semibold font-body transition-all group-hover:gap-4 group-hover:text-secondary"
                >
                  View Project
                  <FaArrowRight />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

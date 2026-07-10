"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaPython,
  FaAws,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiMongodb,
  SiFlutter,
  SiFirebase,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiJavascript,
} from "react-icons/si";

import Container from "./shared/Container";
import SectionTitle from "./shared/SectionTitle";
import { fadeUp, staggerContainer, viewport } from "../utils/animations";

const technologies = [
  {
    icon: <FaReact />,
    name: "React",
    color: "text-sky-500",
  },
  {
    icon: <SiNextdotjs />,
    name: "Next.js",
    color: "text-white",
  },
  {
    icon: <FaNodeJs />,
    name: "Node.js",
    color: "text-green-600",
  },
  {
    icon: <SiExpress />,
    name: "Express",
    color: "text-yellow-300",
  },
  {
    icon: <SiMongodb />,
    name: "MongoDB",
    color: "text-green-500",
  },
  {
    icon: <SiMysql />,
    name: "MySQL",
    color: "text-blue-700",
  },
  {
    icon: <SiFlutter />,
    name: "Flutter",
    color: "text-sky-500",
  },
  {
    icon: <SiFirebase />,
    name: "Firebase",
    color: "text-orange-500",
  },
  {
    icon: <FaAws />,
    name: "AWS",
    color: "text-orange-400",
  },
  {
    icon: <FaDocker />,
    name: "Docker",
    color: "text-blue-500",
  },
  {
    icon: <FaGithub />,
    name: "GitHub",
    color: "text-white",
  },
  {
    icon: <FaFigma />,
    name: "Figma",
    color: "text-pink-500",
  },
  {
    icon: <FaPython />,
    name: "Python",
    color: "text-yellow-500",
  },
  {
    icon: <SiJavascript />,
    name: "JavaScript",
    color: "text-yellow-400",
  },
  {
    icon: <FaHtml5 />,
    name: "HTML5",
    color: "text-orange-600",
  },
  {
    icon: <FaCss3Alt />,
    name: "CSS3",
    color: "text-blue-600",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
    color: "text-cyan-500",
  },
];

export default function Technologies() {
  return (
    <section className="py-24 sm:py-32 bg-surface">
      <Container className="flex flex-col items-center gap-16">
        <SectionTitle
          eyebrow="Technologies"
          index={2}
          title="Technologies we work with"
          description="Our team uses modern frameworks, programming languages, cloud platforms, and design tools to build scalable, secure, and future-ready digital products."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={staggerContainer(0.04)}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 w-full"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={fadeUp}
              whileHover={{ y: -8, borderColor: "rgba(124,92,252,0.4)" }}
              className="rounded-brand-sm border border-border bg-elevated p-7 flex flex-col items-center justify-center gap-4 transition-colors"
            >
              <div className={`text-4xl ${tech.color} transition-colors group-hover:text-primary`}>
                {tech.icon}
              </div>
              <h3 className="text-sm font-mono text-ink-muted">{tech.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

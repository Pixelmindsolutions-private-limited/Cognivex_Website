"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaCalendarAlt, FaClock, FaUser } from "react-icons/fa";
import Container from "./shared/Container";
import Badge from "./shared/Badge";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewport } from "../utils/animations";

/**
 * BlogDetail
 * ---------------------------------------------------------------------------
 * Full single-post template. Receives plain data (from data/blogs.js)
 * rather than importing it itself, so it stays reusable if posts ever move
 * to a CMS.
 */
export default function BlogDetail({ post, related }) {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-40 pb-16 bg-void overflow-hidden">
                <Container className="relative">
                    <motion.nav
                        initial="hidden"
                        animate="show"
                        variants={fadeUp}
                        className="flex items-center gap-2 text-sm font-mono text-ink-muted mb-8"
                    >
                        <Link href="/blog" className="hover:text-ink transition-colors">
                            Blog
                        </Link>
                        <span>/</span>
                        <span className="text-ink-secondary">{post.title}</span>
                    </motion.nav>

                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={staggerContainer(0.12)}
                        className="max-w-3xl"
                    >
                        <motion.div variants={fadeUp}>
                            <Badge>{post.category}</Badge>
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            className="mt-6 font-display font-semibold text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.05] tracking-tight text-ink"
                        >
                            {post.title}
                        </motion.h1>

                        <motion.div
                            variants={fadeUp}
                            className="flex flex-wrap items-center gap-6 mt-8 text-ink-secondary text-sm font-body"
                        >
                            <span className="flex items-center gap-2">
                                <FaUser className="text-primary" /> {post.author}
                            </span>
                            <span className="flex items-center gap-2">
                                <FaCalendarAlt className="text-primary" /> {post.date}
                            </span>
                            <span className="flex items-center gap-2">
                                <FaClock className="text-primary" /> {post.readTime}
                            </span>
                        </motion.div>
                    </motion.div>
                </Container>
            </section>

            {/* Cover image */}
            <Container>
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={viewport}
                    variants={fadeUp}
                    className="relative h-64 sm:h-96 rounded-brand-lg overflow-hidden border border-border"
                >
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 1152px"
                        className="object-cover"
                    />
                </motion.div>
            </Container>

            {/* Article body + related sidebar */}
            <section className="py-16 sm:py-24 bg-void">
                <Container>
                    <div className="grid lg:grid-cols-3 gap-12 items-start">
                        {/* Left — article content */}
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={viewport}
                            variants={staggerContainer(0.08)}
                            className="lg:col-span-2 flex flex-col gap-6"
                        >
                            {post.content.map((paragraph, i) => (
                                <motion.p
                                    key={i}
                                    variants={fadeUp}
                                    className="text-ink-secondary text-lg leading-8 font-body"
                                >
                                    {paragraph}
                                </motion.p>
                            ))}
                        </motion.div>

                        {/* Right — more from the blog, sticky sidebar */}
                        {related.length > 0 && (
                            <motion.aside
                                initial="hidden"
                                whileInView="show"
                                viewport={viewport}
                                variants={fadeRight}
                                className="lg:sticky lg:top-28 flex flex-col gap-6"
                            >
                                <h2 className="font-display font-semibold text-xl text-ink">More from the blog</h2>

                                <motion.div
                                    variants={staggerContainer(0.08)}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={viewport}
                                    className="flex flex-col gap-4"
                                >
                                    {related.map((item) => (
                                        <motion.div key={item.slug} variants={fadeUp}>
                                            <Link
                                                href={`/blog/${item.slug}`}
                                                className="group flex gap-4 rounded-brand overflow-hidden bg-elevated border border-border hover:border-primary/40 transition-colors duration-300 p-3"
                                            >
                                                <div className="relative w-24 h-20 shrink-0 rounded-brand-sm overflow-hidden">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.title}
                                                        fill
                                                        sizes="96px"
                                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                    />
                                                </div>

                                                <div className="min-w-0">
                                                    <span className="text-secondary font-mono text-[10px] tracking-wider uppercase">
                                                        {item.category}
                                                    </span>
                                                    <h3 className="text-sm font-display font-semibold mt-1 text-ink leading-snug line-clamp-2">
                                                        {item.title}
                                                    </h3>
                                                    <span className="mt-2 inline-flex items-center gap-1.5 text-primary text-xs font-semibold font-body group-hover:gap-2.5 transition-all">
                                                        Read More <FaArrowRight size={10} />
                                                    </span>
                                                </div>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.aside>
                        )}
                    </div>
                </Container>
            </section>
        </>
    );
}
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Container from "./shared/Container";
import PrimaryButton from "./shared/PrimaryButton";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const router = useRouter();


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const navbarBg = "bg-void/70 backdrop-blur-xl border-border";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-brand ${scrolled
        ? `${navbarBg} border-b`
        : menuOpen ? `${navbarBg} border-b` : "bg-transparent border-b border-transparent"
        }`}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <img
              src="/images/logo.png"
              alt="congnivexsolutions  Solutions"
              width={180}
              height={50}
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="relative font-body text-sm font-medium text-ink-secondary hover:text-ink transition-colors duration-300 group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-gradient group-hover:w-full transition-all duration-300 ease-brand" />
              </Link>
            ))}

            <PrimaryButton
              className="w-full justify-center"
              onClick={() => {
                setMenuOpen(false);
                router.push("/contact");
              }}

            >
              Get Started
            </PrimaryButton>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden text-2xl text-ink"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`lg:hidden ${navbarBg} border-t overflow-hidden`}
          >
            <div className="flex flex-col p-6 gap-5">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-body text-ink-secondary hover:text-ink transition-colors"
                >
                  {item.name}
                </Link>
              ))}

              <PrimaryButton
                className="w-full justify-center"
                onClick={() => {
                  setMenuOpen(false);
                  router.push("/contact");
                }}

              >
                Get Started
              </PrimaryButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import Container from "./shared/Container";

const socials = [
  { icon: <FaFacebookF />, hover: "hover:bg-blue-600" },
  { icon: <FaTwitter />, hover: "hover:bg-sky-500" },
  { icon: <FaLinkedinIn />, hover: "hover:bg-blue-700" },
  { icon: <FaInstagram />, hover: "hover:bg-pink-600" },
  { icon: <FaGithub />, hover: "hover:bg-white/20" },
];

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const services = ["Web Development", "App Development", "Digital Marketing", "UI / UX Design", "Cloud Solutions", "AI Solutions"];

export default function Footer() {
  return (
    <footer className="bg-void text-ink-secondary border-t border-border">
      {/* Top */}
      <Container className="py-20">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company */}
          <div>
            <h2 className="text-3xl font-display font-bold mb-5">
              <span className="text-primary">Cogni</span>
              <span className="text-ink">vix</span>
            </h2>

            <p className="leading-8 text-ink-muted font-body">
              Cognivexsolutionsis a modern IT company delivering Web Development,
              Mobile App Development, UI/UX Design, Cloud Solutions,
              AI Solutions and Digital Marketing services worldwide.
            </p>

            <div className="flex gap-3 mt-8">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href="#"
                  className={`w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-colors duration-300 ${s.hover}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-semibold text-ink mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="hover:text-primary transition-colors font-body">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-display font-semibold text-ink mb-6">Our Services</h3>
            <ul className="space-y-4 font-body">
              {services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-display font-semibold text-ink mb-6">Contact</h3>

            <div className="space-y-5 font-body">
              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-primary mt-1 shrink-0" />
                <p>Hyderabad, Telangana, India</p>
              </div>
              <div className="flex gap-4">
                <FaPhoneAlt className="text-primary mt-1 shrink-0" />
                <p>+91 98765 43210</p>
              </div>
              <div className="flex gap-4">
                <FaEnvelope className="text-primary mt-1 shrink-0" />
                <p>info@cognivix.com</p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-10">
              <h4 className="text-base font-display font-semibold text-ink mb-4">Newsletter</h4>

              <div className="flex rounded-pill overflow-hidden border border-white/10 bg-white/[0.03]">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 px-4 py-3 bg-transparent text-ink placeholder:text-ink-muted outline-none font-body text-sm"
                />
                <button className="bg-brand-gradient text-void px-5 flex items-center justify-center transition-transform hover:scale-105">
                  <FaPaperPlane size={13} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom */}
      <div className="border-t border-border">
        <Container className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ink-muted text-center font-body text-sm">
            © {new Date().getFullYear()} Cognivix. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm font-body">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}

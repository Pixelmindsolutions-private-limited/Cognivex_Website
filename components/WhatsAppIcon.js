"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

// Replace with the business number (international format, no + or spaces)
// and the message you want pre-filled in the chat.
const WHATSAPP_NUMBER = "919121084676";
const DEFAULT_MESSAGE = "Hi! I'd like to know more about your services.";

/**
 * Fixed floating launcher that opens a WhatsApp chat in a new tab.
 * Sits bottom-right, offset above the ChatBot icon so the two can
 * be stacked on the same page without overlapping.
 */
export default function WhatsAppIcon() {
    const [hovered, setHovered] = useState(false);

    const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        DEFAULT_MESSAGE
    )}`;

    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-24 right-6 z-[9985] flex items-center"
        >
            {/* ambient pulse ring */}
            <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/30" />

            <AnimatePresence>
                {hovered && (
                    <motion.span
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 8 }}
                        className="mr-3 whitespace-nowrap rounded-lg bg-[#0f172a] px-3 py-1.5 text-sm font-medium text-white shadow-lg"
                    >
                        Chat on WhatsApp
                    </motion.span>
                )}
            </AnimatePresence>

            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)]">
                <FaWhatsapp size={28} />
            </span>
        </motion.a>
    );
}
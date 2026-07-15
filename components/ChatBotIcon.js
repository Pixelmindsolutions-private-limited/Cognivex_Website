"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import { RiRobot3Line } from "react-icons/ri";

export default function ChatBotIcon() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Floating Button */}
            <motion.button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                aria-label={open ? "Close chat" : "Open chat"}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    delay: 0.5,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-2xl"
            >
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={open ? "close" : "bot"}
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {open ? <HiX size={24} /> : <RiRobot3Line size={26} />}
                    </motion.div>
                </AnimatePresence>
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.25 }}
                        className="
        fixed
        bottom-24
        right-6
        z-[9998]
        overflow-hidden
        rounded-2xl
        bg-white
        shadow-2xl

        w-[420px]
        h-[700px]

        max-w-[calc(100vw-24px)]
        max-h-[calc(100vh-110px)]

        sm:w-[400px]
        md:w-[420px]

        max-md:left-3
        max-md:right-3
        max-md:bottom-24
        max-md:w-auto
        max-md:h-[75vh]
      "
                    >
                        <iframe
                            src="https://www.chatbase.co/chatbot-iframe/XuzRu-HgpnmLCEKL1Hzj0"
                            title="Cognivex AI"
                            allow="microphone"
                            frameBorder="0"
                            className="h-full w-full"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
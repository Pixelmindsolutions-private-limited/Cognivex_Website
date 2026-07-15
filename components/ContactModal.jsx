"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiOutlineChatAlt2 } from "react-icons/hi";

const SERVICES = [
    "Web Development",
    "Mobile App Development",
    "UI / UX Design",
    "AI Solutions",
    "Cloud Solutions",
    "Digital Marketing",
    "Others",
];

const INITIAL_FORM = {
    name: "",
    email: "",
    mobile: "",
    service: "",
    message: "",
};

function ContactTrigger({ onOpen }) {
    return (
        <motion.button
            type="button"
            onClick={onOpen}
            aria-label="Open contact form"
            initial={{ x: 12, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
            className="group fixed right-0 top-1/2 z-[9990] flex -translate-y-1/2 items-center overflow-hidden rounded-l-2xl border border-r-0 border-white/10 bg-[#0f172a]/95 py-4 pl-3 pr-3 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur transition-[padding] duration-300 hover:pl-5"
        >
            <span className="absolute -right-3 top-1/2 h-14 w-14 -translate-y-1/2 animate-ping rounded-full bg-primary/20" />

            <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                <HiOutlineChatAlt2 size={18} />
            </span>

            <span className="ml-0 max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:ml-3 group-hover:max-w-[8rem] group-hover:opacity-100">
                Contact Us
            </span>
        </motion.button>
    );
}

function FormField({ children }) {
    return <div>{children}</div>;
}

export default function ContactModal() {
    const [open, setOpen] = useState(false);

    const [form, setForm] = useState(INITIAL_FORM);

    const [loading, setLoading] = useState(false);

    const [responseMessage, setResponseMessage] = useState("");

    const handleClose = useCallback(() => {
        setOpen(false);
        setResponseMessage("");
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    useEffect(() => {
        if (!open) return;

        const onKeyDown = (e) => {
            if (e.key === "Escape") handleClose();
        };

        window.addEventListener("keydown", onKeyDown);

        return () => {
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [open, handleClose]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !form.name.trim() ||
            !form.email.trim() ||
            !form.mobile.trim() ||
            !form.service.trim() ||
            !form.message.trim()
        ) {
            setResponseMessage("❌ Please fill all required fields.");
            return;
        }

        setLoading(true);
        setResponseMessage("");

        try {
            const response = await fetch(
                "https://6a575346914a025dcff2cc0f.mockapi.io/api/cognivex/contactform/Contactdata",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        createdAt: new Date().toLocaleDateString("en-GB"),
                        name: form.name,
                        phone: form.mobile,
                        email: form.email,
                        service: form.service,
                        message: form.message,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to submit form");
            }

            const data = await response.json();

            console.log("Response:", data);

            setResponseMessage("✅ Thank you! Your enquiry has been submitted.");

            setForm(INITIAL_FORM);

            setTimeout(() => {
                setOpen(false);
                setResponseMessage("");
            }, 1500);
        } catch (error) {
            console.error(error);

            setResponseMessage(
                "❌ Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <AnimatePresence>
                {!open && (
                    <ContactTrigger onOpen={() => setOpen(true)} />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {open && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={handleClose}
                            className="fixed inset-0 z-[9998] bg-black/70 backdrop-blur-sm"
                        />

                        {/* Sidebar */}
                        <motion.div
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="contact-modal-title"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 28,
                            }}
                            className="fixed top-0 right-0 z-[9999] h-screen w-full max-w-md bg-[#0f172a] border-l border-white/10 shadow-2xl overflow-y-auto"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between border-b border-white/10 p-6">
                                <div>
                                    <h2
                                        id="contact-modal-title"
                                        className="text-2xl font-bold text-white"
                                    >
                                        Contact Us
                                    </h2>

                                    <p className="mt-1 text-sm text-gray-400">
                                        Request a free consultation
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={handleClose}
                                    aria-label="Close contact form"
                                    className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
                                >
                                    <HiX size={20} />
                                </button>
                            </div>

                            <form
                                onSubmit={handleSubmit}
                                className="flex h-[calc(100vh-88px)] flex-col gap-5 p-6"
                            >
                                <FormField>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Full Name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-primary"
                                    />
                                </FormField>

                                <FormField>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-primary"
                                    />
                                </FormField>

                                <FormField>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        placeholder="Mobile Number"
                                        value={form.mobile}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-primary"
                                    />
                                </FormField>

                                <FormField>
                                    <select
                                        name="service"
                                        value={form.service}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-xl border border-white/10 bg-[#0f172a] px-4 py-3 text-white outline-none transition focus:border-primary"
                                    >
                                        <option value="">Select Service</option>

                                        {SERVICES.map((service) => (
                                            <option key={service} value={service}>
                                                {service}
                                            </option>
                                        ))}
                                    </select>
                                </FormField>

                                <FormField>
                                    <textarea
                                        rows={5}
                                        name="message"
                                        placeholder="Tell us about your project..."
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        className="h-full w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-primary"
                                    />
                                </FormField>

                                {responseMessage && (
                                    <div
                                        className={`rounded-lg border px-4 py-3 text-sm font-medium ${responseMessage.startsWith("✅")
                                                ? "border-green-500/30 bg-green-500/10 text-green-400"
                                                : "border-red-500/30 bg-red-500/10 text-red-400"
                                            }`}
                                    >
                                        {responseMessage}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="mt-auto rounded-xl bg-primary py-3 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {loading ? "Submitting..." : "Submit"}
                                </button>
                            </form>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
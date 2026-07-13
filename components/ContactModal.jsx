"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";

export default function ContactModal() {
    const [open, setOpen] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        mobile: "",
        service: "",
        message: "",
    });

    useEffect(() => {
        const STORAGE_KEY = "leadModalShown";

        const shown = sessionStorage.getItem(STORAGE_KEY);

        if (!shown) {
            const timer = setTimeout(() => {
                setOpen(true);
            }, 1200);

            return () => clearTimeout(timer);
        }
    }, []);

    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(form);

        // TODO:
        // await axios.post("/api/contact", form);

        alert("Thank you! We'll contact you shortly.");

        setOpen(false);

        setForm({
            name: "",
            email: "",
            mobile: "",
            service: "",
            message: "",
        });
    };

    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                        className="fixed inset-0 z-[9998] bg-black/70 backdrop-blur-sm"
                    />

                    {/* Sidebar */}
                    <motion.div
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
                                <h2 className="text-2xl font-bold text-white">
                                    Contact Us
                                </h2>
                                <p className="mt-1 text-sm text-gray-400">
                                    Request a free consultation
                                </p>
                            </div>

                            <button
                                onClick={() => setOpen(false)}
                                className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
                            >
                                <HiX size={20} />
                            </button>
                        </div>

                        {/* Form */}
                        <form
                            onSubmit={handleSubmit}
                            className="flex h-[calc(100vh-88px)] flex-col gap-5 p-6"
                        >
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-primary"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-primary"
                            />

                            <input
                                type="tel"
                                name="mobile"
                                placeholder="Mobile Number"
                                value={form.mobile}
                                onChange={handleChange}
                                required
                                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-primary"
                            />

                            <select
                                name="service"
                                value={form.service}
                                onChange={handleChange}
                                required
                                className="rounded-xl border border-white/10 bg-[#0f172a] px-4 py-3 text-white outline-none focus:border-primary"
                            >
                                <option value="">Select Service</option>
                                <option>Web Development</option>
                                <option>Mobile App Development</option>
                                <option>UI / UX Design</option>
                                <option>AI Solutions</option>
                                <option>Cloud Solutions</option>
                                <option>Digital Marketing</option>
                                <option>Others</option>
                            </select>

                            <textarea
                                rows={5}
                                name="message"
                                placeholder="Tell us about your project..."
                                value={form.message}
                                onChange={handleChange}
                                className="flex-1 resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-primary"
                            />

                            <button
                                type="submit"
                                className="mt-auto rounded-xl bg-primary py-3 font-semibold text-white transition hover:opacity-90"
                            >
                                Submit
                            </button>
                        </form>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
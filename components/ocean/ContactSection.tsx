"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface ContactSectionProps {
    email?: string;
    location?: string;
    socialLinks?: {
        github?: string;
        linkedin?: string;
        twitter?: string;
    };
}

export default function ContactSection({
    email = "alex.chen@example.com",
    location = "San Francisco, CA",
    socialLinks = {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
    }
}: ContactSectionProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section className="py-20 px-6 bg-gradient-to-br from-indigo-50 via-cyan-50 to-teal-50 dark:from-slate-800 dark:via-slate-900 dark:to-indigo-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                {/* Animated wave patterns */}
                <motion.div
                    className="absolute inset-0 opacity-10 dark:opacity-20"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 60c20 0 20-20 40-20s20 20 40 20 20-20 40-20v40H0z' fill='%2306b6d4' fill-opacity='0.3'/%3E%3C/svg%3E")`,
                    }}
                    animate={{
                        backgroundPosition: ["0px 0px", "100px 100px"],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                {/* Floating sea elements */}
                <motion.div
                    className="absolute top-32 left-20 text-4xl opacity-20 dark:opacity-40"
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    🐚
                </motion.div>

                <motion.div
                    className="absolute bottom-20 right-32 text-5xl opacity-15 dark:opacity-35"
                    animate={{
                        y: [0, -15, 0],
                        x: [0, 10, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    🌊
                </motion.div>

                {/* Drifting bubbles */}
                {Array.from({ length: 12 }).map((_, i) => {
                    // Fixed positions to prevent hydration mismatch
                    const positions = [
                        { left: "8%", top: "12%" }, { left: "92%", top: "18%" },
                        { left: "23%", top: "85%" }, { left: "77%", top: "8%" },
                        { left: "3%", top: "65%" }, { left: "97%", top: "42%" },
                        { left: "42%", top: "3%" }, { left: "58%", top: "88%" },
                        { left: "18%", top: "92%" }, { left: "82%", top: "72%" },
                        { left: "32%", top: "28%" }, { left: "68%", top: "58%" }
                    ];

                    const pos = positions[i] || { left: "50%", top: "50%" };

                    return (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-cyan-200/40 dark:bg-cyan-400/20 rounded-full"
                            style={{
                                left: pos.left,
                                top: pos.top,
                            }}
                            animate={{
                                y: [0, -80, 0],
                                x: [0, Math.sin(i) * 40, 0],
                                opacity: [0.2, 0.8, 0.2],
                            }}
                            transition={{
                                duration: 8 + (i * 0.3),
                                repeat: Infinity,
                                delay: i * 0.4,
                                ease: "easeInOut",
                            }}
                        />
                    );
                })}
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 dark:from-cyan-400 dark:via-blue-400 dark:to-teal-400 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        Get In Touch
                    </motion.h2>

                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true }}
                    />

                    <motion.p
                        className="text-lg text-slate-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        Have a project in mind or want to collaborate? I&apos;d love to hear from you.
                        Let&apos;s create something amazing together!
                    </motion.p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <motion.form
                            className="space-y-6"
                            onSubmit={handleSubmit}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            {/* Name Field */}
                            <div className="relative">
                                <motion.input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    onFocus={() => setFocusedField("name")}
                                    onBlur={() => setFocusedField(null)}
                                    className="w-full px-6 py-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-cyan-200/50 dark:border-cyan-800/50 rounded-2xl text-slate-800 dark:text-slate-200 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-cyan-400 dark:focus:border-cyan-500 transition-all duration-300"
                                    placeholder="Your Name"
                                    required
                                    whileFocus={{
                                        scale: 1.02,
                                        borderColor: "rgb(59 130 246)",
                                    }}
                                />

                                {/* Animated wave underline */}
                                <motion.div
                                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{
                                        width: focusedField === "name" ? "100%" : "0%",
                                    }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                />
                            </div>

                            {/* Email Field */}
                            <div className="relative">
                                <motion.input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    onFocus={() => setFocusedField("email")}
                                    onBlur={() => setFocusedField(null)}
                                    className="w-full px-6 py-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-cyan-200/50 dark:border-cyan-800/50 rounded-2xl text-slate-800 dark:text-slate-200 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-cyan-400 dark:focus:border-cyan-500 transition-all duration-300"
                                    placeholder="your.email@example.com"
                                    required
                                    whileFocus={{
                                        scale: 1.02,
                                        borderColor: "rgb(59 130 246)",
                                    }}
                                />

                                {/* Animated wave underline */}
                                <motion.div
                                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{
                                        width: focusedField === "email" ? "100%" : "0%",
                                    }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                />
                            </div>

                            {/* Message Field */}
                            <div className="relative">
                                <motion.textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    onFocus={() => setFocusedField("message")}
                                    onBlur={() => setFocusedField(null)}
                                    rows={6}
                                    className="w-full px-6 py-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-cyan-200/50 dark:border-cyan-800/50 rounded-2xl text-slate-800 dark:text-slate-200 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-cyan-400 dark:focus:border-cyan-500 transition-all duration-300 resize-none"
                                    placeholder="Tell me about your project..."
                                    required
                                    whileFocus={{
                                        scale: 1.02,
                                        borderColor: "rgb(59 130 246)",
                                    }}
                                />

                                {/* Animated wave underline */}
                                <motion.div
                                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{
                                        width: focusedField === "message" ? "100%" : "0%",
                                    }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                />
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                            >
                                {isSubmitting ? (
                                    <motion.div
                                        className="flex items-center justify-center gap-2"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                    >
                                        <motion.div
                                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                            animate={{ rotate: 360 }}
                                            transition={{
                                                duration: 1,
                                                repeat: Infinity,
                                                ease: "linear",
                                            }}
                                        />
                                        Sending...
                                    </motion.div>
                                ) : (
                                    "Send Message"
                                )}
                            </motion.button>
                        </motion.form>
                    </motion.div>

                    {/* Contact Info & Social Links */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Contact Information */}
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6">
                                Let&apos;s Connect
                            </h3>

                            <motion.div
                                className="flex items-center gap-4 p-4 bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-cyan-200/30 dark:border-cyan-800/30"
                                whileHover={{
                                    scale: 1.02,
                                    backgroundColor: "rgba(255, 255, 255, 0.6)",
                                }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="text-2xl">📧</div>
                                <div>
                                    <div className="font-semibold text-slate-800 dark:text-slate-200">
                                        Email
                                    </div>
                                    <div className="text-slate-600 dark:text-slate-400">
                                        {email}
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-center gap-4 p-4 bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-cyan-200/30 dark:border-cyan-800/30"
                                whileHover={{
                                    scale: 1.02,
                                    backgroundColor: "rgba(255, 255, 255, 0.6)",
                                }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="text-2xl">📍</div>
                                <div>
                                    <div className="font-semibold text-slate-800 dark:text-slate-200">
                                        Location
                                    </div>
                                    <div className="text-slate-600 dark:text-slate-400">
                                        {location}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6">
                                Find Me Online
                            </h3>

                            <div className="grid grid-cols-1 gap-4">
                                {socialLinks.github && (
                                    <motion.a
                                        href={socialLinks.github}
                                        className="flex items-center gap-4 p-4 bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-cyan-200/30 dark:border-cyan-800/30 hover:bg-white/60 dark:hover:bg-slate-800/60 transition-all duration-300 group"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                            🐙
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-semibold text-slate-800 dark:text-slate-200">
                                                GitHub
                                            </div>
                                            <div className="text-sm text-slate-600 dark:text-slate-400">
                                                Check out my code
                                            </div>
                                        </div>
                                        <div className="text-slate-600 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                                            →
                                        </div>
                                    </motion.a>
                                )}

                                {socialLinks.linkedin && (
                                    <motion.a
                                        href={socialLinks.linkedin}
                                        className="flex items-center gap-4 p-4 bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-cyan-200/30 dark:border-cyan-800/30 hover:bg-white/60 dark:hover:bg-slate-800/60 transition-all duration-300 group"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                            💼
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-semibold text-slate-800 dark:text-slate-200">
                                                LinkedIn
                                            </div>
                                            <div className="text-sm text-slate-600 dark:text-slate-400">
                                                Let&apos;s connect professionally
                                            </div>
                                        </div>
                                        <div className="text-slate-600 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                                            →
                                        </div>
                                    </motion.a>
                                )}

                                {socialLinks.twitter && (
                                    <motion.a
                                        href={socialLinks.twitter}
                                        className="flex items-center gap-4 p-4 bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-cyan-200/30 dark:border-cyan-800/30 hover:bg-white/60 dark:hover:bg-slate-800/60 transition-all duration-300 group"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                            🐦
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-semibold text-slate-800 dark:text-slate-200">
                                                Twitter
                                            </div>
                                            <div className="text-sm text-slate-600 dark:text-slate-400">
                                                Follow for updates
                                            </div>
                                        </div>
                                        <div className="text-slate-600 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                                            →
                                        </div>
                                    </motion.a>
                                )}
                            </div>
                        </motion.div>

                        {/* Call to Action */}
                        <motion.div
                            className="p-8 bg-gradient-to-br from-cyan-100/50 to-blue-100/50 dark:from-cyan-900/20 dark:to-blue-900/20 backdrop-blur-sm rounded-3xl border border-cyan-200/50 dark:border-cyan-800/50"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="text-4xl mb-4"
                                animate={{
                                    rotate: [0, 5, -5, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                🚀
                            </motion.div>
                            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3">
                                Ready to start a project?
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                I&apos;m always excited to work on new and challenging projects.
                                Let&apos;s discuss how we can bring your ideas to life!
                            </p>
                            <motion.button
                                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl font-semibold transition-all duration-300"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Start a Conversation
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

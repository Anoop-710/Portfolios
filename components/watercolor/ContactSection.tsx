"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import WatercolorBlot from "./WatercolorBlot";
import InkSplatter from "./InkSplatter";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSplatter, setSubmitSplatter] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitSplatter(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setSubmitSplatter(false), 1000);
        }, 2000);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const contactInfo = [
        {
            icon: "📧",
            title: "Email",
            value: "hello@watercolorstudio.dev",
            href: "mailto:hello@watercolorstudio.dev"
        },
        {
            icon: "💼",
            title: "LinkedIn",
            value: "linkedin.com/in/watercolor-dev",
            href: "#"
        },
        {
            icon: "🐙",
            title: "GitHub",
            value: "github.com/watercolor-studio",
            href: "#"
        },
        {
            icon: "📱",
            title: "Phone",
            value: "+1 (555) 123-4567",
            href: "tel:+15551234567"
        }
    ];

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background watercolor blots */}
            <div className="absolute inset-0 pointer-events-none">
                <WatercolorBlot
                    delay={6}
                    duration={20}
                    size={300}
                    color="rgba(236, 72, 153, 0.15)"
                    className="absolute top-20 left-20"
                />
                <WatercolorBlot
                    delay={12}
                    duration={18}
                    size={250}
                    color="rgba(59, 130, 246, 0.15)"
                    className="absolute bottom-20 right-20"
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                            Let&apos;s Create Together
                        </span>
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                        Have a project in mind? I&apos;d love to hear about it and explore how we can
                        bring your vision to life with beautiful, functional design.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Field */}
                            <motion.div
                                className="relative"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <motion.input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    onFocus={() => setFocusedField("name")}
                                    onBlur={() => setFocusedField(null)}
                                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-200 focus:border-pink-500 dark:focus:border-pink-400 focus:outline-none transition-all"
                                    placeholder="Your Name"
                                    required
                                    whileFocus={{ scale: 1.02 }}
                                />
                                <motion.div
                                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: focusedField === "name" ? 1 : 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>

                            {/* Email Field */}
                            <motion.div
                                className="relative"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <motion.input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    onFocus={() => setFocusedField("email")}
                                    onBlur={() => setFocusedField(null)}
                                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-200 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-all"
                                    placeholder="your.email@example.com"
                                    required
                                    whileFocus={{ scale: 1.02 }}
                                />
                                <motion.div
                                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: focusedField === "email" ? 1 : 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>

                            {/* Message Field */}
                            <motion.div
                                className="relative"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <motion.textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    onFocus={() => setFocusedField("message")}
                                    onBlur={() => setFocusedField(null)}
                                    rows={5}
                                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-200 focus:border-green-500 dark:focus:border-green-400 focus:outline-none transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                    required
                                    whileFocus={{ scale: 1.02 }}
                                />
                                <motion.div
                                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: focusedField === "message" ? 1 : 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className="relative w-full px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden group disabled:opacity-50"
                                whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    {isSubmitting ? (
                                        <>
                                            <motion.div
                                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            />
                                            Sending Message...
                                        </>
                                    ) : (
                                        "Send Message"
                                    )}
                                </span>

                                <InkSplatter
                                    trigger={submitSplatter}
                                    color="#ffffff"
                                    size={150}
                                    className="absolute -top-6 -left-6"
                                />
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6">
                                Get in Touch
                            </h3>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                Whether you have a project in mind, want to collaborate, or just want to
                                say hello, I&apos;d love to hear from you. Let&apos;s create something amazing together!
                            </p>
                        </div>

                        {/* Contact Methods */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={index}
                                    href={info.href}
                                    className="flex items-center gap-4 p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-all group"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02, y: -2 }}
                                >
                                    <div className="text-2xl">{info.icon}</div>
                                    <div className="flex-1">
                                        <div className="font-semibold text-slate-800 dark:text-slate-200">
                                            {info.title}
                                        </div>
                                        <div className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">
                                            {info.value}
                                        </div>
                                    </div>
                                    <motion.div
                                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                                        whileHover={{ x: 5 }}
                                    >
                                        <svg className="w-5 h-5 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </motion.div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Availability Status */}
                        <motion.div
                            className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-200 dark:border-green-800"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <h4 className="font-bold text-slate-800 dark:text-slate-200">
                                    Available for Projects
                                </h4>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                Currently accepting new projects for Q1 2025.
                                Let&apos;s discuss your ideas and turn them into reality!
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <section id="contact" className="py-20 px-6 relative">
            {/* Background with Stone Lanterns */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-emerald-50/30 to-slate-100/50 dark:from-slate-900/50 dark:via-slate-800/30 dark:to-slate-900/50" />

            {/* Decorative Stone Lanterns */}
            <div className="absolute left-8 top-1/4 w-24 h-48 opacity-20">
                <div className="relative w-full h-full">
                    {/* Lantern Base */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-3 bg-gradient-to-t from-slate-600 to-slate-500 rounded-sm" />
                    {/* Lantern Body */}
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-12 bg-gradient-to-t from-slate-500 to-slate-400 rounded-sm" />
                    {/* Lantern Roof */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-4 bg-slate-700" style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} />
                    {/* Warm Glow */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-radial from-yellow-300/40 to-transparent rounded-full" />
                </div>
            </div>

            <div className="absolute right-8 top-1/3 w-24 h-48 opacity-20">
                <div className="relative w-full h-full">
                    {/* Lantern Base */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-3 bg-gradient-to-t from-slate-600 to-slate-500 rounded-sm" />
                    {/* Lantern Body */}
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-12 bg-gradient-to-t from-slate-500 to-slate-400 rounded-sm" />
                    {/* Lantern Roof */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-4 bg-slate-700" style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} />
                    {/* Warm Glow */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-radial from-yellow-300/40 to-transparent rounded-full" />
                </div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 dark:from-slate-200 dark:via-slate-300 dark:to-slate-400 bg-clip-text text-transparent"
                    >
                        Get In Touch
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
                    >
                        Like a stone lantern illuminating a peaceful garden path, I&apos;m always open to discussing
                        new projects and creative collaborations.
                    </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Field */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 text-slate-900 dark:text-slate-100 placeholder-slate-500"
                                    placeholder="Your name"
                                />
                            </motion.div>

                            {/* Email Field */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 text-slate-900 dark:text-slate-100 placeholder-slate-500"
                                    placeholder="your.email@example.com"
                                />
                            </motion.div>

                            {/* Message Field */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 text-slate-900 dark:text-slate-100 placeholder-slate-500 resize-none"
                                    placeholder="Share your thoughts or project ideas..."
                                />
                            </motion.div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                className="w-full px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all relative overflow-hidden"
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: "0 20px 40px rgba(236, 72, 153, 0.3)"
                                }}
                                whileTap={{ scale: 0.98 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <span className="relative z-10">Send Message</span>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "0%" }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Contact Methods */}
                        <div className="space-y-6">
                            <motion.div
                                className="flex items-center gap-4 p-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-200/50 dark:border-slate-700/50"
                                whileHover={{ scale: 1.02, x: 8 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">Email</h3>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm">hello@zengarden.dev</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-center gap-4 p-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-200/50 dark:border-slate-700/50"
                                whileHover={{ scale: 1.02, x: 8 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">Location</h3>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm">Kyoto, Japan</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-center gap-4 p-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-200/50 dark:border-slate-700/50"
                                whileHover={{ scale: 1.02, x: 8 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">Response Time</h3>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm">Within 24 hours</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Zen Quote */}
                        <motion.div
                            className="p-6 bg-gradient-to-br from-emerald-50/80 to-jade-50/80 dark:from-slate-800/80 dark:to-slate-700/80 backdrop-blur-sm rounded-xl border border-emerald-200/50 dark:border-slate-600/50"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <blockquote className="text-slate-700 dark:text-slate-300 italic text-center">
                                <p className="mb-2">&quot;The journey of a thousand miles begins with a single step.&quot;</p>
                                <cite className="text-sm text-slate-500 dark:text-slate-400">— Lao Tzu</cite>
                            </blockquote>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Ambient Lighting Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-100/5 to-yellow-200/10 dark:from-transparent dark:via-yellow-900/5 dark:to-yellow-800/10 pointer-events-none" />
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { ParchmentCard } from "./ParchmentCard";
import { CandleFlame } from "./CandleFlame";
import { DustParticles } from "./DustParticles";
import { useState } from "react";

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
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
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 via-stone-800 to-slate-900 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-stone-900/50 via-slate-800/30 to-stone-900/50" />
            </div>

            {/* Atmospheric particles */}
            <DustParticles count={20} className="opacity-50" />

            {/* Study room elements */}
            <div className="absolute inset-0">
                {/* Bookshelves */}
                <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-amber-900/20 to-transparent">
                    {/* Book spines */}
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-8 h-32 bg-gradient-to-b from-amber-800 to-amber-900 opacity-60"
                            style={{
                                left: `${8 + i * 12}px`,
                                top: `${20 + (i % 3) * 140}px`,
                            }}
                        />
                    ))}
                </div>

                <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-amber-900/20 to-transparent">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-8 h-32 bg-gradient-to-b from-amber-700 to-amber-800 opacity-60"
                            style={{
                                right: `${8 + i * 12}px`,
                                top: `${20 + (i % 3) * 140}px`,
                            }}
                        />
                    ))}
                </div>

                {/* Writing desk glow */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-radial from-amber-400/10 via-orange-500/5 to-transparent rounded-full blur-2xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-6xl font-bold text-amber-100 mb-6">
                        The Scrivener&apos;s Desk
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        In this candlelit sanctum of correspondence, let us begin a dialogue.
                        Share your visions, inquiries, or proposals for collaboration.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact form */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={itemVariants}>
                            <ParchmentCard
                                title="Send a Missive"
                                subtitle="Illuminated by candlelight, sealed with intention"
                                variant="illuminated"
                                className="mb-8"
                            >
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-amber-800 mb-2">
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 bg-amber-50 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-slate-800 placeholder-amber-600"
                                                placeholder="Enter your name"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-amber-800 mb-2">
                                                Your Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 bg-amber-50 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-slate-800 placeholder-amber-600"
                                                placeholder="your@email.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-amber-800 mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-amber-50 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-slate-800 placeholder-amber-600"
                                            placeholder="What brings you to my study?"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-amber-800 mb-2">
                                            Your Message
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows={6}
                                            className="w-full px-4 py-3 bg-amber-50 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-slate-800 placeholder-amber-600 resize-none"
                                            placeholder="Share your thoughts, ideas, or proposals..."
                                            required
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        className="w-full py-4 bg-gradient-to-r from-amber-600 to-orange-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span>📜</span>
                                        <span>Send Your Correspondence</span>
                                    </motion.button>
                                </form>
                            </ParchmentCard>
                        </motion.div>
                    </motion.div>

                    {/* Contact information and ambiance */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {/* Study ambiance */}
                        <motion.div variants={itemVariants} className="mb-8">
                            <ParchmentCard
                                title="The Study"
                                subtitle="A place of contemplation and creation"
                                variant="weathered"
                            >
                                <div className="space-y-4 text-slate-800">
                                    <p>
                                        Nestled in the digital archives, my study is always open to fellow travelers
                                        of the code and canvas. Here, amid the glow of screens and the rustle of ideas,
                                        we can discuss your visions and craft something extraordinary.
                                    </p>

                                    <div className="grid grid-cols-2 gap-4 mt-6">
                                        <div className="text-center p-4 bg-amber-100/50 rounded-lg">
                                            <div className="text-2xl mb-2">🕯️</div>
                                            <div className="text-sm font-semibold text-amber-900">Available for Projects</div>
                                        </div>
                                        <div className="text-center p-4 bg-amber-100/50 rounded-lg">
                                            <div className="text-2xl mb-2">📚</div>
                                            <div className="text-sm font-semibold text-amber-900">Open to Collaboration</div>
                                        </div>
                                    </div>
                                </div>
                            </ParchmentCard>
                        </motion.div>

                        {/* Contact methods */}
                        <motion.div variants={itemVariants}>
                            <ParchmentCard
                                title="Other Channels"
                                subtitle="Alternative paths of communication"
                                variant="default"
                            >
                                <div className="space-y-4">
                                    {[
                                        {
                                            icon: "📧",
                                            label: "Email",
                                            value: "alexandria@digitalcodex.dev",
                                            href: "mailto:alexandria@digitalcodex.dev"
                                        },
                                        {
                                            icon: "💼",
                                            label: "LinkedIn",
                                            value: "Alexandria Rivers",
                                            href: "https://linkedin.com/in/alexandriarivers"
                                        },
                                        {
                                            icon: "🐙",
                                            label: "GitHub",
                                            value: "github.com/alexandriarivers",
                                            href: "https://github.com/alexandriarivers"
                                        },
                                        {
                                            icon: "🐦",
                                            label: "Twitter",
                                            value: "@alexandria_dev",
                                            href: "https://twitter.com/alexandria_dev"
                                        }
                                    ].map((method, index) => (
                                        <motion.a
                                            key={index}
                                            href={method.href}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1, duration: 0.6 }}
                                            viewport={{ once: true }}
                                            className="flex items-center space-x-4 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-600/30 transition-all group"
                                        >
                                            <span className="text-2xl">{method.icon}</span>
                                            <div>
                                                <div className="font-medium text-amber-800 group-hover:text-amber-700">
                                                    {method.label}
                                                </div>
                                                <div className="text-sm text-slate-600 group-hover:text-slate-500">
                                                    {method.value}
                                                </div>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </ParchmentCard>
                        </motion.div>

                        {/* Decorative candles */}
                        <motion.div
                            variants={itemVariants}
                            className="flex justify-center space-x-8 mt-8"
                        >
                            <div className="text-center">
                                <CandleFlame size="sm" intensity="low" className="mb-2" />
                                <div className="text-xs text-slate-400">Inspiration</div>
                            </div>
                            <div className="text-center">
                                <CandleFlame size="md" intensity="medium" className="mb-2" />
                                <div className="text-xs text-slate-400">Focus</div>
                            </div>
                            <div className="text-center">
                                <CandleFlame size="sm" intensity="low" className="mb-2" />
                                <div className="text-xs text-slate-400">Creativity</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Closing message */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="inline-flex items-center space-x-4 px-8 py-4 bg-amber-400/10 border border-amber-400/30 rounded-full">
                        <span className="text-amber-200 text-lg">🪶</span>
                        <span className="text-amber-100 font-medium">
                            &quot;The best way to predict the future is to create it.&quot; - Peter Drucker
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

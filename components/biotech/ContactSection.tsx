"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { LiquidMorphingBackground } from "./LiquidMorphingBackground";

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    const contactInfo = [
        {
            icon: "📧",
            label: "Email",
            value: "hello@biotech.dev",
            gradient: "from-cyan-500 to-blue-500",
        },
        {
            icon: "📱",
            label: "Phone",
            value: "+1 (555) 123-4567",
            gradient: "from-green-500 to-emerald-500",
        },
        {
            icon: "📍",
            label: "Location",
            value: "San Francisco, CA",
            gradient: "from-purple-500 to-pink-500",
        },
        {
            icon: "💼",
            label: "LinkedIn",
            value: "linkedin.com/in/biotech-dev",
            gradient: "from-orange-500 to-red-500",
        },
    ];

    return (
        <section className="relative py-20 bg-slate-900 overflow-hidden">
            <LiquidMorphingBackground />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                        Let&apos;s Collaborate
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Ready to bring your biotechnology project to life? Let&apos;s discuss how we can work together to create something extraordinary.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                            {/* Form header */}
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Send Message</h3>
                                <p className="text-slate-400">Fill out the form below and I&apos;ll get back to you within 24 hours.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name field */}
                                <div className="relative group">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-green-500 rounded-lg blur opacity-0 group-focus-within:opacity-20 transition-opacity" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Your Name"
                                        required
                                        className="relative w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                                    />
                                </div>

                                {/* Email field */}
                                <div className="relative group">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-green-500 rounded-lg blur opacity-0 group-focus-within:opacity-20 transition-opacity" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="your.email@example.com"
                                        required
                                        className="relative w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                                    />
                                </div>

                                {/* Subject field */}
                                <div className="relative group">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-green-500 rounded-lg blur opacity-0 group-focus-within:opacity-20 transition-opacity" />
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        placeholder="Project Subject"
                                        required
                                        className="relative w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                                    />
                                </div>

                                {/* Message field */}
                                <div className="relative group">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-green-500 rounded-lg blur opacity-0 group-focus-within:opacity-20 transition-opacity" />
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Tell me about your project..."
                                        rows={5}
                                        required
                                        className="relative w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
                                    />
                                </div>

                                {/* Submit button */}
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-green-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] animate-pulse" />
                                    {isSubmitting ? (
                                        <div className="flex items-center justify-center gap-2">
                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Sending Message...
                                        </div>
                                    ) : (
                                        "Send Message"
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                            <p className="text-slate-300 leading-relaxed mb-8">
                                I&apos;m always interested in discussing new opportunities and exciting projects in biotechnology and software development.
                            </p>
                        </div>

                        {/* Contact info cards */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={info.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02 }}
                                    className="relative group"
                                >
                                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${info.gradient} rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity`} />
                                    <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4 flex items-center gap-4">
                                        <div className="text-2xl">{info.icon}</div>
                                        <div>
                                            <p className="text-slate-400 text-sm font-medium">{info.label}</p>
                                            <p className={`text-lg font-semibold bg-gradient-to-r ${info.gradient} bg-clip-text text-transparent`}>
                                                {info.value}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Availability status */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg blur opacity-20" />
                            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                                    <h4 className="text-lg font-semibold text-green-400">Available for Projects</h4>
                                </div>
                                <p className="text-slate-300 text-sm">
                                    Currently accepting new projects for Q1 2025. Specialized in biotechnology applications, full-stack development, and data visualization.
                                </p>
                            </div>
                        </motion.div>

                        {/* Social links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="flex gap-4"
                        >
                            {[
                                { name: "GitHub", icon: "🔗", color: "hover:text-slate-300" },
                                { name: "LinkedIn", icon: "💼", color: "hover:text-blue-400" },
                                { name: "Twitter", icon: "🐦", color: "hover:text-cyan-400" },
                                { name: "ResearchGate", icon: "🔬", color: "hover:text-green-400" },
                            ].map((social, index) => (
                                <motion.button
                                    key={social.name}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`w-12 h-12 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center text-xl ${social.color} transition-all`}
                                >
                                    {social.icon}
                                </motion.button>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-green-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
            </div>
        </section>
    );
}

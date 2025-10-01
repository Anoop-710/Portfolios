"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export function ContactSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
    };

    return (
        <section id="contact" className="py-20 relative">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    ref={ref}
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Mystic Portal
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        Open a gateway to the cosmos and send your message through the ethereal void.
                        Let's connect across the digital universe.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
                            {/* Portal Background Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20 rounded-2xl" />
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-xl" />

                            {/* Glowing Runes Border */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-purple-400/30">
                                {Array.from({ length: 16 }, (_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-2 h-2 bg-purple-400 rounded-full"
                                        style={{
                                            top: `${Math.sin((i * Math.PI) / 8) * 50 + 50}%`,
                                            left: `${Math.cos((i * Math.PI) / 8) * 50 + 50}%`,
                                        }}
                                        animate={{
                                            scale: [1, 1.5, 1],
                                            opacity: [0.3, 1, 0.3],
                                        }}
                                        transition={{
                                            duration: 2,
                                            delay: i * 0.1,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    />
                                ))}
                            </div>

                            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                        Name
                                    </label>
                                    <motion.input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                        placeholder="Enter your name"
                                        whileFocus={{ scale: 1.02, borderColor: "rgb(168, 85, 247)" }}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                        Email
                                    </label>
                                    <motion.input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                        placeholder="Enter your email"
                                        whileFocus={{ scale: 1.02, borderColor: "rgb(168, 85, 247)" }}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                        Message
                                    </label>
                                    <motion.textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={5}
                                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                                        placeholder="Send your message through the cosmic void..."
                                        whileFocus={{ scale: 1.02, borderColor: "rgb(168, 85, 247)" }}
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 relative overflow-hidden"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {/* Button Glow Effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0"
                                        whileHover={{ opacity: 0.3 }}
                                        transition={{ duration: 0.3 }}
                                    />

                                    {/* Portal Animation */}
                                    <motion.div
                                        className="absolute inset-0 border-2 border-purple-300 rounded-lg"
                                        animate={{
                                            scale: [1, 1.1, 1],
                                            opacity: [0.5, 0, 0.5],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    />

                                    <span className="relative z-10">Send Through the Portal</span>
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/20">
                            {/* Portal Background Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-purple-900/20 to-blue-900/20 rounded-2xl" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-radial from-pink-500/10 to-transparent rounded-full blur-xl" />

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-6">Cosmic Contact</h3>

                                <div className="space-y-6">
                                    {/* Email */}
                                    <motion.div
                                        className="flex items-center space-x-4"
                                        whileHover={{ x: 10 }}
                                    >
                                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                                            <span className="text-white text-xl">✉</span>
                                        </div>
                                        <div>
                                            <p className="text-slate-300 text-sm">Email</p>
                                            <p className="text-white font-medium">cosmic.dev@universe.com</p>
                                        </div>
                                    </motion.div>

                                    {/* Location */}
                                    <motion.div
                                        className="flex items-center space-x-4"
                                        whileHover={{ x: 10 }}
                                    >
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                            <span className="text-white text-xl">🌌</span>
                                        </div>
                                        <div>
                                            <p className="text-slate-300 text-sm">Location</p>
                                            <p className="text-white font-medium">Digital Cosmos</p>
                                        </div>
                                    </motion.div>

                                    {/* Social */}
                                    <motion.div
                                        className="flex items-center space-x-4"
                                        whileHover={{ x: 10 }}
                                    >
                                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                                            <span className="text-white text-xl">🚀</span>
                                        </div>
                                        <div>
                                            <p className="text-slate-300 text-sm">Social Links</p>
                                            <div className="flex space-x-3 mt-1">
                                                <motion.a
                                                    href="#"
                                                    className="text-slate-400 hover:text-white transition-colors"
                                                    whileHover={{ scale: 1.2, y: -2 }}
                                                >
                                                    GitHub
                                                </motion.a>
                                                <motion.a
                                                    href="#"
                                                    className="text-slate-400 hover:text-white transition-colors"
                                                    whileHover={{ scale: 1.2, y: -2 }}
                                                >
                                                    LinkedIn
                                                </motion.a>
                                                <motion.a
                                                    href="#"
                                                    className="text-slate-400 hover:text-white transition-colors"
                                                    whileHover={{ scale: 1.2, y: -2 }}
                                                >
                                                    Twitter
                                                </motion.a>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Availability Status */}
                                <motion.div
                                    className="mt-8 p-4 bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-lg border border-green-500/20"
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : {}}
                                    transition={{ delay: 1 }}
                                >
                                    <div className="flex items-center space-x-3">
                                        <motion.div
                                            className="w-3 h-3 bg-green-400 rounded-full"
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                        <div>
                                            <p className="text-green-400 font-medium">Available for Projects</p>
                                            <p className="text-slate-300 text-sm">Currently accepting new cosmic adventures</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Runes */}
                <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 6 }, (_, i) => {
                        const randomValues = {
                            left: 20 + i * 15,
                            top: 10 + (i % 2) * 20,
                            duration: 4 + i * 2,
                            delay: i * 0.5,
                        };

                        return (
                            <motion.div
                                key={i}
                                className="absolute text-purple-400/30 text-2xl"
                                style={{
                                    left: `${randomValues.left}%`,
                                    top: `${randomValues.top}%`,
                                }}
                                animate={{
                                    y: [0, -20, 0],
                                    rotate: [0, 360],
                                    opacity: [0.3, 0.8, 0.3],
                                }}
                                transition={{
                                    duration: randomValues.duration,
                                    delay: randomValues.delay,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                {["✦", "✧", "✩", "✪", "✫", "✬"][i]}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { PixelCoin } from "./PixelCoin";

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [cursorPosition, setCursorPosition] = useState(0);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Update cursor position for terminal effect
        if (name === "message") {
            setCursorPosition(value.length);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setFormData({ name: "", email: "", message: "" });
        setCursorPosition(0);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                bounce: 0.4,
                duration: 0.8,
            },
        },
    };

    return (
        <section
            id="contact"
            className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `
              linear-gradient(90deg, #00ffff 1px, transparent 1px),
              linear-gradient(0deg, #ff00ff 1px, transparent 1px)
            `,
                        backgroundSize: "20px 20px",
                    }}
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-magenta-400 to-yellow-400 bg-clip-text text-transparent">
                        CONTACT TERMINAL
                    </h2>
                    <p className="text-xl text-gray-300 font-mono tracking-wide max-w-3xl mx-auto">
                        Send a message through the digital realm - let&apos;s connect and build something amazing together
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={itemVariants} className="relative">
                            {/* Terminal Window */}
                            <div className="relative bg-gray-900/90 border-2 border-gray-600 rounded-lg backdrop-blur-sm overflow-hidden">
                                {/* Terminal Header */}
                                <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-600">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    </div>
                                    <div className="text-gray-400 text-sm font-mono">
                                        contact@retro-dev.terminal
                                    </div>
                                </div>

                                {/* Terminal Content */}
                                <form onSubmit={handleSubmit} className="p-6">
                                    <div className="space-y-6">
                                        {/* Name Input */}
                                        <div>
                                            <label className="block text-cyan-400 text-sm font-mono mb-2">
                                                $ USERNAME:
                                            </label>
                                            <motion.input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 bg-black border border-gray-600 rounded text-green-400 font-mono focus:border-cyan-400 focus:outline-none"
                                                placeholder="Enter your name..."
                                                whileFocus={{ scale: 1.02 }}
                                                required
                                            />
                                        </div>

                                        {/* Email Input */}
                                        <div>
                                            <label className="block text-cyan-400 text-sm font-mono mb-2">
                                                $ EMAIL_ADDRESS:
                                            </label>
                                            <motion.input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 bg-black border border-gray-600 rounded text-green-400 font-mono focus:border-cyan-400 focus:outline-none"
                                                placeholder="your.email@example.com"
                                                whileFocus={{ scale: 1.02 }}
                                                required
                                            />
                                        </div>

                                        {/* Message Input */}
                                        <div>
                                            <label className="block text-cyan-400 text-sm font-mono mb-2">
                                                $ MESSAGE:
                                            </label>
                                            <div className="relative">
                                                <motion.textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    rows={6}
                                                    className="w-full px-3 py-2 bg-black border border-gray-600 rounded text-green-400 font-mono focus:border-cyan-400 focus:outline-none resize-none"
                                                    placeholder="Type your message here..."
                                                    whileFocus={{ scale: 1.02 }}
                                                    required
                                                />
                                                {/* Blinking Cursor */}
                                                <motion.span
                                                    className="absolute text-cyan-400 font-mono text-lg"
                                                    style={{
                                                        left: `${cursorPosition * 0.6 + 12}px`,
                                                        top: `${Math.floor(cursorPosition / 40) * 20 + 8}px`,
                                                    }}
                                                    animate={{ opacity: [1, 0, 1] }}
                                                    transition={{ duration: 0.8, repeat: Infinity }}
                                                >
                                                    _
                                                </motion.span>
                                            </div>
                                        </div>

                                        {/* Submit Button */}
                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-3 bg-gradient-to-r from-green-400 to-green-600 text-black font-bold font-mono tracking-wider hover:shadow-lg disabled:opacity-50"
                                            whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                                            whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center justify-center">
                                                    <motion.span
                                                        className="w-4 h-4 border-2 border-black border-t-transparent rounded-full mr-2"
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                    />
                                                    SENDING...
                                                </span>
                                            ) : (
                                                "SEND MESSAGE"
                                            )}
                                        </motion.button>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Quick Connect */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-bold text-yellow-400 mb-6 font-mono tracking-wider">
                                QUICK CONNECT
                            </h3>
                            <div className="space-y-4">
                                {[
                                    { icon: "📧", label: "EMAIL", value: "hello@retro-dev.com", color: "from-cyan-400 to-cyan-600" },
                                    { icon: "💼", label: "LINKEDIN", value: "/in/retro-developer", color: "from-blue-400 to-blue-600" },
                                    { icon: "🐙", label: "GITHUB", value: "/retro-dev", color: "from-gray-400 to-gray-600" },
                                    { icon: "🐦", label: "TWITTER", value: "@retro_dev", color: "from-sky-400 to-sky-600" },
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className={`flex items-center space-x-4 p-4 bg-gray-900/50 border border-gray-700 rounded-lg cursor-pointer hover:border-gray-500 transition-colors`}
                                        whileHover={{ scale: 1.02, x: 8 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span className="text-2xl">{item.icon}</span>
                                        <div>
                                            <div className={`text-sm font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                                                {item.label}
                                            </div>
                                            <div className="text-gray-300 text-sm font-mono">
                                                {item.value}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Availability Status */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-bold text-magenta-400 mb-6 font-mono tracking-wider">
                                STATUS
                            </h3>
                            <div className="relative p-6 bg-gray-900/50 border-2 border-gray-600 rounded-lg">
                                <div className="flex items-center space-x-3 mb-4">
                                    <motion.div
                                        className="w-3 h-3 bg-green-400 rounded-full"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                    <span className="text-green-400 font-mono font-bold">
                                        ONLINE - Available for new projects
                                    </span>
                                </div>
                                <div className="space-y-2 text-sm text-gray-300">
                                    <div className="flex justify-between">
                                        <span>Response Time:</span>
                                        <span className="text-cyan-400">24 hours</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Timezone:</span>
                                        <span className="text-cyan-400">UTC+5:30</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Languages:</span>
                                        <span className="text-cyan-400">English, Hindi</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Fun Facts */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-bold text-cyan-400 mb-6 font-mono tracking-wider">
                                FUN FACTS
                            </h3>
                            <div className="space-y-3">
                                {[
                                    "🎮 Built my first website while playing Super Mario",
                                    "⚡ Can debug code faster than Pac-Man eats dots",
                                    "🚀 Once deployed an app during a rocket launch",
                                    "💻 Code reviews are my secret power-up",
                                ].map((fact, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start space-x-3 p-3 bg-gray-900/30 border border-gray-700 rounded"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <span className="text-yellow-400 mt-1">▸</span>
                                        <span className="text-gray-300 text-sm">{fact}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

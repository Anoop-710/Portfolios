"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
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
            value: "john@example.com",
            href: "mailto:john@example.com",
        },
        {
            icon: "📱",
            label: "Phone",
            value: "+1 (555) 123-4567",
            href: "tel:+15551234567",
        },
        {
            icon: "💼",
            label: "LinkedIn",
            value: "linkedin.com/in/johndoe",
            href: "https://linkedin.com/in/johndoe",
        },
        {
            icon: "🐙",
            label: "GitHub",
            value: "github.com/johndoe",
            href: "https://github.com/johndoe",
        },
    ];

    return (
        <section id="contact" className="relative py-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-4xl md:text-6xl font-bold mb-6"
                        animate={{
                            textShadow: [
                                "0 0 20px #ff00ff, 0 0 40px #ff00ff",
                                "0 0 20px #00ffff, 0 0 40px #00ffff",
                                "0 0 20px #ff00ff, 0 0 40px #ff00ff",
                            ],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        style={{
                            background: "linear-gradient(45deg, #ff00ff, #00ffff, #ff8000)",
                            backgroundSize: "400% 400%",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Get In Touch
                    </motion.h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Ready to start your next project? Let&apos;s create something amazing together.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative bg-black/40 backdrop-blur-md border border-pink-500/30 rounded-2xl p-8">
                            {/* Terminal Header */}
                            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-600/30">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                                <span className="text-gray-400 text-sm font-mono">contact@neon:~$</span>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Field */}
                                <div className="relative">
                                    <motion.label
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                        animate={{
                                            color: focusedField === "name" ? "#00ffff" : "#d1d5db",
                                        }}
                                    >
                                        Name
                                    </motion.label>
                                    <div className="relative">
                                        <motion.input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField("name")}
                                            onBlur={() => setFocusedField(null)}
                                            className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                                            placeholder="Enter your name..."
                                            whileFocus={{
                                                borderColor: "#00ffff",
                                                boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
                                            }}
                                        />
                                        <motion.div
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                            animate={{
                                                color: focusedField === "name" ? "#00ffff" : "#9ca3af",
                                            }}
                                        >
                                            ⌨️
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Email Field */}
                                <div className="relative">
                                    <motion.label
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                        animate={{
                                            color: focusedField === "email" ? "#00ffff" : "#d1d5db",
                                        }}
                                    >
                                        Email
                                    </motion.label>
                                    <div className="relative">
                                        <motion.input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField("email")}
                                            onBlur={() => setFocusedField(null)}
                                            className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                                            placeholder="your.email@example.com"
                                            whileFocus={{
                                                borderColor: "#00ffff",
                                                boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
                                            }}
                                        />
                                        <motion.div
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                            animate={{
                                                color: focusedField === "email" ? "#00ffff" : "#9ca3af",
                                            }}
                                        >
                                            @
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Subject Field */}
                                <div className="relative">
                                    <motion.label
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                        animate={{
                                            color: focusedField === "subject" ? "#00ffff" : "#d1d5db",
                                        }}
                                    >
                                        Subject
                                    </motion.label>
                                    <div className="relative">
                                        <motion.input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField("subject")}
                                            onBlur={() => setFocusedField(null)}
                                            className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                                            placeholder="What's this about?"
                                            whileFocus={{
                                                borderColor: "#00ffff",
                                                boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
                                            }}
                                        />
                                        <motion.div
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                            animate={{
                                                color: focusedField === "subject" ? "#00ffff" : "#9ca3af",
                                            }}
                                        >
                                            📋
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Message Field */}
                                <div className="relative">
                                    <motion.label
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                        animate={{
                                            color: focusedField === "message" ? "#00ffff" : "#d1d5db",
                                        }}
                                    >
                                        Message
                                    </motion.label>
                                    <div className="relative">
                                        <motion.textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField("message")}
                                            onBlur={() => setFocusedField(null)}
                                            rows={5}
                                            className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300 resize-none"
                                            placeholder="Tell me about your project..."
                                            whileFocus={{
                                                borderColor: "#00ffff",
                                                boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
                                            }}
                                        />
                                        <motion.div
                                            className="absolute right-3 top-4 text-gray-400"
                                            animate={{
                                                color: focusedField === "message" ? "#00ffff" : "#9ca3af",
                                            }}
                                        >
                                            📝
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 text-white font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                                    whileHover={!isSubmitting ? {
                                        scale: 1.02,
                                        boxShadow: "0 0 30px rgba(255, 0, 255, 0.6)",
                                    } : {}}
                                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                >
                                    {/* Button Animation */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-pink-600 to-purple-600 opacity-0"
                                        animate={{
                                            opacity: [0, 1, 0],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    />

                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        {isSubmitting ? (
                                            <>
                                                <motion.div
                                                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <motion.span
                                                    animate={{ x: [0, 5, 0] }}
                                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                                >
                                                    🚀
                                                </motion.span>
                                            </>
                                        )}
                                    </span>
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">Let&apos;s Connect</h3>
                            <p className="text-gray-300 leading-relaxed">
                                I&apos;m always interested in new opportunities and exciting projects.
                                Whether you have a question or just want to say hi, feel free to reach out!
                            </p>
                        </div>

                        {/* Contact Cards */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={info.label}
                                    className="relative p-4 bg-black/40 backdrop-blur-md border border-gray-600/30 rounded-xl cursor-pointer group"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{
                                        scale: 1.02,
                                        borderColor: "rgba(0, 255, 255, 0.5)",
                                    }}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="text-2xl">{info.icon}</div>
                                        <div className="flex-1">
                                            <div className="text-sm text-gray-400">{info.label}</div>
                                            <motion.a
                                                href={info.href}
                                                className="text-white hover:text-cyan-400 transition-colors duration-300"
                                                whileHover={{ x: 5 }}
                                            >
                                                {info.value}
                                            </motion.a>
                                        </div>
                                    </div>

                                    {/* Scan Line Effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
                                        animate={{
                                            x: ["-100%", "100%"],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            repeatDelay: 2,
                                            ease: "easeInOut",
                                        }}
                                    />
                                </motion.div>
                            ))}
                        </div>

                        {/* Availability Status */}
                        <motion.div
                            className="p-6 bg-gradient-to-r from-green-600/20 to-cyan-600/20 border border-green-500/30 rounded-xl"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <motion.div
                                    className="w-3 h-3 bg-green-400 rounded-full"
                                    animate={{
                                        opacity: [1, 0.5, 1],
                                        scale: [1, 1.2, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />
                                <span className="text-green-400 font-semibold">Available for Projects</span>
                            </div>
                            <p className="text-gray-300 text-sm">
                                Currently accepting new projects and collaborations. Let&apos;s discuss your ideas!
                            </p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <motion.div
                            key={`contact-bg-${i}`}
                            className="absolute w-1 h-1 bg-purple-400 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                boxShadow: "0 0 10px #ff00ff",
                            }}
                            animate={{
                                opacity: [0, 1, 0],
                                scale: [0, 1.2, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: Math.random() * 3,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

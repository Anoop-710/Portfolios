"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export function ContactSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
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
        console.log("Telegram sent:", formData);
    };

    return (
        <section id="contact" className="py-20 px-6 relative">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    ref={ref}
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-amber-100 mb-6">
                        Send a Telegram
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8" />
                    <p className="text-xl text-amber-100/80 max-w-3xl mx-auto leading-relaxed">
                        Ready to collaborate on your next mechanical masterpiece? Send a telegram and let&apos;s discuss
                        how we can bring your vision to life with precision engineering and innovative solutions.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative bg-gradient-to-br from-amber-800/90 to-orange-900/90 backdrop-blur-sm p-8 rounded-2xl border-2 border-amber-600 shadow-2xl">
                            {/* Decorative Rivets */}
                            <div className="absolute -top-2 -left-2 w-3 h-3 bg-amber-400 rounded-full shadow-lg" />
                            <div className="absolute -top-2 -right-2 w-3 h-3 bg-amber-400 rounded-full shadow-lg" />
                            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-amber-400 rounded-full shadow-lg" />
                            <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-amber-400 rounded-full shadow-lg" />

                            {/* Form Header */}
                            <div className="text-center mb-8">
                                <motion.div
                                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full mb-4"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                >
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                </motion.div>
                                <h3 className="text-2xl font-bold text-amber-100 mb-2">Dispatch Your Message</h3>
                                <p className="text-amber-200/80">All communications are encrypted and delivered via steam-powered networks</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Field */}
                                <div className="relative">
                                    <label className="block text-sm font-semibold text-amber-300 mb-2">
                                        Sender&apos;s Name
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-amber-900/50 border border-amber-600/50 rounded-lg text-amber-100 placeholder-amber-300/50 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300"
                                            placeholder="Enter your designation..."
                                            required
                                        />
                                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                            <motion.div
                                                animate={{ rotate: [0, 5, -5, 0] }}
                                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                            >
                                                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                                </svg>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>

                                {/* Email Field */}
                                <div className="relative">
                                    <label className="block text-sm font-semibold text-amber-300 mb-2">
                                        Communication Channel
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-amber-900/50 border border-amber-600/50 rounded-lg text-amber-100 placeholder-amber-300/50 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300"
                                            placeholder="your.signal@domain.com"
                                            required
                                        />
                                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                            <motion.div
                                                animate={{ scale: [1, 1.1, 1] }}
                                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                            >
                                                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                                </svg>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>

                                {/* Subject Field */}
                                <div className="relative">
                                    <label className="block text-sm font-semibold text-amber-300 mb-2">
                                        Transmission Subject
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-amber-900/50 border border-amber-600/50 rounded-lg text-amber-100 placeholder-amber-300/50 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300"
                                            placeholder="Urgent: Collaboration Request"
                                            required
                                        />
                                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                            <motion.div
                                                animate={{ rotate: [0, -5, 5, 0] }}
                                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                            >
                                                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                                                </svg>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>

                                {/* Message Field */}
                                <div className="relative">
                                    <label className="block text-sm font-semibold text-amber-300 mb-2">
                                        Message Content
                                    </label>
                                    <div className="relative">
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows={5}
                                            className="w-full px-4 py-3 bg-amber-900/50 border border-amber-600/50 rounded-lg text-amber-100 placeholder-amber-300/50 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 resize-none"
                                            placeholder="Describe your project requirements, timeline, and how we might collaborate..."
                                            required
                                        />
                                        <div className="absolute right-3 top-3">
                                            <motion.div
                                                animate={{ scale: [1, 1.1, 1] }}
                                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                            >
                                                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                                                </svg>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    className="w-full group relative"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold text-lg py-4 px-6 rounded-xl border-2 border-amber-500 shadow-lg group-hover:shadow-xl transition-all duration-300">
                                        <span className="flex items-center justify-center">
                                            <motion.span
                                                className="mr-3"
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                </svg>
                                            </motion.span>
                                            Dispatch Telegram
                                            <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                            </svg>
                                        </span>
                                    </div>
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {/* Contact Methods */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-amber-100 mb-6">Communication Channels</h3>

                            {[
                                {
                                    icon: "📧",
                                    title: "Primary Channel",
                                    value: "cogsworth@steamworks.dev",
                                    description: "Direct communication line for project inquiries"
                                },
                                {
                                    icon: "📱",
                                    title: "Emergency Signal",
                                    value: "+44 (0) 20 7946 0958",
                                    description: "For urgent mechanical emergencies only"
                                },
                                {
                                    icon: "🏭",
                                    title: "Workshop Location",
                                    value: "SteamWorks Factory, Industrial District",
                                    description: "Visit for in-person consultations and demonstrations"
                                },
                                {
                                    icon: "⏰",
                                    title: "Response Time",
                                    value: "Within 24 hours",
                                    description: "All telegrams acknowledged during business hours"
                                }
                            ].map((contact, index) => (
                                <motion.div
                                    key={contact.title}
                                    className="relative bg-gradient-to-r from-amber-800/60 to-orange-900/60 backdrop-blur-sm p-6 rounded-xl border border-amber-600/30"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                                    whileHover={{ scale: 1.02, y: -2 }}
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="text-2xl">{contact.icon}</div>
                                        <div className="flex-1">
                                            <h4 className="text-lg font-semibold text-amber-100 mb-1">
                                                {contact.title}
                                            </h4>
                                            <p className="text-amber-200 font-medium mb-1">
                                                {contact.value}
                                            </p>
                                            <p className="text-sm text-amber-300/80">
                                                {contact.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Decorative Gear */}
                                    <motion.div
                                        className="absolute -top-2 -right-2 w-6 h-6"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                    >
                                        <svg viewBox="0 0 24 24" className="w-full h-full text-amber-500/60">
                                            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                                            <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="1" />
                                            {Array.from({ length: 6 }, (_, i) => (
                                                <line
                                                    key={i}
                                                    x1="12"
                                                    y1="2"
                                                    x2="12"
                                                    y2="6"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    transform={`rotate(${i * 60} 12 12)`}
                                                />
                                            ))}
                                        </svg>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Status Indicator */}
                        <motion.div
                            className="relative bg-gradient-to-r from-green-800/60 to-emerald-900/60 backdrop-blur-sm p-6 rounded-xl border border-green-600/30"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 1, duration: 0.6 }}
                        >
                            <div className="flex items-center space-x-4">
                                <motion.div
                                    className="w-4 h-4 bg-green-400 rounded-full shadow-lg"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        boxShadow: [
                                            "0 0 0 0 rgba(74, 222, 128, 0.7)",
                                            "0 0 0 10px rgba(74, 222, 128, 0)",
                                            "0 0 0 0 rgba(74, 222, 128, 0)"
                                        ]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                                <div>
                                    <h4 className="text-lg font-semibold text-green-100">
                                        Systems Operational
                                    </h4>
                                    <p className="text-green-200/80 text-sm">
                                        All communication channels are active and monitored
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

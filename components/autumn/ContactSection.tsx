"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
    };

    return (
        <section id="contact" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-amber-900 dark:text-amber-100 mb-6">
                        Let&apos;s Connect
                    </h2>
                    <p className="text-lg text-amber-700 dark:text-amber-300 max-w-3xl mx-auto">
                        Ready to start a new project or just want to chat? Send me a message and I&apos;ll get back to you soon!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-8 rounded-3xl border border-amber-200 dark:border-amber-800">
                            <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-6">
                                🌾 Send a Message
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Input */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-amber-800 dark:text-amber-200 mb-2">
                                        Name
                                    </label>
                                    <motion.input
                                        whileFocus={{ scale: 1.02 }}
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-amber-300 dark:border-amber-700 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-amber-900 dark:text-amber-100 placeholder-amber-500 dark:placeholder-amber-400 transition-all duration-300"
                                        placeholder="Your name"
                                    />
                                </div>

                                {/* Email Input */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-amber-800 dark:text-amber-200 mb-2">
                                        Email
                                    </label>
                                    <motion.input
                                        whileFocus={{ scale: 1.02 }}
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-amber-300 dark:border-amber-700 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-amber-900 dark:text-amber-100 placeholder-amber-500 dark:placeholder-amber-400 transition-all duration-300"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                {/* Message Input */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-amber-800 dark:text-amber-200 mb-2">
                                        Message
                                    </label>
                                    <motion.textarea
                                        whileFocus={{ scale: 1.02 }}
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-amber-300 dark:border-amber-700 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-amber-900 dark:text-amber-100 placeholder-amber-500 dark:placeholder-amber-400 transition-all duration-300 resize-none"
                                        placeholder="Tell me about your project or just say hello!"
                                    />
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    className="w-full px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span>Send Message</span>
                                    <span className="text-xl">🚀</span>
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Contact Methods */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-6">
                                🎃 Other Ways to Reach Me
                            </h3>

                            {[
                                {
                                    icon: "📧",
                                    title: "Email",
                                    value: "alex.chen@example.com",
                                    href: "mailto:alex.chen@example.com",
                                },
                                {
                                    icon: "💼",
                                    title: "LinkedIn",
                                    value: "linkedin.com/in/alexchen",
                                    href: "https://linkedin.com/in/alexchen",
                                },
                                {
                                    icon: "🐙",
                                    title: "GitHub",
                                    value: "github.com/alexchen",
                                    href: "https://github.com/alexchen",
                                },
                                {
                                    icon: "🐦",
                                    title: "Twitter",
                                    value: "@alexchen_dev",
                                    href: "https://twitter.com/alexchen_dev",
                                },
                            ].map((contact, index) => (
                                <motion.a
                                    key={contact.title}
                                    href={contact.href}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="flex items-center space-x-4 p-4 bg-amber-50 dark:bg-slate-800/50 rounded-2xl border border-amber-200 dark:border-amber-800 hover:bg-amber-100 dark:hover:bg-slate-800 transition-all duration-300 group"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="text-2xl">{contact.icon}</div>
                                    <div>
                                        <div className="font-medium text-amber-900 dark:text-amber-100">
                                            {contact.title}
                                        </div>
                                        <div className="text-sm text-amber-600 dark:text-amber-400">
                                            {contact.value}
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Availability Status */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-2xl border border-green-200 dark:border-green-800"
                        >
                            <div className="flex items-center space-x-3 mb-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="font-medium text-green-800 dark:text-green-200">
                                    Available for Projects
                                </span>
                            </div>
                            <p className="text-sm text-green-700 dark:text-green-300">
                                I&apos;m currently accepting new projects and collaborations.
                                Let&apos;s discuss how we can bring your ideas to life!
                            </p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                    className="absolute top-20 right-10 text-4xl opacity-10"
                    animate={{
                        rotate: [0, 8, -8, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    🍂
                </motion.div>

                <motion.div
                    className="absolute bottom-20 left-10 text-5xl opacity-10"
                    animate={{
                        rotate: [0, -5, 5, 0],
                        y: [0, 10, -10, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                >
                    🎃
                </motion.div>

                <motion.div
                    className="absolute top-1/2 right-5 text-3xl opacity-10"
                    animate={{
                        rotate: [0, 3, -3, 0],
                        x: [0, 5, -5, 0],
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                >
                    🌾
                </motion.div>
            </div>
        </section>
    );
}

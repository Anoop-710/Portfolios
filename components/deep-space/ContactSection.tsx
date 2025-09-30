"use client";

import { motion } from "framer-motion";
import { Mail, Send, MapPin, Phone, Sparkles } from "lucide-react";

interface ContactSectionProps {
    setActiveSection: (section: string) => void;
}

export function ContactSection({ setActiveSection }: ContactSectionProps) {
    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "alex@example.com",
            href: "mailto:alex@example.com",
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+1 (555) 123-4567",
            href: "tel:+15551234567",
        },
        {
            icon: MapPin,
            label: "Location",
            value: "San Francisco, CA",
            href: "#",
        },
    ];

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
        <section className="relative min-h-screen py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center mb-16"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
                    >
                        Get In Touch
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-xl md:text-2xl text-gray-300 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        Ready to start your next project? Let&apos;s discuss how we can bring your ideas to life.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        variants={itemVariants}
                        className="relative"
                    >
                        <div className="relative p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 dark:border-white/5 rounded-2xl">
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                                    <Sparkles className="w-6 h-6 mr-3 text-blue-400" />
                                    Send a Message
                                </h3>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 dark:text-gray-400 mb-2">
                                                First Name
                                            </label>
                                            <motion.input
                                                type="text"
                                                className="w-full px-4 py-3 bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                                                placeholder="John"
                                                whileFocus={{ scale: 1.02 }}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 dark:text-gray-400 mb-2">
                                                Last Name
                                            </label>
                                            <motion.input
                                                type="text"
                                                className="w-full px-4 py-3 bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                                                placeholder="Doe"
                                                whileFocus={{ scale: 1.02 }}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 dark:text-gray-400 mb-2">
                                            Email
                                        </label>
                                        <motion.input
                                            type="email"
                                            className="w-full px-4 py-3 bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                                            placeholder="john@example.com"
                                            whileFocus={{ scale: 1.02 }}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 dark:text-gray-400 mb-2">
                                            Subject
                                        </label>
                                        <motion.input
                                            type="text"
                                            className="w-full px-4 py-3 bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                                            placeholder="Project Discussion"
                                            whileFocus={{ scale: 1.02 }}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 dark:text-gray-400 mb-2">
                                            Message
                                        </label>
                                        <motion.textarea
                                            rows={5}
                                            className="w-full px-4 py-3 bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none"
                                            placeholder="Tell me about your project..."
                                            whileFocus={{ scale: 1.02 }}
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        className="group relative w-full px-8 py-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-600/30 hover:to-purple-600/30 border border-blue-400/30 hover:border-blue-400/50 rounded-full text-white font-medium transition-all duration-300 flex items-center justify-center space-x-3"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span className="relative z-10">Send Message</span>
                                        <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </motion.button>
                                </form>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        variants={itemVariants}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Let&apos;s Connect</h3>
                            <p className="text-gray-300 dark:text-gray-400 leading-relaxed">
                                I'm always interested in new opportunities and exciting projects.
                                Whether you have a question or just want to say hi, feel free to reach out!
                            </p>
                        </div>

                        <div className="space-y-6">
                            {contactInfo.map((info, index) => {
                                const Icon = info.icon;
                                return (
                                    <motion.a
                                        key={info.label}
                                        href={info.href}
                                        className="group flex items-center space-x-4 p-4 bg-white/5 dark:bg-black/10 hover:bg-white/10 dark:hover:bg-black/20 border border-white/10 dark:border-white/5 hover:border-white/20 dark:hover:border-white/10 rounded-xl transition-all duration-300"
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 + index * 0.1 }}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 rounded-full transition-all duration-300">
                                            <Icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400 dark:text-gray-500">{info.label}</p>
                                            <p className="text-white font-medium">{info.value}</p>
                                        </div>
                                    </motion.a>
                                );
                            })}
                        </div>

                        {/* Social Links */}
                        <motion.div
                            className="pt-8 border-t border-white/10 dark:border-white/5"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                            <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                            <div className="flex space-x-4">
                                {[
                                    { name: "GitHub", href: "https://github.com", icon: "🐙" },
                                    { name: "LinkedIn", href: "https://linkedin.com", icon: "💼" },
                                    { name: "Twitter", href: "https://twitter.com", icon: "🐦" },
                                ].map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white/10 dark:bg-black/20 hover:bg-white/20 dark:hover:bg-black/30 border border-white/20 dark:border-white/10 rounded-full text-white transition-all duration-300"
                                        whileHover={{
                                            scale: 1.1,
                                            rotate: 5,
                                            backgroundColor: "rgba(59, 130, 246, 0.2)",
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <span className="text-xl">{social.icon}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Shooting Stars Effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(3)].map((_, index) => (
                        <motion.div
                            key={index}
                            className="absolute w-1 h-1 bg-blue-400 rounded-full"
                            style={{
                                top: `${20 + index * 30}%`,
                                left: `${10 + index * 20}%`,
                            }}
                            animate={{
                                x: [0, 300, 600],
                                y: [0, -100, -200],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: 3 + index,
                                repeat: Infinity,
                                delay: index * 2,
                                ease: "easeOut",
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

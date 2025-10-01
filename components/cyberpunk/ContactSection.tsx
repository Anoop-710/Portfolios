"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, Github, Linkedin, Twitter } from "lucide-react";

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
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Reset form
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSubmitting(false);

        // Show success message (you could add a toast notification here)
        alert("Message sent successfully!");
    };

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "alex@example.com",
            href: "mailto:alex@example.com",
            color: "text-cyan-400",
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+1 (555) 123-4567",
            href: "tel:+15551234567",
            color: "text-purple-400",
        },
        {
            icon: MapPin,
            label: "Location",
            value: "San Francisco, CA",
            href: "#",
            color: "text-green-400",
        },
    ];

    const socialLinks = [
        {
            icon: Github,
            label: "GitHub",
            href: "https://github.com",
            color: "hover:text-gray-400",
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            href: "https://linkedin.com",
            color: "hover:text-blue-400",
        },
        {
            icon: Twitter,
            label: "Twitter",
            href: "https://twitter.com",
            color: "hover:text-sky-400",
        },
    ];

    return (
        <section id="contact" className="py-20 relative">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/10 rounded-full"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-20 w-24 h-24 border border-purple-400/10 rounded-full"
                    animate={{
                        scale: [1.3, 1, 1.3],
                        opacity: [0.3, 0.1, 0.3],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                />

                {/* Grid Lines */}
                <div className="absolute inset-0 opacity-5">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" className="text-cyan-400" />
                    </svg>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            Get In Touch
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                        Ready to collaborate? Let&apos;s discuss your next project and bring your ideas to life.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative">
                            {/* Form Glow Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg blur opacity-20" />

                            <form onSubmit={handleSubmit} className="relative bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-400/20">
                                <div className="space-y-6">
                                    {/* Name and Email Row */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="relative">
                                            <motion.input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-400/20 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                                                placeholder="Your Name"
                                                whileFocus={{ scale: 1.02 }}
                                            />
                                        </div>
                                        <div className="relative">
                                            <motion.input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-400/20 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                                                placeholder="your.email@example.com"
                                                whileFocus={{ scale: 1.02 }}
                                            />
                                        </div>
                                    </div>

                                    {/* Subject */}
                                    <div className="relative">
                                        <motion.input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-400/20 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                                            placeholder="Project Subject"
                                            whileFocus={{ scale: 1.02 }}
                                        />
                                    </div>

                                    {/* Message */}
                                    <div className="relative">
                                        <motion.textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-400/20 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                                            placeholder="Tell me about your project..."
                                            whileFocus={{ scale: 1.02 }}
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="group relative w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-lg overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                                        whileHover={!isSubmitting ? { scale: 1.02 } : {}}
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
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    Send Message
                                                </>
                                            )}
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </motion.button>
                                </div>
                            </form>
                        </div>
                    </motion.div>

                    {/* Contact Info & Social */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {/* Contact Information */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-cyan-400 mb-6">Contact Information</h3>

                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={info.label}
                                    href={info.href}
                                    className="group flex items-center gap-4 p-4 bg-gray-900/30 backdrop-blur-sm rounded-lg border border-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className={`p-3 rounded-full bg-gray-800/50 ${info.color}`}>
                                        <info.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-400">{info.label}</div>
                                        <div className="text-gray-200 group-hover:text-cyan-400 transition-colors">
                                            {info.value}
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-purple-400 mb-6">Follow Me</h3>

                            <div className="grid grid-cols-3 gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        className="group flex flex-col items-center gap-3 p-4 bg-gray-900/30 backdrop-blur-sm rounded-lg border border-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <div className="p-3 rounded-full bg-gray-800/50 group-hover:bg-gray-700/50 transition-colors">
                                            <social.icon className={`w-6 h-6 text-gray-400 ${social.color}`} />
                                        </div>
                                        <span className="text-sm text-gray-400 group-hover:text-cyan-400 transition-colors">
                                            {social.label}
                                        </span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Call to Action */}
                        <motion.div
                            className="relative p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-lg border border-cyan-400/20"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg blur opacity-20" />
                            <div className="relative text-center">
                                <h4 className="text-xl font-bold text-gray-200 mb-4">
                                    Ready to Start Your Next Project?
                                </h4>
                                <p className="text-gray-400 mb-6">
                                    Let&apos;s discuss how we can bring your ideas to life with cutting-edge technology and innovative design.
                                </p>
                                <motion.button
                                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Schedule a Call
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

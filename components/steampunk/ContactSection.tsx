"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
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

    const contactInfo = [
        {
            icon: Mail,
            title: "Email",
            value: "alex.chen@example.com",
            description: "Send me a message anytime",
            color: "from-blue-500 to-cyan-500",
        },
        {
            icon: Phone,
            title: "Phone",
            value: "+1 (555) 123-4567",
            description: "Available for calls",
            color: "from-green-500 to-emerald-500",
        },
        {
            icon: MapPin,
            title: "Location",
            value: "San Francisco, CA",
            description: "Based in the Bay Area",
            color: "from-purple-500 to-pink-500",
        },
        {
            icon: Clock,
            title: "Response Time",
            value: "Within 24 hours",
            description: "Quick response guaranteed",
            color: "from-orange-500 to-red-500",
        },
    ];

    return (
        <section id="contact" className="py-20 relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-10 left-10 w-14 h-14 border border-amber-600/20 dark:border-amber-400/20"
                    animate={{ rotate: 360, scale: [1, 1.15, 1] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute bottom-10 right-10 w-18 h-18 border-2 border-amber-600/15 dark:border-amber-400/15"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="inline-block px-4 py-2 bg-gradient-to-r from-amber-200 to-orange-200 dark:from-amber-800 dark:to-orange-800 text-amber-900 dark:text-amber-100 rounded-full text-sm font-medium mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Get In Touch
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-900 via-orange-800 to-amber-900 dark:from-amber-100 dark:via-orange-200 dark:to-amber-100 bg-clip-text text-transparent">
                        Ancient Correspondence
                    </h2>
                    <p className="text-lg text-amber-700 dark:text-amber-300 max-w-3xl mx-auto leading-relaxed">
                        Ready to start your next project? Send me a message through this ancient communication device,
                        and I&apos;ll respond with the speed of modern technology.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Content - Contact Info */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-6">
                                Communication Channels
                            </h3>
                            <p className="text-amber-700 dark:text-amber-300 mb-8 leading-relaxed">
                                Choose your preferred method of communication. I&apos;m always excited to discuss
                                new opportunities and interesting projects.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={info.title}
                                    className="group relative bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-700 p-6 rounded-lg border border-amber-600/30 dark:border-amber-400/30 shadow-lg"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                >
                                    {/* Decorative corners */}
                                    <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-amber-600/40 dark:border-amber-400/40 group-hover:border-amber-600 dark:group-hover:border-amber-400 transition-colors" />
                                    <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-amber-600/40 dark:border-amber-400/40 group-hover:border-amber-600 dark:group-hover:border-amber-400 transition-colors" />

                                    <div className="flex items-start gap-4">
                                        <div className={`p-3 rounded-full bg-gradient-to-br ${info.color} text-white shadow-lg`}>
                                            <info.icon size={20} />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-1">
                                                {info.title}
                                            </h4>
                                            <p className="text-amber-800 dark:text-amber-200 font-medium mb-1">
                                                {info.value}
                                            </p>
                                            <p className="text-sm text-amber-600 dark:text-amber-400">
                                                {info.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Glowing hover effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-orange-600/5 dark:from-amber-400/5 dark:to-orange-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        initial={false}
                                    />
                                </motion.div>
                            ))}
                        </div>

                        {/* Call to Action */}
                        <motion.div
                            className="p-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg shadow-lg"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            whileHover={{ scale: 1.02, y: -2 }}
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <MessageSquare className="w-5 h-5" />
                                <h4 className="font-semibold">Let&apos;s Start a Conversation</h4>
                            </div>
                            <p className="text-sm opacity-90 mb-4">
                                Whether you have a project in mind or just want to chat about technology,
                                I&apos;d love to hear from you.
                            </p>
                            <div className="text-sm opacity-75">
                                📧 Quick response guaranteed • 💼 Professional consultation available
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Contact Form */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Ledger-style Form Container */}
                        <motion.div
                            className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-slate-800 dark:via-slate-700 dark:to-slate-600 p-8 rounded-lg border-2 border-amber-600/40 dark:border-amber-400/40 shadow-xl"
                            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Decorative elements */}
                            <motion.div
                                className="absolute -top-4 -right-4 w-8 h-8 border-2 border-amber-600 dark:border-amber-400 rounded-full bg-amber-100 dark:bg-slate-800"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.div
                                className="absolute -bottom-4 -left-4 w-6 h-6 border border-amber-600 dark:border-amber-400 rounded-full bg-amber-100 dark:bg-slate-800"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Form lines (like ledger paper) */}
                            <div className="absolute inset-0 opacity-10 dark:opacity-20">
                                {Array.from({ length: 20 }, (_, i) => (
                                    <div
                                        key={i}
                                        className="absolute w-full border-t border-amber-600/30 dark:border-amber-400/30"
                                        style={{ top: `${i * 5}%` }}
                                    />
                                ))}
                            </div>

                            <div className="relative z-10">
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-2">
                                        Send a Message
                                    </h3>
                                    <div className="w-16 h-0.5 bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 mx-auto" />
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name and Email Row */}
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3, duration: 0.5 }}
                                        >
                                            <label className="block text-sm font-medium text-amber-800 dark:text-amber-200 mb-2">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 bg-amber-100/50 dark:bg-slate-700/50 border border-amber-600/30 dark:border-amber-400/30 rounded-md focus:ring-2 focus:ring-amber-600 dark:focus:ring-amber-400 focus:border-transparent text-amber-900 dark:text-amber-100 placeholder-amber-600/50 dark:placeholder-amber-400/50 transition-all duration-300"
                                                placeholder="Your name"
                                                required
                                            />
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.4, duration: 0.5 }}
                                        >
                                            <label className="block text-sm font-medium text-amber-800 dark:text-amber-200 mb-2">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 bg-amber-100/50 dark:bg-slate-700/50 border border-amber-600/30 dark:border-amber-400/30 rounded-md focus:ring-2 focus:ring-amber-600 dark:focus:ring-amber-400 focus:border-transparent text-amber-900 dark:text-amber-100 placeholder-amber-600/50 dark:placeholder-amber-400/50 transition-all duration-300"
                                                placeholder="your.email@example.com"
                                                required
                                            />
                                        </motion.div>
                                    </div>

                                    {/* Subject */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5, duration: 0.5 }}
                                    >
                                        <label className="block text-sm font-medium text-amber-800 dark:text-amber-200 mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-amber-100/50 dark:bg-slate-700/50 border border-amber-600/30 dark:border-amber-400/30 rounded-md focus:ring-2 focus:ring-amber-600 dark:focus:ring-amber-400 focus:border-transparent text-amber-900 dark:text-amber-100 placeholder-amber-600/50 dark:placeholder-amber-400/50 transition-all duration-300"
                                            placeholder="What's this about?"
                                            required
                                        />
                                    </motion.div>

                                    {/* Message */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.6, duration: 0.5 }}
                                    >
                                        <label className="block text-sm font-medium text-amber-800 dark:text-amber-200 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows={5}
                                            className="w-full px-4 py-3 bg-amber-100/50 dark:bg-slate-700/50 border border-amber-600/30 dark:border-amber-400/30 rounded-md focus:ring-2 focus:ring-amber-600 dark:focus:ring-amber-400 focus:border-transparent text-amber-900 dark:text-amber-100 placeholder-amber-600/50 dark:placeholder-amber-400/50 transition-all duration-300 resize-none"
                                            placeholder="Tell me about your project or just say hello..."
                                            required
                                        />
                                    </motion.div>

                                    {/* Submit Button */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.7, duration: 0.5 }}
                                        className="pt-4"
                                    >
                                        <motion.button
                                            type="submit"
                                            className="w-full py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-md font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                                            whileHover={{ scale: 1.02, y: -2 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                                            Send Message
                                        </motion.button>
                                    </motion.div>
                                </form>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

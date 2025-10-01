'use client';

import { motion } from 'framer-motion';
import { useDesertTheme } from './ThemeProvider';
import { useState } from 'react';

const ContactSection = () => {
    const theme = useDesertTheme();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    return (
        <section id="contact" className="relative py-20 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-amber-100/50" />

            {/* Decorative Background Elements */}
            <div className="absolute inset-0">
                {/* Woven Pattern Background */}
                <div className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `repeating-linear-gradient(45deg, ${theme.colors.gold}, ${theme.colors.gold} 2px, transparent 2px, transparent 8px)`,
                        backgroundSize: '12px 12px'
                    }} />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
                        Send a Message from the Dunes
                    </h2>
                    <p className="text-xl text-amber-800 max-w-2xl mx-auto mb-8">
                        Ready to embark on a new adventure together? Send me a message and let&apos;s discuss your next project.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Field */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <label htmlFor="name" className="block text-sm font-medium text-amber-800 mb-2">
                                    Your Name
                                </label>
                                <motion.input
                                    whileFocus={{ scale: 1.02, borderColor: theme.colors.amber }}
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className={`w-full px-4 py-3 ${theme.textures.woven} border-2 border-amber-200 rounded-lg focus:outline-none focus:border-amber-400 transition-all duration-300 text-amber-900 placeholder-amber-600`}
                                    placeholder="Enter your name..."
                                />
                            </motion.div>

                            {/* Email Field */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <label htmlFor="email" className="block text-sm font-medium text-amber-800 mb-2">
                                    Your Email
                                </label>
                                <motion.input
                                    whileFocus={{ scale: 1.02, borderColor: theme.colors.amber }}
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className={`w-full px-4 py-3 ${theme.textures.woven} border-2 border-amber-200 rounded-lg focus:outline-none focus:border-amber-400 transition-all duration-300 text-amber-900 placeholder-amber-600`}
                                    placeholder="Enter your email..."
                                />
                            </motion.div>

                            {/* Subject Field */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <label htmlFor="subject" className="block text-sm font-medium text-amber-800 mb-2">
                                    Subject
                                </label>
                                <motion.input
                                    whileFocus={{ scale: 1.02, borderColor: theme.colors.amber }}
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className={`w-full px-4 py-3 ${theme.textures.woven} border-2 border-amber-200 rounded-lg focus:outline-none focus:border-amber-400 transition-all duration-300 text-amber-900 placeholder-amber-600`}
                                    placeholder="What's this about?"
                                />
                            </motion.div>

                            {/* Message Field */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <label htmlFor="message" className="block text-sm font-medium text-amber-800 mb-2">
                                    Your Message
                                </label>
                                <motion.textarea
                                    whileFocus={{ scale: 1.02, borderColor: theme.colors.amber }}
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={6}
                                    className={`w-full px-4 py-3 ${theme.textures.parchment} border-2 border-amber-200 rounded-lg focus:outline-none focus:border-amber-400 transition-all duration-300 text-amber-900 placeholder-amber-600 resize-none`}
                                    placeholder="Tell me about your project or just say hello..."
                                />
                            </motion.div>

                            {/* Submit Button */}
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0px 10px 30px rgba(212, 175, 55, 0.4)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className={`w-full py-4 px-8 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${theme.textures.leather}`}
                            >
                                Send Message via Desert Wind
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Info & Decorative Elements */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Contact Information */}
                        <div className={`p-8 ${theme.textures.leather} rounded-2xl shadow-xl border border-amber-200`}>
                            <h3 className="text-2xl font-semibold text-amber-900 mb-6 flex items-center gap-3">
                                <span className="text-3xl">🕌</span>
                                Find Me Here
                            </h3>

                            <div className="space-y-4">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-4 p-3 bg-amber-50/50 rounded-lg"
                                >
                                    <span className="text-2xl">📧</span>
                                    <div>
                                        <p className="text-amber-800 font-medium">Email</p>
                                        <p className="text-amber-600 text-sm">nomad@example.com</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-4 p-3 bg-amber-50/50 rounded-lg"
                                >
                                    <span className="text-2xl">📱</span>
                                    <div>
                                        <p className="text-amber-800 font-medium">Phone</p>
                                        <p className="text-amber-600 text-sm">+1 (555) 123-4567</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.7 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-4 p-3 bg-amber-50/50 rounded-lg"
                                >
                                    <span className="text-2xl">🌍</span>
                                    <div>
                                        <p className="text-amber-800 font-medium">Location</p>
                                        <p className="text-amber-600 text-sm">Currently nomadic</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Desert Wisdom Quote */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            viewport={{ once: true }}
                            className={`p-6 ${theme.textures.parchment} rounded-xl border border-amber-200`}
                        >
                            <h4 className="text-lg font-semibold text-amber-900 mb-3 flex items-center gap-2">
                                <span className="text-2xl">🌙</span>
                                Desert Wisdom
                            </h4>
                            <blockquote className="text-amber-800 italic mb-3">
                                &quot;In the desert of code, the shortest path is rarely the most beautiful. Sometimes you must wander to find the true oasis of solution.&quot;
                            </blockquote>
                            <cite className="text-amber-600 text-sm">— The Desert Nomad</cite>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            viewport={{ once: true }}
                            className={`p-6 ${theme.textures.woven} rounded-xl border border-amber-200`}
                        >
                            <h4 className="text-lg font-semibold text-amber-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">🦅</span>
                                Follow My Journey
                            </h4>
                            <div className="grid grid-cols-2 gap-3">
                                {['GitHub', 'LinkedIn', 'Twitter', 'CodePen'].map((platform, index) => (
                                    <motion.a
                                        key={platform}
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ delay: 1.2 + index * 0.1 }}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        href="#"
                                        className="py-3 px-4 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 font-medium rounded-lg hover:from-amber-200 hover:to-orange-200 transition-all duration-300 text-center border border-amber-300"
                                    >
                                        {platform}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Floating Decorative Elements */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -15, 0],
                        rotate: [0, 360],
                        opacity: [0.3, 0.7, 0.3]
                    }}
                    transition={{
                        duration: 6 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.8,
                        ease: "easeInOut"
                    }}
                    className="absolute pointer-events-none text-4xl"
                    style={{
                        left: `${8 + i * 11}%`,
                        top: `${20 + (i % 2) * 30}%`,
                    }}
                >
                    {i % 4 === 0 ? "🕊️" : i % 4 === 1 ? "🌿" : i % 4 === 2 ? "🐪" : "🏜️"}
                </motion.div>
            ))}

            {/* Bottom Accent */}
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
                viewport={{ once: true }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"
            />
        </section>
    );
};

export default ContactSection;

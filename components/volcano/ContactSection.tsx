"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export function ContactSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
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
            {/* Ash particle background */}
            <div className="absolute inset-0 bg-gradient-volcano opacity-40" />

            {/* Floating ash particles */}
            <div className="absolute inset-0">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-volcano-ash rounded-full opacity-30"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -50, -100],
                            opacity: [0.3, 0.6, 0.3],
                            scale: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: Math.random() * 4 + 3,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: "easeOut",
                        }}
                    />
                ))}
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl md:text-5xl font-bold text-volcano-white mb-6"
                        >
                            Ignite the Conversation
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl text-volcano-ash max-w-2xl mx-auto leading-relaxed"
                        >
                            Ready to collaborate on something extraordinary? Send me a message and let&apos;s
                            turn your ideas into molten reality.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Field */}
                                <div className="relative">
                                    <motion.div
                                        className="absolute inset-0 bg-volcano-gray rounded-lg transform rotate-1 opacity-60"
                                        whileHover={{ rotate: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Your Name"
                                            className="w-full px-4 py-4 bg-volcano-dark border-2 border-volcano-red/30 rounded-lg text-volcano-white placeholder-volcano-ash focus:border-volcano-glow focus:outline-none transition-all duration-300"
                                            required
                                        />
                                        {/* Ember glow effect */}
                                        <motion.div
                                            className="absolute inset-0 border-2 border-volcano-glow rounded-lg opacity-0"
                                            animate={{
                                                opacity: [0, 0.5, 0],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Email Field */}
                                <div className="relative">
                                    <motion.div
                                        className="absolute inset-0 bg-volcano-gray rounded-lg transform rotate-1 opacity-60"
                                        whileHover={{ rotate: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <div className="relative">
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="your.email@example.com"
                                            className="w-full px-4 py-4 bg-volcano-dark border-2 border-volcano-red/30 rounded-lg text-volcano-white placeholder-volcano-ash focus:border-volcano-glow focus:outline-none transition-all duration-300"
                                            required
                                        />
                                        {/* Ember glow effect */}
                                        <motion.div
                                            className="absolute inset-0 border-2 border-volcano-glow rounded-lg opacity-0"
                                            animate={{
                                                opacity: [0, 0.5, 0],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: 0.5,
                                                ease: "easeInOut",
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Message Field */}
                                <div className="relative">
                                    <motion.div
                                        className="absolute inset-0 bg-volcano-gray rounded-lg transform rotate-1 opacity-60"
                                        whileHover={{ rotate: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <div className="relative">
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Tell me about your project..."
                                            rows={6}
                                            className="w-full px-4 py-4 bg-volcano-dark border-2 border-volcano-red/30 rounded-lg text-volcano-white placeholder-volcano-ash focus:border-volcano-glow focus:outline-none transition-all duration-300 resize-none"
                                            required
                                        />
                                        {/* Ember glow effect */}
                                        <motion.div
                                            className="absolute inset-0 border-2 border-volcano-glow rounded-lg opacity-0"
                                            animate={{
                                                opacity: [0, 0.5, 0],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: 1,
                                                ease: "easeInOut",
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.6, delay: 1 }}
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0 0 40px rgba(255, 107, 53, 0.6)",
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full py-4 bg-gradient-lava text-volcano-black font-bold text-lg rounded-lg border-2 border-volcano-bright-orange box-shadow-volcano transition-all duration-300 relative overflow-hidden"
                                >
                                    {/* Button content */}
                                    <span className="relative z-10">Send Message</span>

                                    {/* Animated lava flow effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-volcano-red via-volcano-orange to-volcano-yellow opacity-0"
                                        whileHover={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />

                                    {/* Pulsing embers */}
                                    <motion.div
                                        className="absolute top-2 right-2 w-2 h-2 bg-volcano-bright-orange rounded-full"
                                        animate={{
                                            scale: [1, 1.5, 1],
                                            opacity: [0.5, 1, 0.5],
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    />
                                </motion.button>
                            </form>
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="space-y-8"
                        >
                            <div>
                                <h3 className="text-2xl font-bold text-volcano-white mb-6">
                                    Let&apos;s Connect
                                </h3>
                                <p className="text-volcano-ash leading-relaxed">
                                    Whether you have a project in mind, need technical consultation,
                                    or just want to discuss the latest in web development, I&apos;d love to hear from you.
                                </p>
                            </div>

                            {/* Contact methods */}
                            <div className="space-y-6">
                                {[
                                    {
                                        icon: "📧",
                                        title: "Email",
                                        value: "john.doe@example.com",
                                        href: "mailto:john.doe@example.com",
                                    },
                                    {
                                        icon: "💼",
                                        title: "LinkedIn",
                                        value: "linkedin.com/in/johndoe",
                                        href: "https://linkedin.com/in/johndoe",
                                    },
                                    {
                                        icon: "🐙",
                                        title: "GitHub",
                                        value: "github.com/johndoe",
                                        href: "https://github.com/johndoe",
                                    },
                                    {
                                        icon: "📱",
                                        title: "Phone",
                                        value: "+1 (555) 123-4567",
                                        href: "tel:+15551234567",
                                    },
                                ].map((contact, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                                        className="relative group"
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-volcano-gray rounded-lg transform rotate-1 opacity-60"
                                            whileHover={{ rotate: 0 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                        <div className="relative bg-volcano-dark rounded-lg p-4 border border-volcano-red/20">
                                            <motion.a
                                                href={contact.href}
                                                className="flex items-center space-x-4 text-volcano-white hover:text-volcano-glow transition-colors duration-300"
                                                whileHover={{ x: 5 }}
                                            >
                                                <span className="text-2xl">{contact.icon}</span>
                                                <div>
                                                    <div className="font-semibold">{contact.title}</div>
                                                    <div className="text-sm text-volcano-ash">{contact.value}</div>
                                                </div>
                                            </motion.a>

                                            {/* Ember glow on hover */}
                                            <motion.div
                                                className="absolute inset-0 border-2 border-volcano-glow rounded-lg opacity-0 group-hover:opacity-100"
                                                transition={{ duration: 0.3 }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Availability status */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.6, delay: 1.6 }}
                                className="relative"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-volcano-gray rounded-lg transform rotate-1 opacity-60"
                                    whileHover={{ rotate: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <div className="relative bg-volcano-dark rounded-lg p-6 border border-volcano-orange/30 text-center">
                                    <motion.div
                                        className="w-4 h-4 bg-volcano-glow rounded-full mx-auto mb-3"
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            opacity: [0.8, 1, 0.8],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    />
                                    <h4 className="text-volcano-white font-semibold mb-2">
                                        Available for Projects
                                    </h4>
                                    <p className="text-volcano-ash text-sm">
                                        Currently accepting new projects for Q2 2025
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

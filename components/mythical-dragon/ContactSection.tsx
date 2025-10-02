"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

interface ContactSectionProps {
    className?: string;
}

export function ContactSection({ className = "" }: ContactSectionProps) {
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

    const contactMethods = [
        {
            icon: "🔥",
            title: "Dragon Fire",
            description: "Send a message through the flames",
            action: "Email",
            value: "hello@dragonrealm.dev",
        },
        {
            icon: "🏰",
            title: "Castle Gates",
            description: "Visit the ancient fortress",
            action: "Location",
            value: "Dragon Mountains, Fantasy Realm",
        },
        {
            icon: "📜",
            title: "Magic Scroll",
            description: "Connect through social realms",
            action: "LinkedIn",
            value: "linkedin.com/in/dragonrealm",
        },
    ];

    return (
        <section id="contact" className={`py-20 relative ${className}`} ref={ref}>
            {/* Background elements */}
            <div className="absolute inset-0 stone-texture opacity-5" />
            <div className="absolute top-0 left-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-red-500/5 rounded-full blur-3xl" />

            {/* Brazier/Campfire accent */}
            <div className="absolute left-1/4 top-1/4 opacity-20">
                <motion.div
                    className="w-32 h-32 bg-gradient-radial from-orange-400 via-red-500 to-transparent rounded-full"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <div className="absolute inset-4 bg-gradient-radial from-yellow-300 to-transparent rounded-full animate-pulse" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        className="text-4xl md:text-6xl font-bold mb-6"
                        initial={{ scale: 0.5 }}
                        animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="block text-amber-100">Get In</span>
                        <span className="block text-amber-100 rune-glow">
                            Touch
                        </span>
                    </motion.h2>

                    <motion.p
                        className="text-xl text-amber-100/80 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Ready to start a new{" "}
                        <span className="text-orange-400 font-semibold">project</span> together?
                        Send a{" "}
                        <span className="text-red-400 font-semibold">message</span> and let&apos;s{" "}
                        <span className="text-purple-400 font-semibold">build something amazing</span>.
                    </motion.p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="relative">
                            <div className="absolute -inset-1 dragon-gradient rounded-lg blur opacity-20" />
                            <form
                                onSubmit={handleSubmit}
                                className="relative bg-slate-900/50 backdrop-blur-sm border border-orange-500/20 rounded-lg p-8 stone-texture"
                            >
                                <h3 className="text-2xl font-bold text-amber-100 mb-6 rune-glow">
                                    Send a Message
                                </h3>

                                <div className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-amber-100 font-medium mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-slate-800/50 border border-orange-500/30 rounded-lg text-amber-100 placeholder-amber-100/50 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 ember-glow"
                                            placeholder="Your name"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-amber-100 font-medium mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-slate-800/50 border border-orange-500/30 rounded-lg text-amber-100 placeholder-amber-100/50 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 ember-glow"
                                            placeholder="your.email@example.com"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-amber-100 font-medium mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows={5}
                                            className="w-full px-4 py-3 bg-slate-800/50 border border-orange-500/30 rounded-lg text-amber-100 placeholder-amber-100/50 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 ember-glow resize-none"
                                            placeholder="Share your project idea..."
                                            required
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        className="w-full px-8 py-4 dragon-gradient rounded-lg text-amber-100 font-semibold text-lg ember-glow hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 heat-shimmer"
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Send Message
                                    </motion.button>
                                </div>
                            </form>
                        </div>
                    </motion.div>

                    {/* Contact Methods */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-amber-100 mb-6 rune-glow">
                                Other Ways to Connect
                            </h3>
                            <p className="text-amber-100/80 leading-relaxed">
                                Prefer a different method to get in touch? Choose from these{" "}
                                <span className="text-purple-400 font-semibold">contact options</span>.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {contactMethods.map((method, index) => (
                                <motion.div
                                    key={method.title}
                                    className="relative group"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="relative">
                                        <div className="absolute -inset-1 dragon-gradient rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                                        <div className="relative bg-slate-900/30 backdrop-blur-sm border border-orange-500/10 rounded-lg p-6 hover:border-orange-500/30 transition-all duration-300 ember-glow">
                                            <div className="flex items-start space-x-4">
                                                <div className="text-3xl">{method.icon}</div>
                                                <div className="flex-1">
                                                    <h4 className="text-xl font-bold text-amber-100 mb-2">
                                                        {method.title}
                                                    </h4>
                                                    <p className="text-amber-100/70 mb-3">
                                                        {method.description}
                                                    </p>
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-orange-400 font-medium">
                                                            {method.action}: {method.value}
                                                        </span>
                                                        <motion.button
                                                            className="px-4 py-2 border border-orange-400 text-orange-400 rounded-lg font-semibold text-sm hover:bg-orange-400 hover:text-slate-900 transition-all duration-300"
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                        >
                                                            Connect
                                                        </motion.button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Call to Action */}
                        <motion.div
                            className="text-center pt-8"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                        >
                            <div className="relative">
                                <div className="absolute -inset-1 dragon-gradient rounded-lg blur opacity-20" />
                                <div className="relative bg-slate-900/30 backdrop-blur-sm border border-orange-500/20 rounded-lg p-8">
                                    <h4 className="text-xl font-bold text-amber-100 mb-4 rune-glow">
                                        Ready to Start?
                                    </h4>
                                    <p className="text-amber-100/80 mb-6">
                                        Every great project begins with a conversation. Let&apos;s build something{" "}
                                        <span className="text-orange-400 font-semibold">extraordinary</span> together.
                                    </p>
                                    <motion.button
                                        className="px-6 py-3 dragon-gradient rounded-lg text-amber-100 font-semibold ember-glow hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Start Project
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Floating ember particles */}
                <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 6 }, (_, i) => (
                        <motion.div
                            key={`contact-ember-${i}`}
                            className="absolute w-2 h-2 bg-red-500 rounded-full"
                            style={{
                                left: `${60 + i * 8}%`,
                                top: `${70 + (i % 2) * 20}%`,
                            }}
                            animate={{
                                y: [0, -40, 0],
                                opacity: [0, 1, 0],
                                scale: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 4 + i * 0.5,
                                repeat: Infinity,
                                delay: i * 0.4,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

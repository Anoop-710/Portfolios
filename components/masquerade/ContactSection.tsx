"use client";

import { motion } from "framer-motion";
import { LaceBorder } from "./LaceBorder";
import { CandleFlame } from "./CandleFlame";
import { VenetianMask } from "./VenetianMask";

export function ContactSection() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted");
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-black via-purple-900 to-slate-900 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0">
                {/* Damask pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="w-full h-full bg-repeat" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4af37' fill-opacity='0.1'%3E%3Cpath d='M60 60c0-16.569 13.431-30 30-30s30 13.431 30 30-13.431 30-30 30-30-13.431-30-30z'/%3E%3C/g%3E%3C/svg%3E")`
                    }} />
                </div>

                {/* Floating candles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        style={{
                            left: `${15 + i * 15}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0.3, 0.8, 0.3],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: "easeInOut"
                        }}
                    >
                        <CandleFlame size="sm" intensity="low" />
                    </motion.div>
                ))}

                {/* Floating masks in background */}
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute opacity-5"
                        style={{
                            right: `${20 + i * 20}%`,
                            top: `${20 + i * 15}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 3, -3, 0],
                            opacity: [0.03, 0.08, 0.03],
                        }}
                        transition={{
                            duration: 8 + Math.random() * 4,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                            ease: "easeInOut"
                        }}
                    >
                        <VenetianMask className="w-12 h-8 text-gold-400/20" animate={false} />
                    </motion.div>
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-gold-200 via-yellow-300 to-gold-400 bg-clip-text text-transparent">
                            Send an Invitation
                        </span>
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Ready to collaborate on something extraordinary? Let&apos;s discuss your vision and bring it to life.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left side - Contact Form */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {/* Contact form framed by candlelit pillars */}
                        <div className="relative bg-gradient-to-br from-slate-800/50 to-purple-900/50 p-8 rounded-3xl border border-gold-400/20 backdrop-blur-sm">
                            {/* Decorative border */}
                            <LaceBorder className="absolute top-0 left-0 right-0 h-8 text-gold-400/60" />
                            <LaceBorder className="absolute bottom-0 left-0 right-0 h-8 text-gold-400/60" />

                            <form onSubmit={handleSubmit} className="pt-8 pb-8 space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Name field */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <label htmlFor="name" className="block text-sm font-medium text-gold-300 mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full px-4 py-3 bg-slate-900/50 border border-gold-400/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
                                            placeholder="Enter your name"
                                        />
                                    </motion.div>

                                    {/* Email field */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                        viewport={{ once: true }}
                                    >
                                        <label htmlFor="email" className="block text-sm font-medium text-gold-300 mb-2">
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-3 bg-slate-900/50 border border-gold-400/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
                                            placeholder="Enter your email"
                                        />
                                    </motion.div>
                                </div>

                                {/* Subject field */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    viewport={{ once: true }}
                                >
                                    <label htmlFor="subject" className="block text-sm font-medium text-gold-300 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        className="w-full px-4 py-3 bg-slate-900/50 border border-gold-400/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
                                        placeholder="What's this about?"
                                    />
                                </motion.div>

                                {/* Message field */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    viewport={{ once: true }}
                                >
                                    <label htmlFor="message" className="block text-sm font-medium text-gold-300 mb-2">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        required
                                        className="w-full px-4 py-3 bg-slate-900/50 border border-gold-400/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all resize-none"
                                        placeholder="Tell me about your project or idea..."
                                    />
                                </motion.div>

                                {/* Submit button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    viewport={{ once: true }}
                                    className="text-center"
                                >
                                    <motion.button
                                        type="submit"
                                        className="px-8 py-4 bg-gradient-to-r from-gold-500 to-yellow-600 text-black font-semibold rounded-lg shadow-lg hover:shadow-gold-500/25 transition-all"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Send Invitation
                                    </motion.button>
                                </motion.div>
                            </form>
                        </div>
                    </motion.div>

                    {/* Right side - Contact Information */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {/* Contact methods */}
                        <div className="space-y-6">
                            {[
                                {
                                    title: "Send a Message",
                                    description: "Use the form to send me a direct message about your project or collaboration idea.",
                                    icon: "✉️",
                                    color: "from-blue-500 to-purple-500"
                                },
                                {
                                    title: "Schedule a Call",
                                    description: "Let's discuss your vision in detail and explore how we can work together.",
                                    icon: "📞",
                                    color: "from-green-500 to-emerald-500"
                                },
                                {
                                    title: "View Portfolio",
                                    description: "Explore my previous work and see examples of successful collaborations.",
                                    icon: "🎭",
                                    color: "from-gold-500 to-yellow-500"
                                }
                            ].map((method, index) => (
                                <motion.div
                                    key={method.title}
                                    className="relative bg-gradient-to-br from-slate-800/40 to-purple-900/40 p-6 rounded-2xl border border-gold-400/10 backdrop-blur-sm"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02, borderColor: "rgba(212, 175, 55, 0.3)" }}
                                >
                                    <div className="flex items-start space-x-4">
                                        <motion.div
                                            className={`w-12 h-12 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center text-xl flex-shrink-0`}
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {method.icon}
                                        </motion.div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gold-300 mb-2">{method.title}</h3>
                                            <p className="text-slate-300 text-sm leading-relaxed">{method.description}</p>
                                        </div>
                                    </div>

                                    {/* Shimmer effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-400/5 to-transparent rounded-2xl"
                                        animate={{
                                            x: ['-100%', '100%'],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            repeatDelay: 3,
                                            ease: "easeInOut"
                                        }}
                                    />
                                </motion.div>
                            ))}
                        </div>

                        {/* Call to action */}
                        <motion.div
                            className="relative bg-gradient-to-br from-gold-400/10 to-yellow-600/10 p-8 rounded-3xl border border-gold-400/20 backdrop-blur-sm text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-gold-400 to-yellow-500 rounded-2xl flex items-center justify-center text-2xl"
                                animate={{
                                    rotate: [0, 5, -5, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                🎪
                            </motion.div>
                            <h3 className="text-xl font-bold text-gold-300 mb-3">Ready to Create Magic?</h3>
                            <p className="text-slate-300 text-sm leading-relaxed mb-4">
                                Every great project begins with a conversation. Let&apos;s turn your ideas into reality.
                            </p>
                            <motion.button
                                className="px-6 py-3 bg-gradient-to-r from-gold-500 to-yellow-600 text-black font-semibold rounded-lg shadow-lg hover:shadow-gold-500/25 transition-all text-sm"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Start the Conversation
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Bottom decorative element */}
                <motion.div
                    className="mt-20 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <LaceBorder className="h-16 text-gold-400/40 mx-auto max-w-md" pattern="ornate" />
                </motion.div>
            </div>

            {/* Ambient lighting */}
            <motion.div
                className="absolute top-1/3 left-1/3 w-96 h-96 bg-gold-400/3 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Curtain-like overlay for dramatic effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                animate={{
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function ContactSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="min-h-screen py-20 relative">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-blue-50 to-slate-100 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800">
                {/* Wave pattern overlay */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10c25 5 25-5 50 0s25-5 50 0 25 5 50 0 25-5 50 0v10H0z' fill='%23000' fill-opacity='0.1'/%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={isInView ? { scale: 1, rotate: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                        className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6 border-4 border-blue-600 dark:border-blue-400 relative overflow-hidden"
                    >
                        <span className="text-3xl">🗨️</span>
                        {/* Water ripple effect */}
                        <motion.div
                            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 bg-blue-400/20 dark:bg-blue-300/20 rounded-full"
                        />
                    </motion.div>
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-800 to-cyan-600 dark:from-blue-300 dark:to-cyan-100 bg-clip-text text-transparent">
                        Message in a Bottle
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Send a message across the digital seas. Whether you&apos;re looking to collaborate on a project,
                        discuss opportunities, or just want to connect, drop your message in the bottle and I&apos;ll get back to you.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        {/* Message Bottle */}
                        <div className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 dark:from-blue-900/20 dark:via-cyan-900/20 dark:to-blue-900/20 p-8 rounded-2xl border-4 border-blue-200 dark:border-blue-800 shadow-xl">
                            {/* Wave border top */}
                            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-transparent via-blue-600/30 to-transparent rounded-t-2xl">
                                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 32" preserveAspectRatio="none">
                                    <motion.path
                                        d="M0,16 Q100,8 200,16 T400,16 L400,32 L0,32 Z"
                                        fill="rgba(37, 99, 235, 0.3)"
                                        animate={{ d: ["M0,16 Q100,8 200,16 T400,16 L400,32 L0,32 Z", "M0,16 Q100,24 200,16 T400,16 L400,32 L0,32 Z", "M0,16 Q100,8 200,16 T400,16 L400,32 L0,32 Z"] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                </svg>
                            </div>

                            {/* Cork top */}
                            <motion.div
                                animate={{ y: [0, -2, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gradient-to-b from-amber-700 to-amber-800 rounded-t-full border-2 border-amber-600"
                            />

                            <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
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
                                        className="w-full px-4 py-3 bg-white/80 dark:bg-slate-800/80 border-2 border-blue-200 dark:border-blue-700 rounded-lg focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors text-slate-800 dark:text-slate-200"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
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
                                        className="w-full px-4 py-3 bg-white/80 dark:bg-slate-800/80 border-2 border-blue-200 dark:border-blue-700 rounded-lg focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors text-slate-800 dark:text-slate-200"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Message
                                    </label>
                                    <motion.textarea
                                        whileFocus={{ scale: 1.02 }}
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 bg-white/80 dark:bg-slate-800/80 border-2 border-blue-200 dark:border-blue-700 rounded-lg focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors text-slate-800 dark:text-slate-200 resize-none"
                                        placeholder="Your message here..."
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 text-white py-4 px-6 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                                    whileHover={{ scale: 1.02, y: -1 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {/* Button wave effect */}
                                    <motion.div
                                        animate={{ x: ["-100%", "100%"] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                    />

                                    <span className="relative z-10 flex items-center justify-center space-x-2">
                                        {isSubmitting ? (
                                            <>
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                                />
                                                <span>Sending Message...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Send Message in Bottle</span>
                                                <motion.span
                                                    animate={{ y: [0, -2, 0] }}
                                                    transition={{ duration: 1.5, repeat: Infinity }}
                                                >
                                                    🗨️
                                                </motion.span>
                                            </>
                                        )}
                                    </span>
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="space-y-8"
                    >
                        {/* Quick Contact Options */}
                        <div>
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center">
                                <span className="mr-3">📍</span>
                                Quick Communication Channels
                            </h3>
                            <div className="grid gap-4">
                                {[
                                    { icon: "📧", title: "Email", description: "captain@codeexplorer.dev", action: "Send Email" },
                                    { icon: "💼", title: "LinkedIn", description: "linkedin.com/in/codeexplorer", action: "Connect" },
                                    { icon: "🐙", title: "GitHub", description: "github.com/codeexplorer", action: "View Projects" },
                                    { icon: "🐦", title: "Twitter", description: "@codeexplorer", action: "Follow" },
                                ].map((contact, index) => (
                                    <motion.div
                                        key={contact.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 shadow-lg hover:shadow-xl transition-all cursor-pointer"
                                    >
                                        <div className="flex items-center space-x-4">
                                            <div className="text-2xl">{contact.icon}</div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1">
                                                    {contact.title}
                                                </h4>
                                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                                                    {contact.description}
                                                </p>
                                                <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                                                    {contact.action} →
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Response Time */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-800"
                        >
                            <div className="flex items-start space-x-4">
                                <motion.div
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="text-2xl"
                                >
                                    🚀
                                </motion.div>
                                <div>
                                    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">
                                        Fast Response Time
                                    </h4>
                                    <p className="text-sm text-green-700 dark:text-green-300 leading-relaxed">
                                        I typically respond to messages within 24 hours. For urgent project inquiries,
                                        feel free to reach out directly via email or LinkedIn for priority attention.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Location */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.9 }}
                            className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800"
                        >
                            <div className="flex items-start space-x-4">
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="text-2xl"
                                >
                                    🌍
                                </motion.div>
                                <div>
                                    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">
                                        Global Collaboration
                                    </h4>
                                    <p className="text-sm text-purple-700 dark:text-purple-300 leading-relaxed">
                                        Based in the digital realm, available for remote collaboration worldwide.
                                        Timezone flexibility and remote-first approach ensure smooth project execution.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Decorative elements */}
                <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 right-8 text-6xl opacity-20 hidden xl:block"
                >
                    🌊
                </motion.div>
                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 left-8 text-6xl opacity-20 hidden xl:block"
                >
                    🏴‍☠️
                </motion.div>
            </div>
        </section>
    );
}

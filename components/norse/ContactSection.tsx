"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export function ContactSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section id="contact" className="py-20 px-6 bg-slate-50 dark:bg-slate-900">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                        Rune of Contact
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                        Send a message through the ancient runes. Let your words be carried by the winds
                        of the digital realm to reach the warrior&apos;s hall.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Form - Rune Circle */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Rune Circle Background */}
                        <div className="relative w-full max-w-lg mx-auto">
                            {/* Outer rune ring */}
                            <motion.div
                                className="relative w-80 h-80 mx-auto"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            >
                                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
                                    {/* Outer circle with runes */}
                                    <circle
                                        cx="160"
                                        cy="160"
                                        r="150"
                                        fill="none"
                                        stroke="rgba(245, 158, 11, 0.2)"
                                        strokeWidth="2"
                                        strokeDasharray="20,10"
                                    />
                                    <circle
                                        cx="160"
                                        cy="160"
                                        r="140"
                                        fill="none"
                                        stroke="rgba(245, 158, 11, 0.3)"
                                        strokeWidth="1"
                                        strokeDasharray="15,15"
                                    />

                                    {/* Rune symbols around the circle */}
                                    {['ᚱ', 'ᚢ', 'ᚾ', 'ᛖ', 'ᛏ', 'ᛁ', 'ᛋ', 'ᛞ'].map((rune, index) => {
                                        const angle = (index * 45) * (Math.PI / 180);
                                        const x = 160 + Math.cos(angle) * 130;
                                        const y = 160 + Math.sin(angle) * 130;

                                        return (
                                            <motion.text
                                                key={rune}
                                                x={x}
                                                y={y}
                                                textAnchor="middle"
                                                dominantBaseline="central"
                                                className="text-2xl font-bold fill-amber-500"
                                                animate={{
                                                    opacity: [0.3, 1, 0.3],
                                                    scale: [0.8, 1.2, 0.8],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    delay: index * 0.2,
                                                    ease: "easeInOut",
                                                }}
                                            >
                                                {rune}
                                            </motion.text>
                                        );
                                    })}
                                </svg>

                                {/* Inner glow */}
                                <motion.div
                                    className="absolute inset-0 rounded-full"
                                    animate={{
                                        boxShadow: [
                                            "inset 0 0 20px rgba(245, 158, 11, 0.3)",
                                            "inset 0 0 40px rgba(245, 158, 11, 0.6)",
                                            "inset 0 0 20px rgba(245, 158, 11, 0.3)",
                                        ],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />
                            </motion.div>

                            {/* Form inside the rune circle */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.form
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                    onSubmit={handleSubmit}
                                    className="w-full max-w-sm space-y-6"
                                >
                                    <div>
                                        <motion.input
                                            whileFocus={{ scale: 1.02, borderColor: "rgb(245, 158, 11)" }}
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:border-amber-500 transition-all duration-300 text-slate-900 dark:text-white placeholder-slate-500"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <motion.input
                                            whileFocus={{ scale: 1.02, borderColor: "rgb(245, 158, 11)" }}
                                            type="email"
                                            name="email"
                                            placeholder="Your Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:border-amber-500 transition-all duration-300 text-slate-900 dark:text-white placeholder-slate-500"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <motion.textarea
                                            whileFocus={{ scale: 1.02, borderColor: "rgb(245, 158, 11)" }}
                                            name="message"
                                            placeholder="Your Message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:border-amber-500 transition-all duration-300 text-slate-900 dark:text-white placeholder-slate-500 resize-none"
                                            required
                                        />
                                    </div>

                                    <motion.button
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: "0 0 30px rgba(245, 158, 11, 0.5)"
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        type="submit"
                                        className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                                    >
                                        {/* Button glow effect */}
                                        <motion.div
                                            animate={{
                                                opacity: [0.5, 1, 0.5],
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            }}
                                            className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 opacity-30"
                                        />

                                        <span className="relative z-10 flex items-center justify-center space-x-2">
                                            <span>Send Rune Message</span>
                                            <motion.span
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                                            >
                                                ⚡
                                            </motion.span>
                                        </span>
                                    </motion.button>
                                </motion.form>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-8"
                    >
                        {/* Contact Methods */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                Other Ways to Reach the Hall
                            </h3>

                            {[
                                {
                                    icon: "📧",
                                    title: "Electronic Mail",
                                    value: "warrior@norse.dev",
                                    description: "Send a formal message through the digital ravens"
                                },
                                {
                                    icon: "💼",
                                    title: "LinkedIn Hall",
                                    value: "linkedin.com/in/norse-warrior",
                                    description: "Connect through the professional battlegrounds"
                                },
                                {
                                    icon: "🐙",
                                    title: "GitHub Forge",
                                    value: "github.com/norse-warrior",
                                    description: "View the code artifacts and battle records"
                                },
                                {
                                    icon: "🐦",
                                    title: "Twitter Winds",
                                    value: "@norse_warrior",
                                    description: "Follow for updates from the warrior's journey"
                                }
                            ].map((contact, index) => (
                                <motion.div
                                    key={contact.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                                    whileHover={{ x: 10, scale: 1.02 }}
                                    className="flex items-start space-x-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700"
                                >
                                    <div className="text-3xl">{contact.icon}</div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                                            {contact.title}
                                        </h4>
                                        <p className="text-amber-600 font-medium mb-1">{contact.value}</p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">
                                            {contact.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Call to Action */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            className="p-8 bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl border border-amber-200 dark:border-amber-800"
                        >
                            <div className="text-center">
                                <motion.div
                                    animate={{
                                        rotate: [0, 5, -5, 0],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="text-6xl mb-4"
                                >
                                    ⚔️
                                </motion.div>
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                    Ready for Battle?
                                </h4>
                                <p className="text-slate-700 dark:text-slate-300 mb-6">
                                    Whether you seek a fellow warrior for your quest, wish to discuss
                                    potential alliances, or simply want to share tales of great battles,
                                    the hall doors are always open.
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                                >
                                    Join the Saga
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Floating rune particles */}
                {mounted && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        {Array.from({ length: 15 }, (_, i) => (
                            <motion.div
                                key={i}
                                className="absolute text-amber-500 text-xl opacity-30"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                    y: [0, -100, 0],
                                    x: [0, Math.random() * 50 - 25, 0],
                                    rotate: [0, 180, 360],
                                    opacity: [0, 0.6, 0],
                                }}
                                transition={{
                                    duration: 8 + Math.random() * 4,
                                    repeat: Infinity,
                                    delay: Math.random() * 5,
                                    ease: "easeInOut",
                                }}
                            >
                                {['ᚱ', 'ᚢ', 'ᚾ', 'ᛖ', 'ᛏ'][Math.floor(Math.random() * 5)]}
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

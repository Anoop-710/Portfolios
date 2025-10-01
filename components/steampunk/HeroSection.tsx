"use client";

import { motion } from "framer-motion";
import { ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export function HeroSection() {
    const [isScrollUnrolled, setIsScrollUnrolled] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsScrollUnrolled(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const scrollToAbout = () => {
        const element = document.querySelector("#about");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 left-10 w-32 h-32 border-2 border-amber-600/20 dark:border-amber-400/20 rounded-full"
                    animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-24 h-24 border border-amber-600/20 dark:border-amber-400/20 rounded-full"
                    animate={{
                        rotate: -360,
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        className="text-center lg:text-left"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div
                            className="inline-block px-4 py-2 bg-gradient-to-r from-amber-200 to-orange-200 dark:from-amber-800 dark:to-orange-800 text-amber-900 dark:text-amber-100 rounded-full text-sm font-medium mb-6"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            Welcome to my workshop
                        </motion.div>

                        <motion.h1
                            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-900 via-orange-800 to-amber-900 dark:from-amber-100 dark:via-orange-200 dark:to-amber-100 bg-clip-text text-transparent leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            Alex Chen
                        </motion.h1>

                        <motion.h2
                            className="text-xl md:text-2xl lg:text-3xl text-amber-800 dark:text-amber-200 mb-8 font-light"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                        >
                            Full Stack Developer & Digital Craftsman
                        </motion.h2>

                        <motion.p
                            className="text-lg text-amber-700 dark:text-amber-300 mb-8 max-w-2xl leading-relaxed"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.8 }}
                        >
                            I craft digital experiences that blend modern technology with timeless design principles.
                            From concept to deployment, I build applications that are both functional and beautiful.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1, duration: 0.8 }}
                        >
                            <motion.button
                                className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Download size={20} />
                                Download CV
                            </motion.button>

                            <motion.button
                                className="px-8 py-4 border-2 border-amber-600 dark:border-amber-400 text-amber-800 dark:text-amber-200 hover:bg-amber-600 dark:hover:bg-amber-400 hover:text-white rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Projects
                            </motion.button>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            className="flex gap-6 justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.3, duration: 0.8 }}
                        >
                            {[
                                { Icon: Github, href: "#", label: "GitHub" },
                                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                                { Icon: Mail, href: "#", label: "Email" },
                            ].map(({ Icon, href, label }, index) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    className="p-3 bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200 hover:bg-amber-200 dark:hover:bg-amber-800 hover:text-amber-900 dark:hover:text-amber-100 rounded-full transition-all duration-300 hover:scale-110"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                                    aria-label={label}
                                >
                                    <Icon size={20} />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Animated Scroll */}
                    <motion.div
                        className="flex justify-center lg:justify-end"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    >
                        <div className="relative">
                            {/* Scroll Container */}
                            <motion.div
                                className="relative bg-gradient-to-b from-amber-100 to-amber-50 dark:from-slate-800 dark:to-slate-700 rounded-lg shadow-2xl border border-amber-600/30 dark:border-amber-400/30 overflow-hidden"
                                style={{
                                    width: "300px",
                                    height: "400px",
                                    backgroundImage: `
                    radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 75% 75%, rgba(234, 88, 12, 0.1) 0%, transparent 50%),
                    linear-gradient(45deg, rgba(252, 211, 77, 0.05) 0%, transparent 100%)
                  `,
                                }}
                                animate={{
                                    boxShadow: isScrollUnrolled
                                        ? "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(245, 158, 11, 0.3)"
                                        : "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(245, 158, 11, 0.1)",
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Scroll Edges */}
                                <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-amber-700 via-amber-600 to-amber-700 dark:from-amber-300 dark:via-amber-400 dark:to-amber-300" />
                                <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-b from-amber-700 via-amber-600 to-amber-700 dark:from-amber-300 dark:via-amber-400 dark:to-amber-300" />

                                {/* Scroll Content */}
                                <div className="p-6 pt-8 h-full flex flex-col">
                                    {/* Header */}
                                    <motion.div
                                        className="text-center mb-6"
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: isScrollUnrolled ? 1 : 0, y: isScrollUnrolled ? 0 : -20 }}
                                        transition={{ delay: 1.5, duration: 0.6 }}
                                    >
                                        <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-2">
                                            Curriculum Vitae
                                        </h3>
                                        <div className="w-16 h-0.5 bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 mx-auto" />
                                    </motion.div>

                                    {/* Content Lines */}
                                    <div className="flex-1 space-y-3">
                                        {[
                                            "Full Stack Developer",
                                            "React & Next.js Expert",
                                            "Node.js Backend",
                                            "UI/UX Design",
                                            "Problem Solver",
                                            "Team Player",
                                        ].map((text, index) => (
                                            <motion.div
                                                key={text}
                                                className="h-3 bg-amber-300/60 dark:bg-amber-700/60 rounded-sm"
                                                initial={{ opacity: 0, scaleX: 0 }}
                                                animate={{
                                                    opacity: isScrollUnrolled ? 1 : 0,
                                                    scaleX: isScrollUnrolled ? 1 : 0,
                                                }}
                                                transition={{
                                                    delay: 1.8 + index * 0.1,
                                                    duration: 0.5,
                                                    scaleX: { duration: 0.8, ease: "easeOut" },
                                                }}
                                                style={{ originX: 0 }}
                                            />
                                        ))}
                                    </div>

                                    {/* Signature */}
                                    <motion.div
                                        className="mt-6 text-center"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: isScrollUnrolled ? 1 : 0, y: isScrollUnrolled ? 0 : 20 }}
                                        transition={{ delay: 2.5, duration: 0.6 }}
                                    >
                                        <div className="w-12 h-0.5 bg-amber-600 dark:bg-amber-400 mx-auto mb-2" />
                                        <p className="text-sm text-amber-700 dark:text-amber-300 italic">
                                            Alex Chen
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Floating Gear Decorations */}
                            <motion.div
                                className="absolute -top-4 -right-4 w-8 h-8 border-2 border-amber-600 dark:border-amber-400 rounded-full bg-amber-100 dark:bg-slate-800"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.div
                                className="absolute -bottom-4 -left-4 w-6 h-6 border border-amber-600 dark:border-amber-400 rounded-full bg-amber-100 dark:bg-slate-800"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 0.8 }}
                >
                    <motion.button
                        onClick={scrollToAbout}
                        className="p-3 bg-amber-200/80 dark:bg-amber-800/80 text-amber-800 dark:text-amber-200 hover:bg-amber-300 dark:hover:bg-amber-700 rounded-full transition-all duration-300 backdrop-blur-sm"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ChevronDown size={24} />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}

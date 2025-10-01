"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
    { name: "React/Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "PostgreSQL", level: 85 },
    { name: "AWS", level: 75 },
    { name: "Docker", level: 80 },
    { name: "GraphQL", level: 70 },
];

const highlights = [
    {
        title: "5+ Years Experience",
        description: "Building scalable web applications with modern technologies",
        icon: "🚀",
    },
    {
        title: "50+ Projects Completed",
        description: "From startups to enterprise-level applications",
        icon: "💼",
    },
    {
        title: "Open Source Contributor",
        description: "Active in the developer community with multiple contributions",
        icon: "🌟",
    },
    {
        title: "Performance Optimization",
        description: "Expert in optimizing applications for speed and efficiency",
        icon: "⚡",
    },
];

export function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="relative py-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-orange-100 to-pink-100 dark:from-white dark:via-orange-200 dark:to-pink-200 bg-clip-text text-transparent drop-shadow-lg">
                        About Me
                    </h2>
                    <p className="text-lg md:text-xl text-white dark:text-slate-400 max-w-3xl mx-auto drop-shadow-md">
                        Passionate about creating digital experiences that make a difference.
                        I love turning complex problems into simple, beautiful solutions.
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Bio Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl blur opacity-20" />
                            <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-slate-700/20">
                                <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-200">
                                    My Journey
                                </h3>
                                <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                                    <p>
                                        My journey in software development began with curiosity about how websites work.
                                        What started as a hobby quickly evolved into a passion for creating meaningful digital experiences.
                                    </p>
                                    <p>
                                        Over the years, I&apos;ve had the privilege of working with startups and established companies,
                                        helping them build products that users love. I believe in writing clean, maintainable code
                                        and creating intuitive user interfaces.
                                    </p>
                                    <p>
                                        When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open source projects,
                                        or enjoying the outdoors. I believe that the best code is written by developers who are constantly learning
                                        and growing.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Skills Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-6"
                    >
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20" />
                            <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-slate-700/20">
                                <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200">
                                    Technical Skills
                                </h3>
                                <div className="space-y-4">
                                    {skills.map((skill, index) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                                            transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                                            className="group"
                                        >
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="font-medium text-slate-700 dark:text-slate-300">
                                                    {skill.name}
                                                </span>
                                                <span className="text-sm text-slate-500 dark:text-slate-400">
                                                    {skill.level}%
                                                </span>
                                            </div>
                                            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                                                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                                                    className="h-full bg-gradient-to-r from-orange-400 to-pink-500 rounded-full group-hover:from-orange-500 group-hover:to-pink-600 transition-all duration-300"
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Highlights Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-16"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {highlights.map((highlight, index) => (
                            <motion.div
                                key={highlight.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="relative group"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-pink-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300" />
                                <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-slate-700/20 text-center h-full">
                                    <div className="text-3xl mb-3">{highlight.icon}</div>
                                    <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">
                                        {highlight.title}
                                    </h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        {highlight.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute top-1/2 left-10 w-20 h-20 bg-gradient-to-br from-orange-300/20 to-pink-300/20 rounded-full blur-xl" />
                <div className="absolute top-1/3 right-10 w-16 h-16 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-xl" />
            </div>
        </section>
    );
}

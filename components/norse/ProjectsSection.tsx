"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
    {
        id: 1,
        name: "E-commerce Platform",
        description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include real-time inventory, payment processing, and admin dashboard.",
        tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
        longship: "🏪",
        banner: "Commerce Raider",
        github: "https://github.com",
        demo: "https://demo.com",
        featured: true
    },
    {
        id: 2,
        name: "AI Content Generator",
        description: "Machine learning-powered content creation tool using GPT models and custom fine-tuning. Includes content analysis and optimization features.",
        tech: ["Python", "TensorFlow", "FastAPI", "React"],
        longship: "🤖",
        banner: "AI Warship",
        github: "https://github.com",
        demo: "https://demo.com",
        featured: true
    },
    {
        id: 3,
        name: "Real-time Chat App",
        description: "Scalable chat application with WebSocket support, file sharing, and group management. Built for high-performance real-time communication.",
        tech: ["React", "Socket.io", "MongoDB", "Express"],
        longship: "💬",
        banner: "Message Longship",
        github: "https://github.com",
        demo: "https://demo.com",
        featured: false
    },
    {
        id: 4,
        name: "Data Visualization Dashboard",
        description: "Interactive dashboard for data analysis with custom charts, filters, and export capabilities. Processes large datasets with optimized performance.",
        tech: ["D3.js", "Vue.js", "Python", "Redis"],
        longship: "📊",
        banner: "Analytics Vessel",
        github: "https://github.com",
        demo: "https://demo.com",
        featured: false
    },
    {
        id: 5,
        name: "Mobile Fitness Tracker",
        description: "Cross-platform mobile app for fitness tracking with social features, progress analytics, and integration with wearable devices.",
        tech: ["React Native", "Firebase", "ML Kit", "Health API"],
        longship: "🏃",
        banner: "Fitness Longship",
        github: "https://github.com",
        demo: "https://demo.com",
        featured: true
    },
    {
        id: 6,
        name: "Blockchain Voting System",
        description: "Decentralized voting platform built on Ethereum with smart contracts, ensuring transparency and immutability of voting records.",
        tech: ["Solidity", "Web3.js", "React", "IPFS"],
        longship: "🗳️",
        banner: "Democratic Longship",
        github: "https://github.com",
        demo: "https://demo.com",
        featured: false
    }
];

export function ProjectsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="projects" className="py-20 px-6 bg-slate-100 dark:bg-slate-800">
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
                        Saga of Battles
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                        Each project is a longship navigating stormy seas, carrying the banners of innovation and
                        the cargo of technical excellence. Watch them rock with the waves of progress.
                    </p>
                </motion.div>

                {/* Stormy Sea Background */}
                <div className="relative mb-16">
                    {/* Animated wave background */}
                    <div className="absolute inset-0 overflow-hidden rounded-2xl">
                        <svg className="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 1200 100" preserveAspectRatio="none">
                            <motion.path
                                d="M0,100 L0,80 L200,60 L400,70 L600,50 L800,65 L1000,45 L1200,55 L1200,100 Z"
                                fill="rgba(59, 130, 246, 0.3)"
                                animate={{
                                    d: [
                                        "M0,100 L0,80 L200,60 L400,70 L600,50 L800,65 L1000,45 L1200,55 L1200,100 Z",
                                        "M0,100 L0,75 L200,65 L400,75 L600,55 L800,60 L1000,50 L1200,60 L1200,100 Z",
                                        "M0,100 L0,80 L200,60 L400,70 L600,50 L800,65 L1000,45 L1200,55 L1200,100 Z",
                                    ],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                            <motion.path
                                d="M0,100 L0,85 L150,75 L350,80 L550,70 L750,75 L950,70 L1200,75 L1200,100 Z"
                                fill="rgba(59, 130, 246, 0.2)"
                                animate={{
                                    d: [
                                        "M0,100 L0,85 L150,75 L350,80 L550,70 L750,75 L950,70 L1200,75 L1200,100 Z",
                                        "M0,100 L0,80 L150,80 L350,75 L550,75 L750,70 L950,75 L1200,70 L1200,100 Z",
                                        "M0,100 L0,85 L150,75 L350,80 L550,70 L750,75 L950,70 L1200,75 L1200,100 Z",
                                    ],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </svg>
                    </div>

                    {/* Longship Fleet */}
                    <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50, rotate: 0 }}
                                animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : { opacity: 0, y: 50, rotate: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                whileHover={{
                                    y: -20,
                                    rotate: [-2, 2, -1, 1, 0],
                                    transition: { duration: 0.5 }
                                }}
                                className="group relative"
                            >
                                {/* Longship Card */}
                                <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 overflow-hidden">
                                    {/* Featured Badge */}
                                    {project.featured && (
                                        <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                                            ⚔️ Featured Saga
                                        </div>
                                    )}

                                    {/* Longship Icon & Banner */}
                                    <div className="text-center mb-4">
                                        <motion.div
                                            className="text-6xl mb-3"
                                            animate={{
                                                y: [0, -3, 0],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            }}
                                        >
                                            {project.longship}
                                        </motion.div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                            {project.name}
                                        </h3>
                                        <div className="inline-block bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                                            <span className="text-xs font-semibold text-amber-600">
                                                {project.banner}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Project Description */}
                                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
                                            ⚔️ Battle Tools:
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-2 py-1 bg-gradient-to-r from-slate-600 to-slate-700 text-white text-xs rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex space-x-3">
                                        <motion.a
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            href={project.github}
                                            className="flex-1 bg-slate-800 dark:bg-slate-700 text-white py-2 px-4 rounded-lg text-center text-sm font-medium hover:bg-slate-900 dark:hover:bg-slate-600 transition-colors"
                                        >
                                            View Code
                                        </motion.a>
                                        <motion.a
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            href={project.demo}
                                            className="flex-1 bg-gradient-to-r from-amber-500 to-orange-600 text-white py-2 px-4 rounded-lg text-center text-sm font-medium hover:shadow-lg transition-all"
                                        >
                                            Live Demo
                                        </motion.a>
                                    </div>

                                    {/* Ship wake effect */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Rocking animation */}
                                <motion.div
                                    animate={{
                                        rotate: [0, -2, 2, -1, 1, 0],
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Battle Statistics */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {[
                        { label: "Sagas Completed", value: "50+", icon: "⚔️" },
                        { label: "Lines of Code", value: "100K+", icon: "📝" },
                        { label: "Technologies Mastered", value: "25+", icon: "🛠️" },
                        { label: "Battles Won", value: "100%", icon: "🏆" }
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                            className="text-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700"
                        >
                            <div className="text-3xl mb-2">{stat.icon}</div>
                            <div className="text-2xl font-bold text-amber-600 mb-1">{stat.value}</div>
                            <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

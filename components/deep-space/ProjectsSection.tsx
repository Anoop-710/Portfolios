"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Tag } from "lucide-react";

interface ProjectsSectionProps {
    setActiveSection: (section: string) => void;
}

export function ProjectsSection({ setActiveSection }: ProjectsSectionProps) {
    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include real-time inventory, payment processing, and admin dashboard.",
            image: "🛒",
            tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
            github: "https://github.com",
            demo: "https://demo.com",
            featured: true,
            planetColor: "from-blue-500/20 to-purple-500/20",
            orbitSpeed: 8,
        },
        {
            id: 2,
            title: "AI-Powered Analytics Dashboard",
            description: "Interactive dashboard with machine learning insights, real-time data visualization, and predictive analytics for business intelligence.",
            image: "📊",
            tags: ["Python", "TensorFlow", "D3.js", "FastAPI"],
            github: "https://github.com",
            demo: "https://demo.com",
            featured: true,
            planetColor: "from-green-500/20 to-teal-500/20",
            orbitSpeed: 12,
        },
        {
            id: 3,
            title: "Social Media Application",
            description: "Modern social platform with real-time messaging, content sharing, and advanced privacy controls built with React Native and GraphQL.",
            image: "🌐",
            tags: ["React Native", "GraphQL", "MongoDB", "Socket.io"],
            github: "https://github.com",
            demo: "https://demo.com",
            featured: false,
            planetColor: "from-pink-500/20 to-rose-500/20",
            orbitSpeed: 10,
        },
        {
            id: 4,
            title: "Blockchain Voting System",
            description: "Decentralized voting platform ensuring transparency and security using Ethereum smart contracts and IPFS for data storage.",
            image: "🗳️",
            tags: ["Solidity", "Web3.js", "IPFS", "React"],
            github: "https://github.com",
            demo: "https://demo.com",
            featured: false,
            planetColor: "from-orange-500/20 to-red-500/20",
            orbitSpeed: 6,
        },
        {
            id: 5,
            title: "IoT Smart Home Hub",
            description: "Centralized dashboard for managing IoT devices with voice control, automation rules, and energy consumption monitoring.",
            image: "🏠",
            tags: ["IoT", "MQTT", "InfluxDB", "Vue.js"],
            github: "https://github.com",
            demo: "https://demo.com",
            featured: false,
            planetColor: "from-indigo-500/20 to-blue-500/20",
            orbitSpeed: 14,
        },
        {
            id: 6,
            title: "AR Product Visualization",
            description: "Augmented reality app for visualizing products in real-world environments using ARKit and RealityKit with 3D model optimization.",
            image: "🥽",
            tags: ["ARKit", "RealityKit", "Swift", "Metal"],
            github: "https://github.com",
            demo: "https://demo.com",
            featured: true,
            planetColor: "from-violet-500/20 to-purple-500/20",
            orbitSpeed: 9,
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
        },
    };

    return (
        <section className="relative min-h-screen py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center mb-16"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
                    >
                        Featured Projects
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-xl md:text-2xl text-gray-300 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        A collection of innovative projects showcasing modern web technologies,
                        creative problem-solving, and user-centered design.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            className="group relative"
                            style={{
                                transformStyle: "preserve-3d",
                            }}
                        >
                            {/* Orbital Ring Effect */}
                            <motion.div
                                className={`absolute -inset-4 rounded-full border-2 border-dashed opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                                style={{
                                    borderColor: project.featured ? "#3b82f6" : "#6b7280",
                                    background: `conic-gradient(from 0deg, transparent, ${project.featured ? "#3b82f6" : "#6b7280"}20, transparent)`,
                                }}
                                animate={{
                                    rotate: 360,
                                }}
                                transition={{
                                    duration: project.orbitSpeed,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />

                            {/* Planet Card */}
                            <motion.div
                                className={`relative p-8 bg-gradient-to-br ${project.planetColor} backdrop-blur-sm border border-white/10 dark:border-white/5 rounded-2xl hover:border-white/20 dark:hover:border-white/10 transition-all duration-500 cursor-pointer`}
                                whileHover={{
                                    scale: 1.05,
                                    rotateY: 15,
                                    rotateX: 10,
                                }}
                                style={{
                                    transformStyle: "preserve-3d",
                                }}
                            >
                                {/* Glow effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.planetColor} opacity-0 group-hover:opacity-30 rounded-2xl blur-xl transition-opacity duration-500`} />

                                {/* Featured Badge */}
                                {project.featured && (
                                    <motion.div
                                        className="absolute -top-3 -right-3 z-20"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.5 + index * 0.1 }}
                                    >
                                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                            Featured
                                        </div>
                                    </motion.div>
                                )}

                                <div className="relative z-10">
                                    {/* Project Icon */}
                                    <motion.div
                                        className="text-6xl mb-6 text-center"
                                        whileHover={{
                                            scale: 1.2,
                                            rotate: [0, 10, -10, 0],
                                        }}
                                        transition={{
                                            duration: 0.8,
                                            type: "spring",
                                            stiffness: 200,
                                        }}
                                    >
                                        {project.image}
                                    </motion.div>

                                    <h3 className="text-2xl font-bold text-white mb-3 text-center">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-300 dark:text-gray-400 text-center leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6 justify-center">
                                        {project.tags.map((tag) => (
                                            <motion.span
                                                key={tag}
                                                className="px-3 py-1 bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-full text-sm text-gray-300 dark:text-gray-400"
                                                whileHover={{
                                                    scale: 1.05,
                                                    backgroundColor: "rgba(59, 130, 246, 0.2)",
                                                }}
                                            >
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex justify-center space-x-4">
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white/10 dark:bg-black/20 hover:bg-white/20 dark:hover:bg-black/30 border border-white/20 dark:border-white/10 rounded-full text-white transition-all duration-300"
                                            whileHover={{
                                                scale: 1.1,
                                                rotate: 5,
                                                backgroundColor: "rgba(0, 0, 0, 0.3)",
                                            }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <Github className="w-5 h-5" />
                                        </motion.a>

                                        <motion.a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-600/30 hover:to-purple-600/30 border border-blue-400/30 hover:border-blue-400/50 rounded-full text-white transition-all duration-300"
                                            whileHover={{
                                                scale: 1.1,
                                                rotate: -5,
                                            }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </motion.a>
                                    </div>
                                </div>

                                {/* Floating satellites */}
                                <motion.div
                                    className="absolute -top-2 -right-2 w-3 h-3 bg-blue-400/60 rounded-full"
                                    animate={{
                                        rotate: [0, 360],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />
                                <motion.div
                                    className="absolute -bottom-2 -left-2 w-2 h-2 bg-purple-400/60 rounded-full"
                                    animate={{
                                        rotate: [360, 0],
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <motion.div
                        variants={itemVariants}
                        className="relative p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 dark:border-white/5 rounded-2xl max-w-2xl mx-auto"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Want to See More?
                            </h3>

                            <p className="text-lg text-gray-300 dark:text-gray-300 mb-6">
                                Check out my GitHub for more projects and open-source contributions.
                            </p>

                            <motion.a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-600/30 hover:to-purple-600/30 border border-blue-400/30 hover:border-blue-400/50 rounded-full text-white font-medium transition-all duration-300 inline-flex items-center space-x-3"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Github className="w-5 h-5" />
                                <span className="relative z-10">View All Projects</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

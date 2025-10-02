"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export function ProjectsSection() {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
            image: "/api/placeholder/400/250",
            technologies: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
            github: "https://github.com",
            demo: "https://demo.com",
            featured: true,
        },
        {
            id: 2,
            title: "AI-Powered Analytics",
            description: "Machine learning dashboard for data visualization and predictive analytics with interactive charts.",
            image: "/api/placeholder/400/250",
            technologies: ["React", "D3.js", "Python", "TensorFlow"],
            github: "https://github.com",
            demo: "https://demo.com",
            featured: true,
        },
        {
            id: 3,
            title: "Social Media App",
            description: "Real-time social platform with messaging, file sharing, and collaborative features.",
            image: "/api/placeholder/400/250",
            technologies: ["React Native", "Socket.io", "MongoDB", "Express"],
            github: "https://github.com",
            demo: "https://demo.com",
            featured: false,
        },
        {
            id: 4,
            title: "Blockchain Wallet",
            description: "Secure cryptocurrency wallet with portfolio tracking and DeFi integration capabilities.",
            image: "/api/placeholder/400/250",
            technologies: ["Vue.js", "Web3.js", "Solidity", "IPFS"],
            github: "https://github.com",
            demo: "https://demo.com",
            featured: false,
        },
        {
            id: 5,
            title: "IoT Dashboard",
            description: "Real-time monitoring system for IoT devices with data visualization and alerting.",
            image: "/api/placeholder/400/250",
            technologies: ["Angular", "Node.js", "InfluxDB", "MQTT"],
            github: "https://github.com",
            demo: "https://demo.com",
            featured: false,
        },
        {
            id: 6,
            title: "Learning Platform",
            description: "Educational platform with course management, progress tracking, and interactive content.",
            image: "/api/placeholder/400/250",
            technologies: ["Next.js", "Supabase", "Stripe", "Framer Motion"],
            github: "https://github.com",
            demo: "https://demo.com",
            featured: false,
        },
    ];

    const featuredProjects = projects.filter(project => project.featured);
    const otherProjects = projects.filter(project => !project.featured);

    return (
        <section id="projects" className="relative py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-4xl md:text-6xl font-bold mb-6"
                        animate={{
                            textShadow: [
                                "0 0 20px #ff00ff, 0 0 40px #ff00ff",
                                "0 0 20px #00ffff, 0 0 40px #00ffff",
                                "0 0 20px #ff00ff, 0 0 40px #ff00ff",
                            ],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        style={{
                            background: "linear-gradient(45deg, #ff00ff, #00ffff, #ff8000)",
                            backgroundSize: "400% 400%",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Featured Projects
                    </motion.h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        A showcase of my latest work featuring cutting-edge technologies and innovative solutions
                    </p>
                </motion.div>

                {/* Featured Projects */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="relative group"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            onHoverStart={() => setHoveredProject(project.id)}
                            onHoverEnd={() => setHoveredProject(null)}
                        >
                            {/* Project Card */}
                            <div className="relative bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl overflow-hidden">
                                {/* Holographic Border */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-pink-500/20 to-purple-500/20 opacity-0"
                                    animate={{
                                        opacity: hoveredProject === project.id ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                />

                                {/* Project Image */}
                                <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-cyan-500/20" />

                                    {/* Scan Lines */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"
                                        animate={{
                                            y: ["-100%", "100%"],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    />

                                    {/* Project Icon/Placeholder */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <motion.div
                                            className="w-20 h-20 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-2xl flex items-center justify-center text-2xl"
                                            animate={{
                                                rotate: hoveredProject === project.id ? [0, 5, -5, 0] : 0,
                                                scale: hoveredProject === project.id ? [1, 1.1, 1] : 1,
                                            }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {project.id === 1 ? "🛒" : "📊"}
                                        </motion.div>
                                    </div>

                                    {/* Featured Badge */}
                                    <motion.div
                                        className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-pink-600 to-purple-600 text-white text-sm rounded-full"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 1 + index * 0.2 }}
                                    >
                                        Featured
                                    </motion.div>
                                </div>

                                {/* Project Content */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-300 leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.map((tech) => (
                                            <motion.span
                                                key={tech}
                                                className="px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-600 text-gray-200 text-sm rounded-full border border-gray-600/50"
                                                whileHover={{
                                                    scale: 1.05,
                                                    background: "linear-gradient(45deg, #ff00ff, #00ffff)",
                                                    color: "white",
                                                }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>

                                    {/* Project Links */}
                                    <div className="flex gap-4">
                                        <motion.button
                                            className="flex-1 py-3 bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-lg font-medium hover:from-gray-700 hover:to-gray-600 transition-all duration-300 border border-gray-600/50"
                                            whileHover={{
                                                scale: 1.02,
                                                borderColor: "rgba(0, 255, 255, 0.5)",
                                                boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
                                            }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            View Code
                                        </motion.button>

                                        <motion.button
                                            className="flex-1 py-3 bg-gradient-to-r from-cyan-600 to-pink-600 text-white rounded-lg font-medium hover:from-pink-600 hover:to-cyan-600 transition-all duration-300"
                                            whileHover={{
                                                scale: 1.02,
                                                boxShadow: "0 0 20px rgba(255, 0, 255, 0.4)",
                                            }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Live Demo
                                        </motion.button>
                                    </div>
                                </div>

                                {/* Pulsing Glow Effect */}
                                <motion.div
                                    className="absolute inset-0 border-2 border-cyan-400/0 rounded-2xl"
                                    animate={{
                                        borderColor: hoveredProject === project.id
                                            ? ["rgba(0, 255, 255, 0)", "rgba(0, 255, 255, 0.8)", "rgba(0, 255, 255, 0)"]
                                            : "rgba(0, 255, 255, 0)",
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: hoveredProject === project.id ? Infinity : 0,
                                        ease: "easeInOut",
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Other Projects Grid */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">Other Projects</h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {otherProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="relative group"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                onHoverStart={() => setHoveredProject(project.id)}
                                onHoverEnd={() => setHoveredProject(null)}
                            >
                                <div className="relative bg-black/40 backdrop-blur-md border border-purple-500/30 rounded-xl p-6 h-full">
                                    {/* Mini Image Placeholder */}
                                    <div className="relative h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-4 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-lg">
                                                {project.id === 3 ? "📱" : project.id === 4 ? "₿" : project.id === 5 ? "📡" : "🎓"}
                                            </div>
                                        </div>
                                    </div>

                                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                                        {project.title}
                                    </h4>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                        {project.description}
                                    </p>

                                    {/* Mini Tech Stack */}
                                    <div className="flex flex-wrap gap-1 mb-4">
                                        {project.technologies.slice(0, 3).map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded border border-gray-700/50"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded border border-gray-700/50">
                                                +{project.technologies.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    {/* Mini Links */}
                                    <div className="flex gap-2">
                                        <motion.button
                                            className="flex-1 py-2 bg-gray-800/50 text-gray-300 rounded text-sm hover:bg-gray-700/50 transition-colors border border-gray-700/50"
                                            whileHover={{
                                                borderColor: "rgba(255, 0, 255, 0.5)",
                                                boxShadow: "0 0 10px rgba(255, 0, 255, 0.2)",
                                            }}
                                        >
                                            Code
                                        </motion.button>
                                        <motion.button
                                            className="flex-1 py-2 bg-gradient-to-r from-purple-600/80 to-pink-600/80 text-white rounded text-sm transition-all duration-300"
                                            whileHover={{
                                                boxShadow: "0 0 15px rgba(255, 0, 255, 0.4)",
                                            }}
                                        >
                                            Demo
                                        </motion.button>
                                    </div>

                                    {/* Hover Glow */}
                                    <motion.div
                                        className="absolute inset-0 border border-purple-400/0 rounded-xl"
                                        animate={{
                                            borderColor: hoveredProject === project.id
                                                ? ["rgba(255, 0, 255, 0)", "rgba(255, 0, 255, 0.6)", "rgba(255, 0, 255, 0)"]
                                                : "rgba(255, 0, 255, 0)",
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: hoveredProject === project.id ? Infinity : 0,
                                        }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* View All Projects Button */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.button
                        className="px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full text-white font-semibold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 30px rgba(255, 0, 255, 0.6)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        style={{
                            backgroundSize: "200% 200%",
                        }}
                    >
                        View All Projects
                    </motion.button>
                </motion.div>

                {/* Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <motion.div
                            key={`project-bg-${i}`}
                            className="absolute w-1 h-1 bg-pink-400 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                boxShadow: "0 0 10px #ff00ff",
                            }}
                            animate={{
                                opacity: [0, 1, 0],
                                scale: [0, 1.5, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                delay: Math.random() * 4,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

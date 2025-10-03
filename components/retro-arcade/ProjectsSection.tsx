"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { PixelCoin } from "./PixelCoin";

export function ProjectsSection() {
    const [activeProject, setActiveProject] = useState<number | null>(null);

    const projects = [
        {
            id: 1,
            title: "SPACE INVADERS CMS",
            subtitle: "React Content Management System",
            description: "A powerful CMS built with React and Node.js featuring real-time collaboration, drag-and-drop interface, and advanced content analytics.",
            tech: ["React", "Node.js", "MongoDB", "Socket.io"],
            features: ["Real-time editing", "Drag & drop", "Analytics dashboard", "Multi-user support"],
            demo: "https://demo.example.com",
            github: "https://github.com/example/space-invaders-cms",
            status: "LIVE",
            color: "from-cyan-400 to-cyan-600",
            icon: "🚀",
        },
        {
            id: 2,
            title: "PAC-MAN E-COMMERCE",
            subtitle: "Full-Stack Online Store",
            description: "Modern e-commerce platform with AI-powered recommendations, cryptocurrency payments, and immersive shopping experience.",
            tech: ["Next.js", "Stripe", "PostgreSQL", "TensorFlow"],
            features: ["AI recommendations", "Crypto payments", "AR previews", "Inventory management"],
            demo: "https://demo.example.com",
            github: "https://github.com/example/pacman-store",
            status: "LIVE",
            color: "from-yellow-400 to-yellow-600",
            icon: "🕹️",
        },
        {
            id: 3,
            title: "TETRIS DASHBOARD",
            subtitle: "Business Intelligence Platform",
            description: "Advanced analytics dashboard with real-time data visualization, custom reporting, and automated insights for business intelligence.",
            tech: ["Vue.js", "D3.js", "Python", "Redis"],
            features: ["Real-time charts", "Custom reports", "Data export", "API integrations"],
            demo: "https://demo.example.com",
            github: "https://github.com/example/tetris-dashboard",
            status: "BETA",
            color: "from-magenta-400 to-magenta-600",
            icon: "📊",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                bounce: 0.4,
                duration: 0.8,
            },
        },
    };

    return (
        <section
            id="projects"
            className="relative py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `
              radial-gradient(circle at 20% 80%, #00ffff 2px, transparent 2px),
              radial-gradient(circle at 80% 20%, #ff00ff 2px, transparent 2px),
              radial-gradient(circle at 40% 40%, #ffff00 1px, transparent 1px)
            `,
                        backgroundSize: "80px 80px, 80px 80px, 40px 40px",
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-magenta-400 to-yellow-400 bg-clip-text text-transparent">
                        GAME LIBRARY
                    </h2>
                    <p className="text-xl text-gray-300 font-mono tracking-wide max-w-3xl mx-auto">
                        Collection of epic quests completed - each project a unique adventure in code and creativity
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            className="relative group"
                            whileHover={{ y: -8 }}
                        >
                            {/* Project Card */}
                            <div className="relative h-full bg-gray-900/80 border-2 border-gray-700 rounded-lg backdrop-blur-sm overflow-hidden">
                                {/* Glowing border effect */}
                                <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                {/* Project Header */}
                                <div className="relative z-10 p-6 border-b border-gray-700">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center space-x-3">
                                            <span className="text-2xl">{project.icon}</span>
                                            <div>
                                                <h3 className={`text-xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                                                    {project.title}
                                                </h3>
                                                <p className="text-sm text-gray-400 font-mono">
                                                    {project.subtitle}
                                                </p>
                                            </div>
                                        </div>
                                        <div className={`px-2 py-1 bg-gradient-to-r ${project.color} text-black text-xs font-bold rounded`}>
                                            {project.status}
                                        </div>
                                    </div>

                                    {/* Status Bar */}
                                    <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
                                        <motion.div
                                            className={`bg-gradient-to-r ${project.color} h-2 rounded-full`}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            transition={{ duration: 1, delay: index * 0.2 }}
                                            viewport={{ once: true }}
                                        />
                                    </div>
                                </div>

                                {/* Project Description */}
                                <div className="relative z-10 p-6">
                                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="mb-4">
                                        <h4 className="text-sm font-bold text-yellow-400 mb-2 font-mono">
                                            TECH STACK:
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, techIndex) => (
                                                <motion.span
                                                    key={techIndex}
                                                    className={`px-2 py-1 bg-gradient-to-r ${project.color} text-black text-xs font-bold rounded`}
                                                    initial={{ scale: 0 }}
                                                    whileInView={{ scale: 1 }}
                                                    transition={{ delay: index * 0.1 + techIndex * 0.1 }}
                                                    viewport={{ once: true }}
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="mb-6">
                                        <h4 className="text-sm font-bold text-cyan-400 mb-2 font-mono">
                                            POWER-UPS:
                                        </h4>
                                        <ul className="space-y-1">
                                            {project.features.map((feature, featureIndex) => (
                                                <motion.li
                                                    key={featureIndex}
                                                    className="text-xs text-gray-400 flex items-center"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                                                    viewport={{ once: true }}
                                                >
                                                    <span className="text-green-400 mr-2">▲</span>
                                                    {feature}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex space-x-3">
                                        <motion.button
                                            className={`flex-1 py-2 bg-gradient-to-r ${project.color} text-black font-bold text-sm tracking-wider hover:shadow-lg transition-all`}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            PLAY DEMO
                                        </motion.button>
                                        <motion.button
                                            className="px-3 py-2 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 transition-all"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <span className="text-xs">{"</>"}</span>
                                        </motion.button>
                                    </div>
                                </div>

                                {/* Hover Effect Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Achievement Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <div className="relative max-w-4xl mx-auto">
                        <div className="relative p-8 bg-gray-900/50 border-2 border-gray-600 rounded-lg backdrop-blur-sm">
                            {/* Glowing border */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-magenta-400 to-yellow-400 rounded-lg opacity-20" />

                            <div className="relative z-10 text-center">
                                <div className="flex items-center justify-center mb-6">
                                    <PixelCoin size={32} animate={false} />
                                    <h3 className="text-2xl font-bold text-cyan-400 ml-3 font-mono tracking-wider">
                                        ACHIEVEMENTS UNLOCKED
                                    </h3>
                                    <PixelCoin size={32} animate={false} className="ml-3" />
                                </div>

                                <div className="grid md:grid-cols-3 gap-6">
                                    {[
                                        { icon: "🏆", title: "100+ PROJECTS", desc: "Completed and deployed" },
                                        { icon: "⭐", title: "50+ CLIENTS", desc: "Happy customers served" },
                                        { icon: "🚀", title: "5+ YEARS", desc: "Professional experience" },
                                    ].map((achievement, index) => (
                                        <motion.div
                                            key={index}
                                            className="text-center"
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            transition={{ delay: index * 0.2, type: "spring", bounce: 0.4 }}
                                            viewport={{ once: true }}
                                        >
                                            <div className="text-4xl mb-2">{achievement.icon}</div>
                                            <div className="text-2xl font-bold text-yellow-400 font-mono">
                                                {achievement.title}
                                            </div>
                                            <div className="text-sm text-gray-400">
                                                {achievement.desc}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

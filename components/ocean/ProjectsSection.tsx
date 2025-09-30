"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    featured: boolean;
}

interface ProjectsSectionProps {
    projects?: Project[];
}

export default function ProjectsSection({
    projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
            image: "/api/placeholder/600/400",
            technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com",
            featured: true,
        },
        {
            id: 2,
            title: "Task Management App",
            description: "A collaborative task management application built with Next.js and TypeScript. Real-time updates and team collaboration features.",
            image: "/api/placeholder/600/400",
            technologies: ["Next.js", "TypeScript", "Socket.io", "MongoDB"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com",
            featured: true,
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description: "A beautiful weather dashboard with data visualization and location-based forecasts. Built with React and integrated with weather APIs.",
            image: "/api/placeholder/600/400",
            technologies: ["React", "D3.js", "Weather API", "CSS3"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com",
            featured: false,
        },
        {
            id: 4,
            title: "Social Media App",
            description: "A social media platform with real-time messaging, post sharing, and user interactions. Built with modern web technologies.",
            image: "/api/placeholder/600/400",
            technologies: ["Vue.js", "Express", "Socket.io", "Redis"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com",
            featured: false,
        },
        {
            id: 5,
            title: "Portfolio Website",
            description: "A responsive portfolio website showcasing creative work with smooth animations and modern design principles.",
            image: "/api/placeholder/600/400",
            technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com",
            featured: false,
        },
        {
            id: 6,
            title: "Learning Platform",
            description: "An online learning platform with video streaming, progress tracking, and interactive quizzes for students.",
            image: "/api/placeholder/600/400",
            technologies: ["React", "Node.js", "Video.js", "MySQL"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com",
            featured: false,
        },
    ]
}: ProjectsSectionProps) {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const [filter, setFilter] = useState<"all" | "featured">("all");

    const filteredProjects = filter === "featured"
        ? projects.filter(project => project.featured)
        : projects;

    return (
        <section className="py-20 px-6 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-slate-800 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                {/* Floating sea creatures */}
                <motion.div
                    className="absolute top-20 right-20 text-5xl opacity-20 dark:opacity-40"
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    🐙
                </motion.div>

                <motion.div
                    className="absolute bottom-40 left-16 text-4xl opacity-15 dark:opacity-35"
                    animate={{
                        x: [0, 30, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                >
                    🐠
                </motion.div>

                {/* Coral reef background pattern */}
                <motion.div
                    className="absolute inset-0 opacity-5 dark:opacity-10"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306b6d4' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                    animate={{
                        backgroundPosition: ["0px 0px", "60px 60px"],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 dark:from-cyan-400 dark:via-blue-400 dark:to-teal-400 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        Featured Projects
                    </motion.h2>

                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true }}
                    />

                    <motion.p
                        className="text-lg text-slate-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        A collection of projects that showcase my skills in full-stack development,
                        from concept to deployment.
                    </motion.p>
                </motion.div>

                {/* Filter Buttons */}
                <motion.div
                    className="flex justify-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className="flex bg-white/20 dark:bg-slate-800/20 backdrop-blur-sm rounded-full p-2 border border-cyan-200/30 dark:border-cyan-800/30">
                        <motion.button
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${filter === "all"
                                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
                                : "text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400"
                                }`}
                            onClick={() => setFilter("all")}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            All Projects
                        </motion.button>
                        <motion.button
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${filter === "featured"
                                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
                                : "text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400"
                                }`}
                            onClick={() => setFilter("featured")}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Featured
                        </motion.button>
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="relative group"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                            onHoverStart={() => setHoveredProject(project.id)}
                            onHoverEnd={() => setHoveredProject(null)}
                        >
                            {/* Coral reef-inspired project card */}
                            <motion.div
                                className="relative bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-3xl overflow-hidden border border-cyan-200/50 dark:border-cyan-800/50 shadow-xl"
                                whileHover={{
                                    scale: 1.05,
                                    rotateY: 5,
                                    z: 50,
                                }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    transformStyle: "preserve-3d",
                                }}
                            >
                                {/* Project Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20"
                                        animate={{
                                            background: hoveredProject === project.id
                                                ? [
                                                    "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(16, 185, 129, 0.2))",
                                                    "linear-gradient(225deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                                                    "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(16, 185, 129, 0.2))",
                                                ]
                                                : "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(16, 185, 129, 0.2))",
                                        }}
                                        transition={{
                                            duration: hoveredProject === project.id ? 3 : 0.3,
                                            repeat: hoveredProject === project.id ? Infinity : 0,
                                            ease: "easeInOut",
                                        }}
                                    />

                                    {/* Placeholder for project image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-30">
                                        🚀
                                    </div>

                                    {/* Featured Badge */}
                                    {project.featured && (
                                        <motion.div
                                            className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 1 + index * 0.1, type: "spring", stiffness: 200 }}
                                        >
                                            Featured
                                        </motion.div>
                                    )}

                                    {/* Hover overlay */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        animate={{
                                            opacity: hoveredProject === project.id ? 1 : 0,
                                        }}
                                    />
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    <motion.h3
                                        className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3"
                                        animate={{
                                            x: hoveredProject === project.id ? [0, 2, 0] : 0,
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: hoveredProject === project.id ? Infinity : 0,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        {project.title}
                                    </motion.h3>

                                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, techIndex) => (
                                            <motion.span
                                                key={tech}
                                                className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-xs font-semibold"
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                transition={{
                                                    delay: 1.2 + index * 0.1 + techIndex * 0.05,
                                                    type: "spring",
                                                    stiffness: 200
                                                }}
                                                viewport={{ once: true }}
                                                whileHover={{
                                                    scale: 1.1,
                                                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                                                }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <motion.div
                                        className="flex gap-3"
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: hoveredProject === project.id ? 1 : 0,
                                            y: hoveredProject === project.id ? 0 : 10,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {project.liveUrl && (
                                            <motion.a
                                                href={project.liveUrl}
                                                className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-2 px-4 rounded-lg text-sm font-semibold text-center"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                Live Demo
                                            </motion.a>
                                        )}
                                        {project.githubUrl && (
                                            <motion.a
                                                href={project.githubUrl}
                                                className="flex-1 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 py-2 px-4 rounded-lg text-sm font-semibold text-center"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                Code
                                            </motion.a>
                                        )}
                                    </motion.div>
                                </div>

                                {/* Animated border */}
                                <motion.div
                                    className="absolute inset-0 rounded-3xl border-2 border-cyan-400/0"
                                    animate={{
                                        borderColor: hoveredProject === project.id
                                            ? "rgba(59, 130, 246, 0.5)"
                                            : "rgba(59, 130, 246, 0)",
                                    }}
                                    transition={{ duration: 0.3 }}
                                />

                                {/* Floating particles on hover */}
                                {hoveredProject === project.id && (
                                    <>
                                        {Array.from({ length: 8 }).map((_, i) => {
                                            // Fixed positions for particles to prevent hydration mismatch
                                            const particlePositions = [
                                                { left: "25%", top: "25%" }, { left: "75%", top: "30%" },
                                                { left: "45%", top: "70%" }, { left: "80%", top: "20%" },
                                                { left: "30%", top: "80%" }, { left: "70%", top: "75%" },
                                                { left: "20%", top: "50%" }, { left: "85%", top: "45%" }
                                            ];

                                            const pos = particlePositions[i] || { left: "50%", top: "50%" };

                                            return (
                                                <motion.div
                                                    key={i}
                                                    className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                                                    style={{
                                                        left: pos.left,
                                                        top: pos.top,
                                                    }}
                                                    initial={{ scale: 0, opacity: 0 }}
                                                    animate={{
                                                        scale: [0, 1, 0],
                                                        opacity: [0, 1, 0],
                                                        y: [0, -30],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        delay: i * 0.1,
                                                        ease: "easeOut",
                                                    }}
                                                />
                                            );
                                        })}
                                    </>
                                )}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

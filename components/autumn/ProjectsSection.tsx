"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { useState } from "react";

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    demoUrl?: string;
    githubUrl?: string;
    featured: boolean;
}

export function ProjectsSection() {
    const { theme } = useTheme();
    const [filter, setFilter] = useState("all");

    const projects: Project[] = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and inventory management.",
            image: "🛒",
            tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
            demoUrl: "#",
            githubUrl: "#",
            featured: true,
        },
        {
            id: 2,
            title: "Task Management App",
            description: "A collaborative task management application built with Next.js and TypeScript. Real-time updates with Socket.io and drag-and-drop functionality.",
            image: "📋",
            tags: ["Next.js", "TypeScript", "Socket.io", "MongoDB"],
            demoUrl: "#",
            githubUrl: "#",
            featured: true,
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description: "A responsive weather dashboard with beautiful data visualizations. Built with React and integrated with multiple weather APIs.",
            image: "🌤️",
            tags: ["React", "D3.js", "REST APIs", "CSS3"],
            demoUrl: "#",
            githubUrl: "#",
            featured: false,
        },
        {
            id: 4,
            title: "Social Media Analytics",
            description: "Analytics dashboard for social media management. Track engagement, growth metrics, and generate comprehensive reports.",
            image: "📊",
            tags: ["Vue.js", "Python", "FastAPI", "Chart.js"],
            demoUrl: "#",
            githubUrl: "#",
            featured: false,
        },
        {
            id: 5,
            title: "Recipe Sharing Platform",
            description: "A community-driven recipe sharing platform with user-generated content, ratings, and social features.",
            image: "🍳",
            tags: ["React", "Express.js", "MongoDB", "AWS"],
            demoUrl: "#",
            githubUrl: "#",
            featured: false,
        },
        {
            id: 6,
            title: "Fitness Tracker",
            description: "Mobile-responsive fitness tracking application with workout planning, progress tracking, and social challenges.",
            image: "💪",
            tags: ["React Native", "Node.js", "PostgreSQL", "JWT"],
            demoUrl: "#",
            githubUrl: "#",
            featured: false,
        },
    ];

    const filteredProjects = filter === "all"
        ? projects
        : projects.filter(project => project.featured === (filter === "featured"));

    const categories = [
        { id: "all", label: "All Projects", icon: "🎯" },
        { id: "featured", label: "Featured", icon: "⭐" },
    ];

    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-amber-900 dark:text-amber-100 mb-6">
                        Harvest of Projects
                    </h2>
                    <p className="text-lg text-amber-700 dark:text-amber-300 max-w-3xl mx-auto">
                        Each project is a seed planted with care, nurtured through challenges, and harvested with pride
                    </p>
                </motion.div>

                {/* Filter Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex justify-center mb-12"
                >
                    <div className="flex space-x-4 bg-amber-100 dark:bg-slate-800 p-2 rounded-full">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setFilter(category.id)}
                                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${filter === category.id
                                        ? "bg-amber-600 text-white shadow-lg"
                                        : "text-amber-700 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-slate-700"
                                    }`}
                            >
                                <span>{category.icon}</span>
                                <span>{category.label}</span>
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group relative"
                        >
                            {/* Project Card - Styled as Harvest Basket */}
                            <div className="relative bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20 rounded-3xl p-6 border-2 border-amber-200 dark:border-amber-800 overflow-hidden">
                                {/* Basket Weave Pattern */}
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute inset-0" style={{
                                        backgroundImage: `repeating-linear-gradient(
                      0deg,
                      transparent,
                      transparent 2px,
                      rgba(180, 83, 9, 0.1) 2px,
                      rgba(180, 83, 9, 0.1) 4px
                    ), repeating-linear-gradient(
                      90deg,
                      transparent,
                      transparent 2px,
                      rgba(180, 83, 9, 0.1) 2px,
                      rgba(180, 83, 9, 0.1) 4px
                    )`
                                    }} />
                                </div>

                                {/* Featured Badge */}
                                {project.featured && (
                                    <div className="absolute top-4 right-4 z-10">
                                        <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                                            ⭐ Featured
                                        </span>
                                    </div>
                                )}

                                {/* Project Icon */}
                                <div className="text-6xl mb-4 text-center">
                                    {project.image}
                                </div>

                                {/* Project Content */}
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-3">
                                        {project.title}
                                    </h3>

                                    <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed mb-4 line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 bg-amber-200 dark:bg-amber-800/50 text-amber-800 dark:text-amber-200 text-xs rounded-full border border-amber-300 dark:border-amber-700"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex space-x-3">
                                        {project.demoUrl && (
                                            <motion.a
                                                href={project.demoUrl}
                                                className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-sm font-medium rounded-full hover:from-amber-700 hover:to-orange-700 transition-all duration-300"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                Live Demo 🚀
                                            </motion.a>
                                        )}

                                        {project.githubUrl && (
                                            <motion.a
                                                href={project.githubUrl}
                                                className="flex-1 text-center px-4 py-2 border border-amber-600 dark:border-amber-400 text-amber-700 dark:text-amber-300 text-sm font-medium rounded-full hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-all duration-300"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                Code 📁
                                            </motion.a>
                                        )}
                                    </div>
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-orange-400/0 to-amber-400/0 group-hover:from-amber-400/10 group-hover:via-orange-400/10 group-hover:to-amber-400/10 transition-all duration-500 rounded-3xl" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Decorative Elements */}
                <motion.div
                    className="absolute top-10 left-10 text-5xl opacity-10"
                    animate={{
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    🍁
                </motion.div>

                <motion.div
                    className="absolute bottom-10 right-10 text-4xl opacity-10"
                    animate={{
                        rotate: [0, -3, 3, 0],
                        y: [0, 8, -8, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 3,
                    }}
                >
                    🌾
                </motion.div>
            </div>
        </section>
    );
}

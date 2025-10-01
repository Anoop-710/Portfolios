"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Tag } from "lucide-react";

export function ProjectsSection() {
    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include real-time inventory, payment processing, and admin dashboard.",
            image: "🛒",
            tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
            github: "#",
            demo: "#",
            date: "2024",
            featured: true,
        },
        {
            id: 2,
            title: "Task Management App",
            description: "Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
            image: "📋",
            tags: ["Next.js", "Socket.io", "MongoDB", "Tailwind"],
            github: "#",
            demo: "#",
            date: "2024",
            featured: true,
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description: "Beautiful weather dashboard with interactive maps, forecasts, and historical data visualization using modern web technologies.",
            image: "🌤️",
            tags: ["Vue.js", "D3.js", "Weather API", "PWA"],
            github: "#",
            demo: "#",
            date: "2023",
            featured: false,
        },
        {
            id: 4,
            title: "Social Media Analytics",
            description: "Comprehensive social media analytics platform with data visualization, sentiment analysis, and automated reporting features.",
            image: "📊",
            tags: ["React", "Python", "TensorFlow", "AWS"],
            github: "#",
            demo: "#",
            date: "2023",
            featured: false,
        },
        {
            id: 5,
            title: "Learning Management System",
            description: "Complete LMS with course creation, student progress tracking, video streaming, and interactive quizzes.",
            image: "🎓",
            tags: ["Next.js", "Prisma", "MySQL", "WebRTC"],
            github: "#",
            demo: "#",
            date: "2023",
            featured: false,
        },
        {
            id: 6,
            title: "Portfolio Website",
            description: "Responsive portfolio website with smooth animations, dark mode support, and optimized performance.",
            image: "💼",
            tags: ["React", "Framer Motion", "Tailwind", "Vercel"],
            github: "#",
            demo: "#",
            date: "2024",
            featured: false,
        },
    ];

    const featuredProjects = projects.filter(project => project.featured);
    const otherProjects = projects.filter(project => !project.featured);

    return (
        <section id="projects" className="py-20 relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 left-20 w-12 h-12 border border-amber-600/20 dark:border-amber-400/20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute bottom-20 right-20 w-16 h-16 border-2 border-amber-600/15 dark:border-amber-400/15"
                    animate={{ rotate: -360, scale: [1, 1.1, 1] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="inline-block px-4 py-2 bg-gradient-to-r from-amber-200 to-orange-200 dark:from-amber-800 dark:to-orange-800 text-amber-900 dark:text-amber-100 rounded-full text-sm font-medium mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        My Projects
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-900 via-orange-800 to-amber-900 dark:from-amber-100 dark:via-orange-200 dark:to-amber-100 bg-clip-text text-transparent">
                        Mechanical Masterpieces
                    </h2>
                    <p className="text-lg text-amber-700 dark:text-amber-300 max-w-3xl mx-auto leading-relaxed">
                        Each project is a carefully crafted machine, built with precision and attention to detail.
                        Explore my collection of digital inventions and innovations.
                    </p>
                </motion.div>

                {/* Featured Projects */}
                <div className="mb-16">
                    <motion.h3
                        className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-8 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        Featured Works
                    </motion.h3>

                    <div className="grid md:grid-cols-2 gap-8">
                        {featuredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="group relative"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                                whileHover={{ y: -10 }}
                            >
                                {/* Gear Plate Container */}
                                <div className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-slate-800 dark:via-slate-700 dark:to-slate-600 p-8 rounded-lg border-2 border-amber-600/40 dark:border-amber-400/40 shadow-xl overflow-hidden">

                                    {/* Gear decorations */}
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

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="text-4xl mb-4">{project.image}</div>
                                            <div className="flex gap-2">
                                                <motion.a
                                                    href={project.github}
                                                    className="p-2 bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200 rounded-full hover:bg-amber-300 dark:hover:bg-amber-700 transition-colors"
                                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                                    whileTap={{ scale: 0.9 }}
                                                >
                                                    <Github size={16} />
                                                </motion.a>
                                                <motion.a
                                                    href={project.demo}
                                                    className="p-2 bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200 rounded-full hover:bg-amber-300 dark:hover:bg-amber-700 transition-colors"
                                                    whileHover={{ scale: 1.1, rotate: -5 }}
                                                    whileTap={{ scale: 0.9 }}
                                                >
                                                    <ExternalLink size={16} />
                                                </motion.a>
                                            </div>
                                        </div>

                                        <h4 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-3">
                                            {project.title}
                                        </h4>

                                        <p className="text-amber-700 dark:text-amber-300 mb-4 leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag, tagIndex) => (
                                                <motion.span
                                                    key={tag}
                                                    className="px-3 py-1 bg-amber-200/50 dark:bg-amber-800/50 text-amber-800 dark:text-amber-200 rounded-full text-xs font-medium border border-amber-600/30 dark:border-amber-400/30"
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.6 + tagIndex * 0.1, duration: 0.4 }}
                                                >
                                                    {tag}
                                                </motion.span>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400">
                                            <Calendar size={14} />
                                            <span>{project.date}</span>
                                        </div>
                                    </div>

                                    {/* Hover overlay */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-orange-600/10 dark:from-amber-400/10 dark:to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        initial={false}
                                    />

                                    {/* Rotating border effect */}
                                    <motion.div
                                        className="absolute inset-0 rounded-lg border-2 border-amber-600/60 dark:border-amber-400/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        animate={{ rotate: [0, 5, -5, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Other Projects */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-8 text-center">
                        Other Projects
                    </h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {otherProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="group relative bg-gradient-to-br from-amber-50/80 to-orange-50/80 dark:from-slate-800/80 dark:to-slate-700/80 p-6 rounded-lg border border-amber-600/30 dark:border-amber-400/30 shadow-lg hover:shadow-xl transition-all duration-300"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                            >
                                {/* Mini gear decoration */}
                                <motion.div
                                    className="absolute -top-2 -right-2 w-4 h-4 border border-amber-600 dark:border-amber-400 rounded-full bg-amber-100 dark:bg-slate-800"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                />

                                <div className="text-2xl mb-3">{project.image}</div>
                                <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
                                    {project.title}
                                </h4>
                                <p className="text-sm text-amber-700 dark:text-amber-300 mb-3 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-1 mb-3">
                                    {project.tags.slice(0, 3).map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 bg-amber-200/30 dark:bg-amber-800/30 text-amber-800 dark:text-amber-200 rounded text-xs border border-amber-600/20 dark:border-amber-400/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400">
                                        <Calendar size={12} />
                                        <span>{project.date}</span>
                                    </div>

                                    <div className="flex gap-1">
                                        <motion.a
                                            href={project.github}
                                            className="p-1.5 bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200 rounded-full hover:bg-amber-300 dark:hover:bg-amber-700 transition-colors"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <Github size={12} />
                                        </motion.a>
                                        <motion.a
                                            href={project.demo}
                                            className="p-1.5 bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200 rounded-full hover:bg-amber-300 dark:hover:bg-amber-700 transition-colors"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <ExternalLink size={12} />
                                        </motion.a>
                                    </div>
                                </div>

                                {/* Subtle hover effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-orange-600/5 dark:from-amber-400/5 dark:to-orange-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    initial={false}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* View More CTA */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    <motion.button
                        className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Tag size={20} />
                        View All Projects
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}

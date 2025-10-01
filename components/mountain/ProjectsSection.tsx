"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include real-time inventory, payment processing, and admin dashboard.",
        image: "/api/placeholder/400/250",
        technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
        github: "https://github.com",
        demo: "https://demo.com",
        featured: true,
    },
    {
        id: 2,
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        image: "/api/placeholder/400/250",
        technologies: ["Next.js", "Socket.io", "MongoDB", "Tailwind"],
        github: "https://github.com",
        demo: "https://demo.com",
        featured: true,
    },
    {
        id: 3,
        title: "Weather Dashboard",
        description: "A responsive weather dashboard with beautiful data visualizations, location-based forecasts, and interactive maps integration.",
        image: "/api/placeholder/400/250",
        technologies: ["Vue.js", "D3.js", "OpenWeather API", "Chart.js"],
        github: "https://github.com",
        demo: "https://demo.com",
        featured: false,
    },
    {
        id: 4,
        title: "Social Media Platform",
        description: "A modern social media platform with real-time messaging, content sharing, and advanced user engagement features.",
        image: "/api/placeholder/400/250",
        technologies: ["React", "Express", "Socket.io", "Redis"],
        github: "https://github.com",
        demo: "https://demo.com",
        featured: false,
    },
    {
        id: 5,
        title: "Portfolio Website",
        description: "A responsive portfolio website with smooth animations, dark mode support, and optimized performance for showcasing creative work.",
        image: "/api/placeholder/400/250",
        technologies: ["Next.js", "Framer Motion", "Tailwind", "Vercel"],
        github: "https://github.com",
        demo: "https://demo.com",
        featured: false,
    },
    {
        id: 6,
        title: "Learning Management System",
        description: "A comprehensive LMS platform with course creation, student progress tracking, and interactive learning modules.",
        image: "/api/placeholder/400/250",
        technologies: ["React", "Python", "Django", "PostgreSQL"],
        github: "https://github.com",
        demo: "https://demo.com",
        featured: false,
    },
];

export function ProjectsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="projects" className="relative py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-orange-100 to-pink-100 dark:from-white dark:via-orange-200 dark:to-pink-200 bg-clip-text text-transparent drop-shadow-lg">
                        Featured Projects
                    </h2>
                    <p className="text-lg md:text-xl text-white dark:text-slate-400 max-w-3xl mx-auto drop-shadow-md">
                        A collection of projects that showcase my skills and passion for creating
                        innovative digital solutions.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="relative group"
                        >
                            {/* Mountain Peak Card Design */}
                            <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 dark:border-slate-700/20 shadow-lg hover:shadow-2xl transition-all duration-500">
                                {/* Featured Badge */}
                                {project.featured && (
                                    <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                        Featured
                                    </div>
                                )}

                                {/* Project Image with Mountain Peak Overlay */}
                                <div className="relative h-48 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent z-10" />
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={400}
                                        height={250}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />

                                    {/* Mountain Peak SVG Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 z-10">
                                        <svg
                                            viewBox="0 0 400 100"
                                            className="w-full h-full"
                                            preserveAspectRatio="xMidYEnd slice"
                                        >
                                            <path
                                                d="M0,100 L80,60 L160,80 L240,50 L320,70 L400,40 L400,100 Z"
                                                fill="url(#projectGradient)"
                                                opacity="0.9"
                                            />
                                            <defs>
                                                <linearGradient id="projectGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                    <stop offset="0%" stopColor="#64748b" className="dark:hidden" />
                                                    <stop offset="100%" stopColor="#94a3b8" className="dark:hidden" />
                                                    <stop offset="0%" stopColor="#334155" className="hidden dark:block" />
                                                    <stop offset="100%" stopColor="#475569" className="hidden dark:block" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-200 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 bg-orange-100 dark:bg-slate-700 text-orange-800 dark:text-orange-300 text-xs rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3">
                                        <motion.a
                                            href={project.github}
                                            className="flex-1 text-center px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors text-sm font-medium"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Code
                                        </motion.a>
                                        <motion.a
                                            href={project.demo}
                                            className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg hover:from-orange-600 hover:to-pink-600 transition-all text-sm font-medium"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Demo
                                        </motion.a>
                                    </div>
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-orange-500/5 group-hover:via-pink-500/5 group-hover:to-purple-500/5 transition-all duration-500 rounded-2xl" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View More Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center mt-12"
                >
                    <motion.button
                        className="px-8 py-4 border-2 border-orange-500 dark:border-orange-400 text-white dark:text-slate-300 font-semibold rounded-full hover:bg-orange-500 hover:text-white dark:hover:bg-orange-400 dark:hover:text-slate-900 transition-all duration-300 drop-shadow-md"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View All Projects
                    </motion.button>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute top-1/4 left-5 w-32 h-32 bg-gradient-to-br from-orange-300/10 to-pink-300/10 rounded-full blur-2xl" />
                <div className="absolute bottom-1/4 right-5 w-24 h-24 bg-gradient-to-br from-blue-300/10 to-purple-300/10 rounded-full blur-2xl" />
            </div>
        </section>
    );
}

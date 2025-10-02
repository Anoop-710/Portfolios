"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
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
        description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        image: "/api/placeholder/400/250",
        technologies: ["Next.js", "Socket.io", "MongoDB", "Tailwind"],
        github: "https://github.com",
        demo: "https://demo.com",
        featured: true,
    },
    {
        id: 3,
        title: "Weather Analytics Dashboard",
        description: "Real-time weather monitoring dashboard with data visualization, forecasting algorithms, and interactive maps for agricultural planning.",
        image: "/api/placeholder/400/250",
        technologies: ["Vue.js", "D3.js", "Python", "FastAPI"],
        github: "https://github.com",
        demo: "https://demo.com",
        featured: false,
    },
    {
        id: 4,
        title: "Social Media Analytics",
        description: "Comprehensive social media analytics platform with sentiment analysis, engagement tracking, and automated reporting features.",
        image: "/api/placeholder/400/250",
        technologies: ["React", "Python", "TensorFlow", "Redis"],
        github: "https://github.com",
        demo: "https://demo.com",
        featured: false,
    },
    {
        id: 5,
        title: "Learning Management System",
        description: "Full-featured LMS with course creation, student progress tracking, video streaming, and interactive quizzes for educational institutions.",
        image: "/api/placeholder/400/250",
        technologies: ["Next.js", "Prisma", "AWS", "PostgreSQL"],
        github: "https://github.com",
        demo: "https://demo.com",
        featured: false,
    },
    {
        id: 6,
        title: "IoT Device Manager",
        description: "IoT device management platform with real-time monitoring, firmware updates, data collection, and remote device control capabilities.",
        image: "/api/placeholder/400/250",
        technologies: ["React", "Node.js", "InfluxDB", "MQTT"],
        github: "https://github.com",
        demo: "https://demo.com",
        featured: false,
    },
];

export default function ProjectsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    return (
        <section id="projects" className="min-h-screen py-20 relative">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-slate-50 dark:from-slate-900 dark:to-amber-900/10">
                {/* Treasure map grid pattern */}
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={isInView ? { scale: 1, rotate: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                        className="inline-flex items-center justify-center w-20 h-20 bg-amber-100 dark:bg-amber-900/30 rounded-full mb-6 border-4 border-amber-600 dark:border-amber-400 relative"
                    >
                        <span className="text-3xl">💎</span>
                        {/* Golden glint effect */}
                        <motion.div
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 bg-gradient-to-tr from-transparent via-yellow-300/50 to-transparent rounded-full"
                        />
                    </motion.div>
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-800 to-amber-600 dark:from-amber-300 dark:to-amber-100 bg-clip-text text-transparent">
                        Treasure Collection
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        A curated collection of digital treasures, each project a testament to the art of code craftsmanship
                        and the relentless pursuit of technological excellence.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative"
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            {/* Treasure Map Card */}
                            <div className="relative bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-2xl border-4 border-amber-200 dark:border-amber-800 shadow-xl overflow-hidden">
                                {/* X Marks the Spot effect */}
                                {hoveredProject === project.id && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
                                    >
                                        <div className="relative">
                                            <motion.div
                                                animate={{ rotate: 45, scale: [1, 1.2, 1] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className="w-16 h-16 border-4 border-red-600 dark:border-red-400"
                                            >
                                                <motion.div
                                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                                    transition={{ duration: 1, repeat: Infinity }}
                                                    className="absolute inset-0 bg-red-600/20 dark:bg-red-400/20"
                                                />
                                            </motion.div>
                                            <motion.span
                                                animate={{ opacity: [0, 1, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                                className="absolute inset-0 flex items-center justify-center text-red-600 dark:text-red-400 font-bold text-xl"
                                            >
                                                ✕
                                            </motion.span>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Featured badge */}
                                {project.featured && (
                                    <motion.div
                                        initial={{ x: -100 }}
                                        animate={{ x: 0 }}
                                        className="absolute top-4 left-0 z-10 bg-gradient-to-r from-amber-600 to-amber-700 dark:from-amber-500 dark:to-amber-600 text-white px-3 py-1 rounded-r-lg text-sm font-bold shadow-lg"
                                    >
                                        ⭐ Featured
                                    </motion.div>
                                )}

                                {/* Project Image */}
                                <div className="relative h-48 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-amber-200/50 to-yellow-200/50 dark:from-amber-800/20 dark:to-yellow-800/20" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <motion.div
                                            animate={{ rotate: hoveredProject === project.id ? 360 : 0 }}
                                            transition={{ duration: 0.8 }}
                                            className="w-16 h-16 bg-amber-600/20 dark:bg-amber-400/20 rounded-full flex items-center justify-center"
                                        >
                                            <span className="text-2xl">🏴‍☠️</span>
                                        </motion.div>
                                    </div>

                                    {/* Golden glint overlay */}
                                    <motion.div
                                        animate={{
                                            opacity: hoveredProject === project.id ? [0, 0.3, 0] : 0,
                                            scale: hoveredProject === project.id ? [0.8, 1.2, 0.8] : 1,
                                        }}
                                        transition={{ duration: 1.5 }}
                                        className="absolute inset-0 bg-gradient-to-tr from-transparent via-yellow-300/40 to-transparent"
                                    />
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, techIndex) => (
                                            <motion.span
                                                key={tech}
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: 0.5 + techIndex * 0.1 }}
                                                className="px-3 py-1 bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 text-xs rounded-full border border-amber-300 dark:border-amber-700"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex space-x-3">
                                        <motion.a
                                            href={project.github}
                                            className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-center"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            View Code
                                        </motion.a>
                                        <motion.a
                                            href={project.demo}
                                            className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 dark:from-amber-500 dark:to-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all text-center"
                                            whileHover={{ scale: 1.02, y: -1 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Live Demo
                                        </motion.a>
                                    </div>
                                </div>

                                {/* Rope border decoration */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 rounded-3xl -z-10 opacity-10 group-hover:opacity-20 transition-opacity" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <motion.button
                        className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 dark:from-amber-500 dark:to-amber-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10 flex items-center space-x-2">
                            <span>Discover More Treasures</span>
                            <motion.span
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                🗺️
                            </motion.span>
                        </span>
                        <motion.div
                            animate={{ opacity: [0, 0.3, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg"
                        />
                    </motion.button>
                </motion.div>

                {/* Floating treasure elements */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-8 text-4xl opacity-20 hidden xl:block"
                >
                    💰
                </motion.div>
                <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-1/3 right-8 text-4xl opacity-20 hidden xl:block"
                >
                    🏆
                </motion.div>
            </div>
        </section>
    );
}

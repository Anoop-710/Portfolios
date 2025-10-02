"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    demoUrl?: string;
    githubUrl?: string;
    featured: boolean;
}

export default function ProjectsSection() {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    const projects: Project[] = [
        {
            id: 1,
            title: "Zen Meditation App",
            description: "A mindfulness application featuring guided meditations, breathing exercises, and serene Japanese-inspired design for daily wellness practice.",
            technologies: ["React Native", "TypeScript", "Node.js", "MongoDB"],
            image: "/api/placeholder/400/250",
            demoUrl: "#",
            githubUrl: "#",
            featured: true
        },
        {
            id: 2,
            title: "Tea Ceremony Website",
            description: "An elegant website for a traditional Japanese tea house, featuring reservation systems, virtual tea ceremony experiences, and cultural education.",
            technologies: ["Next.js", "Three.js", "Stripe", "Sanity CMS"],
            image: "/api/placeholder/400/250",
            demoUrl: "#",
            githubUrl: "#",
            featured: true
        },
        {
            id: 3,
            title: "Bonsai Care Tracker",
            description: "A comprehensive plant care application specifically designed for bonsai enthusiasts, with care schedules, growth tracking, and community features.",
            technologies: ["React", "Express.js", "PostgreSQL", "Socket.io"],
            image: "/api/placeholder/400/250",
            demoUrl: "#",
            githubUrl: "#",
            featured: false
        },
        {
            id: 4,
            title: "Origami Tutorial Platform",
            description: "Interactive origami learning platform with step-by-step video tutorials, pattern generators, and progress tracking for paper folding enthusiasts.",
            technologies: ["Vue.js", "Python", "Django", "WebRTC"],
            image: "/api/placeholder/400/250",
            demoUrl: "#",
            githubUrl: "#",
            featured: false
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <section id="projects" className="py-20 px-6 relative">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-50/30 to-rose-50/30 dark:from-transparent dark:via-slate-800/10 dark:to-slate-700/10" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 dark:from-slate-200 dark:via-slate-300 dark:to-slate-400 bg-clip-text text-transparent"
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        A collection of digital experiences that blend traditional Japanese aesthetics with modern technology,
                        each project crafted with attention to both functionality and serene beauty.
                    </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="relative group"
                            onHoverStart={() => setHoveredProject(project.id)}
                            onHoverEnd={() => setHoveredProject(null)}
                        >
                            {/* Project Card - Wooden Tablet Style */}
                            <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl border border-amber-200/50 dark:border-slate-600 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                                {/* Wood Grain Texture */}
                                <div className="absolute inset-0 opacity-10">
                                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <defs>
                                            <pattern id="woodGrain" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                                <path d="M0,2 Q5,0 10,2 Q15,4 20,2" stroke="currentColor" strokeWidth="0.3" fill="none" opacity="0.5" />
                                                <path d="M0,8 Q5,6 10,8 Q15,10 20,8" stroke="currentColor" strokeWidth="0.2" fill="none" opacity="0.3" />
                                                <path d="M0,14 Q5,12 10,14 Q15,16 20,14" stroke="currentColor" strokeWidth="0.3" fill="none" opacity="0.4" />
                                            </pattern>
                                        </defs>
                                        <rect width="100%" height="100%" fill="url(#woodGrain)" />
                                    </svg>
                                </div>

                                {/* Rice Paper Scroll Effect */}
                                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white/60 to-transparent dark:from-white/5 dark:to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/60 to-transparent dark:from-white/5 dark:to-transparent" />

                                {/* Scroll Rods */}
                                <div className="absolute top-0 bottom-0 left-2 w-1 bg-gradient-to-b from-amber-600 to-amber-800 dark:from-amber-400 dark:to-amber-600" />
                                <div className="absolute top-0 bottom-0 right-2 w-1 bg-gradient-to-b from-amber-600 to-amber-800 dark:from-amber-400 dark:to-amber-600" />

                                <div className="relative z-10 p-8">
                                    {/* Project Image */}
                                    <motion.div
                                        className="relative mb-6 overflow-hidden rounded-lg"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-lg flex items-center justify-center">
                                            <div className="text-6xl opacity-50">🎋</div>
                                        </div>

                                        {/* Image Overlay */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            animate={{
                                                opacity: hoveredProject === project.id ? 1 : 0
                                            }}
                                        />
                                    </motion.div>

                                    {/* Project Content */}
                                    <div className="space-y-4">
                                        <div className="flex items-start justify-between">
                                            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                                                {project.title}
                                            </h3>
                                            {project.featured && (
                                                <span className="px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs rounded-full">
                                                    Featured
                                                </span>
                                            )}
                                        </div>

                                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                                            {project.description}
                                        </p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, techIndex) => (
                                                <motion.span
                                                    key={tech}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                                                    className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs rounded-full shadow-sm"
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>

                                        {/* Project Links */}
                                        <motion.div
                                            className="flex gap-4 pt-4"
                                            initial={{ opacity: 0.7 }}
                                            animate={{
                                                opacity: hoveredProject === project.id ? 1 : 0.7
                                            }}
                                        >
                                            {project.demoUrl && (
                                                <motion.button
                                                    className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 transition-colors text-sm font-medium"
                                                    whileHover={{ x: 2 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                    Live Demo
                                                </motion.button>
                                            )}

                                            {project.githubUrl && (
                                                <motion.button
                                                    className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 transition-colors text-sm font-medium"
                                                    whileHover={{ x: 2 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                                                    </svg>
                                                    Source Code
                                                </motion.button>
                                            )}
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Hover Glow Effect */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-400/5 to-emerald-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    animate={{
                                        opacity: hoveredProject === project.id ? 1 : 0
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View More Projects CTA */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <motion.button
                        className="px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-600 dark:from-slate-600 dark:to-slate-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 20px 40px rgba(71, 85, 105, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View All Projects
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}

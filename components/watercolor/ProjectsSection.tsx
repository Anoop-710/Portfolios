"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import WatercolorBlot from "./WatercolorBlot";
import InkSplatter from "./InkSplatter";

export default function ProjectsSection() {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const [splatterTrigger, setSplatterTrigger] = useState(false);

    const handleSplatter = () => {
        setSplatterTrigger(!splatterTrigger);
    };

    const projects = [
        {
            id: 1,
            title: "Artisan Marketplace",
            description: "A watercolor-themed e-commerce platform connecting artists with art lovers worldwide. Features fluid animations and a color palette inspired by natural pigments.",
            image: "🎨",
            tags: ["React", "Node.js", "MongoDB", "Stripe"],
            gradient: "from-pink-500 to-rose-500",
            bgGradient: "from-pink-50 to-rose-50",
            demoUrl: "#",
            codeUrl: "#"
        },
        {
            id: 2,
            title: "Fluid Portfolio CMS",
            description: "Content management system with watercolor aesthetics and smooth transitions. Built for creative professionals who want to showcase their work beautifully.",
            image: "💧",
            tags: ["Next.js", "Sanity", "Tailwind", "Framer Motion"],
            gradient: "from-blue-500 to-cyan-500",
            bgGradient: "from-blue-50 to-cyan-50",
            demoUrl: "#",
            codeUrl: "#"
        },
        {
            id: 3,
            title: "Creative Agency Site",
            description: "Digital agency website featuring organic animations, watercolor backgrounds, and interactive elements that bring the brand story to life.",
            image: "🏢",
            tags: ["Vue.js", "GSAP", "WordPress", "SCSS"],
            gradient: "from-purple-500 to-indigo-500",
            bgGradient: "from-purple-50 to-indigo-50",
            demoUrl: "#",
            codeUrl: "#"
        }
    ];

    return (
        <section id="projects" className="py-20 relative overflow-hidden">
            {/* Background watercolor blots */}
            <div className="absolute inset-0 pointer-events-none">
                <WatercolorBlot
                    delay={4}
                    duration={16}
                    size={350}
                    color="rgba(34, 197, 94, 0.15)"
                    className="absolute top-10 right-0"
                />
                <WatercolorBlot
                    delay={10}
                    duration={22}
                    size={400}
                    color="rgba(168, 85, 247, 0.15)"
                    className="absolute bottom-10 left-0"
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                            Featured Projects
                        </span>
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                        Each project is crafted with attention to detail, combining beautiful design
                        with robust functionality to create memorable digital experiences.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="group relative"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            onHoverStart={() => setHoveredProject(index)}
                            onHoverEnd={() => setHoveredProject(null)}
                        >
                            <div className="relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-700 h-full">
                                {/* Project Image/Icon */}
                                <div className={`h-48 bg-gradient-to-br ${project.bgGradient} dark:${project.bgGradient} flex items-center justify-center relative overflow-hidden`}>
                                    <motion.div
                                        className="text-6xl"
                                        animate={hoveredProject === index ? {
                                            scale: [1, 1.2, 1],
                                            rotate: [0, 10, -10, 0]
                                        } : {}}
                                        transition={{ duration: 0.6 }}
                                    >
                                        {project.image}
                                    </motion.div>

                                    {/* Watercolor frame effect */}
                                    <motion.div
                                        className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                                        animate={hoveredProject === index ? {
                                            scale: [1, 1.05, 1]
                                        } : {}}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />

                                    {/* Ink splatter on hover */}
                                    {hoveredProject === index && (
                                        <motion.div
                                            className="absolute top-4 right-4"
                                            initial={{ scale: 0, rotate: 0 }}
                                            animate={{ scale: 1, rotate: 360 }}
                                        >
                                            <InkSplatter
                                                trigger={true}
                                                color="#3b82f6"
                                                size={80}
                                            />
                                        </motion.div>
                                    )}
                                </div>

                                {/* Project Content */}
                                <div className="p-6 space-y-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, tagIndex) => (
                                            <motion.span
                                                key={tagIndex}
                                                className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs rounded-full`}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.5 + tagIndex * 0.1 }}
                                                viewport={{ once: true }}
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </div>

                                    {/* Project Links */}
                                    <motion.div
                                        className="flex gap-4 pt-4"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.8 }}
                                        viewport={{ once: true }}
                                    >
                                        <motion.button
                                            className="flex-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Live Demo
                                        </motion.button>
                                        <motion.button
                                            className="flex-1 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            View Code
                                        </motion.button>
                                    </motion.div>
                                </div>

                                {/* Hover Effect Overlay */}
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View More Projects CTA */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <motion.button
                        onClick={handleSplatter}
                        className="relative px-8 py-4 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white font-semibold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden group"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10">View All Projects</span>
                        <InkSplatter
                            trigger={splatterTrigger}
                            color="#ffffff"
                            size={120}
                            className="absolute -top-4 -left-4"
                        />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}

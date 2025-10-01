"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
    {
        id: 1,
        title: "Nebula Analytics",
        description: "A cosmic data visualization platform that transforms complex datasets into stunning, interactive nebulae of information.",
        tech: ["React", "D3.js", "WebGL", "Python"],
        gradient: "from-purple-600 to-blue-600",
        glowColor: "rgba(147, 51, 234, 0.5)",
        stars: 5,
    },
    {
        id: 2,
        title: "Stellar Commerce",
        description: "An e-commerce platform with constellation-based navigation and meteor-shower animations for product reveals.",
        tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
        gradient: "from-blue-600 to-cyan-600",
        glowColor: "rgba(59, 130, 246, 0.5)",
        stars: 5,
    },
    {
        id: 3,
        title: "Quantum Portfolio",
        description: "A responsive portfolio generator that creates unique, animated layouts based on user preferences and industry.",
        tech: ["Vue.js", "Three.js", "Node.js", "MongoDB"],
        gradient: "from-cyan-600 to-emerald-600",
        glowColor: "rgba(16, 185, 129, 0.5)",
        stars: 4,
    },
    {
        id: 4,
        title: "Aurora Dashboard",
        description: "Real-time analytics dashboard with aurora borealis-inspired color schemes and smooth data flow animations.",
        tech: ["React", "Chart.js", "Socket.io", "Redis"],
        gradient: "from-emerald-600 to-purple-600",
        glowColor: "rgba(16, 185, 129, 0.5)",
        stars: 5,
    },
    {
        id: 5,
        title: "Cosmic Blog Engine",
        description: "A headless CMS with galaxy-themed UI and constellation-based content organization and navigation.",
        tech: ["Gatsby", "GraphQL", "Strapi", "Vercel"],
        gradient: "from-purple-600 to-pink-600",
        glowColor: "rgba(219, 39, 119, 0.5)",
        stars: 4,
    },
    {
        id: 6,
        title: "Meteor Messenger",
        description: "Real-time messaging app with shooting star animations and constellation-based user discovery features.",
        tech: ["React Native", "Socket.io", "Node.js", "AWS"],
        gradient: "from-pink-600 to-orange-600",
        glowColor: "rgba(219, 39, 119, 0.5)",
        stars: 5,
    },
];

export function ProjectsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    ref={ref}
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        Project Constellation
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        Each project is a star in my development universe, carefully crafted with
                        modern technologies and cosmic attention to detail.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="relative group"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            {/* Magical Tome Card */}
                            <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/30 h-full">
                                {/* Nebula Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl" />
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-lg" />

                                {/* Glow Effect on Hover */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        background: `linear-gradient(135deg, ${project.glowColor}, transparent)`,
                                        filter: "blur(1px)",
                                    }}
                                />

                                {/* Spark Trail Effect */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {Array.from({ length: 8 }, (_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute w-1 h-1 bg-purple-400 rounded-full"
                                            style={{
                                                top: `${20 + (i * 8)}%`,
                                                right: `${10 + (i * 5)}%`,
                                            }}
                                            animate={{
                                                scale: [0, 1, 0],
                                                opacity: [0, 1, 0],
                                            }}
                                            transition={{
                                                duration: 1,
                                                delay: i * 0.1,
                                                repeat: Infinity,
                                                repeatDelay: 2,
                                            }}
                                        />
                                    ))}
                                </div>

                                <div className="relative z-10 h-full flex flex-col">
                                    {/* Project Header */}
                                    <div className="mb-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                                                {project.title}
                                            </h3>
                                            {/* Star Rating */}
                                            <div className="flex space-x-1">
                                                {Array.from({ length: 5 }, (_, i) => (
                                                    <motion.div
                                                        key={i}
                                                        className={`w-3 h-3 ${i < project.stars ? "text-yellow-400" : "text-slate-600"
                                                            }`}
                                                        animate={{
                                                            scale: i < project.stars ? [1, 1.2, 1] : 1,
                                                            rotate: i < project.stars ? [0, 180, 360] : 0,
                                                        }}
                                                        transition={{
                                                            duration: 2,
                                                            delay: index * 0.1,
                                                            repeat: i < project.stars ? Infinity : 0,
                                                        }}
                                                    >
                                                        ⭐
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Magical Border */}
                                        <div className={`w-full h-1 bg-gradient-to-r ${project.gradient} rounded-full relative`}>
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full"
                                                animate={{ x: ["-100%", "100%"] }}
                                                transition={{
                                                    duration: 3,
                                                    delay: index * 0.2,
                                                    repeat: Infinity,
                                                    repeatDelay: 2,
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Project Description */}
                                    <p className="text-slate-300 mb-6 flex-grow leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="mt-auto">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, techIndex) => (
                                                <motion.span
                                                    key={tech}
                                                    className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-sm font-medium rounded-full`}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                                    transition={{
                                                        duration: 0.3,
                                                        delay: 0.8 + index * 0.1 + techIndex * 0.05
                                                    }}
                                                    whileHover={{
                                                        scale: 1.05,
                                                        boxShadow: `0 0 10px ${project.glowColor}`
                                                    }}
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Hover Indicator */}
                                    <motion.div
                                        className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                                        animate={{ rotate: [0, 360] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    >
                                        <div className={`w-8 h-8 border-2 border-purple-400 rounded-full flex items-center justify-center`}>
                                            <div className="w-1 h-3 bg-purple-400 rounded-full" />
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Constellation Lines */}
                <div className="absolute inset-0 pointer-events-none">
                    <svg className="w-full h-full opacity-20">
                        <defs>
                            <linearGradient id="constellation-line" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
                                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
                                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
                            </linearGradient>
                        </defs>

                        {/* Connecting lines between projects */}
                        <motion.path
                            d="M 200 300 Q 400 200 600 350 T 1000 400"
                            stroke="url(#constellation-line)"
                            strokeWidth="1"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={isInView ? { pathLength: 1 } : {}}
                            transition={{ duration: 3, delay: 1 }}
                        />

                        {/* Constellation nodes */}
                        {Array.from({ length: 12 }, (_, i) => {
                            const randomY = Math.sin(i) * 50 + 200;
                            return (
                                <motion.circle
                                    key={i}
                                    cx={100 + (i * 100)}
                                    cy={randomY}
                                    r="2"
                                    fill="#a855f7"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.5, delay: 1.5 + i * 0.1 }}
                                />
                            );
                        })}
                    </svg>
                </div>
            </div>
        </section>
    );
}

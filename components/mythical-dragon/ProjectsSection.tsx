"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ProjectsSectionProps {
    className?: string;
}

export function ProjectsSection({ className = "" }: ProjectsSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const projects = [
        {
            id: 1,
            title: "Enterprise CMS Platform",
            description: "A powerful content management system built with Next.js and TypeScript, featuring real-time collaboration and advanced SEO optimization.",
            image: "🏢",
            tech: ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
            gradient: "from-orange-400 to-red-500",
            bgGradient: "from-orange-900/20 to-red-900/20",
            demoUrl: "#",
            githubUrl: "#",
            featured: true,
        },
        {
            id: 2,
            title: "Business Analytics Dashboard",
            description: "Real-time analytics dashboard with interactive charts and heat maps, providing deep insights into user behavior and performance metrics.",
            image: "📊",
            tech: ["React", "D3.js", "Node.js", "MongoDB"],
            gradient: "from-purple-400 to-pink-500",
            bgGradient: "from-purple-900/20 to-pink-900/20",
            demoUrl: "#",
            githubUrl: "#",
            featured: true,
        },
        {
            id: 3,
            title: "Secure Authentication System",
            description: "Secure authentication system with multi-factor authentication, social login integration, and advanced security features.",
            image: "🔐",
            tech: ["Next.js", "Auth0", "JWT", "OAuth"],
            gradient: "from-yellow-400 to-orange-500",
            bgGradient: "from-yellow-900/20 to-orange-900/20",
            demoUrl: "#",
            githubUrl: "#",
            featured: false,
        },
    ];

    return (
        <section id="projects" className={`py-20 relative ${className}`} ref={ref}>
            {/* Background elements */}
            <div className="absolute inset-0 dragon-scale opacity-5" />
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-red-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        className="text-4xl md:text-6xl font-bold mb-6"
                        initial={{ scale: 0.5 }}
                        animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="block text-amber-100">Featured</span>
                        <span className="block text-amber-100 rune-glow">
                            Projects
                        </span>
                    </motion.h2>

                    <motion.p
                        className="text-xl text-amber-100/80 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Built with{" "}
                        <span className="text-orange-400 font-semibold">modern technologies</span> and{" "}
                        <span className="text-red-400 font-semibold">best practices</span>, these projects
                        showcase{" "}
                        <span className="text-purple-400 font-semibold">full-stack development expertise</span>.
                    </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="group relative"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="relative h-full">
                                {/* Project Card Glow Effect */}
                                <div className={`absolute -inset-1 dragon-gradient rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

                                {/* Project Card */}
                                <div className="relative bg-slate-900/40 backdrop-blur-sm border border-orange-500/10 rounded-xl p-6 h-full hover:border-orange-500/30 transition-all duration-500 ember-glow group-hover:shadow-lg group-hover:shadow-orange-500/10">
                                    {/* Featured Badge */}
                                    {project.featured && (
                                        <div className="absolute -top-3 left-4 px-3 py-1 bg-gradient-to-r from-orange-400 to-red-400 text-slate-900 text-xs font-bold rounded-full">
                                            FEATURED
                                        </div>
                                    )}

                                    {/* Project Icon */}
                                    <div className="text-center mb-6">
                                        <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${project.gradient} flex items-center justify-center text-3xl ember-glow`}>
                                            {project.image}
                                        </div>
                                        <h3 className="text-xl font-bold text-amber-100 mb-2 rune-glow">
                                            {project.title}
                                        </h3>
                                    </div>

                                    {/* Project Description */}
                                    <p className="text-amber-100/70 leading-relaxed mb-6 text-sm">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-amber-100 mb-3">Tech Stack:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs rounded-full ember-glow`}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3">
                                        <motion.button
                                            className="flex-1 px-4 py-2 dragon-gradient rounded-lg text-amber-100 font-semibold text-sm ember-glow hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            View Demo
                                        </motion.button>
                                        <motion.button
                                            className="flex-1 px-4 py-2 border border-orange-400 text-orange-400 rounded-lg font-semibold text-sm hover:bg-orange-400 hover:text-slate-900 transition-all duration-300"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Source Code
                                        </motion.button>
                                    </div>

                                    {/* Hover Ember Effect */}
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/0 via-red-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View More Projects CTA */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    <motion.button
                        className="px-8 py-4 border-2 border-orange-400 text-orange-400 rounded-lg font-semibold text-lg hover:bg-orange-400 hover:text-slate-900 transition-all duration-300 ember-glow"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View All Projects
                    </motion.button>
                </motion.div>

                {/* Floating Ember Particles around projects */}
                <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 8 }, (_, i) => (
                        <motion.div
                            key={`project-ember-${i}`}
                            className="absolute w-1 h-1 bg-orange-500 rounded-full"
                            style={{
                                left: `${20 + (i * 10)}%`,
                                top: `${30 + (i % 3) * 20}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0, 1, 0],
                                scale: [0.5, 1.5, 0.5],
                            }}
                            transition={{
                                duration: 3 + i * 0.5,
                                repeat: Infinity,
                                delay: i * 0.3,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

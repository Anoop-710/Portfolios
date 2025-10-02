"use client";

import { motion } from "framer-motion";
import { ParchmentCard } from "./ParchmentCard";
import { DustParticles } from "./DustParticles";
import { useState } from "react";

export function ProjectsSection() {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const projects = [
        {
            id: 1,
            title: "The Grand Compendium",
            subtitle: "Digital Library System",
            description: "A vast repository of knowledge, built with modern web technologies. Features advanced search algorithms, real-time collaboration, and elegant knowledge visualization.",
            longDescription: "An extensive digital library platform that combines the aesthetics of ancient manuscripts with cutting-edge web technologies. Built with Next.js and TypeScript, featuring full-text search, collaborative editing, and beautiful data visualizations that make complex information accessible and engaging.",
            tech: ["Next.js", "TypeScript", "PostgreSQL", "Elasticsearch", "WebGL"],
            category: "web",
            featured: true,
            gradient: "from-blue-500 to-purple-600"
        },
        {
            id: 2,
            title: "Alchemist's Workshop",
            subtitle: "Data Processing Engine",
            description: "A powerful system for transforming raw data into meaningful insights, with real-time processing and intelligent automation capabilities.",
            longDescription: "A sophisticated data processing platform that handles millions of records with ease. Features real-time stream processing, machine learning integration, and a beautiful dashboard that makes complex data transformations understandable at a glance.",
            tech: ["Python", "Apache Kafka", "Redis", "Docker", "React"],
            category: "backend",
            featured: true,
            gradient: "from-green-500 to-teal-600"
        },
        {
            id: 3,
            title: "The Illuminated Codex",
            subtitle: "Interactive Documentation",
            description: "Living documentation that evolves with the code, featuring interactive examples and real-time code execution.",
            longDescription: "Revolutionary documentation platform that breaks the mold of traditional README files. Features interactive code examples, real-time execution environments, and AI-powered explanations that adapt to the reader's skill level.",
            tech: ["React", "Node.js", "Monaco Editor", "WebAssembly", "D3.js"],
            category: "tools",
            featured: false,
            gradient: "from-amber-500 to-orange-600"
        },
        {
            id: 4,
            title: "Cartographer's Guild",
            subtitle: "API Design Studio",
            description: "Visual tool for designing, testing, and documenting REST APIs with an intuitive drag-and-drop interface.",
            longDescription: "Professional API design platform that makes complex API development accessible to teams of all sizes. Features visual schema design, automated testing, interactive documentation generation, and real-time collaboration.",
            tech: ["TypeScript", "Express.js", "Swagger", "Socket.io", "Three.js"],
            category: "tools",
            featured: false,
            gradient: "from-pink-500 to-rose-600"
        },
        {
            id: 5,
            title: "The Arcane Archive",
            subtitle: "Knowledge Management System",
            description: "Intelligent system for organizing, searching, and discovering information across vast collections of documents and data.",
            longDescription: "Advanced knowledge management system that uses natural language processing and machine learning to help users find, organize, and discover insights in large document collections. Features intelligent tagging, relationship mapping, and contextual search.",
            tech: ["Python", "FastAPI", "OpenAI API", "PostgreSQL", "React"],
            category: "ai",
            featured: true,
            gradient: "from-violet-500 to-purple-600"
        },
        {
            id: 6,
            title: "Merchant's Ledger",
            subtitle: "E-commerce Analytics Platform",
            description: "Comprehensive analytics and insights platform for e-commerce businesses, with real-time metrics and predictive recommendations.",
            longDescription: "Powerful business intelligence platform specifically designed for e-commerce operations. Provides real-time sales analytics, customer behavior insights, inventory optimization recommendations, and predictive forecasting to help merchants make data-driven decisions.",
            tech: ["Next.js", "Python", "TensorFlow", "Stripe", "PostgreSQL"],
            category: "web",
            featured: false,
            gradient: "from-emerald-500 to-green-600"
        }
    ];

    const categories = [
        { id: "all", label: "All Works", icon: "📚" },
        { id: "web", label: "Web Systems", icon: "🌐" },
        { id: "backend", label: "Backend", icon: "⚙️" },
        { id: "tools", label: "Tools", icon: "🔧" },
        { id: "ai", label: "AI & ML", icon: "🤖" }
    ];

    const filteredProjects = selectedCategory === "all"
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="projects" className="py-20 bg-gradient-to-b from-stone-800 via-slate-700 to-stone-800 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-transparent to-stone-900/20" />
            </div>

            {/* Atmospheric particles */}
            <DustParticles count={12} className="opacity-30" />

            {/* Decorative architectural elements */}
            <div className="absolute left-0 top-1/3 bottom-1/3 w-32 bg-gradient-to-r from-amber-900/30 to-transparent" />
            <div className="absolute right-0 top-1/3 bottom-1/3 w-32 bg-gradient-to-l from-amber-900/30 to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-6xl font-bold text-amber-100 mb-6">
                        The Grand Grimoire
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        A collection of digital incantations and technological marvels,
                        each project a chapter in the ever-expanding book of innovation.
                    </p>

                    {/* Category filters */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <motion.button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-3 rounded-full font-medium transition-all flex items-center space-x-2 ${selectedCategory === category.id
                                    ? "bg-amber-500 text-slate-900 shadow-lg"
                                    : "bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 border border-slate-600"
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span>{category.icon}</span>
                                <span>{category.label}</span>
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Projects grid */}
                <motion.div
                    key={selectedCategory}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={`${selectedCategory}-${project.id}`}
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <ParchmentCard
                                variant={project.featured ? "illuminated" : "default"}
                                className={`h-full transition-all duration-300 ${project.featured ? "ring-2 ring-amber-400/50" : ""
                                    }`}
                            >
                                {/* Project icon */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white text-xl`}>
                                        {project.category === "web" && "🌐"}
                                        {project.category === "backend" && "⚙️"}
                                        {project.category === "tools" && "🔧"}
                                        {project.category === "ai" && "🤖"}
                                    </div>
                                    {project.featured && (
                                        <span className="px-3 py-1 bg-amber-400/20 text-amber-300 text-xs rounded-full border border-amber-400/30">
                                            Featured
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-xl font-bold text-amber-900 mb-2">
                                    {project.title}
                                </h3>

                                <p className="text-sm text-amber-700 mb-3 font-medium">
                                    {project.subtitle}
                                </p>

                                <p className="text-slate-700 text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>

                                {/* Tech stack */}
                                <div className="mb-6">
                                    <h4 className="text-xs font-semibold text-amber-800 mb-2 uppercase tracking-wide">
                                        Arcane Technologies
                                    </h4>
                                    <div className="flex flex-wrap gap-1">
                                        {project.tech.map((tech, index) => (
                                            <span
                                                key={index}
                                                className={`px-2 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs rounded`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Project link */}
                                <motion.button
                                    className={`w-full py-3 px-4 bg-gradient-to-r ${project.gradient} text-white font-medium rounded-lg hover:shadow-lg transition-all`}
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Examine the Codex
                                </motion.button>
                            </ParchmentCard>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="inline-flex flex-col items-center space-y-4 p-8 bg-slate-800/50 border border-slate-600 rounded-2xl">
                        <span className="text-4xl">🔮</span>
                        <h3 className="text-2xl font-bold text-amber-100">
                            Commission a New Work
                        </h3>
                        <p className="text-slate-300 max-w-md">
                            Have a vision for a digital masterpiece? Let&apos;s collaborate to bring your ideas to life.
                        </p>
                        <motion.button
                            className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Me
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

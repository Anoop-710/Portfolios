"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Project {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    tech: string[];
    category: "Bioinformatics" | "Web App" | "Data Viz" | "Research";
    status: "Live" | "In Development" | "Completed";
    gradient: string;
    icon: string;
}

export function ProjectsSection() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    const projects: Project[] = [
        {
            id: 1,
            title: "Genomic Visualizer",
            description: "Interactive 3D visualization platform for genomic data analysis",
            longDescription: "A comprehensive bioinformatics platform that allows researchers to visualize and analyze genomic sequences in 3D space, providing insights into DNA structure and protein interactions.",
            tech: ["React", "Three.js", "Python", "WebGL", "D3.js"],
            category: "Bioinformatics",
            status: "Live",
            gradient: "from-cyan-500 to-blue-500",
            icon: "🧬"
        },
        {
            id: 2,
            title: "Clinical Trial Manager",
            description: "Web application for managing pharmaceutical clinical trials",
            longDescription: "A full-stack web application designed to streamline clinical trial management, from patient recruitment to data collection and regulatory compliance.",
            tech: ["Next.js", "Node.js", "PostgreSQL", "GraphQL", "AWS"],
            category: "Web App",
            status: "Live",
            gradient: "from-green-500 to-emerald-500",
            icon: "💊"
        },
        {
            id: 3,
            title: "Protein Structure Analyzer",
            description: "Machine learning tool for protein structure prediction",
            longDescription: "Advanced ML-powered platform that predicts protein structures from amino acid sequences, helping researchers understand protein function and drug interactions.",
            tech: ["Python", "TensorFlow", "React", "Docker", "Kubernetes"],
            category: "Research",
            status: "In Development",
            gradient: "from-purple-500 to-pink-500",
            icon: "🔬"
        },
        {
            id: 4,
            title: "BioData Dashboard",
            description: "Real-time dashboard for biological data monitoring",
            longDescription: "Comprehensive dashboard for real-time monitoring of biological experiments, featuring live data streams, statistical analysis, and automated reporting.",
            tech: ["Vue.js", "D3.js", "WebSocket", "InfluxDB", "Redis"],
            category: "Data Viz",
            status: "Live",
            gradient: "from-orange-500 to-red-500",
            icon: "📊"
        },
        {
            id: 5,
            title: "CRISPR Design Tool",
            description: "AI-powered CRISPR guide RNA design platform",
            longDescription: "Intelligent platform that uses machine learning to design optimal CRISPR guide RNAs, improving gene editing efficiency and reducing off-target effects.",
            tech: ["React", "Python", "ML", "Flask", "MongoDB"],
            category: "Bioinformatics",
            status: "Completed",
            gradient: "from-teal-500 to-cyan-500",
            icon: "✂️"
        },
        {
            id: 6,
            title: "Drug Discovery Platform",
            description: "Computational drug discovery and screening platform",
            longDescription: "High-throughput virtual screening platform that uses molecular dynamics and machine learning to identify potential drug candidates from large compound libraries.",
            tech: ["Python", "RDKit", "PyTorch", "FastAPI", "PostgreSQL"],
            category: "Research",
            status: "In Development",
            gradient: "from-indigo-500 to-purple-500",
            icon: "🔍"
        }
    ];

    const categories = ["All", "Bioinformatics", "Web App", "Data Viz", "Research"];

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    return (
        <section className="relative py-20 bg-slate-900 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />

            {/* Animated background elements */}
            <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => {
                    // Generate consistent random values for hydration
                    const leftPercent = (i * 13 + 7) % 100;
                    const topPercent = (i * 17 + 11) % 100;
                    const duration = 3 + ((i * 19) % 3);
                    const delay = (i * 23) % 2;

                    return (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
                            style={{
                                left: `${leftPercent}%`,
                                top: `${topPercent}%`,
                            }}
                            animate={{
                                scale: [0, 1, 0],
                                opacity: [0, 0.5, 0],
                            }}
                            transition={{
                                duration,
                                delay,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    );
                })}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                        Featured Projects
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Innovative biotechnology solutions combining cutting-edge research with modern software development
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category, index) => (
                        <motion.button
                            key={category}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-3 rounded-full font-medium transition-all ${selectedCategory === category
                                ? "bg-gradient-to-r from-cyan-500 to-green-500 text-white shadow-lg"
                                : "bg-slate-800/50 text-slate-300 border border-slate-600 hover:border-cyan-400"
                                }`}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="group relative"
                        >
                            <div className="relative h-full">
                                {/* Glowing background effect */}
                                <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity`} />

                                {/* Project card */}
                                <div className="relative bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 h-full hover:border-cyan-400/50 transition-all">
                                    {/* Status badge */}
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs rounded-full font-medium`}>
                                            {project.status}
                                        </div>
                                        <div className="text-2xl">{project.icon}</div>
                                    </div>

                                    {/* Project title and category */}
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-green-400 text-sm font-medium mb-3">
                                        {project.category}
                                    </p>

                                    {/* Description */}
                                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                                        {project.description}
                                    </p>

                                    {/* Tech stack */}
                                    <div className="mb-6">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.slice(0, 3).map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className={`px-2 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs rounded-md opacity-80`}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.tech.length > 3 && (
                                                <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-md">
                                                    +{project.tech.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* CTA button */}
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`w-full py-3 bg-gradient-to-r ${project.gradient} text-white font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0`}
                                    >
                                        View Details
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="relative inline-block">
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-green-500 rounded-lg blur opacity-20" />
                        <button className="relative bg-slate-800/80 backdrop-blur-sm border border-slate-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-cyan-400 transition-all">
                            View All Projects
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

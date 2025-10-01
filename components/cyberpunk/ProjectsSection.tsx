"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Tag } from "lucide-react";

export function ProjectsSection() {
    const [activeFilter, setActiveFilter] = useState("all");

    const projects = [
        {
            id: 1,
            title: "Neural Network Visualizer",
            description: "Interactive 3D visualization of neural networks with real-time training data and performance metrics.",
            image: "neural-viz",
            tags: ["React", "Three.js", "TensorFlow.js", "WebGL"],
            category: "ai",
            github: "https://github.com",
            demo: "https://demo.com",
            featured: true,
        },
        {
            id: 2,
            title: "Cyberpunk Portfolio Engine",
            description: "Dynamic portfolio generator with customizable themes, animations, and real-time preview capabilities.",
            image: "portfolio-engine",
            tags: ["Next.js", "Framer Motion", "Tailwind", "TypeScript"],
            category: "web",
            github: "https://github.com",
            demo: "https://demo.com",
            featured: true,
        },
        {
            id: 3,
            title: "Quantum Computing Simulator",
            description: "Educational platform for simulating quantum algorithms with interactive circuit builder and visualization.",
            image: "quantum-sim",
            tags: ["Vue.js", "D3.js", "Python", "WebAssembly"],
            category: "education",
            github: "https://github.com",
            demo: "https://demo.com",
            featured: false,
        },
        {
            id: 4,
            title: "Blockchain Analytics Dashboard",
            description: "Real-time cryptocurrency analytics with advanced charting, portfolio tracking, and market insights.",
            image: "blockchain-dash",
            tags: ["React", "Chart.js", "Node.js", "MongoDB"],
            category: "finance",
            github: "https://github.com",
            demo: "https://demo.com",
            featured: false,
        },
        {
            id: 5,
            title: "AR Furniture Configurator",
            description: "Augmented reality app for visualizing furniture in real spaces with material and color customization.",
            image: "ar-furniture",
            tags: ["React Native", "ARCore", "Three.js", "Firebase"],
            category: "mobile",
            github: "https://github.com",
            demo: "https://demo.com",
            featured: false,
        },
        {
            id: 6,
            title: "Decentralized Social Network",
            description: "Privacy-focused social platform built on IPFS with end-to-end encryption and decentralized storage.",
            image: "decent-social",
            tags: ["Solidity", "IPFS", "React", "Web3.js"],
            category: "blockchain",
            github: "https://github.com",
            demo: "https://demo.com",
            featured: true,
        },
    ];

    const categories = [
        { id: "all", name: "All Projects" },
        { id: "web", name: "Web Apps" },
        { id: "ai", name: "AI/ML" },
        { id: "blockchain", name: "Blockchain" },
        { id: "mobile", name: "Mobile" },
    ];

    const filteredProjects = activeFilter === "all"
        ? projects
        : projects.filter(project => project.category === activeFilter);

    const featuredProjects = projects.filter(project => project.featured);

    return (
        <section id="projects" className="py-20 relative">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-10 right-20 w-2 h-2 bg-cyan-400 rounded-full"
                    animate={{
                        scale: [1, 2, 1],
                        opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-32 left-16 w-1 h-1 bg-purple-400 rounded-full"
                    animate={{
                        scale: [2, 1, 2],
                        opacity: [1, 0.3, 1],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                />
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            Featured Projects
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                        A showcase of my latest work, featuring cutting-edge technologies and innovative solutions
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    className="flex flex-wrap justify-center gap-4 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category.id}
                            onClick={() => setActiveFilter(category.id)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeFilter === category.id
                                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25"
                                    : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-cyan-400 border border-cyan-400/20"
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category.name}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Featured Projects Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="group relative"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                        >
                            {/* Project Card Glow Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" />

                            {/* Project Card */}
                            <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20 h-full flex flex-col">
                                {/* Project Image Placeholder */}
                                <div className="relative mb-6 overflow-hidden rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 h-48 flex items-center justify-center">
                                    <div className="text-6xl opacity-20">
                                        {project.image === "neural-viz" && "🧠"}
                                        {project.image === "portfolio-engine" && "🎨"}
                                        {project.image === "quantum-sim" && "⚛️"}
                                        {project.image === "blockchain-dash" && "📊"}
                                        {project.image === "ar-furniture" && "🏠"}
                                        {project.image === "decent-social" && "🌐"}
                                    </div>

                                    {/* Featured Badge */}
                                    {project.featured && (
                                        <div className="absolute top-3 right-3 px-2 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold rounded-full">
                                            FEATURED
                                        </div>
                                    )}
                                </div>

                                {/* Project Content */}
                                <div className="flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold mb-3 text-gray-200 group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 bg-gray-800/50 text-cyan-400 text-xs rounded-full border border-cyan-400/20"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Project Links */}
                                    <div className="flex space-x-4">
                                        <motion.a
                                            href={project.github}
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-cyan-400/20 hover:border-cyan-400/50 rounded-lg transition-all duration-300 group"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Github className="w-4 h-4 text-gray-400 group-hover:text-cyan-400" />
                                            <span className="text-sm text-gray-400 group-hover:text-cyan-400">Code</span>
                                        </motion.a>

                                        <motion.a
                                            href={project.demo}
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 rounded-lg transition-all duration-300 group"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <ExternalLink className="w-4 h-4 text-white" />
                                            <span className="text-sm text-white">Demo</span>
                                        </motion.a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View More Section */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <motion.button
                        className="group relative px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black rounded-full font-semibold transition-all duration-300 overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10">View All Projects</span>
                        <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}

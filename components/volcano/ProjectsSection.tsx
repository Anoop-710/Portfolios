"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function ProjectsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
            image: "/api/placeholder/400/250",
            technologies: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
            liveUrl: "#",
            githubUrl: "#",
            featured: true,
        },
        {
            id: 2,
            title: "Task Management App",
            description: "Collaborative project management tool with real-time updates, file sharing, and team analytics.",
            image: "/api/placeholder/400/250",
            technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
            liveUrl: "#",
            githubUrl: "#",
            featured: true,
        },
        {
            id: 3,
            title: "Weather Analytics Dashboard",
            description: "Interactive dashboard for weather data visualization with predictive analytics and historical trends.",
            image: "/api/placeholder/400/250",
            technologies: ["Vue.js", "D3.js", "Python", "FastAPI"],
            liveUrl: "#",
            githubUrl: "#",
            featured: false,
        },
        {
            id: 4,
            title: "Social Media Platform",
            description: "Full-featured social platform with real-time messaging, content sharing, and advanced privacy controls.",
            image: "/api/placeholder/400/250",
            technologies: ["React Native", "GraphQL", "Redis", "AWS"],
            liveUrl: "#",
            githubUrl: "#",
            featured: false,
        },
        {
            id: 5,
            title: "AI Content Generator",
            description: "Machine learning-powered content creation tool with natural language processing and automated workflows.",
            image: "/api/placeholder/400/250",
            technologies: ["Python", "TensorFlow", "FastAPI", "React"],
            liveUrl: "#",
            githubUrl: "#",
            featured: true,
        },
        {
            id: 6,
            title: "Blockchain Voting System",
            description: "Decentralized voting platform built on Ethereum with smart contracts and cryptographic security.",
            image: "/api/placeholder/400/250",
            technologies: ["Solidity", "Web3.js", "React", "IPFS"],
            liveUrl: "#",
            githubUrl: "#",
            featured: false,
        },
    ];

    return (
        <section id="projects" className="py-20 relative">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-volcano opacity-20" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl md:text-5xl font-bold text-volcano-white mb-6"
                        >
                            Volcanic Creations
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl text-volcano-ash max-w-3xl mx-auto leading-relaxed"
                        >
                            Projects forged in the fires of innovation, each one a testament to the power of
                            molten creativity and technical excellence.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                                className="group relative"
                            >
                                {/* Volcanic platform card */}
                                <div className="relative bg-volcano-dark rounded-xl overflow-hidden border border-volcano-red/20 h-full">
                                    {/* Heat radiation effect on hover */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-lava opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                                        animate={{
                                            opacity: [0, 0.1, 0],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    />

                                    {/* Featured badge */}
                                    {project.featured && (
                                        <div className="absolute top-4 right-4 z-20 bg-gradient-lava text-volcano-black px-3 py-1 rounded-full text-sm font-bold">
                                            Featured
                                        </div>
                                    )}

                                    {/* Project image */}
                                    <div className="relative h-48 bg-volcano-gray overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-volcano-red/20 to-volcano-orange/20" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-16 h-16 bg-volcano-light-gray rounded-lg flex items-center justify-center">
                                                <svg className="w-8 h-8 text-volcano-glow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Heat shimmer effect */}
                                        <motion.div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                            style={{
                                                background: "linear-gradient(45deg, transparent 30%, rgba(255,107,53,0.1) 50%, transparent 70%)",
                                            }}
                                            animate={{
                                                backgroundPosition: ["0% 0%", "100% 100%"],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "linear",
                                            }}
                                        />
                                    </div>

                                    {/* Project content */}
                                    <div className="p-6 relative">
                                        {/* Stone slab effect */}
                                        <motion.div
                                            className="absolute inset-0 bg-volcano-gray opacity-50 rounded-lg transform rotate-1"
                                            whileHover={{ rotate: 0 }}
                                            transition={{ duration: 0.3 }}
                                        />

                                        <div className="relative z-10">
                                            <h3 className="text-xl font-bold text-volcano-white mb-3 group-hover:text-volcano-glow transition-colors">
                                                {project.title}
                                            </h3>

                                            <p className="text-volcano-ash text-sm mb-4 leading-relaxed">
                                                {project.description}
                                            </p>

                                            {/* Technologies */}
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.technologies.map((tech, techIndex) => (
                                                    <motion.span
                                                        key={techIndex}
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        transition={{ delay: 0.8 + index * 0.1 + techIndex * 0.05 }}
                                                        className="px-3 py-1 bg-volcano-light-gray text-volcano-white text-xs rounded-full border border-volcano-red/30"
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                            </div>

                                            {/* Action buttons */}
                                            <div className="flex gap-3">
                                                <motion.button
                                                    whileHover={{
                                                        scale: 1.05,
                                                        backgroundColor: "#ff6b35",
                                                        color: "#0a0a0a"
                                                    }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="flex-1 bg-volcano-red text-volcano-white py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300"
                                                >
                                                    Live Demo
                                                </motion.button>

                                                <motion.button
                                                    whileHover={{
                                                        scale: 1.05,
                                                        backgroundColor: "#6b7280",
                                                        borderColor: "#ff6b35"
                                                    }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="flex-1 border border-volcano-ash text-volcano-ash py-2 px-4 rounded-lg font-medium text-sm hover:text-volcano-glow transition-all duration-300"
                                                >
                                                    Source Code
                                                </motion.button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Heat distortion effect on hover */}
                                    <motion.div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                                        style={{
                                            background: "radial-gradient(circle at center, rgba(255,107,53,0.1) 0%, transparent 70%)",
                                        }}
                                        animate={{
                                            scale: [1, 1.1, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* View all projects CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 1.5 }}
                        className="text-center mt-16"
                    >
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 30px rgba(255, 107, 53, 0.3)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-lava text-volcano-black font-bold text-lg rounded-lg border-2 border-volcano-bright-orange box-shadow-volcano transition-all duration-300"
                        >
                            View All Projects
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

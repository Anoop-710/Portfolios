"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function ProjectsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const projects = [
        {
            id: 1,
            title: "Automated Assembly Line",
            description: "A full-stack web application that simulates an industrial assembly line with real-time monitoring, automated workflows, and predictive maintenance alerts.",
            tech: ["React", "Node.js", "MongoDB", "WebSocket", "Docker"],
            image: "🏭",
            color: "from-amber-500 to-red-500",
            features: ["Real-time monitoring", "Predictive analytics", "Automated workflows", "Industrial IoT"],
            demo: "https://example.com",
            github: "https://github.com"
        },
        {
            id: 2,
            title: "Steam Engine Simulator",
            description: "Interactive 3D simulation of a Victorian-era steam engine with physics-based animations, educational components, and historical accuracy.",
            tech: ["Three.js", "React", "TypeScript", "Cannon.js", "WebGL"],
            image: "🚂",
            color: "from-orange-500 to-amber-600",
            features: ["3D physics simulation", "Educational modules", "Historical data", "Interactive controls"],
            demo: "https://example.com",
            github: "https://github.com"
        },
        {
            id: 3,
            title: "Industrial Control System",
            description: "SCADA-like system for monitoring and controlling industrial processes with real-time data visualization and automated safety protocols.",
            tech: ["Vue.js", "Python", "PostgreSQL", "MQTT", "InfluxDB"],
            image: "⚙️",
            color: "from-gray-600 to-slate-700",
            features: ["Real-time monitoring", "Safety protocols", "Data visualization", "Alert systems"],
            demo: "https://example.com",
            github: "https://github.com"
        },
        {
            id: 4,
            title: "Mechanical Design Studio",
            description: "CAD-like web application for designing mechanical components with parametric modeling, stress analysis, and manufacturing specifications.",
            tech: ["React", "WebAssembly", "Three.js", "Rust", "WebGL"],
            image: "🔧",
            color: "from-blue-500 to-indigo-600",
            features: ["Parametric modeling", "Stress analysis", "3D visualization", "Export capabilities"],
            demo: "https://example.com",
            github: "https://github.com"
        },
        {
            id: 5,
            title: "Factory Automation Hub",
            description: "Centralized platform for managing multiple automated systems with machine learning optimization and predictive maintenance scheduling.",
            tech: ["Angular", "Python", "TensorFlow", "Redis", "Kubernetes"],
            image: "🏭",
            color: "from-green-500 to-emerald-600",
            features: ["ML optimization", "Predictive maintenance", "Multi-system management", "Performance analytics"],
            demo: "https://example.com",
            github: "https://github.com"
        },
        {
            id: 6,
            title: "Pneumatic System Designer",
            description: "Design tool for pneumatic systems with flow calculations, component selection, and 3D visualization of air flow and pressure dynamics.",
            tech: ["Svelte", "D3.js", "Python", "FastAPI", "SQLite"],
            image: "💨",
            color: "from-purple-500 to-pink-600",
            features: ["Flow calculations", "Component database", "3D visualization", "Export to CAD"],
            demo: "https://example.com",
            github: "https://github.com"
        }
    ];

    return (
        <section id="projects" className="py-20 px-6 relative">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    ref={ref}
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-amber-100 mb-6">
                        Engineering Workshop
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8" />
                    <p className="text-xl text-amber-100/80 max-w-3xl mx-auto leading-relaxed">
                        A collection of mechanical masterpieces and digital innovations, each project represents
                        the perfect fusion of traditional engineering principles and modern technological prowess.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="relative group"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                        >
                            {/* Project Card */}
                            <div className="relative bg-gradient-to-br from-amber-800/90 to-orange-900/90 backdrop-blur-sm rounded-2xl border-2 border-amber-600 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                                {/* Decorative Rivets */}
                                <div className="absolute -top-2 -left-2 w-3 h-3 bg-amber-400 rounded-full shadow-lg z-10" />
                                <div className="absolute -top-2 -right-2 w-3 h-3 bg-amber-400 rounded-full shadow-lg z-10" />
                                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-amber-400 rounded-full shadow-lg z-10" />
                                <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-amber-400 rounded-full shadow-lg z-10" />

                                {/* Steam Pipes Animation */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
                                        {/* Main steam pipe */}
                                        <path
                                            d="M50,250 Q200,150 350,50"
                                            stroke="url(#pipeGradient)"
                                            strokeWidth="4"
                                            fill="none"
                                            className="animate-pulse"
                                        />
                                        {/* Branch pipes */}
                                        <path d="M150,200 Q180,180 200,150" stroke="url(#pipeGradient)" strokeWidth="3" fill="none" className="animate-pulse" />
                                        <path d="M250,100 Q270,80 300,60" stroke="url(#pipeGradient)" strokeWidth="3" fill="none" className="animate-pulse" />

                                        <defs>
                                            <linearGradient id="pipeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
                                                <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.9" />
                                                <stop offset="100%" stopColor="#d97706" stopOpacity="0.7" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>

                                {/* Project Header */}
                                <div className="relative p-6 border-b border-amber-600/30">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.color} flex items-center justify-center text-3xl shadow-lg`}>
                                            {project.image}
                                        </div>
                                        <div className="text-right">
                                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
                                            <div className="text-xs text-green-300 mt-1 font-semibold">ACTIVE</div>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-amber-100 mb-2">
                                        {project.title}
                                    </h3>

                                    <p className="text-sm text-amber-200/80 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Project Content */}
                                <div className="relative p-6">
                                    {/* Tech Stack */}
                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-amber-300 mb-3 flex items-center">
                                            <span className="w-2 h-2 bg-amber-400 rounded-full mr-2" />
                                            Technologies
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, techIndex) => (
                                                <motion.span
                                                    key={tech}
                                                    className="px-3 py-1 bg-amber-900/60 text-amber-200 text-xs rounded-full border border-amber-600/30"
                                                    initial={{ scale: 0 }}
                                                    animate={isInView ? { scale: 1 } : {}}
                                                    transition={{ delay: 0.3 + index * 0.1 + techIndex * 0.05 }}
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-amber-300 mb-3 flex items-center">
                                            <span className="w-2 h-2 bg-amber-400 rounded-full mr-2" />
                                            Key Features
                                        </h4>
                                        <ul className="space-y-1">
                                            {project.features.map((feature, featureIndex) => (
                                                <motion.li
                                                    key={feature}
                                                    className="text-xs text-amber-200/70 flex items-center"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                                    transition={{ delay: 0.4 + index * 0.1 + featureIndex * 0.05 }}
                                                >
                                                    <span className="w-1 h-1 bg-amber-400 rounded-full mr-2 flex-shrink-0" />
                                                    {feature}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex space-x-3">
                                        <motion.button
                                            className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            View Demo
                                        </motion.button>

                                        <motion.button
                                            className="flex-1 border border-amber-400 text-amber-300 text-sm font-semibold py-2 px-4 rounded-lg hover:bg-amber-400 hover:text-amber-900 transition-all duration-300"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Source Code
                                        </motion.button>
                                    </div>
                                </div>

                                {/* Hover Steam Effect */}
                                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <motion.div
                                        className="w-4 h-4 bg-amber-400 rounded-full"
                                        animate={{
                                            scale: [1, 1.5, 1],
                                            opacity: [0.7, 1, 0.7],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    />
                                </div>

                                {/* Pressure Gauge */}
                                <div className="absolute bottom-4 right-4">
                                    <motion.div
                                        className="relative w-12 h-12"
                                        animate={{ rotate: [0, 360] }}
                                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                    >
                                        <svg viewBox="0 0 48 48" className="w-full h-full text-amber-500">
                                            <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6" />
                                            <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.8"
                                                strokeDasharray="8 4" strokeLinecap="round" />
                                            <line x1="24" y1="24" x2="24" y2="8" stroke="currentColor" strokeWidth="3" opacity="0.9" />
                                        </svg>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <div className="relative inline-block">
                        <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl blur opacity-75" />
                        <button className="relative bg-gradient-to-r from-amber-700 to-orange-800 text-amber-100 font-bold text-lg py-4 px-8 rounded-xl border-2 border-amber-500 shadow-lg hover:shadow-xl transition-all duration-300">
                            <span className="flex items-center">
                                View All Projects
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

'use client';

import { motion } from 'framer-motion';
import { useDesertTheme } from './ThemeProvider';
import { useState, memo } from 'react';

const ProjectsSection = memo(() => {
    const theme = useDesertTheme();
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    const projects = [
        {
            id: 1,
            title: 'Oasis Marketplace',
            description: 'A nomadic trading platform connecting desert artisans with global markets through blockchain technology.',
            tech: ['React', 'Node.js', 'Web3', 'Solidity'],
            image: '🏗️',
            demo: '#',
            github: '#',
            featured: true
        },
        {
            id: 2,
            title: 'Sandstorm Analytics',
            description: 'Real-time data visualization dashboard that helps businesses navigate market volatility like a desert navigator.',
            tech: ['Vue.js', 'D3.js', 'Python', 'FastAPI'],
            image: '📊',
            demo: '#',
            github: '#',
            featured: true
        },
        {
            id: 3,
            title: 'Mirage Messenger',
            description: 'Encrypted communication app with disappearing messages, ensuring privacy like a desert mirage.',
            tech: ['React Native', 'Socket.io', 'MongoDB', 'Redis'],
            image: '💬',
            demo: '#',
            github: '#',
            featured: false
        },
        {
            id: 4,
            title: 'Dune Deploy',
            description: 'Automated deployment platform that scales applications across cloud providers like shifting sand dunes.',
            tech: ['Docker', 'Kubernetes', 'Terraform', 'AWS'],
            image: '🚀',
            demo: '#',
            github: '#',
            featured: false
        },
        {
            id: 5,
            title: 'Caravan CRM',
            description: 'Customer relationship management system designed for nomadic sales teams and remote work.',
            tech: ['Next.js', 'PostgreSQL', 'Prisma', 'Stripe'],
            image: '🛤️',
            demo: '#',
            github: '#',
            featured: false
        },
        {
            id: 6,
            title: 'Nomad Notes',
            description: 'Collaborative note-taking app with real-time synchronization across all devices.',
            tech: ['Svelte', 'Supabase', 'TypeScript', 'Tailwind'],
            image: '📝',
            demo: '#',
            github: '#',
            featured: false
        }
    ];

    return (
        <section id="projects" className="relative py-20 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-amber-50/50 to-orange-100/50" />

            {/* Animated Background Pattern */}
            <motion.div
                animate={{
                    backgroundPosition: ['0px 0px', '60px 60px', '0px 0px']
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23D4AF37%27 fill-opacity=%270.3%27%3E%3Cpath d=%27M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px'
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
                        Ancient Relics & Modern Wonders
                    </h2>
                    <p className="text-xl text-amber-800 max-w-3xl mx-auto mb-8">
                        Each project is a digital artifact, carefully crafted to stand the test of time like ancient desert relics.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto" />
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative"
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            {/* Project Card - Styled like Ancient Scroll/Relic */}
                            <motion.div
                                whileHover={{
                                    scale: 1.02,
                                    rotateY: 5,
                                    z: 50
                                }}
                                animate={{
                                    rotateY: hoveredProject === project.id ? 5 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                                className={`relative h-full ${theme.textures.parchment} rounded-xl shadow-2xl border-2 border-amber-300 overflow-hidden cursor-pointer`}
                                style={{
                                    transformStyle: 'preserve-3d',
                                    background: `linear-gradient(135deg, ${theme.colors.light} 0%, ${theme.colors.sand} 50%, ${theme.colors.dune} 100%)`,
                                }}
                            >
                                {/* Scroll/Mosaic Pattern Overlay */}
                                <div className="absolute inset-0 opacity-20">
                                    <div className="w-full h-full bg-gradient-to-br from-transparent via-amber-200/30 to-transparent"
                                        style={{
                                            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(212,175,55,0.1) 2px, rgba(212,175,55,0.1) 4px)`,
                                            backgroundSize: '8px 8px'
                                        }} />
                                </div>

                                {/* Featured Badge */}
                                {project.featured && (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="absolute top-4 right-4 z-20 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
                                    >
                                        ⭐ Featured
                                    </motion.div>
                                )}

                                {/* Project Icon */}
                                <div className="p-8 text-center relative">
                                    <motion.div
                                        animate={{
                                            rotate: hoveredProject === project.id ? [0, -5, 5, 0] : 0,
                                            scale: hoveredProject === project.id ? [1, 1.1, 1] : 1
                                        }}
                                        transition={{ duration: 0.5 }}
                                        className="text-6xl mb-6 inline-block"
                                    >
                                        {project.image}
                                    </motion.div>

                                    {/* Heat Ripple Effect */}
                                    <motion.div
                                        animate={{
                                            scale: hoveredProject === project.id ? [1, 1.5, 1] : 1,
                                            opacity: hoveredProject === project.id ? [0.3, 0, 0.3] : 0
                                        }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                        className="absolute inset-0 border-2 border-amber-400/50 rounded-full"
                                        style={{
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                        }}
                                    />

                                    <h3 className="text-xl font-bold text-amber-900 mb-3 group-hover:text-amber-700 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-amber-800 text-sm leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-6 justify-center">
                                        {project.tech.map((tech, techIndex) => (
                                            <motion.span
                                                key={tech}
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                transition={{ delay: 0.5 + techIndex * 0.1 }}
                                                whileHover={{ scale: 1.1 }}
                                                className="px-3 py-1 bg-amber-100 text-amber-700 text-xs rounded-full border border-amber-300"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3 justify-center">
                                        <motion.a
                                            href={project.demo}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                                        >
                                            View Demo
                                        </motion.a>
                                        <motion.a
                                            href={project.github}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-4 py-2 border-2 border-amber-600 text-amber-700 text-sm rounded-lg hover:bg-amber-50 transition-all duration-300"
                                        >
                                            Source Code
                                        </motion.a>
                                    </div>
                                </div>

                                {/* Decorative Corner Elements */}
                                <motion.div
                                    animate={{
                                        rotate: hoveredProject === project.id ? 360 : 0
                                    }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    className="absolute top-2 left-2 text-amber-400/30 text-lg"
                                >
                                    ◊
                                </motion.div>
                                <motion.div
                                    animate={{
                                        rotate: hoveredProject === project.id ? -360 : 0
                                    }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    className="absolute bottom-2 right-2 text-amber-400/30 text-lg"
                                >
                                    ◊
                                </motion.div>

                                {/* Sand Particles Effect */}
                                {hoveredProject === project.id && (
                                    <div className="absolute inset-0 pointer-events-none">
                                        {[...Array(8)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{
                                                    x: '50%',
                                                    y: '50%',
                                                    scale: 0,
                                                    opacity: 0
                                                }}
                                                animate={{
                                                    x: `${40 + Math.sin(i) * 30}%`,
                                                    y: `${40 + Math.cos(i) * 30}%`,
                                                    scale: [0, 1, 0],
                                                    opacity: [0, 0.6, 0]
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    delay: i * 0.1,
                                                    ease: "easeOut"
                                                }}
                                                className="absolute w-1 h-1 bg-amber-400 rounded-full"
                                            />
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className={`inline-block p-8 ${theme.textures.leather} rounded-2xl shadow-xl border border-amber-200`}>
                        <h3 className="text-2xl font-bold text-amber-900 mb-4">
                            Ready to Start a New Journey?
                        </h3>
                        <p className="text-amber-800 mb-6">
                            Let&apos;s collaborate and create something amazing together, like fellow nomads sharing an oasis.
                        </p>
                        <motion.a
                            href="#contact"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0px 10px 30px rgba(212, 175, 55, 0.3)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Begin Our Collaboration
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Floating Desert Elements */}
            {[...Array(10)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -20, 0],
                        x: [0, Math.sin(i) * 15, 0],
                        rotate: [0, 360],
                        opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{
                        duration: 8 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 1.2,
                        ease: "easeInOut"
                    }}
                    className="absolute pointer-events-none text-3xl"
                    style={{
                        left: `${5 + i * 9}%`,
                        top: `${15 + (i % 3) * 25}%`,
                    }}
                >
                    {i % 4 === 0 ? "🏺" : i % 4 === 1 ? "📜" : i % 4 === 2 ? "🗿" : "🏛️"}
                </motion.div>
            ))}
        </section>
    );
});

ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection;

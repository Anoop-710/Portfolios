"use client";

import { motion } from "framer-motion";
import { LaceBorder } from "./LaceBorder";
import { VenetianMask } from "./VenetianMask";

export function ProjectsSection() {
    const projects = [
        {
            title: "Digital Symphony",
            description: "An immersive web experience that combines music visualization with interactive storytelling, creating a symphony of code and creativity.",
            tech: ["React", "Three.js", "Web Audio API", "Framer Motion"],
            features: ["Real-time audio visualization", "Interactive 3D environments", "Responsive design", "Performance optimized"],
            gradient: "from-purple-500 to-pink-500",
            icon: "🎼"
        },
        {
            title: "Midnight Masquerade",
            description: "A mysterious portfolio website with dark aesthetics and elegant animations, perfect for creative professionals seeking a distinctive online presence.",
            tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
            features: ["Dark theme optimized", "Smooth animations", "Mobile responsive", "SEO friendly"],
            gradient: "from-indigo-500 to-purple-500",
            icon: "🎭"
        },
        {
            title: "Golden Hour Gallery",
            description: "An art gallery website that showcases photography with golden hour lighting effects and smooth transitions between images.",
            tech: ["React", "GSAP", "Intersection Observer", "CSS Grid"],
            features: ["Image optimization", "Smooth transitions", "Gallery layout", "Social sharing"],
            gradient: "from-amber-500 to-orange-500",
            icon: "🌅"
        },
        {
            title: "Velvet Underground",
            description: "A luxury e-commerce platform with rich textures, elegant typography, and sophisticated user experience design.",
            tech: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
            features: ["Payment integration", "Inventory management", "User authentication", "Admin dashboard"],
            gradient: "from-red-500 to-pink-500",
            icon: "🛍️"
        },
        {
            title: "Crystal Clear",
            description: "A modern SaaS landing page with glassmorphism effects, clean design, and compelling call-to-action sections.",
            tech: ["React", "Tailwind CSS", "React Hook Form", "EmailJS"],
            features: ["Contact forms", "Glassmorphism UI", "Conversion optimized", "Fast loading"],
            gradient: "from-cyan-500 to-blue-500",
            icon: "💎"
        },
        {
            title: "Enchanted Forest",
            description: "An interactive storytelling website with parallax scrolling, floating elements, and immersive sound design.",
            tech: ["Vanilla JS", "CSS Animations", "Web Audio API", "Intersection Observer"],
            features: ["Parallax scrolling", "Sound integration", "Immersive experience", "Cross-browser compatible"],
            gradient: "from-green-500 to-emerald-500",
            icon: "🌲"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-gradient-to-b from-purple-900 via-slate-900 to-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0">
                {/* Damask pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="w-full h-full bg-repeat" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4af37' fill-opacity='0.1'%3E%3Cpath d='M50 50c0-13.807 11.193-25 25-25s25 11.193 25 25-11.193 25-25 25-25-11.193-25-25z'/%3E%3C/g%3E%3C/svg%3E")`
                    }} />
                </div>

                {/* Floating masks */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute opacity-10"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -40, 0],
                            rotate: [0, 5, -5, 0],
                            opacity: [0.05, 0.15, 0.05],
                        }}
                        transition={{
                            duration: 6 + Math.random() * 4,
                            repeat: Infinity,
                            delay: Math.random() * 4,
                            ease: "easeInOut"
                        }}
                    >
                        <VenetianMask className="w-16 h-10 text-gold-400/30" animate={false} />
                    </motion.div>
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-gold-200 via-yellow-300 to-gold-400 bg-clip-text text-transparent">
                            Portfolio Collection
                        </span>
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Each project is a unique performance, showcasing the artistry and technical mastery behind every creation.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            className="group relative"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                        >
                            {/* Project card styled like a gilded invitation */}
                            <div className="relative bg-gradient-to-br from-slate-800/60 to-purple-900/60 p-8 rounded-3xl border border-gold-400/20 backdrop-blur-sm h-full overflow-hidden">
                                {/* Decorative border */}
                                <LaceBorder className="absolute top-0 left-0 right-0 h-6 text-gold-400/40" pattern="delicate" />

                                {/* Project icon */}
                                <motion.div
                                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${project.gradient} flex items-center justify-center text-2xl`}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {project.icon}
                                </motion.div>

                                {/* Project title */}
                                <h3 className="text-xl font-bold text-gold-300 mb-3 text-center group-hover:text-gold-200 transition-colors">
                                    {project.title}
                                </h3>

                                {/* Project description */}
                                <p className="text-slate-300 text-sm leading-relaxed mb-6 text-center">
                                    {project.description}
                                </p>

                                {/* Tech stack */}
                                <div className="mb-6">
                                    <h4 className="text-xs font-semibold text-gold-400 mb-2 text-center uppercase tracking-wide">Technologies</h4>
                                    <div className="flex flex-wrap gap-1 justify-center">
                                        {project.tech.map((tech, techIndex) => (
                                            <motion.span
                                                key={tech}
                                                className="px-2 py-1 bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs rounded-full"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.3, delay: (index * 0.1) + (techIndex * 0.05) }}
                                                viewport={{ once: true }}
                                                whileHover={{
                                                    scale: 1.05,
                                                    backgroundColor: "rgba(212, 175, 55, 0.2)"
                                                }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="mb-6">
                                    <h4 className="text-xs font-semibold text-gold-400 mb-2 text-center uppercase tracking-wide">Features</h4>
                                    <div className="space-y-1">
                                        {project.features.map((feature, featureIndex) => (
                                            <motion.div
                                                key={feature}
                                                className="flex items-center text-xs text-slate-300"
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: (index * 0.1) + (featureIndex * 0.05) }}
                                                viewport={{ once: true }}
                                            >
                                                <div className="w-1 h-1 bg-gold-400 rounded-full mr-2 flex-shrink-0" />
                                                {feature}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* View project button */}
                                <motion.div
                                    className="text-center"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <button className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${project.gradient} text-white text-sm font-medium rounded-lg group-hover:shadow-lg transition-all`}>
                                        View Project
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </motion.div>

                                {/* Hover glow effect */}
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}
                                />

                                {/* Shimmer effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                    animate={{
                                        x: ['-100%', '100%'],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        repeatDelay: 2,
                                        ease: "easeInOut"
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom decorative element */}
                <motion.div
                    className="mt-20 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <LaceBorder className="h-16 text-gold-400/40 mx-auto max-w-lg" pattern="ornate" />
                </motion.div>
            </div>

            {/* Ambient lighting */}
            <motion.div
                className="absolute top-1/4 right-1/4 w-80 h-80 bg-gold-400/3 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </section>
    );
}

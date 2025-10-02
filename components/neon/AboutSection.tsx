"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function AboutSection() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const skills = [
        {
            category: "Frontend",
            technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
            color: "from-cyan-400 to-blue-500",
            icon: "⚛️",
        },
        {
            category: "Backend",
            technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
            color: "from-purple-400 to-pink-500",
            icon: "⚙️",
        },
        {
            category: "Tools",
            technologies: ["Git", "Docker", "AWS", "Figma"],
            color: "from-pink-400 to-red-500",
            icon: "🛠️",
        },
    ];

    const stats = [
        { number: "50+", label: "Projects Completed" },
        { number: "3+", label: "Years Experience" },
        { number: "100%", label: "Client Satisfaction" },
        { number: "24/7", label: "Support Available" },
    ];

    return (
        <section id="about" className="relative py-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-4xl md:text-6xl font-bold mb-6"
                        animate={{
                            textShadow: [
                                "0 0 20px #ff00ff, 0 0 40px #ff00ff",
                                "0 0 20px #00ffff, 0 0 40px #00ffff",
                                "0 0 20px #ff00ff, 0 0 40px #ff00ff",
                            ],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        style={{
                            background: "linear-gradient(45deg, #ff00ff, #00ffff, #ff8000)",
                            backgroundSize: "400% 400%",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        About Me
                    </motion.h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Passionate about creating immersive digital experiences with cutting-edge technology
                        and stunning visual design that pushes the boundaries of what&apos;s possible on the web.
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Bio Card */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative p-8 bg-black/40 backdrop-blur-md border border-pink-500/30 rounded-2xl">
                            {/* Holographic Border Effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/20 via-cyan-500/20 to-purple-500/20 animate-pulse" />

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    With over 3 years of experience in full-stack development, I&apos;ve had the privilege
                                    of working with startups and established companies to bring their digital visions
                                    to life. My passion lies in creating seamless user experiences that combine
                                    beautiful design with robust functionality.
                                </p>
                                <p className="text-gray-300 leading-relaxed">
                                    When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to
                                    open-source projects, or experimenting with creative coding and generative art.
                                    I believe in continuous learning and staying ahead of the curve in this
                                    ever-evolving field.
                                </p>
                            </div>

                            {/* Floating Accent Elements */}
                            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full animate-pulse" />
                            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-1000" />
                        </div>
                    </motion.div>

                    {/* Skills Cards */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.category}
                                className="relative p-6 bg-black/40 backdrop-blur-md border border-gray-600/30 rounded-xl cursor-pointer"
                                whileHover={{
                                    scale: 1.02,
                                    borderColor: `rgba(${skill.color.includes("cyan") ? "0, 255, 255" : "255, 0, 255"}, 0.5)`,
                                }}
                                onHoverStart={() => setHoveredCard(index)}
                                onHoverEnd={() => setHoveredCard(null)}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                {/* Holographic Overlay */}
                                <motion.div
                                    className={`absolute inset-0 rounded-xl bg-gradient-to-r ${skill.color} opacity-0`}
                                    animate={{
                                        opacity: hoveredCard === index ? 0.1 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                />

                                <div className="relative z-10 flex items-center gap-4">
                                    <div className={`text-2xl p-3 bg-gradient-to-r ${skill.color} rounded-lg`}>
                                        {skill.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-semibold text-white mb-2">
                                            {skill.category}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {skill.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className={`px-3 py-1 bg-gradient-to-r ${skill.color} text-white text-sm rounded-full`}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Scan Line Effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                    animate={{
                                        x: ["-100%", "100%"],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatDelay: 3,
                                        ease: "easeInOut",
                                    }}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Stats Section */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className="text-center p-6 bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-xl"
                            whileHover={{
                                scale: 1.05,
                                borderColor: "rgba(0, 255, 255, 0.6)",
                                boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
                            }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text mb-2"
                                animate={{
                                    textShadow: [
                                        "0 0 10px #00ffff",
                                        "0 0 20px #00ffff",
                                        "0 0 10px #00ffff",
                                    ],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                {stat.number}
                            </motion.div>
                            <div className="text-gray-400 text-sm md:text-base">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <motion.div
                            key={`bg-element-${i}`}
                            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                boxShadow: "0 0 10px #00ffff",
                            }}
                            animate={{
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: Math.random() * 3,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

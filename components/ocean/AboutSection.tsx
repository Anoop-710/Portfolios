"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Skill {
    name: string;
    level: number;
    color: string;
}

interface AboutSectionProps {
    bio?: string;
    skills?: Skill[];
}

export default function AboutSection({
    bio = "I'm a passionate full-stack developer who loves creating beautiful and functional web applications. With expertise in modern technologies like React, Next.js, and Node.js, I bring ideas to life through clean, efficient code.",
    skills = [
        { name: "React/Next.js", level: 95, color: "from-cyan-400 to-blue-500" },
        { name: "TypeScript", level: 90, color: "from-blue-400 to-indigo-500" },
        { name: "Node.js", level: 85, color: "from-green-400 to-teal-500" },
        { name: "Python", level: 80, color: "from-yellow-400 to-orange-500" },
        { name: "PostgreSQL", level: 85, color: "from-indigo-400 to-purple-500" },
        { name: "AWS", level: 75, color: "from-orange-400 to-red-500" },
    ]
}: AboutSectionProps) {
    const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

    return (
        <section className="py-20 px-6 bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 dark:from-slate-800 dark:via-slate-900 dark:to-blue-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                {/* Floating Bubbles */}
                {Array.from({ length: 15 }).map((_, i) => {
                    // Fixed positions to prevent hydration mismatch
                    const positions = [
                        { left: "10%", top: "15%" }, { left: "90%", top: "20%" },
                        { left: "25%", top: "80%" }, { left: "75%", top: "10%" },
                        { left: "5%", top: "60%" }, { left: "95%", top: "45%" },
                        { left: "40%", top: "5%" }, { left: "60%", top: "85%" },
                        { left: "15%", top: "90%" }, { left: "85%", top: "70%" },
                        { left: "35%", top: "25%" }, { left: "65%", top: "55%" },
                        { left: "20%", top: "40%" }, { left: "80%", top: "30%" },
                        { left: "45%", top: "75%" }
                    ];

                    const pos = positions[i] || { left: "50%", top: "50%" };

                    return (
                        <motion.div
                            key={i}
                            className="absolute w-3 h-3 bg-cyan-200/30 dark:bg-cyan-400/10 rounded-full"
                            style={{
                                left: pos.left,
                                top: pos.top,
                            }}
                            animate={{
                                y: [0, -60, 0],
                                x: [0, Math.sin(i) * 30, 0],
                                scale: [0.8, 1.2, 0.8],
                                opacity: [0.3, 0.7, 0.3],
                            }}
                            transition={{
                                duration: 6 + (i * 0.25),
                                repeat: Infinity,
                                delay: i * 0.2,
                                ease: "easeInOut",
                            }}
                        />
                    );
                })}

                {/* Coral-like decorative elements */}
                <motion.div
                    className="absolute top-20 left-10 text-6xl opacity-10 dark:opacity-20"
                    animate={{
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    🪸
                </motion.div>

                <motion.div
                    className="absolute bottom-32 right-16 text-4xl opacity-10 dark:opacity-20"
                    animate={{
                        rotate: [0, -3, 3, 0],
                        scale: [1, 0.9, 1],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                >
                    🌊
                </motion.div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 dark:from-cyan-400 dark:via-blue-400 dark:to-teal-400 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        About Me
                    </motion.h2>

                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true }}
                    />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Bio Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <motion.div
                            className="relative p-8 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-3xl border border-cyan-200/50 dark:border-cyan-800/50 shadow-xl"
                            whileHover={{
                                scale: 1.02,
                                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                                {bio}
                            </motion.p>

                            <motion.div
                                className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.7, 1, 0.7],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </motion.div>

                        {/* Fun Facts */}
                        <motion.div
                            className="grid grid-cols-2 gap-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            {[
                                { icon: "🚀", label: "Projects", value: "50+" },
                                { icon: "🌟", label: "Technologies", value: "15+" },
                                { icon: "☕", label: "Coffee Cups", value: "1000+" },
                                { icon: "🏆", label: "Years Exp", value: "5+" },
                            ].map((fact, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm rounded-2xl p-4 text-center border border-cyan-200/30 dark:border-cyan-800/30"
                                    whileHover={{
                                        scale: 1.05,
                                        backgroundColor: "rgba(255, 255, 255, 0.6)",
                                    }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="text-2xl mb-2">{fact.icon}</div>
                                    <div className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                                        {fact.value}
                                    </div>
                                    <div className="text-sm text-slate-600 dark:text-slate-400">
                                        {fact.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Skills Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6">
                            Technical Skills
                        </h3>

                        <div className="space-y-4">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    className="relative"
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                        ease: "easeOut"
                                    }}
                                    viewport={{ once: true }}
                                    onHoverStart={() => setHoveredSkill(index)}
                                    onHoverEnd={() => setHoveredSkill(null)}
                                >
                                    {/* Bubble-shaped skill card */}
                                    <motion.div
                                        className="relative p-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-full border border-cyan-200/50 dark:border-cyan-800/50 shadow-lg overflow-hidden"
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)",
                                            borderColor: "rgb(59 130 246)",
                                        }}
                                        animate={{
                                            y: hoveredSkill === index ? [-2, 2, -2] : 0,
                                        }}
                                        transition={{
                                            duration: hoveredSkill === index ? 2 : 0.3,
                                            repeat: hoveredSkill === index ? Infinity : 0,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        {/* Animated background gradient */}
                                        <motion.div
                                            className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0`}
                                            animate={{
                                                opacity: hoveredSkill === index ? 0.1 : 0,
                                            }}
                                            transition={{ duration: 0.3 }}
                                        />

                                        <div className="relative z-10 flex items-center justify-between mb-3">
                                            <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                                                {skill.name}
                                            </h4>
                                            <span className="text-sm font-bold text-cyan-600 dark:text-cyan-400">
                                                {skill.level}%
                                            </span>
                                        </div>

                                        {/* Progress bar */}
                                        <div className="relative w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                            <motion.div
                                                className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{
                                                    duration: 1.5,
                                                    delay: 0.5 + index * 0.1,
                                                    ease: "easeOut"
                                                }}
                                                viewport={{ once: true }}
                                            />

                                            {/* Animated shine effect */}
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
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
                                        </div>

                                        {/* Floating particles */}
                                        {hoveredSkill === index && (
                                            <>
                                                {Array.from({ length: 5 }).map((_, i) => {
                                                    // Fixed positions for particles to prevent hydration mismatch
                                                    const particlePositions = [
                                                        { x: "20%", y: "30%" },
                                                        { x: "70%", y: "20%" },
                                                        { x: "40%", y: "80%" },
                                                        { x: "80%", y: "60%" },
                                                        { x: "15%", y: "70%" }
                                                    ];

                                                    const pos = particlePositions[i] || { x: "50%", y: "50%" };

                                                    return (
                                                        <motion.div
                                                            key={i}
                                                            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                                                            initial={{
                                                                x: pos.x,
                                                                y: pos.y,
                                                                scale: 0,
                                                            }}
                                                            animate={{
                                                                scale: [0, 1, 0],
                                                                opacity: [0, 1, 0],
                                                            }}
                                                            transition={{
                                                                duration: 1.5,
                                                                repeat: Infinity,
                                                                delay: i * 0.2,
                                                                ease: "easeOut",
                                                            }}
                                                        />
                                                    );
                                                })}
                                            </>
                                        )}
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

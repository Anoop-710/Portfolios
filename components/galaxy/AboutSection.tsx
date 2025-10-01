"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
    { name: "React/Next.js", level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-400" },
    { name: "Node.js", level: 85, color: "from-green-500 to-green-400" },
    { name: "Python", level: 80, color: "from-yellow-500 to-orange-500" },
    { name: "AWS/Cloud", level: 75, color: "from-orange-500 to-red-500" },
    { name: "Database Design", level: 85, color: "from-purple-500 to-pink-500" },
];

export function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    ref={ref}
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        About the Cosmos
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        Journey through the digital universe where creativity meets technology,
                        and discover the magic behind every pixel and line of code.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Bio Card */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
                            {/* Nebula Background Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20 rounded-2xl" />
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-xl" />

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-4">The Cosmic Journey</h3>
                                <div className="space-y-4 text-slate-300 leading-relaxed">
                                    <p>
                                        Born from the depths of curiosity and forged in the fires of innovation,
                                        I navigate the vast cosmos of software development with wonder and precision.
                                    </p>
                                    <p>
                                        My journey spans across galaxies of code, from the structured realms of
                                        enterprise applications to the creative nebulae of modern web experiences.
                                    </p>
                                    <p>
                                        Each project is a new constellation in my portfolio, carefully crafted
                                        with the magic of clean code and the artistry of intuitive design.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Skills Card */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
                            {/* Nebula Background Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-cyan-900/20 to-purple-900/20 rounded-2xl" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-radial from-cyan-500/10 to-transparent rounded-full blur-xl" />

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-6">Technological Arsenal</h3>
                                <div className="space-y-4">
                                    {skills.map((skill, index) => (
                                        <motion.div
                                            key={skill.name}
                                            className="relative"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                                            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                        >
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-slate-200 font-medium">{skill.name}</span>
                                                <span className="text-sm text-slate-400">{skill.level}%</span>
                                            </div>
                                            <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                                                <motion.div
                                                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                                                    initial={{ width: 0 }}
                                                    animate={isInView ? { width: `${skill.level}%` } : {}}
                                                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                                                >
                                                    {/* Shimmer Effect */}
                                                    <motion.div
                                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                                        animate={{ x: ["-100%", "100%"] }}
                                                        transition={{
                                                            duration: 2,
                                                            delay: 1 + index * 0.1,
                                                            repeat: Infinity,
                                                            repeatDelay: 3,
                                                        }}
                                                    />
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Philosophy Section */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <div className="relative bg-slate-800/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/10 max-w-4xl mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10 rounded-2xl" />
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-4">The Cosmic Philosophy</h3>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                &ldquo;In the infinite expanse of digital creation, every line of code is a star,
                                every application a galaxy, and every user interaction a moment of cosmic connection.
                                I craft not just software, but experiences that illuminate the darkness and
                                guide users through the wonders of technology.&rdquo;
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

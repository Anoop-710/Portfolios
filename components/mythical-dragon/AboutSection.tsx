"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface AboutSectionProps {
    className?: string;
}

export function AboutSection({ className = "" }: AboutSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const skills = [
        { name: "Frontend Development", level: 95, color: "from-orange-400 to-red-400" },
        { name: "Backend Systems", level: 90, color: "from-purple-400 to-pink-400" },
        { name: "UI/UX Design", level: 85, color: "from-yellow-400 to-orange-400" },
        { name: "DevOps & Cloud", level: 80, color: "from-blue-400 to-cyan-400" },
    ];

    const achievements = [
        { icon: "🏆", title: "Award Winner", description: "Best Developer Portfolio 2024" },
        { icon: "🚀", title: "Performance", description: "99.9% Uptime Achievement" },
        { icon: "💡", title: "Innovation", description: "5+ Years Experience" },
        { icon: "🌟", title: "Excellence", description: "Top Rated Developer" },
    ];

    return (
        <section id="about" className={`py-20 relative ${className}`} ref={ref}>
            {/* Background elements */}
            <div className="absolute inset-0 stone-texture opacity-5" />
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        className="text-4xl md:text-6xl font-bold mb-6"
                        initial={{ scale: 0.5 }}
                        animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="block text-amber-100">About</span>
                    </motion.h2>

                    <motion.p
                        className="text-xl text-amber-100/80 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        A passionate{" "}
                        <span className="text-orange-400 font-semibold">full-stack developer</span>{" "}
                        with expertise in modern web technologies and a commitment to creating{" "}
                        <span className="text-purple-400 font-semibold">exceptional user experiences</span>.
                    </motion.p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Story Section */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="relative">
                            <div className="absolute -inset-1 dragon-gradient rounded-lg blur opacity-20" />
                            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-orange-500/20 rounded-lg p-8">
                                <h3 className="text-2xl font-bold text-amber-100 mb-4 rune-glow">
                                    Professional Journey
                                </h3>
                                <div className="space-y-4 text-amber-100/80 leading-relaxed">
                                    <p>
                                        Starting with a{" "}
                                        <span className="text-orange-400 font-semibold">curiosity-driven</span> approach to technology,
                                        this developer discovered the power of code as a means to solve problems and create solutions.
                                        What began as simple scripts evolved into complex systems that could bring
                                        ideas to life.
                                    </p>
                                    <p>
                                        Through years of{" "}
                                        <span className="text-red-400 font-semibold">continuous learning</span> and{" "}
                                        <span className="text-purple-400 font-semibold">practical experience</span>, expertise
                                        was developed across multiple domains - from crafting intuitive user interfaces
                                        to architecting scalable backend systems.
                                    </p>
                                    <p>
                                        Today, this full-stack developer continues to push boundaries,
                                        creating{" "}
                                        <span className="text-yellow-400 font-semibold">innovative applications</span>{" "}
                                        that serve users and solve real-world problems with modern technology and best practices.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Skills Section */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold text-amber-100 mb-6 rune-glow">
                            Technical Skills
                        </h3>

                        <div className="space-y-6">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    className="relative"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-amber-100 font-medium">{skill.name}</span>
                                        <span className="text-orange-400 font-bold">{skill.level}%</span>
                                    </div>

                                    <div className="w-full bg-slate-800/50 rounded-full h-3 overflow-hidden">
                                        <motion.div
                                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full ember-glow`}
                                            initial={{ width: 0 }}
                                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                                            transition={{ duration: 1.5, delay: 1 + index * 0.2, ease: "easeOut" }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Achievements */}
                        <motion.div
                            className="grid grid-cols-2 gap-4 mt-8"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                        >
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={achievement.title}
                                    className="bg-slate-900/30 backdrop-blur-sm border border-orange-500/10 rounded-lg p-4 text-center hover:border-orange-500/30 transition-all duration-300 ember-glow"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                                >
                                    <div className="text-2xl mb-2">{achievement.icon}</div>
                                    <h4 className="text-amber-100 font-semibold text-sm mb-1">
                                        {achievement.title}
                                    </h4>
                                    <p className="text-amber-100/60 text-xs">
                                        {achievement.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                >
                    <motion.button
                        onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                        className="px-8 py-4 dragon-gradient rounded-lg text-amber-100 font-semibold text-lg ember-glow hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 heat-shimmer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View Projects
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}

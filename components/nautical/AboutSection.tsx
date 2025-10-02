"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
    { name: "React/Next.js", level: 95, icon: "⚛️" },
    { name: "TypeScript", level: 90, icon: "📘" },
    { name: "Node.js", level: 85, icon: "🟢" },
    { name: "Python", level: 80, icon: "🐍" },
    { name: "Database Design", level: 88, icon: "🗄️" },
    { name: "DevOps", level: 75, icon: "🚢" },
];

const achievements = [
    { title: "Senior Full-Stack Developer", description: "Leading development teams across multiple projects", icon: "👑" },
    { title: "Open Source Contributor", description: "Active contributor to popular development tools", icon: "🌟" },
    { title: "Tech Mentor", description: "Guiding junior developers in their career journey", icon: "🧭" },
    { title: "Performance Optimizer", description: "Specialist in application performance and scalability", icon: "⚡" },
];

export default function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="min-h-screen py-20 relative">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-amber-50 dark:from-slate-800 dark:to-slate-900">
                {/* Rope pattern overlay */}
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm-10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                        className="inline-flex items-center justify-center w-20 h-20 bg-amber-100 dark:bg-amber-900/30 rounded-full mb-6 border-4 border-amber-600 dark:border-amber-400"
                    >
                        <span className="text-3xl">📜</span>
                    </motion.div>
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-800 to-amber-600 dark:from-amber-300 dark:to-amber-100 bg-clip-text text-transparent">
                        Captain&apos;s Log
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Chronicles of a digital explorer navigating the vast oceans of code,
                        leading crews through challenging waters, and discovering new horizons in technology.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Bio Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-8 rounded-2xl border-4 border-amber-200 dark:border-amber-800 shadow-xl">
                            {/* Rope border decoration */}
                            <div className="absolute -top-2 -left-2 -right-2 -bottom-2 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 rounded-3xl -z-10 opacity-20" />
                            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-transparent via-amber-600/30 to-transparent rounded-t-2xl" />

                            {/* Wax seal */}
                            <motion.div
                                animate={{ rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-full border-4 border-amber-600 dark:border-amber-400 flex items-center justify-center shadow-lg"
                            >
                                <span className="text-white text-xl">⚓</span>
                            </motion.div>

                            <h3 className="text-2xl font-bold text-amber-800 dark:text-amber-200 mb-4">
                                The Journey Begins
                            </h3>
                            <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                                <p>
                                    With over 8 years of experience commanding development vessels through
                                    treacherous waters of legacy code and uncharted territories of emerging technologies,
                                    I&apos;ve learned that the best code is like a well-navigated ship: efficient, scalable, and seaworthy.
                                </p>
                                <p>
                                    My expertise spans from the depths of backend architectures to the heights of
                                    modern frontend frameworks, always maintaining a steady course toward clean,
                                    maintainable solutions that stand the test of time and tide.
                                </p>
                                <p>
                                    When I&apos;m not at the helm of development projects, you can find me exploring
                                    new technologies, mentoring fellow developers, or contributing to open-source
                                    projects that help the entire developer community navigate smoother waters.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Skills & Achievements */}
                    <div className="space-y-8">
                        {/* Skills */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center">
                                <span className="mr-3">🗺️</span>
                                Navigation Skills
                            </h3>
                            <div className="space-y-4">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                                        className="relative"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-medium text-slate-700 dark:text-slate-300 flex items-center">
                                                <span className="mr-2 text-lg">{skill.icon}</span>
                                                {skill.name}
                                            </span>
                                            <span className="text-sm text-amber-600 dark:text-amber-400 font-bold">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={isInView ? { width: `${skill.level}%` } : {}}
                                                transition={{ duration: 1, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                                                className="h-full bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-500 rounded-full relative"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Achievements */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center">
                                <span className="mr-3">🏆</span>
                                Notable Voyages
                            </h3>
                            <div className="grid gap-4">
                                {achievements.map((achievement, index) => (
                                    <motion.div
                                        key={achievement.title}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 shadow-lg hover:shadow-xl transition-all"
                                    >
                                        <div className="flex items-start space-x-4">
                                            <div className="text-2xl">{achievement.icon}</div>
                                            <div>
                                                <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1">
                                                    {achievement.title}
                                                </h4>
                                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                                    {achievement.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Decorative elements */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 right-8 w-32 h-32 border-8 border-amber-600/20 dark:border-amber-400/20 rounded-full hidden xl:block"
                >
                    <div className="absolute inset-0 w-4 h-4 bg-amber-600 dark:bg-amber-400 rounded-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-2" />
                </motion.div>
            </div>
        </section>
    );
}

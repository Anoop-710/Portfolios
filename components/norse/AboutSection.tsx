"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
    {
        name: "Frontend Development",
        level: 95,
        emblem: "⚔️",
        description: "React, Next.js, TypeScript, Tailwind CSS"
    },
    {
        name: "Backend Development",
        level: 90,
        emblem: "🛡️",
        description: "Node.js, Python, PostgreSQL, MongoDB"
    },
    {
        name: "UI/UX Design",
        level: 88,
        emblem: "🎨",
        description: "Figma, Adobe XD, Prototyping, User Research"
    },
    {
        name: "DevOps & Cloud",
        level: 85,
        emblem: "⚙️",
        description: "AWS, Docker, CI/CD, Kubernetes"
    },
    {
        name: "Mobile Development",
        level: 82,
        emblem: "📱",
        description: "React Native, Flutter, iOS/Android"
    },
    {
        name: "AI & Machine Learning",
        level: 78,
        emblem: "🧠",
        description: "TensorFlow, PyTorch, Data Science"
    }
];

export function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-20 px-6 bg-slate-50 dark:bg-slate-900">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                        Clan Chronicle
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                        A warrior&apos;s journey through the realms of code, design, and digital craftsmanship.
                        Each shield represents a battle won, a skill mastered, a challenge overcome.
                    </p>
                </motion.div>

                {/* Skills Shield Wall */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group"
                        >
                            <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                                {/* Shield Emblem */}
                                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-2xl">{skill.emblem}</span>
                                </div>

                                {/* Skill Info */}
                                <div className="text-center mb-4">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                        {skill.name}
                                    </h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                                        {skill.description}
                                    </p>
                                </div>

                                {/* Progress Bar */}
                                <div className="relative">
                                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 mb-2">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                                            transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                                            className="bg-gradient-to-r from-amber-500 to-orange-600 h-3 rounded-full relative overflow-hidden"
                                        >
                                            {/* Shimmer effect */}
                                            <motion.div
                                                animate={{
                                                    x: ["-100%", "100%"],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    repeatDelay: 3,
                                                    ease: "easeInOut",
                                                }}
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                            />
                                        </motion.div>
                                    </div>
                                    <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400">
                                        <span>Proficiency</span>
                                        <span className="font-semibold text-amber-600">{skill.level}%</span>
                                    </div>
                                </div>

                                {/* Rune decoration */}
                                <div className="absolute top-2 right-2 text-slate-400 dark:text-slate-500 opacity-50 group-hover:opacity-100 transition-opacity">
                                    ᚱ
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Personal Story */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mr-4">
                                <span className="text-white font-bold">ᛏ</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                                The Warrior&apos;s Tale
                            </h3>
                        </div>

                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                                Born in the digital realms, I began my journey as a curious explorer, fascinated by the magic of code
                                and the artistry of design. What started as a simple interest in how websites work evolved into a
                                passionate quest to master the crafts of modern development.
                            </p>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                                Through countless battles with buggy code, endless nights debugging, and triumphant moments when
                                everything finally works perfectly, I&apos;ve forged my skills in the fires of experience. Each project
                                is a saga, each challenge a worthy opponent, each solution a victory etched in the runes of progress.
                            </p>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                Today, I stand as a full-stack warrior, armed with the wisdom of ancient development practices and
                                the cutting-edge tools of modern technology. My shield wall of skills grows stronger with each
                                battle, and my commitment to crafting exceptional digital experiences burns brighter than ever.
                            </p>
                        </div>

                        {/* Achievement badges */}
                        <div className="flex flex-wrap gap-4 mt-8">
                            {[
                                { icon: "🏆", label: "5+ Years Experience" },
                                { icon: "🚀", label: "50+ Projects Completed" },
                                { icon: "🌟", label: "100% Client Satisfaction" },
                                { icon: "⚡", label: "Performance Optimized" }
                            ].map((achievement, index) => (
                                <motion.div
                                    key={achievement.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                                    className="flex items-center space-x-2 bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded-full"
                                >
                                    <span className="text-lg">{achievement.icon}</span>
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                        {achievement.label}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

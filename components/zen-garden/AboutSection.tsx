"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
    const skills = [
        {
            category: "Frontend",
            technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
            color: "from-blue-500 to-cyan-500"
        },
        {
            category: "Backend",
            technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
            color: "from-green-500 to-emerald-500"
        },
        {
            category: "Tools",
            technologies: ["Git", "Docker", "AWS", "Figma"],
            color: "from-purple-500 to-pink-500"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <section id="about" className="py-20 px-6 relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <pattern id="inkBrush" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M2,10 Q5,2 10,10 Q15,18 18,10" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#inkBrush)" />
                </svg>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 dark:from-slate-200 dark:via-slate-300 dark:to-slate-400 bg-clip-text text-transparent"
                    >
                        About Me
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        With a passion for creating serene digital experiences, I blend traditional Japanese aesthetics
                        with modern web technologies to craft applications that bring tranquility to the digital world.
                    </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    {/* Bio Section */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div
                            variants={itemVariants}
                            className="relative p-8 bg-gradient-to-br from-emerald-50 to-jade-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl border border-emerald-200/50 dark:border-slate-600"
                        >
                            {/* Ink Brush Border */}
                            <div className="absolute inset-0 rounded-2xl">
                                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <path
                                        d="M5,5 Q50,0 95,5 Q100,50 95,95 Q50,100 5,95 Q0,50 5,5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="0.5"
                                        className="text-emerald-300 dark:text-emerald-600 opacity-30"
                                        pathLength="1"
                                    />
                                </svg>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                                    The Art of Code
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                                    Just as a zen garden finds beauty in simplicity, I believe great software emerges from
                                    clean, thoughtful code. Each project is an opportunity to create harmony between
                                    functionality and aesthetic grace.
                                </p>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    When I&apos;m not coding, you&apos;ll find me practicing traditional Japanese arts, tending to
                                    my own small zen garden, or exploring the intersection of technology and mindfulness.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Skills Cards */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {skills.map((skillGroup, index) => (
                            <motion.div
                                key={skillGroup.category}
                                variants={itemVariants}
                                className="relative"
                            >
                                <div className="relative p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
                                    {/* Jade Stone Effect */}
                                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${skillGroup.color} opacity-5 dark:opacity-10`} />

                                    {/* Ink Brush Accent */}
                                    <div className="absolute top-0 right-0 w-16 h-16 opacity-10">
                                        <svg viewBox="0 0 64 64" className="w-full h-full text-slate-400">
                                            <path
                                                d="M8,32 Q20,8 32,32 Q44,56 56,32"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </div>

                                    <div className="relative z-10">
                                        <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
                                            {skillGroup.category}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {skillGroup.technologies.map((tech, techIndex) => (
                                                <motion.span
                                                    key={tech}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                                                    className={`px-3 py-1 bg-gradient-to-r ${skillGroup.color} text-white text-sm rounded-full shadow-sm`}
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Philosophy Quote */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <motion.div
                        variants={itemVariants}
                        className="relative p-8 bg-gradient-to-r from-slate-50 to-emerald-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl border border-slate-200 dark:border-slate-600"
                    >
                        {/* Brush Stroke Border */}
                        <div className="absolute inset-0 rounded-2xl overflow-hidden">
                            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100">
                                <path
                                    d="M10,50 Q30,30 50,50 Q70,70 90,50 Q95,45 90,40 Q70,20 50,40 Q30,60 10,40 Q5,45 10,50"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    className="text-emerald-400"
                                />
                            </svg>
                        </div>

                        <blockquote className="relative z-10">
                            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 italic mb-4 font-light">
                                &quot;In the beginner&apos;s mind there are many possibilities, but in the expert&apos;s there are few.&quot;
                            </p>
                            <cite className="text-slate-500 dark:text-slate-400 text-sm">
                                — Shunryu Suzuki, Zen Mind, Beginner&apos;s Mind
                            </cite>
                        </blockquote>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

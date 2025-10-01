"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Database, Users, Award, Coffee } from "lucide-react";

export function AboutSection() {
    const skills = [
        {
            icon: Code2,
            title: "Frontend Development",
            description: "React, Next.js, TypeScript, Tailwind CSS",
            color: "from-blue-500 to-cyan-500",
        },
        {
            icon: Palette,
            title: "UI/UX Design",
            description: "Figma, Adobe XD, User Research, Prototyping",
            color: "from-purple-500 to-pink-500",
        },
        {
            icon: Database,
            title: "Backend Development",
            description: "Node.js, PostgreSQL, MongoDB, REST APIs",
            color: "from-green-500 to-emerald-500",
        },
        {
            icon: Users,
            title: "Team Leadership",
            description: "Agile, Scrum, Code Reviews, Mentoring",
            color: "from-orange-500 to-red-500",
        },
    ];

    const achievements = [
        {
            icon: Award,
            title: "5+ Years Experience",
            description: "Building web applications",
        },
        {
            icon: Coffee,
            title: "200+ Projects",
            description: "Successfully delivered",
        },
        {
            icon: Users,
            title: "50+ Happy Clients",
            description: "Across the globe",
        },
        {
            icon: Code2,
            title: "10+ Technologies",
            description: "Mastered and counting",
        },
    ];

    return (
        <section id="about" className="py-20 relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-10 right-20 w-16 h-16 border border-amber-600/20 dark:border-amber-400/20"
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute bottom-20 left-10 w-20 h-20 border-2 border-amber-600/15 dark:border-amber-400/15"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="inline-block px-4 py-2 bg-gradient-to-r from-amber-200 to-orange-200 dark:from-amber-800 dark:to-orange-800 text-amber-900 dark:text-amber-100 rounded-full text-sm font-medium mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        About Me
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-900 via-orange-800 to-amber-900 dark:from-amber-100 dark:via-orange-200 dark:to-amber-100 bg-clip-text text-transparent">
                        Crafting Digital Experiences
                    </h2>
                    <p className="text-lg text-amber-700 dark:text-amber-300 max-w-3xl mx-auto leading-relaxed">
                        I&apos;m a passionate full-stack developer who believes in the perfect blend of
                        functionality and aesthetics. Every project is an opportunity to create something
                        meaningful and beautiful.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Content - Story */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Story Panel */}
                        <motion.div
                            className="relative bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-lg border border-amber-600/30 dark:border-amber-400/30 shadow-lg"
                            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Decorative border */}
                            <div className="absolute inset-0 rounded-lg border-2 border-amber-600/20 dark:border-amber-400/20 pointer-events-none" />
                            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-amber-600 dark:border-amber-400" />
                            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-amber-600 dark:border-amber-400" />
                            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-amber-600 dark:border-amber-400" />
                            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-amber-600 dark:border-amber-400" />

                            <div className="relative">
                                <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-4">
                                    My Journey
                                </h3>
                                <div className="space-y-4 text-amber-800 dark:text-amber-200">
                                    <p>
                                        My journey in tech began with curiosity and a simple &quot;Hello World&quot; program.
                                        What started as a hobby quickly evolved into a passion for creating digital
                                        solutions that make a difference.
                                    </p>
                                    <p>
                                        Over the years, I&apos;ve had the privilege of working with startups and
                                        established companies, helping them bring their visions to life through
                                        clean, efficient, and beautiful code.
                                    </p>
                                    <p>
                                        When I&apos;m not coding, you&apos;ll find me exploring new technologies,
                                        contributing to open-source projects, or sharing knowledge with the
                                        developer community.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Achievements */}
                        <motion.div
                            className="grid grid-cols-2 gap-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={achievement.title}
                                    className="bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 p-4 rounded-lg border border-amber-600/20 dark:border-amber-400/20 text-center"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                >
                                    <achievement.icon className="w-6 h-6 mx-auto mb-2 text-amber-600 dark:text-amber-400" />
                                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 text-sm">
                                        {achievement.title}
                                    </h4>
                                    <p className="text-xs text-amber-700 dark:text-amber-300 mt-1">
                                        {achievement.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Skills */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-6">
                            Technical Expertise
                        </h3>

                        <div className="space-y-4">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.title}
                                    className="relative bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-700 p-6 rounded-lg border border-amber-600/30 dark:border-amber-400/30 shadow-lg group"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                                    whileHover={{
                                        y: -5,
                                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                                        scale: 1.02
                                    }}
                                >
                                    {/* Decorative corner */}
                                    <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-amber-600/40 dark:border-amber-400/40 group-hover:border-amber-600 dark:group-hover:border-amber-400 transition-colors" />
                                    <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-amber-600/40 dark:border-amber-400/40 group-hover:border-amber-600 dark:group-hover:border-amber-400 transition-colors" />

                                    <div className="flex items-start gap-4">
                                        <div className={`p-3 rounded-full bg-gradient-to-br ${skill.color} text-white shadow-lg`}>
                                            <skill.icon size={24} />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
                                                {skill.title}
                                            </h4>
                                            <p className="text-sm text-amber-700 dark:text-amber-300 leading-relaxed">
                                                {skill.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Hover effect overlay */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-orange-600/5 dark:from-amber-400/5 dark:to-orange-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        initial={false}
                                    />
                                </motion.div>
                            ))}
                        </div>

                        {/* Call to Action */}
                        <motion.div
                            className="mt-8 p-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg shadow-lg"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            whileHover={{ scale: 1.02, y: -2 }}
                        >
                            <h4 className="font-semibold mb-2">Let&apos;s work together!</h4>
                            <p className="text-sm opacity-90 mb-4">
                                I&apos;m always excited to take on new challenges and collaborate on
                                interesting projects.
                            </p>
                            <motion.button
                                className="w-full py-3 bg-white text-amber-600 font-semibold rounded-md hover:bg-amber-50 transition-colors"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Get In Touch
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

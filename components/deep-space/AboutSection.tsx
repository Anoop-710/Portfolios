"use client";

import { motion, Variants } from "framer-motion";
import { Code2, Palette, Rocket, Users, Award, Lightbulb } from "lucide-react";

interface AboutSectionProps {
    setActiveSection: (section: string) => void;
}

export function AboutSection({ setActiveSection }: AboutSectionProps) {
    const skills = [
        {
            icon: Code2,
            title: "Full Stack Development",
            description: "Proficient in React, Next.js, Node.js, and modern web technologies",
            color: "from-blue-500/20 to-cyan-500/20",
            iconColor: "text-blue-400",
        },
        {
            icon: Palette,
            title: "UI/UX Design",
            description: "Creating beautiful, intuitive interfaces with attention to detail",
            color: "from-purple-500/20 to-pink-500/20",
            iconColor: "text-purple-400",
        },
        {
            icon: Rocket,
            title: "Performance Optimization",
            description: "Building fast, scalable applications with optimal user experience",
            color: "from-green-500/20 to-emerald-500/20",
            iconColor: "text-green-400",
        },
        {
            icon: Users,
            title: "Team Collaboration",
            description: "Working effectively in agile teams and mentoring junior developers",
            color: "from-orange-500/20 to-red-500/20",
            iconColor: "text-orange-400",
        },
        {
            icon: Award,
            title: "Problem Solving",
            description: "Creative solutions to complex technical challenges",
            color: "from-yellow-500/20 to-amber-500/20",
            iconColor: "text-yellow-400",
        },
        {
            icon: Lightbulb,
            title: "Innovation",
            description: "Staying current with emerging technologies and best practices",
            color: "from-indigo-500/20 to-violet-500/20",
            iconColor: "text-indigo-400",
        },
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

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99],
            },
        },
    };

    return (
        <section className="relative min-h-screen py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center mb-16"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
                    >
                        About Me
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-xl md:text-2xl text-gray-300 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        Passionate full-stack developer with 5+ years of experience creating
                        innovative web applications and digital experiences.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div
                                key={skill.title}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.05,
                                    rotateY: 5,
                                    transition: { duration: 0.3 }
                                }}
                                className={`group relative p-8 bg-gradient-to-br ${skill.color} backdrop-blur-sm border border-white/10 dark:border-white/5 rounded-2xl hover:border-white/20 dark:hover:border-white/10 transition-all duration-500`}
                            >
                                {/* Glow effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`} />

                                {/* Nebula border effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <motion.div
                                        className="mb-4"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <Icon className={`w-12 h-12 ${skill.iconColor} mx-auto`} />
                                    </motion.div>

                                    <h3 className="text-xl font-semibold text-white mb-3 text-center">
                                        {skill.title}
                                    </h3>

                                    <p className="text-gray-300 dark:text-gray-400 text-center leading-relaxed">
                                        {skill.description}
                                    </p>
                                </div>

                                {/* Floating particles effect */}
                                <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
                                <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/20 rounded-full animate-pulse delay-1000" />
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <motion.div
                        variants={itemVariants}
                        className="relative p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 dark:border-white/5 rounded-2xl"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                Let&apos;s Build Something Amazing Together
                            </h3>

                            <p className="text-lg text-gray-300 dark:text-gray-300 mb-8 leading-relaxed">
                                I&apos;m always excited to take on new challenges and collaborate on innovative projects.
                                Whether you&apos;re looking for a full-stack developer, consultant, or team member,
                                I&apos;d love to hear about your next big idea.
                            </p>

                            <motion.button
                                onClick={() => setActiveSection("contact")}
                                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-600/30 hover:to-purple-600/30 border border-blue-400/30 hover:border-blue-400/50 rounded-full text-white font-medium transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10">Get In Touch</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

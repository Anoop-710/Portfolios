"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Zap, Users, Award, Lightbulb } from "lucide-react";

export function AboutSection() {
    const skills = [
        { name: "Frontend", level: 95, color: "from-cyan-400 to-blue-400" },
        { name: "Backend", level: 90, color: "from-purple-400 to-pink-400" },
        { name: "UI/UX Design", level: 85, color: "from-green-400 to-teal-400" },
        { name: "DevOps", level: 80, color: "from-orange-400 to-red-400" },
    ];

    const highlights = [
        {
            icon: Code2,
            title: "Clean Code",
            description: "Writing maintainable, scalable, and efficient code that stands the test of time.",
            color: "text-cyan-400",
        },
        {
            icon: Palette,
            title: "Design Systems",
            description: "Creating cohesive visual experiences with attention to detail and user experience.",
            color: "text-purple-400",
        },
        {
            icon: Zap,
            title: "Performance",
            description: "Optimizing applications for speed, accessibility, and exceptional user experiences.",
            color: "text-yellow-400",
        },
        {
            icon: Users,
            title: "Collaboration",
            description: "Working effectively in teams, mentoring juniors, and leading technical initiatives.",
            color: "text-green-400",
        },
    ];

    const achievements = [
        { icon: Award, label: "5+ Years Experience", value: "5+" },
        { icon: Lightbulb, label: "Projects Completed", value: "50+" },
        { icon: Users, label: "Happy Clients", value: "30+" },
        { icon: Code2, label: "Technologies Mastered", value: "15+" },
    ];

    return (
        <section id="about" className="py-20 relative">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 left-10 w-32 h-32 border border-cyan-400/20 rounded-full"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-24 h-24 border border-purple-400/20 rounded-full"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.6, 0.3, 0.6],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                />
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            About Me
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                        Passionate about creating digital experiences that push boundaries and solve real-world problems
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Bio Section */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg blur opacity-20" />
                            <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-400/20">
                                <h3 className="text-2xl font-bold mb-4 text-cyan-400">My Journey</h3>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    I&apos;m a passionate full-stack developer with over 5 years of experience creating
                                    innovative web applications. My journey began with a curiosity about how things
                                    work on the internet, and it has evolved into a career dedicated to crafting
                                    exceptional digital experiences.
                                </p>
                                <p className="text-gray-300 leading-relaxed">
                                    I specialize in modern web technologies and enjoy working on projects that
                                    challenge me to learn and grow. When I&apos;m not coding, you&apos;ll find me exploring
                                    new technologies, contributing to open-source projects, or sharing knowledge
                                    with the developer community.
                                </p>
                            </div>
                        </div>

                        {/* Skills Progress Bars */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold mb-6 text-purple-400">Technical Skills</h3>
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    className="space-y-2"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-300 font-medium">{skill.name}</span>
                                        <span className="text-cyan-400 text-sm">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                                        <motion.div
                                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                                            viewport={{ once: true }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Highlights Grid */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {highlights.map((highlight, index) => (
                            <motion.div
                                key={highlight.title}
                                className="group relative"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                                <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/20 h-full">
                                    <div className={`inline-flex p-3 rounded-full bg-gray-800/50 mb-4 ${highlight.color}`}>
                                        <highlight.icon className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-lg font-semibold mb-2 text-gray-200">{highlight.title}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{highlight.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Achievements Section */}
                <motion.div
                    className="mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={achievement.label}
                                className="text-center group"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="relative inline-flex items-center justify-center w-16 h-16 mb-4">
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity" />
                                    <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-full p-4 border border-cyan-400/20">
                                        <achievement.icon className="w-8 h-8 text-cyan-400" />
                                    </div>
                                </div>
                                <div className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-2">
                                    {achievement.value}
                                </div>
                                <div className="text-gray-400 text-sm">{achievement.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

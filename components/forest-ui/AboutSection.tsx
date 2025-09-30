"use client";

import { motion } from "framer-motion";
import { personalInfo, skills } from "@/lib/constants";
import { Code2, Palette, Database, Wrench } from "lucide-react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
        },
    },
};

const skillCategories = {
    frontend: { icon: Code2, label: "Frontend", color: "from-blue-500 to-cyan-500" },
    backend: { icon: Database, label: "Backend", color: "from-green-500 to-emerald-500" },
    design: { icon: Palette, label: "Design", color: "from-purple-500 to-pink-500" },
    tools: { icon: Wrench, label: "Tools", color: "from-orange-500 to-red-500" },
};

export function AboutSection() {
    const featuredSkills = skills.slice(0, 8); // Show top 8 skills

    return (
        <section id="about" className="py-20 px-6 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid lg:grid-cols-2 gap-16 items-center"
                >
                    {/* Text Content */}
                    <div className="space-y-8">
                        <motion.div variants={itemVariants}>
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                                About Me
                            </h2>
                            <div className="w-20 h-1 bg-emerald-600 dark:bg-emerald-400 rounded-full mb-6" />
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-6">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {personalInfo.bio}
                            </p>

                            <p className="text-lg text-muted-foreground leading-relaxed">
                                When I'm not coding, you'll find me exploring nature trails, capturing moments with my camera,
                                or experimenting with new recipes in the kitchen. I believe that the best code is written by
                                developers who understand both the technical challenges and the human experiences they're solving for.
                            </p>
                        </motion.div>

                        {/* Quick stats */}
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-3 gap-6 pt-8"
                        >
                            <div className="text-center">
                                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">5+</div>
                                <div className="text-sm text-muted-foreground">Years Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">20+</div>
                                <div className="text-sm text-muted-foreground">Projects Completed</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">100%</div>
                                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Skills Cards */}
                    <div className="space-y-6">
                        <motion.h3
                            variants={itemVariants}
                            className="text-2xl font-semibold text-foreground mb-6"
                        >
                            Technical Skills
                        </motion.h3>

                        <motion.div
                            variants={containerVariants}
                            className="grid gap-4"
                        >
                            {Object.entries(skillCategories).map(([category, { icon: Icon, label, color }]) => {
                                const categorySkills = featuredSkills.filter(skill => skill.category === category);
                                if (categorySkills.length === 0) return null;

                                return (
                                    <motion.div
                                        key={category}
                                        variants={itemVariants}
                                        className="group"
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className={`p-2 rounded-lg bg-gradient-to-r ${color} text-white`}>
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <span className="font-medium text-foreground">{label}</span>
                                        </div>

                                        <div className="grid grid-cols-2 gap-3 ml-11">
                                            {categorySkills.map((skill) => (
                                                <motion.div
                                                    key={skill.id}
                                                    variants={itemVariants}
                                                    className="group/skill"
                                                >
                                                    <div className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-emerald-500/50 dark:hover:border-emerald-400/50 transition-all duration-300 hover:shadow-md">
                                                        <span className="text-sm font-medium text-foreground">
                                                            {skill.name}
                                                        </span>
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-12 h-1.5 bg-muted rounded-full overflow-hidden">
                                                                <motion.div
                                                                    className="h-full bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"
                                                                    initial={{ width: 0 }}
                                                                    whileInView={{ width: `${skill.level}%` }}
                                                                    viewport={{ once: true }}
                                                                    transition={{ duration: 1, delay: 0.2 }}
                                                                />
                                                            </div>
                                                            <span className="text-xs text-muted-foreground w-8 text-right">
                                                                {skill.level}%
                                                            </span>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        {/* View all skills button */}
                        <motion.div variants={itemVariants} className="pt-4">
                            <motion.button
                                className="px-6 py-2 border border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-600 dark:hover:bg-emerald-400 hover:text-white rounded-full text-sm font-medium transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View All Skills
                            </motion.button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative elements */}
            <motion.div
                className="absolute top-10 right-10 w-32 h-32 border-2 border-emerald-200/20 dark:border-emerald-700/20 rounded-full"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute bottom-20 left-10 w-2 h-2 bg-emerald-400/40 rounded-full"
                animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </section>
    );
}

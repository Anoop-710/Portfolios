"use client";

import { motion } from "framer-motion";

export function AboutSection() {


    const skills = [
        { name: "React/Next.js", level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-400" },
        { name: "Node.js", level: 85, color: "from-green-500 to-emerald-500" },
        { name: "Python", level: 80, color: "from-yellow-500 to-orange-500" },
        { name: "PostgreSQL", level: 85, color: "from-blue-700 to-indigo-600" },
        { name: "AWS", level: 75, color: "from-orange-400 to-yellow-500" },
    ];

    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-amber-900 dark:text-amber-100 mb-6">
                        About Me
                    </h2>
                    <p className="text-lg text-amber-700 dark:text-amber-300 max-w-3xl mx-auto">
                        Like the changing seasons, I bring warmth and transformation to every project I touch
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Bio Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-8 rounded-3xl border border-amber-200 dark:border-amber-800">
                            <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-4">
                                🍂 My Journey
                            </h3>
                            <p className="text-amber-800 dark:text-amber-200 leading-relaxed mb-4">
                                With over 5 years of experience in full-stack development, I&apos;ve had the privilege of working
                                with startups and established companies alike. My passion lies in creating digital experiences
                                that are both beautiful and functional.
                            </p>
                            <p className="text-amber-800 dark:text-amber-200 leading-relaxed">
                                When I&apos;m not coding, you&apos;ll find me exploring nature trails, experimenting with new recipes,
                                or diving into a good book. I believe that the best code, like the best harvest, comes from
                                patience, attention to detail, and a deep appreciation for the process.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-amber-100 dark:bg-amber-900/30 p-4 rounded-2xl text-center">
                                <div className="text-2xl font-bold text-amber-900 dark:text-amber-100">5+</div>
                                <div className="text-sm text-amber-700 dark:text-amber-300">Years Experience</div>
                            </div>
                            <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-2xl text-center">
                                <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">50+</div>
                                <div className="text-sm text-orange-700 dark:text-orange-300">Projects Completed</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Skills Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-6">
                            🛠️ Skills & Technologies
                        </h3>

                        <div className="space-y-4">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="bg-amber-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-amber-200 dark:border-amber-800"
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-medium text-amber-900 dark:text-amber-100">
                                            {skill.name}
                                        </span>
                                        <span className="text-sm text-amber-600 dark:text-amber-400">
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <div className="w-full bg-amber-200 dark:bg-slate-700 rounded-full h-2">
                                        <motion.div
                                            className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                                            viewport={{ once: true }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Additional Skills Tags */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex flex-wrap gap-2"
                        >
                            {["Git", "Docker", "AWS", "MongoDB", "Redis", "GraphQL", "REST APIs", "CI/CD"].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 rounded-full text-sm border border-amber-200 dark:border-amber-800"
                                >
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                    className="absolute top-20 right-10 text-4xl opacity-10"
                    animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    🍁
                </motion.div>

                <motion.div
                    className="absolute bottom-20 left-10 text-3xl opacity-10"
                    animate={{
                        rotate: [0, -5, 5, 0],
                        y: [0, 5, -5, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                >
                    🌾
                </motion.div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import WatercolorBlot from "./WatercolorBlot";
import InkSplatter from "./InkSplatter";

export default function AboutSection() {
    const [activeSkill, setActiveSkill] = useState<number | null>(null);
    const [splatterTrigger, setSplatterTrigger] = useState(false);

    const handleSplatter = () => {
        setSplatterTrigger(!splatterTrigger);
    };

    const skills = [
        { name: "React/Next.js", level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-400" },
        { name: "Node.js", level: 85, color: "from-green-500 to-emerald-500" },
        { name: "UI/UX Design", level: 88, color: "from-purple-500 to-pink-500" },
        { name: "Animation", level: 92, color: "from-orange-500 to-red-500" },
        { name: "Creative Coding", level: 90, color: "from-teal-500 to-green-500" }
    ];

    const achievements = [
        { number: "50+", label: "Projects Completed" },
        { number: "3+", label: "Years Experience" },
        { number: "100%", label: "Client Satisfaction" },
        { number: "24/7", label: "Creative Energy" }
    ];

    return (
        <section id="about" className="py-20 relative overflow-hidden">
            {/* Background watercolor blots */}
            <div className="absolute inset-0 pointer-events-none">
                <WatercolorBlot
                    delay={2}
                    duration={18}
                    size={400}
                    color="rgba(236, 72, 153, 0.15)"
                    className="absolute top-0 left-0"
                />
                <WatercolorBlot
                    delay={8}
                    duration={20}
                    size={350}
                    color="rgba(59, 130, 246, 0.15)"
                    className="absolute bottom-0 right-0"
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-2 gap-16 items-center"
                >
                    {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-6xl font-bold mb-6">
                                <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                                    About Me
                                </span>
                            </h2>
                            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                <p>
                                    I&apos;m a passionate creative developer who believes that great design and clean code
                                    can work together in perfect harmony. My journey combines artistic sensibility with
                                    technical expertise to create digital experiences that are both beautiful and functional.
                                </p>
                                <p>
                                    With a background in both design and development, I specialize in creating
                                    watercolor-inspired interfaces, fluid animations, and memorable user experiences.
                                    Every project is an opportunity to paint something new and meaningful.
                                </p>
                            </div>
                        </motion.div>

                        {/* Achievements */}
                        <motion.div
                            className="grid grid-cols-2 gap-6"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700"
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                                        {achievement.number}
                                    </div>
                                    <div className="text-sm text-slate-600 dark:text-slate-400">
                                        {achievement.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Column - Skills */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200">
                            Technical Skills
                        </h3>

                        <div className="space-y-4">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    className="relative"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    onHoverStart={() => setActiveSkill(index)}
                                    onHoverEnd={() => setActiveSkill(null)}
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-medium text-slate-700 dark:text-slate-300">
                                            {skill.name}
                                        </span>
                                        <span className="text-sm text-slate-500 dark:text-slate-400">
                                            {skill.level}%
                                        </span>
                                    </div>

                                    <div className="relative h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                        <motion.div
                                            className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full`}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                            viewport={{ once: true }}
                                        />

                                        {/* Shimmer effect on hover */}
                                        <motion.div
                                            className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                            animate={activeSkill === index ? {
                                                x: ['-100%', '100%']
                                            } : {}}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        />
                                    </div>

                                    {/* Ink splatter on skill hover */}
                                    {activeSkill === index && (
                                        <motion.div
                                            className="absolute -top-2 -right-2"
                                            initial={{ scale: 0, rotate: 0 }}
                                            animate={{ scale: 1, rotate: 360 }}
                                            exit={{ scale: 0, rotate: -360 }}
                                        >
                                            <InkSplatter
                                                trigger={true}
                                                color="#3b82f6"
                                                size={60}
                                            />
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Creative Philosophy Card */}
                        <motion.div
                            className="relative p-6 bg-gradient-to-br from-pink-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl border border-pink-200 dark:border-slate-600 overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.button
                                onClick={handleSplatter}
                                className="absolute top-4 right-4 text-2xl opacity-50 hover:opacity-100 transition-opacity"
                            >
                                🎨
                            </motion.button>

                            <InkSplatter
                                trigger={splatterTrigger}
                                color="#ec4899"
                                size={100}
                                className="absolute -top-4 -right-4 opacity-20"
                            />

                            <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3">
                                Creative Philosophy
                            </h4>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                Every project is a blank canvas. I believe in creating digital experiences
                                that evoke emotion, tell stories, and leave lasting impressions through
                                thoughtful design and fluid animations.
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

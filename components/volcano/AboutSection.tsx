"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const skills = [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "Database Design", level: 88 },
        { name: "UI/UX Design", level: 82 },
    ];

    return (
        <section id="about" className="py-20 relative">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-volcano opacity-30" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl md:text-5xl font-bold text-volcano-white mb-6"
                        >
                            Forged in Fire
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl text-volcano-ash max-w-3xl mx-auto leading-relaxed"
                        >
                            Crafting digital experiences with the intensity of a volcanic eruption.
                            My code flows like molten lava, building robust and scalable solutions.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Bio Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="space-y-6"
                        >
                            <div className="relative">
                                {/* Volcanic stone slab background */}
                                <div className="absolute inset-0 bg-volcano-gray rounded-lg transform rotate-1 opacity-80" />
                                <div className="relative bg-volcano-dark rounded-lg p-8 border border-volcano-red/30 box-shadow-volcano">
                                    {/* Ember glow effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-lava opacity-10 rounded-lg"
                                        animate={{
                                            opacity: [0.1, 0.3, 0.1],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    />

                                    <h3 className="text-2xl font-bold text-volcano-white mb-4 relative z-10">
                                        The Developer Behind the Code
                                    </h3>
                                    <div className="space-y-4 text-volcano-ash relative z-10">
                                        <p>
                                            With over 8 years of experience in full-stack development, I&apos;ve had the
                                            privilege of working with startups and enterprises alike, turning complex
                                            problems into elegant solutions.
                                        </p>
                                        <p>
                                            My journey began in the depths of computer science, where I discovered
                                            the power of code to shape digital landscapes. Today, I specialize in
                                            creating performant, accessible, and visually stunning web applications.
                                        </p>
                                        <p>
                                            When I&apos;m not coding, you&apos;ll find me exploring the latest technologies,
                                            contributing to open-source projects, or sharing knowledge with the
                                            developer community.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Skills Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="space-y-6"
                        >
                            <h3 className="text-2xl font-bold text-volcano-white mb-6">
                                Technical Expertise
                            </h3>

                            <div className="grid gap-4">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                                        className="relative"
                                    >
                                        {/* Stone slab container */}
                                        <div className="relative bg-volcano-gray rounded-lg p-4 border border-volcano-red/20 overflow-hidden">
                                            {/* Heat glow effect */}
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-lava opacity-5"
                                                animate={{
                                                    opacity: [0.05, 0.15, 0.05],
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    delay: index * 0.5,
                                                }}
                                            />

                                            {/* Skill bar background */}
                                            <div className="relative z-10 mb-2">
                                                <div className="flex justify-between items-center mb-1">
                                                    <span className="text-volcano-white font-medium">{skill.name}</span>
                                                    <span className="text-volcano-glow text-sm">{skill.level}%</span>
                                                </div>

                                                {/* Progress bar */}
                                                <div className="w-full bg-volcano-dark rounded-full h-3 overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                                                        transition={{ duration: 1.5, delay: 1.2 + index * 0.1 }}
                                                        className="h-full bg-gradient-lava rounded-full relative"
                                                    >
                                                        {/* Animated glow on the progress bar */}
                                                        <motion.div
                                                            className="absolute inset-0 bg-volcano-bright-orange opacity-50 blur-sm"
                                                            animate={{
                                                                opacity: [0.3, 0.8, 0.3],
                                                            }}
                                                            transition={{
                                                                duration: 2,
                                                                repeat: Infinity,
                                                                delay: index * 0.3,
                                                            }}
                                                        />
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Additional info cards */}
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.6, delay: 1.8 }}
                                    className="bg-volcano-dark rounded-lg p-6 border border-volcano-orange/30 text-center"
                                >
                                    <div className="text-3xl font-bold text-volcano-glow mb-2">50+</div>
                                    <div className="text-volcano-ash">Projects Completed</div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.6, delay: 2 }}
                                    className="bg-volcano-dark rounded-lg p-6 border border-volcano-orange/30 text-center"
                                >
                                    <div className="text-3xl font-bold text-volcano-glow mb-2">8+</div>
                                    <div className="text-volcano-ash">Years Experience</div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

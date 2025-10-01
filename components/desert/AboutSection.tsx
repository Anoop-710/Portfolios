'use client';

import { motion } from 'framer-motion';
import { useDesertTheme } from './ThemeProvider';
import { memo } from 'react';

const AboutSection = memo(() => {
    const theme = useDesertTheme();

    const skills = [
        { name: 'Frontend Development', level: 95 },
        { name: 'Backend Development', level: 88 },
        { name: 'UI/UX Design', level: 92 },
        { name: 'DevOps & Deployment', level: 85 },
        { name: 'Mobile Development', level: 80 },
        { name: 'Database Design', level: 87 }
    ];

    return (
        <section id="about" className="relative py-20 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23D4AF37%27 fill-opacity=%270.4%27%3E%3Cpath d=%27M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '60px 60px'
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
                        About the Nomad
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Bio Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className={`p-8 ${theme.textures.leather} rounded-2xl shadow-xl border border-amber-200`}>
                            <h3 className="text-2xl font-semibold text-amber-900 mb-4 flex items-center gap-3">
                                <span className="text-3xl">🏜️</span>
                                Journey Through Code
                            </h3>
                            <p className="text-amber-800 leading-relaxed mb-4">
                                Like a desert nomad navigating vast sand seas, I traverse the ever-shifting landscape of technology.
                                My journey began with curiosity about how things work, evolving into a passion for crafting digital experiences
                                that shimmer like mirages in the digital desert.
                            </p>
                            <p className="text-amber-800 leading-relaxed">
                                With each project, I weave together threads of creativity and functionality, creating applications that
                                not only solve problems but also tell stories. My nomadic approach means I&apos;m always exploring new
                                technologies, frameworks, and methodologies to stay ahead of the shifting sands.
                            </p>
                        </div>

                        <div className={`p-8 ${theme.textures.woven} rounded-2xl shadow-xl border border-amber-200`}>
                            <h3 className="text-2xl font-semibold text-amber-900 mb-4 flex items-center gap-3">
                                <span className="text-3xl">⭐</span>
                                Philosophy
                            </h3>
                            <p className="text-amber-800 leading-relaxed">
                                I believe in building software that&apos;s as resilient as desert flora—beautiful yet tough enough to
                                withstand harsh conditions. Every line of code should serve a purpose, every interface should guide
                                users intuitively, and every solution should scale like ancient trade routes.
                            </p>
                        </div>
                    </motion.div>

                    {/* Skills Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className={`p-8 ${theme.textures.parchment} rounded-2xl shadow-xl border border-amber-200`}>
                            <h3 className="text-2xl font-semibold text-amber-900 mb-6 flex items-center gap-3">
                                <span className="text-3xl">🗺️</span>
                                Skills & Expertise
                            </h3>

                            <div className="space-y-4">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="group"
                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-amber-800 font-medium">{skill.name}</span>
                                            <span className="text-amber-600 text-sm">{skill.level}%</span>
                                        </div>

                                        {/* Skill Bar with Sand Animation */}
                                        <div className="relative h-3 bg-amber-100 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{
                                                    duration: 1.5,
                                                    delay: 0.5 + index * 0.1,
                                                    ease: "easeOut"
                                                }}
                                                viewport={{ once: true }}
                                                className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full relative"
                                            >
                                                {/* Shimmer Effect */}
                                                <motion.div
                                                    animate={{
                                                        x: ['-100%', '200%']
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        delay: 1 + index * 0.2,
                                                        ease: "easeInOut"
                                                    }}
                                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-1/3"
                                                />
                                            </motion.div>

                                            {/* Sand Particles */}
                                            {[...Array(3)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    animate={{
                                                        y: [0, -10, 0],
                                                        opacity: [0, 1, 0],
                                                        scale: [0.5, 1, 0.5]
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        delay: index * 0.3 + i * 0.4,
                                                        ease: "easeInOut"
                                                    }}
                                                    className="absolute top-0 w-1 h-1 bg-amber-300 rounded-full"
                                                    style={{
                                                        left: `${20 + i * 30}%`,
                                                        transform: `translateY(-${skill.level > 50 ? '100%' : '0%'})`
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Fun Facts */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            viewport={{ once: true }}
                            className={`p-6 ${theme.textures.leather} rounded-xl border border-amber-200`}
                        >
                            <h4 className="text-lg font-semibold text-amber-900 mb-3 flex items-center gap-2">
                                <span className="text-2xl">🌵</span>
                                Desert Wisdom
                            </h4>
                            <ul className="text-amber-800 space-y-2 text-sm">
                                <li>• Every great journey begins with a single line of code</li>
                                <li>• Sometimes the best solution is the simplest one</li>
                                <li>• Always pack water (and backups) for long deployments</li>
                                <li>• The most beautiful oases are found off the beaten path</li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Floating Decorative Elements */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -15, 0],
                        rotate: [0, 5, 0, -5, 0],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        duration: 4 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.7,
                        ease: "easeInOut"
                    }}
                    className="absolute pointer-events-none text-4xl"
                    style={{
                        left: `${5 + i * 15}%`,
                        top: `${10 + (i % 2) * 20}%`,
                    }}
                >
                    {i % 3 === 0 ? "🌺" : i % 3 === 1 ? "🦂" : "🐪"}
                </motion.div>
            ))}
        </section>
    );
});

AboutSection.displayName = 'AboutSection';

export default AboutSection;

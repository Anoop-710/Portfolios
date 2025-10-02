"use client";

import { motion } from "framer-motion";
import { LiquidMorphingBackground } from "./LiquidMorphingBackground";

export function AboutSection() {
    const skills = [
        { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Three.js"] },
        { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "GraphQL"] },
        { category: "Bioinformatics", items: ["R", "Biopython", "Genomics", "Proteomics"] },
        { category: "Tools", items: ["Docker", "AWS", "Git", "CI/CD"] },
    ];

    const experiences = [
        {
            title: "Senior Biotech Developer",
            company: "BioTech Innovations",
            period: "2022 - Present",
            description: "Leading development of bioinformatics platforms and data visualization tools for genomic research.",
        },
        {
            title: "Full Stack Developer",
            company: "Life Sciences Corp",
            period: "2020 - 2022",
            description: "Developed web applications for pharmaceutical research and clinical trial management systems.",
        },
        {
            title: "Bioinformatics Analyst",
            company: "Research Institute",
            period: "2018 - 2020",
            description: "Analyzed genomic data and developed computational tools for molecular biology research.",
        },
    ];

    return (
        <section className="relative py-20 bg-slate-900 overflow-hidden">
            <LiquidMorphingBackground />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Passionate about bridging the gap between biotechnology and software development to create innovative solutions for life sciences research and healthcare.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Bio section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-green-500 rounded-lg blur opacity-20" />
                            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
                                <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    With a background in molecular biology and computer science, I specialize in developing software solutions that accelerate biotechnology research and improve healthcare outcomes.
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    My expertise spans from creating interactive data visualizations for genomic research to building robust web platforms for clinical trial management. I believe in the power of code to unlock new discoveries in life sciences.
                                </p>
                            </div>
                        </div>

                        {/* Experience timeline */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-white mb-6">Experience</h3>
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative pl-8 border-l-2 border-cyan-500/30"
                                >
                                    <div className="absolute -left-3 top-0 w-6 h-6 bg-cyan-500 rounded-full border-4 border-slate-900" />
                                    <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700">
                                        <h4 className="text-lg font-semibold text-cyan-400">{exp.title}</h4>
                                        <p className="text-green-400 font-medium">{exp.company}</p>
                                        <p className="text-slate-400 text-sm mb-2">{exp.period}</p>
                                        <p className="text-slate-300 text-sm">{exp.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Skills section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>

                        <div className="grid gap-6">
                            {skills.map((skillGroup, index) => (
                                <motion.div
                                    key={skillGroup.category}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative group"
                                >
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity" />
                                    <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                                        <h4 className="text-lg font-semibold text-purple-400 mb-3">{skillGroup.category}</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {skillGroup.items.map((skill, skillIndex) => (
                                                <motion.span
                                                    key={skill}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                                                    viewport={{ once: true }}
                                                    whileHover={{ scale: 1.05 }}
                                                    className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-green-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm hover:border-cyan-400 transition-colors"
                                                >
                                                    {skill}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-3 gap-4 mt-8"
                        >
                            {[
                                { number: "50+", label: "Projects" },
                                { number: "5+", label: "Years" },
                                { number: "100%", label: "Dedication" },
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl font-bold text-cyan-400 mb-1">{stat.number}</div>
                                    <div className="text-slate-400 text-sm">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Connection lines between sections */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="400" height="400" className="opacity-20">
                        <defs>
                            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#00ffff" />
                                <stop offset="50%" stopColor="#00ff88" />
                                <stop offset="100%" stopColor="#ff0080" />
                            </linearGradient>
                        </defs>
                        {[...Array(6)].map((_, i) => (
                            <motion.circle
                                key={i}
                                r="2"
                                fill="url(#connectionGradient)"
                                initial={{
                                    cx: 200 + Math.cos((i * Math.PI * 2) / 6) * 150,
                                    cy: 200 + Math.sin((i * Math.PI * 2) / 6) * 150,
                                }}
                                animate={{
                                    cx: [200 + Math.cos((i * Math.PI * 2) / 6) * 150, 200 + Math.cos(((i + 1) * Math.PI * 2) / 6) * 150],
                                    cy: [200 + Math.sin((i * Math.PI * 2) / 6) * 150, 200 + Math.sin(((i + 1) * Math.PI * 2) / 6) * 150],
                                }}
                                transition={{
                                    duration: 3,
                                    delay: i * 0.5,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    ease: "easeInOut",
                                }}
                            />
                        ))}
                    </svg>
                </div>
            </div>
        </section>
    );
}

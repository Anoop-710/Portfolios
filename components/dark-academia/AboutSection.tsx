"use client";

import { motion } from "framer-motion";
import { ParchmentCard } from "./ParchmentCard";
import { DustParticles } from "./DustParticles";

export function AboutSection() {
    const skills = [
        { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "Rust", "Go"] },
        { category: "Frameworks", items: ["Next.js", "React", "Node.js", "FastAPI", "Tauri"] },
        { category: "Tools", items: ["Git", "Docker", "PostgreSQL", "Redis", "AWS"] },
        { category: "Design", items: ["Figma", "Tailwind CSS", "Framer Motion", "Three.js", "Blender"] }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="about" className="py-20 bg-gradient-to-b from-slate-800 via-stone-700 to-slate-800 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-transparent to-stone-900/30" />
            </div>

            {/* Atmospheric particles */}
            <DustParticles count={15} className="opacity-40" />

            {/* Decorative architectural elements */}
            <div className="absolute left-0 top-1/4 bottom-1/4 w-24 bg-gradient-to-r from-stone-800/60 to-transparent" />
            <div className="absolute right-0 top-1/4 bottom-1/4 w-24 bg-gradient-to-l from-stone-800/60 to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-6xl font-bold text-amber-100 mb-6">
                        The Scholar&apos;s Codex
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        In the quiet corners of the digital library, where algorithms whisper secrets
                        and code compiles like ancient manuscripts, I weave stories through technology.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Bio section */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={itemVariants}>
                            <ParchmentCard
                                title="The Digital Scribe"
                                subtitle="Chronicler of Code & Keeper of Knowledge"
                                variant="illuminated"
                                className="mb-8"
                            >
                                <div className="space-y-4 text-slate-800">
                                    <p>
                                        Born in the age of dial-up modems and raised among the stacks of silicon and code,
                                        I discovered early that programming was not merely a skill, but a form of digital poetry.
                                    </p>
                                    <p>
                                        My journey began with curiosity about how machines could think, evolving into a passion
                                        for crafting experiences that bridge the gap between human intuition and technological precision.
                                    </p>
                                    <p>
                                        Today, I serve as both architect and storyteller, building systems that are not only
                                        functional but beautiful, scalable yet elegant, powerful yet accessible.
                                    </p>
                                </div>
                            </ParchmentCard>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <ParchmentCard
                                title="Philosophy"
                                subtitle="Code as Literature, Systems as Stories"
                                variant="weathered"
                            >
                                <div className="space-y-3 text-slate-800">
                                    <p>
                                        <strong className="text-amber-900">Simplicity</strong> is the ultimate sophistication—
                                        clean, readable code that tells its own story.
                                    </p>
                                    <p>
                                        <strong className="text-amber-900">Accessibility</strong> is not optional—
                                        technology should serve everyone, not exclude.
                                    </p>
                                    <p>
                                        <strong className="text-amber-900">Performance</strong> is an art—
                                        fast systems that delight users through responsiveness.
                                    </p>
                                </div>
                            </ParchmentCard>
                        </motion.div>
                    </motion.div>

                    {/* Skills section */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={itemVariants} className="mb-8">
                            <ParchmentCard
                                title="Arsenal of Knowledge"
                                subtitle="Tools of the Digital Craft"
                                variant="default"
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {skills.map((skillGroup, index) => (
                                        <motion.div
                                            key={skillGroup.category}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1, duration: 0.6 }}
                                            viewport={{ once: true }}
                                        >
                                            <h4 className="font-semibold text-amber-900 mb-3 border-b border-amber-600 pb-1">
                                                {skillGroup.category}
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {skillGroup.items.map((skill, skillIndex) => (
                                                    <span
                                                        key={skillIndex}
                                                        className="px-3 py-1 bg-amber-200 text-amber-800 text-sm rounded-full border border-amber-400"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </ParchmentCard>
                        </motion.div>

                        {/* Experience highlights */}
                        <motion.div variants={itemVariants}>
                            <ParchmentCard
                                title="Notable Works"
                                subtitle="Chapters in the Great Code Anthology"
                                variant="illuminated"
                            >
                                <div className="space-y-4">
                                    {[
                                        {
                                            title: "E-commerce Platform",
                                            description: "Scalable marketplace handling 10k+ daily transactions",
                                            tech: "Next.js, PostgreSQL, Stripe"
                                        },
                                        {
                                            title: "AI-Powered Analytics",
                                            description: "Machine learning dashboard for business intelligence",
                                            tech: "Python, TensorFlow, React"
                                        },
                                        {
                                            title: "Open Source Libraries",
                                            description: "React components with 50k+ downloads",
                                            tech: "TypeScript, Storybook, Jest"
                                        }
                                    ].map((project, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.2, duration: 0.6 }}
                                            viewport={{ once: true }}
                                            className="border-l-2 border-amber-600 pl-4 py-2"
                                        >
                                            <h5 className="font-semibold text-amber-900">{project.title}</h5>
                                            <p className="text-sm text-slate-700 mb-1">{project.description}</p>
                                            <p className="text-xs text-amber-700 font-mono">{project.tech}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </ParchmentCard>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Call to action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="inline-flex items-center space-x-4 px-8 py-4 bg-amber-400/10 border border-amber-400/30 rounded-full">
                        <span className="text-amber-200 text-lg">📚</span>
                        <span className="text-amber-100 font-medium">
                            Ready to collaborate on the next chapter?
                        </span>
                        <motion.button
                            className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-sm font-semibold rounded-full hover:shadow-lg transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Begin the Dialogue
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

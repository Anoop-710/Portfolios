"use client";

import { motion } from "framer-motion";
import { LaceBorder } from "./LaceBorder";
import { CandleFlame } from "./CandleFlame";

export function AboutSection() {
    const skills = [
        { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
        { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
        { category: "Tools", items: ["Git", "Docker", "AWS", "Figma"] },
        { category: "Design", items: ["UI/UX", "Animation", "Branding", "Illustration"] }
    ];

    return (
        <section id="about" className="py-20 bg-gradient-to-b from-black via-slate-900 to-purple-900 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0">
                {/* Damask pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="w-full h-full bg-repeat" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4af37' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20zm0 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/svg%3E")`
                    }} />
                </div>

                {/* Floating orbs */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-gold-400/20 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.8, 0.2],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 3,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            {/* Candles for ambiance */}
            <motion.div
                className="absolute left-20 top-1/4"
                animate={{
                    opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <CandleFlame size="md" intensity="medium" />
            </motion.div>

            <motion.div
                className="absolute right-20 top-1/3"
                animate={{
                    opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    delay: 1.5,
                    ease: "easeInOut"
                }}
            >
                <CandleFlame size="sm" intensity="high" />
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-gold-200 via-yellow-300 to-gold-400 bg-clip-text text-transparent">
                            About the Artisan
                        </span>
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Behind every great creation lies a story of passion, dedication, and the relentless pursuit of excellence.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left side - Story */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {/* Bio card with ornate frame */}
                        <motion.div
                            className="relative bg-gradient-to-br from-slate-800/50 to-purple-900/50 p-8 rounded-3xl border border-gold-400/20 backdrop-blur-sm"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Decorative border */}
                            <LaceBorder className="absolute top-0 left-0 right-0 h-8 text-gold-400/60" />
                            <LaceBorder className="absolute bottom-0 left-0 right-0 h-8 text-gold-400/60" />

                            <div className="pt-8 pb-8">
                                <h3 className="text-2xl font-bold text-gold-300 mb-4">The Journey</h3>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    In the grand theater of digital creation, I discovered my passion for crafting
                                    immersive web experiences that captivate and inspire. What began as curiosity
                                    about code evolved into an art form, where every project becomes a new act
                                    in an endless performance.
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    With a background in both technology and creative arts, I bring a unique
                                    perspective to every project, blending technical precision with artistic
                                    vision to create digital experiences that are both functional and beautiful.
                                </p>
                            </div>
                        </motion.div>

                        {/* Philosophy card */}
                        <motion.div
                            className="relative bg-gradient-to-br from-purple-900/30 to-slate-800/30 p-8 rounded-3xl border border-purple-400/20 backdrop-blur-sm"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-2xl font-bold text-purple-300 mb-4">The Philosophy</h3>
                            <blockquote className="text-slate-300 italic leading-relaxed">
                                &ldquo;Every line of code is a brushstroke on the canvas of digital reality.
                                Every interface is a stage where user experience takes center stage.
                                Every project is an opportunity to create something magical.&rdquo;
                            </blockquote>
                        </motion.div>
                    </motion.div>

                    {/* Right side - Skills */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-bold text-center text-gold-300 mb-8">Expertise & Craft</h3>

                        <div className="grid gap-6">
                            {skills.map((skillGroup, index) => (
                                <motion.div
                                    key={skillGroup.category}
                                    className="relative bg-gradient-to-br from-slate-800/40 to-purple-900/40 p-6 rounded-2xl border border-gold-400/10 backdrop-blur-sm"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02, borderColor: "rgba(212, 175, 55, 0.3)" }}
                                >
                                    {/* Category header */}
                                    <h4 className="text-lg font-semibold text-gold-400 mb-3 flex items-center">
                                        <div className="w-2 h-2 bg-gold-400 rounded-full mr-3" />
                                        {skillGroup.category}
                                    </h4>

                                    {/* Skills grid */}
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.items.map((skill, skillIndex) => (
                                            <motion.span
                                                key={skill}
                                                className="px-3 py-1 bg-gold-400/10 border border-gold-400/30 text-gold-300 text-sm rounded-full backdrop-blur-sm"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                                                viewport={{ once: true }}
                                                whileHover={{
                                                    scale: 1.05,
                                                    backgroundColor: "rgba(212, 175, 55, 0.2)",
                                                    borderColor: "rgba(212, 175, 55, 0.5)"
                                                }}
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>

                                    {/* Shimmer effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-400/5 to-transparent rounded-2xl"
                                        animate={{
                                            x: ['-100%', '100%'],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            repeatDelay: 2,
                                            ease: "easeInOut"
                                        }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom decorative element */}
                <motion.div
                    className="mt-20 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <LaceBorder className="h-16 text-gold-400/40 mx-auto max-w-md" pattern="ornate" />
                </motion.div>
            </div>

            {/* Ambient lighting */}
            <motion.div
                className="absolute top-1/3 left-1/4 w-64 h-64 bg-gold-400/3 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </section>
    );
}

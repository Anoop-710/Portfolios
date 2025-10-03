"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const skills = [
        {
            category: "Mechanical Engineering",
            items: ["Steam Engine Architecture", "Gear Systems Design", "Pneumatic Systems", "Industrial Automation"],
            icon: "⚙️",
            color: "from-amber-500 to-orange-500"
        },
        {
            category: "Code Architecture",
            items: ["Full-Stack Development", "System Architecture", "Database Design", "API Engineering"],
            icon: "💻",
            color: "from-blue-500 to-cyan-500"
        },
        {
            category: "Steam Technologies",
            items: ["Cloud Infrastructure", "DevOps Engineering", "Container Systems", "Microservices"],
            icon: "☁️",
            color: "from-green-500 to-emerald-500"
        },
        {
            category: "Quality Assurance",
            items: ["Testing Automation", "Code Review", "Performance Optimization", "Security Auditing"],
            icon: "🔧",
            color: "from-purple-500 to-pink-500"
        }
    ];

    return (
        <section id="about" className="py-20 px-6 relative">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    ref={ref}
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-amber-100 mb-6">
                        About the Engineer
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8" />
                    <p className="text-xl text-amber-100/80 max-w-3xl mx-auto leading-relaxed">
                        With over a decade of experience in both mechanical engineering and software development,
                        I bridge the gap between traditional steam-powered machinery and modern digital innovation.
                    </p>
                </motion.div>

                {/* Main Bio Card */}
                <motion.div
                    className="relative mb-16"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="relative bg-gradient-to-br from-amber-800/90 to-orange-900/90 backdrop-blur-sm p-8 md:p-12 rounded-2xl border-2 border-amber-600 shadow-2xl">
                        {/* Decorative Rivets */}
                        <div className="absolute -top-2 -left-2 w-3 h-3 bg-amber-400 rounded-full shadow-lg" />
                        <div className="absolute -top-2 -right-2 w-3 h-3 bg-amber-400 rounded-full shadow-lg" />
                        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-amber-400 rounded-full shadow-lg" />
                        <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-amber-400 rounded-full shadow-lg" />

                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            {/* Bio Content */}
                            <div className="space-y-6">
                                <h3 className="text-2xl md:text-3xl font-bold text-amber-100 mb-4">
                                    Master Steam Engineer & Digital Architect
                                </h3>

                                <div className="space-y-4 text-amber-100/90 leading-relaxed">
                                    <p>
                                        My journey began in the great foundries of industrial manufacturing, where I learned
                                        the art of precision engineering and the poetry of mechanical systems. Each gear,
                                        piston, and valve taught me lessons in reliability, efficiency, and craftsmanship.
                                    </p>

                                    <p>
                                        As the digital revolution dawned, I transitioned my mechanical expertise to the
                                        realm of software engineering. I discovered that code, like steam engines, requires
                                        careful design, regular maintenance, and innovative problem-solving.
                                    </p>

                                    <p>
                                        Today, I combine both worlds—creating robust, scalable applications with the
                                        precision of a master engineer and the innovation of a modern developer. My
                                        work reflects the marriage of traditional craftsmanship and cutting-edge technology.
                                    </p>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-4 pt-6">
                                    {[
                                        { number: "10+", label: "Years Experience" },
                                        { number: "50+", label: "Projects Completed" },
                                        { number: "24/7", label: "Steam Power" }
                                    ].map((stat, index) => (
                                        <motion.div
                                            key={stat.label}
                                            className="text-center p-4 bg-amber-900/50 rounded-lg border border-amber-600/30"
                                            initial={{ scale: 0 }}
                                            animate={isInView ? { scale: 1 } : {}}
                                            transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                                        >
                                            <div className="text-2xl font-bold text-amber-300">{stat.number}</div>
                                            <div className="text-sm text-amber-200">{stat.label}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Animated Gear Illustration */}
                            <div className="flex justify-center">
                                <motion.div
                                    className="relative w-48 h-48"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                >
                                    <svg viewBox="0 0 200 200" className="w-full h-full text-amber-500">
                                        {/* Outer ring */}
                                        <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.6" />

                                        {/* Gear teeth */}
                                        {Array.from({ length: 16 }, (_, i) => {
                                            const angle = (i * 360) / 16;
                                            const outerRadius = 90;
                                            const innerRadius = 70;
                                            const x1 = 100 + Math.cos((angle * Math.PI) / 180) * outerRadius;
                                            const y1 = 100 + Math.sin((angle * Math.PI) / 180) * outerRadius;
                                            const x2 = 100 + Math.cos((angle * Math.PI) / 180) * innerRadius;
                                            const y2 = 100 + Math.sin((angle * Math.PI) / 180) * innerRadius;

                                            return (
                                                <line
                                                    key={i}
                                                    x1={x1}
                                                    y1={y1}
                                                    x2={x2}
                                                    y2={y2}
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                    opacity="0.8"
                                                />
                                            );
                                        })}

                                        {/* Inner mechanisms */}
                                        <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
                                        <circle cx="100" cy="100" r="20" fill="currentColor" opacity="0.9" />

                                        {/* Spokes */}
                                        {Array.from({ length: 6 }, (_, i) => {
                                            const angle = (i * 360) / 6;
                                            const x1 = 100 + Math.cos((angle * Math.PI) / 180) * 20;
                                            const y1 = 100 + Math.sin((angle * Math.PI) / 180) * 20;
                                            const x2 = 100 + Math.cos((angle * Math.PI) / 180) * 40;
                                            const y2 = 100 + Math.sin((angle * Math.PI) / 180) * 40;

                                            return (
                                                <line
                                                    key={i}
                                                    x1={x1}
                                                    y1={y1}
                                                    x2={x2}
                                                    y2={y2}
                                                    stroke="currentColor"
                                                    strokeWidth="3"
                                                    opacity="0.7"
                                                />
                                            );
                                        })}
                                    </svg>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skillCategory, categoryIndex) => (
                        <motion.div
                            key={skillCategory.category}
                            className="relative group"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3 + categoryIndex * 0.1, duration: 0.6 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                        >
                            <div className="relative bg-gradient-to-br from-amber-800/80 to-orange-900/80 backdrop-blur-sm p-6 rounded-xl border border-amber-600/50 shadow-lg hover:shadow-2xl transition-all duration-300">
                                {/* Rivet Details */}
                                <div className="absolute -top-1 -left-1 w-2 h-2 bg-amber-400 rounded-full" />
                                <div className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 rounded-full" />
                                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-amber-400 rounded-full" />
                                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-amber-400 rounded-full" />

                                {/* Category Header */}
                                <div className="flex items-center mb-4">
                                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${skillCategory.color} flex items-center justify-center text-white text-lg mr-3`}>
                                        {skillCategory.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-amber-100">
                                        {skillCategory.category}
                                    </h3>
                                </div>

                                {/* Skills List */}
                                <ul className="space-y-2">
                                    {skillCategory.items.map((skill, skillIndex) => (
                                        <motion.li
                                            key={skill}
                                            className="text-sm text-amber-200/80 flex items-center"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                                        >
                                            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2 flex-shrink-0" />
                                            {skill}
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* Hover Effect Pipes */}
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-600/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Quote */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    <blockquote className="text-2xl md:text-3xl font-bold text-amber-100 italic mb-4">
                        &ldquo;The finest machinery is built not just with steel and steam, but with the ingenuity of the human mind.&rdquo;
                    </blockquote>
                    <cite className="text-lg text-amber-300">— Alexander Cogsworth</cite>
                </motion.div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { PixelCoin } from "./PixelCoin";

export function AboutSection() {
    const [activeCard, setActiveCard] = useState<number | null>(null);

    const characterCards = [
        {
            id: 1,
            title: "FRONTEND MAGE",
            level: "LEVEL 15",
            hp: "850/850",
            mp: "420/420",
            icon: "⚔️",
            skills: ["React", "TypeScript", "Next.js", "Tailwind"],
            description: "Master of modern web technologies and responsive design",
            color: "from-cyan-400 to-cyan-600",
            bgColor: "from-cyan-500/10 to-cyan-600/10",
        },
        {
            id: 2,
            title: "BACKEND KNIGHT",
            level: "LEVEL 12",
            hp: "720/720",
            mp: "380/380",
            icon: "🛡️",
            skills: ["Node.js", "Python", "PostgreSQL", "REST APIs"],
            description: "Guardian of server-side logic and database realms",
            color: "from-magenta-400 to-magenta-600",
            bgColor: "from-magenta-500/10 to-magenta-600/10",
        },
        {
            id: 3,
            title: "DEVOPS WIZARD",
            level: "LEVEL 10",
            hp: "680/680",
            mp: "520/520",
            icon: "🔮",
            skills: ["Docker", "AWS", "CI/CD", "Kubernetes"],
            description: "Sorcerer of deployment and infrastructure magic",
            color: "from-yellow-400 to-yellow-600",
            bgColor: "from-yellow-500/10 to-yellow-600/10",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                bounce: 0.4,
                duration: 0.8,
            },
        },
    };

    return (
        <section
            id="about"
            className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `
              linear-gradient(45deg, #00ffff 1px, transparent 1px),
              linear-gradient(-45deg, #ff00ff 1px, transparent 1px)
            `,
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-magenta-400 to-yellow-400 bg-clip-text text-transparent">
                        CHARACTER SELECT
                    </h2>
                    <p className="text-xl text-gray-300 font-mono tracking-wide max-w-3xl mx-auto">
                        Choose your developer class and explore the unique abilities that power modern web development
                    </p>
                </motion.div>

                {/* Character Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-8 mb-16"
                >
                    {characterCards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            variants={cardVariants}
                            className={`relative group cursor-pointer transition-all duration-300 ${activeCard === card.id ? "scale-105" : ""
                                }`}
                            onClick={() => setActiveCard(activeCard === card.id ? null : card.id)}
                            whileHover={{ y: -8 }}
                        >
                            {/* Card Frame */}
                            <div className={`relative p-6 bg-gradient-to-br ${card.bgColor} border-2 border-gray-600 rounded-lg backdrop-blur-sm`}>
                                {/* Glowing border effect */}
                                <div className={`absolute -inset-0.5 bg-gradient-to-r ${card.color} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                {/* Card Header */}
                                <div className="relative z-10 text-center mb-4">
                                    <div className={`text-4xl mb-2`}>{card.icon}</div>
                                    <h3 className={`text-xl font-bold bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}>
                                        {card.title}
                                    </h3>
                                    <div className="text-sm text-gray-400 font-mono mt-1">
                                        {card.level}
                                    </div>
                                </div>

                                {/* Stats Bars */}
                                <div className="relative z-10 space-y-3 mb-4">
                                    <div className="flex justify-between text-sm font-mono">
                                        <span className="text-red-400">HP:</span>
                                        <span className="text-green-400">{card.hp}</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <motion.div
                                            className="bg-gradient-to-r from-red-400 to-red-600 h-2 rounded-full"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            transition={{ duration: 1, delay: index * 0.2 }}
                                            viewport={{ once: true }}
                                        />
                                    </div>

                                    <div className="flex justify-between text-sm font-mono">
                                        <span className="text-blue-400">MP:</span>
                                        <span className="text-cyan-400">{card.mp}</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <motion.div
                                            className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            transition={{ duration: 1, delay: index * 0.2 + 0.3 }}
                                            viewport={{ once: true }}
                                        />
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="relative z-10 mb-4">
                                    <p className="text-sm text-gray-300 text-center leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>

                                {/* Skills */}
                                <div className="relative z-10">
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {card.skills.map((skill, skillIndex) => (
                                            <motion.span
                                                key={skillIndex}
                                                className={`px-2 py-1 bg-gradient-to-r ${card.color} text-black text-xs font-bold rounded`}
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                transition={{ delay: index * 0.1 + skillIndex * 0.1 }}
                                                viewport={{ once: true }}
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>

                                {/* Hover Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg`} />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Personal Bio */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="relative p-8 bg-gray-900/50 border-2 border-gray-600 rounded-lg backdrop-blur-sm">
                        {/* Glowing border */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-magenta-400 to-yellow-400 rounded-lg opacity-20" />

                        <div className="relative z-10">
                            <div className="flex items-center justify-center mb-6">
                                <PixelCoin size={32} animate={false} />
                                <h3 className="text-2xl font-bold text-cyan-400 ml-3 font-mono tracking-wider">
                                    PLAYER BIO
                                </h3>
                                <PixelCoin size={32} animate={false} className="ml-3" />
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-lg font-bold text-yellow-400 mb-3 font-mono">
                                        QUEST OBJECTIVE
                                    </h4>
                                    <p className="text-gray-300 leading-relaxed">
                                        Passionate full-stack developer on a mission to create extraordinary digital experiences.
                                        Combining the nostalgia of retro gaming with cutting-edge web technologies to build
                                        applications that are both functional and fun.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-bold text-yellow-400 mb-3 font-mono">
                                        SPECIAL ABILITIES
                                    </h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex items-center">
                                            <span className="text-cyan-400 mr-2">▸</span>
                                            Pixel-perfect UI/UX design
                                        </li>
                                        <li className="flex items-center">
                                            <span className="text-magenta-400 mr-2">▸</span>
                                            Performance optimization
                                        </li>
                                        <li className="flex items-center">
                                            <span className="text-yellow-400 mr-2">▸</span>
                                            Cross-platform compatibility
                                        </li>
                                        <li className="flex items-center">
                                            <span className="text-green-400 mr-2">▸</span>
                                            Agile development methodology
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

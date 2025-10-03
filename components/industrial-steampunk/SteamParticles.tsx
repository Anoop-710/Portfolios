"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SteamParticle {
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    duration: number;
    delay: number;
}

export function SteamParticles() {
    const [particles, setParticles] = useState<SteamParticle[]>([]);

    useEffect(() => {
        const generateParticles = () => {
            const newParticles: SteamParticle[] = [];
            const particleCount = 8;

            for (let i = 0; i < particleCount; i++) {
                newParticles.push({
                    id: i,
                    x: Math.random() * 100,
                    y: 100,
                    size: Math.random() * 20 + 10,
                    opacity: Math.random() * 0.3 + 0.1,
                    duration: Math.random() * 10 + 15,
                    delay: Math.random() * 5,
                });
            }
            setParticles(newParticles);
        };

        generateParticles();

        // Generate new particles periodically
        const interval = setInterval(() => {
            setParticles(prev => {
                const newParticles = [...prev];
                // Replace one random particle
                const randomIndex = Math.floor(Math.random() * newParticles.length);
                newParticles[randomIndex] = {
                    id: randomIndex,
                    x: Math.random() * 100,
                    y: 100,
                    size: Math.random() * 20 + 10,
                    opacity: Math.random() * 0.3 + 0.1,
                    duration: Math.random() * 10 + 15,
                    delay: 0,
                };
                return newParticles;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute"
                    style={{
                        left: `${particle.x}%`,
                        bottom: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size * 2}px`,
                    }}
                    initial={{
                        opacity: 0,
                        scale: 0.5,
                        y: 0,
                    }}
                    animate={{
                        opacity: [0, particle.opacity, particle.opacity * 0.8, 0],
                        scale: [0.5, 1, 1.2, 0.8],
                        y: [-50, -100, -150, -200],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: "easeOut",
                    }}
                >
                    {/* Steam cloud shape */}
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 50 100"
                        className="text-amber-400/40"
                    >
                        <defs>
                            <radialGradient id={`steamGradient-${particle.id}`} cx="50%" cy="30%" r="70%">
                                <stop offset="0%" stopColor="currentColor" stopOpacity="0.6" />
                                <stop offset="50%" stopColor="currentColor" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                            </radialGradient>
                        </defs>

                        {/* Main steam puff */}
                        <ellipse
                            cx="25"
                            cy="30"
                            rx="20"
                            ry="25"
                            fill={`url(#steamGradient-${particle.id})`}
                        />

                        {/* Secondary puffs */}
                        <ellipse
                            cx="15"
                            cy="20"
                            rx="12"
                            ry="15"
                            fill={`url(#steamGradient-${particle.id})`}
                            opacity="0.7"
                        />

                        <ellipse
                            cx="35"
                            cy="25"
                            rx="10"
                            ry="12"
                            fill={`url(#steamGradient-${particle.id})`}
                            opacity="0.5"
                        />

                        {/* Wispy trails */}
                        <path
                            d="M10,50 Q15,35 20,25 Q25,20 30,25 Q35,35 40,50"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            opacity="0.3"
                        />

                        <path
                            d="M5,60 Q12,45 18,35 Q22,30 26,35 Q30,45 35,60"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            fill="none"
                            opacity="0.2"
                        />
                    </svg>
                </motion.div>
            ))}

            {/* Additional ambient steam vents */}
            <div className="absolute bottom-0 left-1/4 w-8 h-16">
                <motion.div
                    className="w-full h-full bg-gradient-to-t from-amber-500/20 to-transparent rounded-full"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="absolute bottom-0 right-1/3 w-6 h-12">
                <motion.div
                    className="w-full h-full bg-gradient-to-t from-orange-400/25 to-transparent rounded-full"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                />
            </div>

            <div className="absolute bottom-0 right-1/4 w-10 h-20">
                <motion.div
                    className="w-full h-full bg-gradient-to-t from-amber-600/15 to-transparent rounded-full"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                />
            </div>
        </div>
    );
}

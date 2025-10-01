"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function BirdAnimation() {
    const [birds, setBirds] = useState<Array<{ id: number; x: number; y: number; scale: number; duration: number }>>([]);

    useEffect(() => {
        // Generate random positions only on client side
        const birdConfigs = [
            { id: 1, x: -10, y: 20, scale: 1, duration: 25 },
            { id: 2, x: -15, y: 35, scale: 0.8, duration: 30 },
            { id: 3, x: -20, y: 15, scale: 1.2, duration: 20 },
            { id: 4, x: -12, y: 45, scale: 0.9, duration: 28 },
            { id: 5, x: -25, y: 25, scale: 1.1, duration: 22 },
        ];
        setBirds(birdConfigs);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none z-5">
            {birds.map((bird) => (
                <motion.div
                    key={bird.id}
                    className="absolute"
                    style={{
                        left: `${bird.x}%`,
                        top: `${bird.y}%`,
                    }}
                    animate={{
                        x: ["0%", "120%"],
                        y: [0, -20, 10, -10, 0],
                        rotate: [0, 5, -5, 3, 0],
                    }}
                    transition={{
                        duration: bird.duration,
                        repeat: Infinity,
                        delay: bird.id * 3,
                        ease: "easeInOut",
                        times: [0, 0.3, 0.6, 0.8, 1],
                    }}
                >
                    <motion.svg
                        width="24"
                        height="16"
                        viewBox="0 0 24 16"
                        className="text-slate-700 dark:text-slate-300 opacity-60"
                        animate={{
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        {/* Bird body */}
                        <ellipse cx="12" cy="8" rx="8" ry="4" fill="currentColor" />

                        {/* Bird wings */}
                        <motion.path
                            d="M8,6 Q4,4 6,8 Q8,6 8,6"
                            fill="currentColor"
                            animate={{
                                d: [
                                    "M8,6 Q4,4 6,8 Q8,6 8,6",
                                    "M8,6 Q4,2 6,8 Q8,4 8,6",
                                    "M8,6 Q4,4 6,8 Q8,6 8,6",
                                ],
                            }}
                            transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />

                        <motion.path
                            d="M16,6 Q20,4 18,8 Q16,6 16,6"
                            fill="currentColor"
                            animate={{
                                d: [
                                    "M16,6 Q20,4 18,8 Q16,6 16,6",
                                    "M16,6 Q20,2 18,8 Q16,4 16,6",
                                    "M16,6 Q20,4 18,8 Q16,6 16,6",
                                ],
                            }}
                            transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.1,
                            }}
                        />

                        {/* Bird beak */}
                        <path d="M20,8 L24,7 L23,8 L24,9 Z" fill="currentColor" />

                        {/* Bird eye */}
                        <circle cx="14" cy="7" r="1" fill="white" />
                        <circle cx="14" cy="7" r="0.5" fill="black" />
                    </motion.svg>
                </motion.div>
            ))}

            {/* Occasional bird flocks */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={`flock-${i}`}
                    className="absolute opacity-40"
                    style={{
                        left: `${-20 + i * 30}%`,
                        top: `${25 + i * 15}%`,
                    }}
                    animate={{
                        x: ["0%", "150%"],
                        y: [0, -15, 5, -5, 0],
                    }}
                    transition={{
                        duration: 35 + i * 5,
                        repeat: Infinity,
                        delay: 10 + i * 8,
                        ease: "easeInOut",
                    }}
                >
                    <div className="flex space-x-2">
                        {[...Array(3)].map((_, j) => (
                            <motion.svg
                                key={j}
                                width="16"
                                height="12"
                                viewBox="0 0 16 12"
                                className="text-slate-600 dark:text-slate-400"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 2, -2, 0],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: j * 0.2,
                                    ease: "easeInOut",
                                }}
                            >
                                <ellipse cx="8" cy="6" rx="6" ry="3" fill="currentColor" />
                                <path d="M6,5 Q4,3 5,6 Q6,4 6,5" fill="currentColor" />
                                <path d="M10,5 Q12,3 11,6 Q10,4 10,5" fill="currentColor" />
                                <path d="M13,6 L16,5 L15,6 L16,7 Z" fill="currentColor" />
                            </motion.svg>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

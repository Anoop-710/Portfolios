"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function SunMoonAnimation() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [stars, setStars] = useState<Array<{ id: number; left: number; top: number }>>([]);

    useEffect(() => {
        setMounted(true);
        // Generate random star positions only on client side
        const starPositions = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 80,
        }));
        setStars(starPositions);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none z-5">
            {/* Sun (Light mode) */}
            <motion.div
                className="absolute top-16 right-16"
                animate={{
                    scale: theme === "light" ? [0.8, 1.2, 1] : [1, 0.8, 0],
                    opacity: theme === "light" ? [0.7, 1, 0.9] : [0.9, 0.3, 0],
                    rotate: theme === "light" ? [0, 360] : [180, 360],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <div className="relative">
                    {/* Sun rays */}
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute top-1/2 left-1/2 w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 origin-left"
                            style={{
                                transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                            }}
                            animate={{
                                scale: theme === "light" ? [0.5, 1, 0.5] : [1, 0.3, 0],
                                opacity: theme === "light" ? [0.3, 0.8, 0.3] : [0.8, 0.2, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: i * 0.1,
                                ease: "easeInOut",
                            }}
                        />
                    ))}

                    {/* Sun core */}
                    <motion.div
                        className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 relative"
                        animate={{
                            boxShadow: theme === "light"
                                ? [
                                    "0 0 20px rgba(251, 191, 36, 0.5)",
                                    "0 0 40px rgba(251, 191, 36, 0.8)",
                                    "0 0 20px rgba(251, 191, 36, 0.5)",
                                ]
                                : [
                                    "0 0 5px rgba(251, 191, 36, 0.1)",
                                    "0 0 10px rgba(251, 191, 36, 0.2)",
                                    "0 0 5px rgba(251, 191, 36, 0.1)",
                                ],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        {/* Sun surface pattern */}
                        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-yellow-200 to-orange-300 opacity-80" />
                        <div className="absolute top-2 left-3 w-2 h-2 bg-orange-600 rounded-full opacity-60" />
                        <div className="absolute bottom-3 right-2 w-1.5 h-1.5 bg-orange-600 rounded-full opacity-40" />
                        <div className="absolute top-1/2 right-1 w-1 h-1 bg-red-600 rounded-full opacity-50" />
                    </motion.div>
                </div>
            </motion.div>

            {/* Moon (Dark mode) */}
            <motion.div
                className="absolute top-16 right-16"
                animate={{
                    scale: theme === "dark" ? [0.8, 1.2, 1] : [1, 0.8, 0],
                    opacity: theme === "dark" ? [0.7, 1, 0.9] : [0.9, 0.3, 0],
                    rotate: theme === "dark" ? [0, -360] : [-180, -360],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <div className="relative">
                    {/* Moon glow */}
                    <motion.div
                        className="w-20 h-20 rounded-full bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400"
                        animate={{
                            boxShadow: theme === "dark"
                                ? [
                                    "0 0 30px rgba(148, 163, 184, 0.3)",
                                    "0 0 60px rgba(148, 163, 184, 0.5)",
                                    "0 0 30px rgba(148, 163, 184, 0.3)",
                                ]
                                : [
                                    "0 0 5px rgba(148, 163, 184, 0.1)",
                                    "0 0 10px rgba(148, 163, 184, 0.1)",
                                    "0 0 5px rgba(148, 163, 184, 0.1)",
                                ],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        {/* Moon surface */}
                        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-slate-100 to-slate-300 overflow-hidden">
                            {/* Moon craters */}
                            <motion.div
                                className="absolute top-2 left-3 w-3 h-3 bg-slate-400 rounded-full opacity-40"
                                animate={{
                                    opacity: theme === "dark" ? [0.3, 0.6, 0.3] : [0.6, 0.1, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                            <motion.div
                                className="absolute bottom-2 right-2 w-2 h-2 bg-slate-500 rounded-full opacity-30"
                                animate={{
                                    opacity: theme === "dark" ? [0.2, 0.5, 0.2] : [0.5, 0.1, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: 0.5,
                                    ease: "easeInOut",
                                }}
                            />
                            <motion.div
                                className="absolute top-1/2 left-2 w-1.5 h-1.5 bg-slate-400 rounded-full opacity-35"
                                animate={{
                                    opacity: theme === "dark" ? [0.2, 0.4, 0.2] : [0.4, 0.1, 0],
                                }}
                                transition={{
                                    duration: 3.5,
                                    repeat: Infinity,
                                    delay: 1,
                                    ease: "easeInOut",
                                }}
                            />

                            {/* Moon shine effect */}
                            <motion.div
                                className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/20"
                                animate={{
                                    opacity: theme === "dark" ? [0.1, 0.3, 0.1] : [0.3, 0, 0],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Stars (Dark mode only) */}
            {theme === "dark" && (
                <div className="absolute inset-0">
                    {stars.map((star) => (
                        <motion.div
                            key={`star-${star.id}`}
                            className="absolute w-1 h-1 bg-white rounded-full"
                            style={{
                                left: `${star.left}%`,
                                top: `${star.top}%`,
                            }}
                            animate={{
                                opacity: [0.2, 1, 0.2],
                                scale: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 2 + (star.id % 3) * 1.5,
                                repeat: Infinity,
                                delay: (star.id % 5) * 1.2,
                                ease: "easeInOut",
                            }}
                        />
                    ))}

                    {/* Constellations */}
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={`constellation-${i}`}
                            className="absolute"
                            style={{
                                left: `${20 + i * 30}%`,
                                top: `${10 + i * 20}%`,
                            }}
                            animate={{
                                opacity: [0.3, 0.8, 0.3],
                            }}
                            transition={{
                                duration: 4 + i,
                                repeat: Infinity,
                                delay: i * 2,
                                ease: "easeInOut",
                            }}
                        >
                            <svg width="60" height="60" className="text-white/60">
                                <line x1="10" y1="10" x2="30" y2="20" stroke="currentColor" strokeWidth="1" />
                                <line x1="30" y1="20" x2="50" y2="15" stroke="currentColor" strokeWidth="1" />
                                <line x1="50" y1="15" x2="45" y2="35" stroke="currentColor" strokeWidth="1" />
                                <line x1="30" y1="20" x2="25" y2="40" stroke="currentColor" strokeWidth="1" />
                                <circle cx="10" cy="10" r="1.5" fill="currentColor" />
                                <circle cx="30" cy="20" r="1.5" fill="currentColor" />
                                <circle cx="50" cy="15" r="1.5" fill="currentColor" />
                                <circle cx="45" cy="35" r="1.5" fill="currentColor" />
                                <circle cx="25" cy="40" r="1.5" fill="currentColor" />
                            </svg>
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Aurora effect (subtle background animation) */}
            <motion.div
                className="absolute top-0 left-0 right-0 h-1/3 opacity-10"
                animate={{
                    background: theme === "light"
                        ? [
                            "linear-gradient(90deg, rgba(251, 191, 36, 0.1), rgba(245, 158, 11, 0.1), rgba(251, 191, 36, 0.1))",
                            "linear-gradient(90deg, rgba(245, 158, 11, 0.2), rgba(217, 119, 6, 0.2), rgba(245, 158, 11, 0.2))",
                            "linear-gradient(90deg, rgba(251, 191, 36, 0.1), rgba(245, 158, 11, 0.1), rgba(251, 191, 36, 0.1))",
                        ]
                        : [
                            "linear-gradient(90deg, rgba(148, 163, 184, 0.1), rgba(100, 116, 139, 0.1), rgba(148, 163, 184, 0.1))",
                            "linear-gradient(90deg, rgba(100, 116, 139, 0.2), rgba(71, 85, 105, 0.2), rgba(100, 116, 139, 0.2))",
                            "linear-gradient(90deg, rgba(148, 163, 184, 0.1), rgba(100, 116, 139, 0.1), rgba(148, 163, 184, 0.1))",
                        ],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
}

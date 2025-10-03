"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Raven {
    id: number;
    x: number;
    y: number;
    scale: number;
    speed: number;
    delay: number;
}

export function RavenAnimation() {
    const [ravens, setRavens] = useState<Raven[]>([]);

    useEffect(() => {
        // Create ravens with random positions and properties
        const newRavens: Raven[] = Array.from({ length: 3 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: 20 + Math.random() * 30,
            scale: 0.8 + Math.random() * 0.4,
            speed: 0.5 + Math.random() * 0.5,
            delay: i * 2,
        }));

        setRavens(newRavens);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {ravens.map((raven) => (
                <motion.div
                    key={raven.id}
                    className="absolute"
                    style={{
                        left: `${raven.x}%`,
                        top: `${raven.y}%`,
                    }}
                    initial={{ x: -100, y: 50, opacity: 0 }}
                    animate={{
                        x: [0, 200, 400, 600, 800, 1000],
                        y: [50, 30, 80, 40, 70, 50],
                        opacity: [0, 1, 1, 1, 1, 0],
                    }}
                    transition={{
                        duration: 20 / raven.speed,
                        delay: raven.delay,
                        repeat: Infinity,
                        repeatDelay: 5 + raven.delay,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                    }}
                >
                    {/* Raven SVG */}
                    <motion.svg
                        width="40"
                        height="30"
                        viewBox="0 0 40 30"
                        style={{ scale: raven.scale }}
                        className="text-slate-900 dark:text-slate-100 drop-shadow-lg"
                    >
                        <motion.path
                            d="M2 15 C2 10, 8 8, 15 10 C20 11, 25 12, 35 10 C37 9, 38 8, 38 10 C38 12, 37 14, 35 15 C25 17, 20 18, 15 16 C8 14, 2 15, 2 15 Z"
                            fill="currentColor"
                            animate={{
                                d: [
                                    "M2 15 C2 10, 8 8, 15 10 C20 11, 25 12, 35 10 C37 9, 38 8, 38 10 C38 12, 37 14, 35 15 C25 17, 20 18, 15 16 C8 14, 2 15, 2 15 Z",
                                    "M2 16 C2 11, 8 9, 15 11 C20 12, 25 13, 35 11 C37 10, 38 9, 38 11 C38 13, 37 15, 35 16 C25 18, 20 19, 15 17 C8 15, 2 16, 2 16 Z",
                                    "M2 15 C2 10, 8 8, 15 10 C20 11, 25 12, 35 10 C37 9, 38 8, 38 10 C38 12, 37 14, 35 15 C25 17, 20 18, 15 16 C8 14, 2 15, 2 15 Z",
                                ],
                            }}
                            transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                        {/* Wings */}
                        <motion.path
                            d="M10 12 C5 8, 8 6, 12 8 C15 9, 18 10, 22 8 C25 6, 28 8, 25 12"
                            fill="currentColor"
                            animate={{
                                d: [
                                    "M10 12 C5 8, 8 6, 12 8 C15 9, 18 10, 22 8 C25 6, 28 8, 25 12",
                                    "M10 13 C6 9, 9 7, 13 9 C16 10, 19 11, 23 9 C26 7, 29 9, 26 13",
                                    "M10 12 C5 8, 8 6, 12 8 C15 9, 18 10, 22 8 C25 6, 28 8, 25 12",
                                ],
                            }}
                            transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                        {/* Beak */}
                        <motion.path
                            d="M35 12 L38 13 L35 14 Z"
                            fill="currentColor"
                            animate={{
                                d: [
                                    "M35 12 L38 13 L35 14 Z",
                                    "M35 11.5 L38 12.5 L35 13.5 Z",
                                    "M35 12 L38 13 L35 14 Z",
                                ],
                            }}
                            transition={{
                                duration: 0.4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </motion.svg>
                </motion.div>
            ))}

            {/* Additional ravens for variety */}
            {Array.from({ length: 2 }, (_, i) => (
                <motion.div
                    key={`raven-extra-${i}`}
                    className="absolute"
                    style={{
                        left: `${20 + i * 60}%`,
                        top: `${40 + i * 20}%`,
                    }}
                    initial={{ x: -50, y: 0, opacity: 0 }}
                    animate={{
                        x: [0, 150, 300, 450],
                        y: [0, -20, 20, 0],
                        opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                        duration: 15 + i * 5,
                        delay: 3 + i * 3,
                        repeat: Infinity,
                        repeatDelay: 8,
                        ease: "easeInOut",
                    }}
                >
                    <svg
                        width="35"
                        height="25"
                        viewBox="0 0 35 25"
                        className="text-slate-800 dark:text-slate-200 drop-shadow-md"
                    >
                        <motion.path
                            d="M2 12 C2 8, 7 6, 12 8 C16 9, 20 10, 28 8 C30 7, 31 6, 31 8 C31 10, 30 12, 28 12 C20 14, 16 15, 12 13 C7 11, 2 12, 2 12 Z"
                            fill="currentColor"
                            animate={{
                                d: [
                                    "M2 12 C2 8, 7 6, 12 8 C16 9, 20 10, 28 8 C30 7, 31 6, 31 8 C31 10, 30 12, 28 12 C20 14, 16 15, 12 13 C7 11, 2 12, 2 12 Z",
                                    "M2 13 C2 9, 7 7, 12 9 C16 10, 20 11, 28 9 C30 8, 31 7, 31 9 C31 11, 30 13, 28 13 C20 15, 16 16, 12 14 C7 12, 2 13, 2 13 Z",
                                    "M2 12 C2 8, 7 6, 12 8 C16 9, 20 10, 28 8 C30 7, 31 6, 31 8 C31 10, 30 12, 28 12 C20 14, 16 15, 12 13 C7 11, 2 12, 2 12 Z",
                                ],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </svg>
                </motion.div>
            ))}
        </div>
    );
}

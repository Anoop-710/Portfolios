"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Lantern {
    id: number;
    x: number;
    y: number;
    scale: number;
    delay: number;
    intensity: number;
}

export default function StoneLanterns() {
    const [lanterns, setLanterns] = useState<Lantern[]>([]);

    useEffect(() => {
        const generateLanterns = () => {
            const newLanterns: Lantern[] = [];

            // Corner lanterns
            newLanterns.push(
                { id: 0, x: 5, y: 20, scale: 0.8, delay: 0, intensity: 0.6 },
                { id: 1, x: 95, y: 25, scale: 0.9, delay: 1, intensity: 0.7 },
                { id: 2, x: 8, y: 70, scale: 0.7, delay: 2, intensity: 0.5 },
                { id: 3, x: 92, y: 75, scale: 0.85, delay: 1.5, intensity: 0.8 }
            );

            // Additional scattered lanterns
            for (let i = 4; i < 12; i++) {
                newLanterns.push({
                    id: i,
                    x: Math.random() * 80 + 10,
                    y: Math.random() * 60 + 20,
                    scale: 0.4 + Math.random() * 0.4,
                    delay: Math.random() * 3,
                    intensity: 0.3 + Math.random() * 0.4,
                });
            }

            setLanterns(newLanterns);
        };

        generateLanterns();
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-1 overflow-hidden">
            {lanterns.map((lantern) => (
                <motion.div
                    key={lantern.id}
                    className="absolute"
                    style={{
                        left: `${lantern.x}%`,
                        bottom: `${lantern.y}%`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                        scale: [lantern.scale, lantern.scale * 1.1, lantern.scale],
                        opacity: [0.3, lantern.intensity, 0.3],
                    }}
                    transition={{
                        duration: 4,
                        delay: lantern.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <div className="relative">
                        {/* Lantern Glow */}
                        <motion.div
                            className="absolute inset-0 rounded-full bg-gradient-radial from-yellow-300/60 via-yellow-200/30 to-transparent dark:from-yellow-400/50 dark:via-yellow-300/20 dark:to-transparent"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.3, 0.8, 0.3],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            style={{
                                width: "120px",
                                height: "120px",
                                left: "-40px",
                                top: "-40px",
                            }}
                        />

                        {/* Stone Lantern Structure */}
                        <div className="relative w-16 h-32">
                            {/* Base */}
                            <motion.div
                                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-4 bg-gradient-to-t from-slate-600 to-slate-500 dark:from-slate-700 dark:to-slate-600 rounded-sm"
                                animate={{
                                    opacity: [0.8, 1, 0.8],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />

                            {/* Main Body */}
                            <motion.div
                                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-10 h-16 bg-gradient-to-t from-slate-500 to-slate-400 dark:from-slate-600 dark:to-slate-500 rounded-sm"
                                animate={{
                                    opacity: [0.7, 0.9, 0.7],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />

                            {/* Roof */}
                            <motion.div
                                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-14 h-6 bg-gradient-to-t from-slate-700 to-slate-600 dark:from-slate-800 dark:to-slate-700"
                                style={{
                                    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                                }}
                                animate={{
                                    opacity: [0.6, 0.8, 0.6],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />

                            {/* Light Source */}
                            <motion.div
                                className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-gradient-to-t from-yellow-400/80 to-yellow-200/60 dark:from-yellow-300/90 dark:to-yellow-100/70 rounded-t-full"
                                animate={{
                                    opacity: [0.4, 1, 0.4],
                                    scaleY: [0.8, 1.2, 0.8],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />

                            {/* Light Reflection */}
                            <motion.div
                                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-gradient-to-r from-transparent via-yellow-200/40 to-transparent dark:via-yellow-100/50 dark:to-transparent rounded-full blur-sm"
                                animate={{
                                    opacity: [0.2, 0.6, 0.2],
                                    scaleX: [0.8, 1.2, 0.8],
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </div>
                    </div>
                </motion.div>
            ))}

            {/* Ambient Lighting Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-yellow-100/5 dark:to-yellow-900/5 pointer-events-none" />
        </div>
    );
}

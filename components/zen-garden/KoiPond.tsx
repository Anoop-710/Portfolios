"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface KoiFish {
    id: number;
    x: number;
    y: number;
    scale: number;
    color: string;
    delay: number;
    duration: number;
}

interface Ripple {
    id: number;
    x: number;
    y: number;
    scale: number;
    opacity: number;
}

export default function KoiPond() {
    const [koiFish, setKoiFish] = useState<KoiFish[]>([]);
    const [ripples, setRipples] = useState<Ripple[]>([]);

    useEffect(() => {
        const generateKoi = () => {
            const colors = ["#ff6b35", "#f7931e", "#ffd23f", "#ee7752", "#e73c7e"];
            const newKoi: KoiFish[] = [];

            for (let i = 0; i < 8; i++) {
                newKoi.push({
                    id: i,
                    x: Math.random() * 80 + 10,
                    y: Math.random() * 60 + 20,
                    scale: 0.8 + Math.random() * 0.4,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    delay: Math.random() * 5,
                    duration: 15 + Math.random() * 10,
                });
            }
            setKoiFish(newKoi);
        };

        const generateRipples = () => {
            const newRipples: Ripple[] = [];
            for (let i = 0; i < 5; i++) {
                newRipples.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    scale: 0,
                    opacity: 0.6,
                });
            }
            setRipples(newRipples);
        };

        generateKoi();
        generateRipples();
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            {/* Pond Background */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-200/30 via-blue-100/20 to-transparent dark:from-blue-900/20 dark:via-blue-800/10 dark:to-transparent" />

            {/* Water Surface */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-300/40 to-blue-200/20 dark:from-blue-800/30 dark:to-blue-900/20" />

            {/* Koi Fish */}
            {koiFish.map((fish) => (
                <motion.div
                    key={fish.id}
                    className="absolute"
                    style={{
                        left: `${fish.x}%`,
                        bottom: `${fish.y}%`,
                    }}
                    initial={{
                        x: 0,
                        y: 0,
                        rotate: 0,
                        scale: fish.scale
                    }}
                    animate={{
                        x: [0, 100, 50, -20, 0],
                        y: [0, -30, 20, -10, 0],
                        rotate: [0, 15, -10, 5, 0],
                    }}
                    transition={{
                        duration: fish.duration,
                        delay: fish.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <motion.div
                        animate={{
                            scaleX: [1, -1, 1],
                        }}
                        transition={{
                            duration: fish.duration / 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <svg
                            width="32"
                            height="16"
                            viewBox="0 0 32 16"
                            className="drop-shadow-sm"
                        >
                            {/* Fish Body */}
                            <ellipse
                                cx="16"
                                cy="8"
                                rx="12"
                                ry="6"
                                fill={fish.color}
                                opacity="0.8"
                            />
                            {/* Fish Tail */}
                            <path
                                d="M4 8 L0 6 L0 10 Z"
                                fill={fish.color}
                                opacity="0.9"
                            />
                            {/* Fish Fin */}
                            <ellipse
                                cx="20"
                                cy="4"
                                rx="4"
                                ry="2"
                                fill={fish.color}
                                opacity="0.7"
                            />
                            {/* Eye */}
                            <circle
                                cx="22"
                                cy="6"
                                r="1.5"
                                fill="white"
                            />
                            <circle
                                cx="22"
                                cy="6"
                                r="0.8"
                                fill="black"
                            />
                        </svg>
                    </motion.div>
                </motion.div>
            ))}

            {/* Water Ripples */}
            {ripples.map((ripple, index) => (
                <motion.div
                    key={ripple.id}
                    className="absolute rounded-full border-2 border-blue-300/40 dark:border-blue-600/40"
                    style={{
                        left: `${ripple.x}%`,
                        bottom: `${ripple.y}%`,
                        width: "20px",
                        height: "20px",
                    }}
                    initial={{
                        scale: 0,
                        opacity: ripple.opacity,
                        x: "-50%",
                        y: "-50%"
                    }}
                    animate={{
                        scale: [0, 2, 4],
                        opacity: [ripple.opacity, ripple.opacity * 0.5, 0],
                    }}
                    transition={{
                        duration: 3,
                        delay: index * 0.8,
                        repeat: Infinity,
                        ease: "easeOut",
                    }}
                />
            ))}

            {/* Pond Reflections */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-transparent via-blue-100/10 to-blue-50/20 dark:from-transparent dark:via-blue-900/10 dark:to-blue-800/20" />
        </div>
    );
}

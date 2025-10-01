"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function CloudAnimation() {
    const [clouds, setClouds] = useState<Array<{ id: number; left: number; top: number }>>([]);

    useEffect(() => {
        // Generate random positions only on client side
        const largeClouds = Array.from({ length: 8 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 60,
        }));
        setClouds(largeClouds);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none z-5">
            {/* Large background clouds */}
            {clouds.map((cloud) => (
                <motion.div
                    key={`cloud-${cloud.id}`}
                    className="absolute opacity-30 dark:opacity-20"
                    style={{
                        left: `${cloud.left}%`,
                        top: `${cloud.top}%`,
                    }}
                    animate={{
                        x: [0, 100, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20 + Math.random() * 10,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "linear",
                    }}
                >
                    <svg
                        width="120"
                        height="60"
                        viewBox="0 0 120 60"
                        className="text-white dark:text-slate-300"
                    >
                        <ellipse cx="30" cy="45" rx="25" ry="15" fill="currentColor" opacity="0.6" />
                        <ellipse cx="60" cy="35" rx="35" ry="20" fill="currentColor" opacity="0.8" />
                        <ellipse cx="90" cy="45" rx="25" ry="15" fill="currentColor" opacity="0.6" />
                    </svg>
                </motion.div>
            ))}

            {/* Small foreground clouds */}
            {[...Array(12)].map((_, i) => (
                <motion.div
                    key={`small-cloud-${i}`}
                    className="absolute opacity-20 dark:opacity-15"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${40 + Math.random() * 40}%`,
                    }}
                    animate={{
                        x: [0, 150, 0],
                        scale: [0.8, 1.1, 0.8],
                    }}
                    transition={{
                        duration: 15 + Math.random() * 8,
                        repeat: Infinity,
                        delay: Math.random() * 3,
                        ease: "linear",
                    }}
                >
                    <svg
                        width="80"
                        height="40"
                        viewBox="0 0 80 40"
                        className="text-white dark:text-slate-400"
                    >
                        <ellipse cx="20" cy="30" rx="18" ry="10" fill="currentColor" opacity="0.5" />
                        <ellipse cx="40" cy="25" rx="25" ry="15" fill="currentColor" opacity="0.7" />
                        <ellipse cx="60" cy="30" rx="18" ry="10" fill="currentColor" opacity="0.5" />
                    </svg>
                </motion.div>
            ))}

            {/* Mist layers */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-32 opacity-20 dark:opacity-15"
                animate={{
                    opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 1200 128"
                    className="text-slate-300 dark:text-slate-400"
                >
                    <defs>
                        <linearGradient id="mistGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
                            <stop offset="50%" stopColor="currentColor" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M0,64 Q300,40 600,48 T1200,56 L1200,128 L0,128 Z"
                        fill="url(#mistGradient)"
                    />
                    <path
                        d="M0,80 Q400,60 800,68 T1200,72 L1200,128 L0,128 Z"
                        fill="url(#mistGradient)"
                        opacity="0.6"
                    />
                    <path
                        d="M0,96 Q200,80 400,86 T1200,88 L1200,128 L0,128 Z"
                        fill="url(#mistGradient)"
                        opacity="0.4"
                    />
                </svg>
            </motion.div>
        </div>
    );
}

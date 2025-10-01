"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface GearProps {
    size: number;
    duration: number;
    delay: number;
    x: number;
    y: number;
}

function Gear({ size, duration, delay, x, y }: GearProps) {
    return (
        <motion.div
            className="absolute opacity-10 dark:opacity-20"
            style={{
                left: `${x}%`,
                top: `${y}%`,
                width: `${size}px`,
                height: `${size}px`,
            }}
            animate={{
                rotate: 360,
            }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "linear",
            }}
        >
            <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-amber-600 dark:text-amber-400"
                fill="currentColor"
            >
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="50" cy="50" r="8" fill="currentColor" />
                {Array.from({ length: 12 }, (_, i) => (
                    <g key={i}>
                        <line
                            x1="50"
                            y1="10"
                            x2="50"
                            y2="20"
                            stroke="currentColor"
                            strokeWidth="3"
                            transform={`rotate(${i * 30} 50 50)`}
                        />
                        <circle
                            cx="50"
                            cy="15"
                            r="3"
                            fill="currentColor"
                            transform={`rotate(${i * 30} 50 50)`}
                        />
                    </g>
                ))}
            </svg>
        </motion.div>
    );
}

export function GearBackground() {
    const [gears, setGears] = useState<GearProps[]>([]);

    useEffect(() => {
        const gearConfigs: GearProps[] = [
            { size: 80, duration: 20, delay: 0, x: 10, y: 15 },
            { size: 60, duration: 15, delay: 2, x: 75, y: 25 },
            { size: 100, duration: 25, delay: 1, x: 20, y: 60 },
            { size: 70, duration: 18, delay: 3, x: 80, y: 70 },
            { size: 90, duration: 22, delay: 1.5, x: 5, y: 45 },
            { size: 75, duration: 16, delay: 2.5, x: 85, y: 10 },
            { size: 85, duration: 24, delay: 0.5, x: 45, y: 5 },
            { size: 65, duration: 14, delay: 3.5, x: 15, y: 80 },
        ];

        setGears(gearConfigs);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            {gears.map((gear, index) => (
                <Gear key={index} {...gear} />
            ))}

            {/* Additional decorative elements */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-32 h-32 opacity-5 dark:opacity-10"
                animate={{
                    rotate: -360,
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
            >
                <div className="w-full h-full border-2 border-amber-600 dark:border-amber-400 rounded-full" />
            </motion.div>

            <motion.div
                className="absolute bottom-1/4 right-1/4 w-24 h-24 opacity-5 dark:opacity-10"
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                <div className="w-full h-full border border-amber-600 dark:border-amber-400 rounded-full" />
            </motion.div>
        </div>
    );
}

"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingElement {
    id: number;
    x: number;
    y: number;
    size: number;
    icon: string;
    duration: number;
    delay: number;
}

export default function MapOverlay() {
    const [elements, setElements] = useState<FloatingElement[]>([]);

    useEffect(() => {
        const mapElements = [
            { icon: "🏝️", x: 10, y: 15, size: 40 },
            { icon: "⚓", x: 85, y: 25, size: 35 },
            { icon: "🌊", x: 20, y: 70, size: 45 },
            { icon: "🗺️", x: 75, y: 80, size: 38 },
            { icon: "⛵", x: 60, y: 40, size: 42 },
            { icon: "🧭", x: 30, y: 45, size: 36 },
            { icon: "🏴‍☠️", x: 90, y: 60, size: 44 },
            { icon: "💎", x: 15, y: 85, size: 32 },
            { icon: "🗝️", x: 70, y: 15, size: 34 },
            { icon: "📜", x: 45, y: 75, size: 38 },
        ];

        const animatedElements: FloatingElement[] = mapElements.map((element, index) => ({
            id: index,
            x: element.x,
            y: element.y,
            size: element.size,
            icon: element.icon,
            duration: 15 + Math.random() * 10,
            delay: Math.random() * 5,
        }));

        setElements(animatedElements);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            {/* Animated background patterns */}
            <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="none">
                    {/* Map grid lines */}
                    <defs>
                        <pattern id="mapGrid" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#mapGrid)" className="text-amber-600 dark:text-amber-400" />

                    {/* Decorative map elements */}
                    <motion.path
                        d="M100,500 Q300,300 500,400 T900,350 T1300,500 T1700,450"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="20,10"
                        className="text-amber-600/30 dark:text-amber-400/30"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 8, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                    />

                    {/* Floating islands */}
                    {[
                        { cx: 200, cy: 200, r: 30 },
                        { cx: 1400, cy: 300, r: 25 },
                        { cx: 800, cy: 800, r: 35 },
                        { cx: 1500, cy: 700, r: 28 },
                    ].map((island, index) => (
                        <motion.circle
                            key={index}
                            cx={island.cx}
                            cy={island.cy}
                            r={island.r}
                            fill="currentColor"
                            className="text-green-600/20 dark:text-green-400/20"
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.2, 0.3, 0.2],
                            }}
                            transition={{
                                duration: 4 + index * 2,
                                repeat: Infinity,
                                delay: index * 0.5,
                            }}
                        />
                    ))}
                </svg>
            </div>

            {/* Floating elements */}
            {elements.map((element) => (
                <motion.div
                    key={element.id}
                    className="absolute"
                    style={{
                        left: `${element.x}%`,
                        top: `${element.y}%`,
                        fontSize: `${element.size}px`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 15, 0],
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: element.duration,
                        repeat: Infinity,
                        delay: element.delay,
                        ease: "easeInOut",
                    }}
                >
                    <motion.span
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: element.duration * 0.3,
                            repeat: Infinity,
                            delay: element.delay,
                        }}
                        className="text-amber-600/40 dark:text-amber-400/40"
                    >
                        {element.icon}
                    </motion.span>
                </motion.div>
            ))}

            {/* Compass rose background element */}
            <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
                <div className="w-96 h-96 border-2 border-amber-600/10 dark:border-amber-400/10 rounded-full relative">
                    <div className="absolute inset-0 w-4 h-4 bg-amber-600/20 dark:bg-amber-400/20 rounded-full top-0 left-1/2 transform -translate-x-1/2" />
                    <div className="absolute inset-0 w-4 h-4 bg-amber-600/20 dark:bg-amber-400/20 rounded-full bottom-0 left-1/2 transform -translate-x-1/2" />
                    <div className="absolute inset-0 w-4 h-4 bg-amber-600/20 dark:bg-amber-400/20 rounded-full left-0 top-1/2 transform -translate-y-1/2" />
                    <div className="absolute inset-0 w-4 h-4 bg-amber-600/20 dark:bg-amber-400/20 rounded-full right-0 top-1/2 transform -translate-y-1/2" />
                </div>
            </motion.div>

            {/* Treasure trail effect */}
            <svg className="absolute w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="none">
                <motion.path
                    d="M0,540 Q480,300 960,400 T1920,500"
                    stroke="rgba(245, 158, 11, 0.1)"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="15,8"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1, 0] }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Animated treasure markers */}
                {Array.from({ length: 8 }, (_, i) => (
                    <motion.circle
                        key={i}
                        r="6"
                        fill="#f59e0b"
                        opacity="0.3"
                        animate={{
                            offsetDistance: ["0%", "100%", "0%"]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            delay: i * 1,
                            ease: "easeInOut"
                        }}
                        style={{
                            offsetPath: "path('M0,540 Q480,300 960,400 T1920,500')",
                        }}
                    />
                ))}
            </svg>

            {/* Ocean wave animations */}
            <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden">
                <svg className="absolute w-full h-full" viewBox="0 0 1200 128" preserveAspectRatio="none">
                    <motion.path
                        d="M0,64 Q300,32 600,64 T1200,64 L1200,128 L0,128 Z"
                        fill="rgba(59, 130, 246, 0.05)"
                        animate={{
                            d: [
                                "M0,64 Q300,32 600,64 T1200,64 L1200,128 L0,128 Z",
                                "M0,64 Q300,96 600,64 T1200,64 L1200,128 L0,128 Z",
                                "M0,64 Q300,32 600,64 T1200,64 L1200,128 L0,128 Z"
                            ]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.path
                        d="M0,80 Q300,48 600,80 T1200,80 L1200,128 L0,128 Z"
                        fill="rgba(6, 182, 212, 0.05)"
                        animate={{
                            d: [
                                "M0,80 Q300,48 600,80 T1200,80 L1200,128 L0,128 Z",
                                "M0,80 Q300,112 600,80 T1200,80 L1200,128 L0,128 Z",
                                "M0,80 Q300,48 600,80 T1200,80 L1200,128 L0,128 Z"
                            ]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                    />
                </svg>
            </div>
        </div>
    );
}

"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Gear {
    id: number;
    x: number;
    y: number;
    size: number;
    rotationSpeed: number;
    delay: number;
}

export function GearBackground() {
    const [gears, setGears] = useState<Gear[]>([]);

    useEffect(() => {
        const generateGears = () => {
            const newGears: Gear[] = [];
            const gearCount = 12;

            for (let i = 0; i < gearCount; i++) {
                newGears.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: Math.random() * 60 + 40,
                    rotationSpeed: (Math.random() - 0.5) * 2,
                    delay: Math.random() * 2,
                });
            }
            setGears(newGears);
        };

        generateGears();
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {gears.map((gear) => (
                <motion.div
                    key={gear.id}
                    className="absolute"
                    style={{
                        left: `${gear.x}%`,
                        top: `${gear.y}%`,
                        width: `${gear.size}px`,
                        height: `${gear.size}px`,
                    }}
                    initial={{ scale: 0, rotate: 0 }}
                    animate={{
                        scale: [0, 1, 1, 0.8],
                        rotate: [0, 360],
                    }}
                    transition={{
                        scale: {
                            duration: 2,
                            delay: gear.delay,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                        },
                        rotate: {
                            duration: 20 / Math.abs(gear.rotationSpeed),
                            delay: gear.delay,
                            repeat: Infinity,
                            ease: "linear",
                        },
                    }}
                >
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 100 100"
                        className="text-amber-600/20 hover:text-amber-500/30 transition-colors"
                    >
                        {/* Outer gear ring */}
                        <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="opacity-60"
                        />

                        {/* Gear teeth */}
                        {Array.from({ length: 16 }, (_, i) => {
                            const angle = (i * 360) / 16;
                            const outerRadius = 45;
                            const innerRadius = 35;
                            const x1 = 50 + Math.cos((angle * Math.PI) / 180) * outerRadius;
                            const y1 = 50 + Math.sin((angle * Math.PI) / 180) * outerRadius;
                            const x2 = 50 + Math.cos((angle * Math.PI) / 180) * innerRadius;
                            const y2 = 50 + Math.sin((angle * Math.PI) / 180) * innerRadius;

                            return (
                                <line
                                    key={i}
                                    x1={x1}
                                    y1={y1}
                                    x2={x2}
                                    y2={y2}
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    className="opacity-80"
                                />
                            );
                        })}

                        {/* Inner gear mechanism */}
                        <circle
                            cx="50"
                            cy="50"
                            r="25"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="opacity-40"
                        />

                        {/* Center hub */}
                        <circle
                            cx="50"
                            cy="50"
                            r="8"
                            fill="currentColor"
                            className="opacity-90"
                        />

                        {/* Spokes */}
                        {Array.from({ length: 6 }, (_, i) => {
                            const angle = (i * 360) / 6;
                            const x1 = 50 + Math.cos((angle * Math.PI) / 180) * 8;
                            const y1 = 50 + Math.sin((angle * Math.PI) / 180) * 8;
                            const x2 = 50 + Math.cos((angle * Math.PI) / 180) * 20;
                            const y2 = 50 + Math.sin((angle * Math.PI) / 180) * 20;

                            return (
                                <line
                                    key={i}
                                    x1={x1}
                                    y1={y1}
                                    x2={x2}
                                    y2={y2}
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className="opacity-60"
                                />
                            );
                        })}
                    </svg>
                </motion.div>
            ))}

            {/* Connecting pipes */}
            <svg className="absolute inset-0 w-full h-full text-amber-700/30">
                <defs>
                    <pattern id="pipePattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        <path d="M0,20 Q25,10 50,20 T100,20" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.3" />
                        <path d="M0,60 Q25,50 50,60 T100,60" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.3" />
                        <path d="M0,80 Q25,70 50,80 T100,80" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.3" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#pipePattern)" />
            </svg>
        </div>
    );
}

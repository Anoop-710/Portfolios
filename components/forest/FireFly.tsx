"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useIsMobile, useReducedMotion } from "@/lib/animations";

interface Firefly {
    id: number;
    x: number;
    y: number;
    delay: number;
    duration: number;
    size: number;
}

export function FireFly() {
    const [fireflies, setFireflies] = useState<Firefly[]>([]);
    const isMobile = useIsMobile();
    const prefersReducedMotion = useReducedMotion();

    // Reduce firefly count on mobile for better performance
    const fireflyCount = isMobile ? 6 : 15;

    useEffect(() => {
        if (prefersReducedMotion) return;

        // Generate random fireflies
        const flies: Firefly[] = Array.from({ length: fireflyCount }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            delay: Math.random() * 5,
            duration: 8 + Math.random() * 12,
            size: isMobile ? (2 + Math.random() * 2) : (2 + Math.random() * 4), // Smaller on mobile
        }));
        setFireflies(flies);
    }, [fireflyCount, prefersReducedMotion, isMobile]);

    if (prefersReducedMotion) {
        return (
            <div className="fixed inset-0 z-0 pointer-events-none">
                {/* Simple ambient glow for reduced motion */}
                <div className="absolute inset-0 bg-gradient-radial from-yellow-200/3 via-transparent to-transparent" />
                {/* Simple campfire glow */}
                <div className="fixed bottom-10 right-10 w-24 h-24 bg-gradient-radial from-orange-400/20 to-transparent rounded-full" />
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            {fireflies.map((fly) => (
                <motion.div
                    key={fly.id}
                    className="absolute"
                    style={{
                        left: `${fly.x}%`,
                        top: `${fly.y}%`,
                        width: `${fly.size}px`,
                        height: `${fly.size}px`,
                        willChange: "transform, opacity", // Optimize for animations
                    }}
                    animate={{
                        y: isMobile ? [0, -15, -10, -25, -5, 0] : [0, -30, -20, -50, -10, 0], // Reduced movement on mobile
                        x: isMobile ? [0, 8, -5, 12, -3, 0] : [0, 15, -10, 25, -5, 0],
                        opacity: [0, 1, 0.8, 1, 0.3, 0],
                        scale: [0.5, 1, 0.8, 1.2, 0.9, 0.5],
                    }}
                    transition={{
                        duration: fly.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: fly.delay,
                    }}
                >
                    {/* Firefly glow effect - simplified on mobile */}
                    <motion.div
                        className={`absolute inset-0 bg-yellow-300 rounded-full ${isMobile ? 'blur-sm' : 'blur-sm'}`}
                        animate={{
                            opacity: [0.3, 0.8, 0.3],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Firefly core */}
                    <motion.div
                        className="absolute inset-0 bg-yellow-200 rounded-full"
                        animate={{
                            opacity: [0.6, 1, 0.6],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Outer glow - reduced on mobile */}
                    {!isMobile && (
                        <motion.div
                            className="absolute inset-0 bg-emerald-300/20 rounded-full blur-md"
                            animate={{
                                opacity: [0.1, 0.4, 0.1],
                                scale: [1.2, 2, 1.2],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    )}
                </motion.div>
            ))}

            {/* Ambient firefly glow overlay - reduced on mobile */}
            <motion.div
                className="absolute inset-0 bg-gradient-radial from-yellow-200/5 via-transparent to-transparent"
                animate={{
                    opacity: isMobile ? [0.1, 0.2, 0.1] : [0.2, 0.4, 0.2],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: isMobile ? 20 : 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Campfire glow effect (bottom corner) - simplified on mobile */}
            <motion.div
                className={`fixed ${isMobile ? 'bottom-6 right-6 w-24 h-24' : 'bottom-10 right-10 w-32 h-32'}`}
                animate={{
                    scale: isMobile ? [1, 1.1, 1] : [1, 1.2, 1],
                    opacity: isMobile ? [0.2, 0.4, 0.2] : [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: isMobile ? 6 : 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                {/* Campfire embers - smaller on mobile */}
                <motion.div
                    className={`absolute bottom-0 right-0 ${isMobile ? 'w-12 h-6' : 'w-16 h-8'} bg-gradient-radial from-orange-400/60 via-red-400/40 to-transparent rounded-full ${isMobile ? 'blur-md' : 'blur-lg'}`}
                    animate={{
                        opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Campfire sparks - reduced on mobile */}
                {[...Array(isMobile ? 4 : 8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bottom-4 right-8 w-1 h-1 bg-orange-300 rounded-full"
                        animate={{
                            y: [0, -20, -15],
                            x: [0, Math.random() * 10 - 5],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 2 + Math.random(),
                            repeat: Infinity,
                            ease: "easeOut",
                            delay: Math.random() * 2,
                        }}
                    />
                ))}

                {/* Warm ambient light - reduced on mobile */}
                <motion.div
                    className="absolute inset-0 bg-gradient-radial from-orange-200/10 to-transparent rounded-full"
                    animate={{
                        opacity: isMobile ? [0.1, 0.3, 0.1] : [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: isMobile ? 8 : 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </motion.div>
        </div>
    );
}

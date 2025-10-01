"use client";

import { useMemo, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Orb {
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
    delay: number;
    duration: number;
}

export function FloatingOrbs() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const orbs: Orb[] = useMemo(() => {
        if (!mounted) return [];

        return Array.from({ length: 8 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: 60 + Math.random() * 120,
            color: [
                "rgba(147, 51, 234, 0.3)", // Purple
                "rgba(59, 130, 246, 0.3)", // Blue
                "rgba(16, 185, 129, 0.3)", // Emerald
                "rgba(245, 158, 11, 0.3)", // Amber
                "rgba(239, 68, 68, 0.3)",  // Red
                "rgba(139, 92, 246, 0.3)", // Violet
                "rgba(6, 182, 212, 0.3)",   // Cyan
                "rgba(168, 85, 247, 0.3)", // Purple
            ][i % 8],
            delay: Math.random() * 2,
            duration: 4 + Math.random() * 6,
        }));
    }, [mounted]);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            {orbs.map((orb) => (
                <motion.div
                    key={orb.id}
                    className="absolute rounded-full blur-xl"
                    style={{
                        left: `${orb.x}%`,
                        top: `${orb.y}%`,
                        width: `${orb.size}px`,
                        height: `${orb.size}px`,
                        background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
                    }}
                    animate={{
                        x: [0, 30, -20, 15, 0],
                        y: [0, -25, 20, -10, 0],
                        scale: [1, 1.1, 0.9, 1.05, 1],
                        opacity: [0.3, 0.6, 0.4, 0.7, 0.3],
                    }}
                    transition={{
                        duration: orb.duration,
                        delay: orb.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Additional smaller orbs for depth */}
            {mounted && Array.from({ length: 12 }, (_, i) => {
                const randomValues = {
                    left: Math.random() * 100,
                    top: Math.random() * 100,
                    width: 20 + Math.random() * 40,
                    height: 20 + Math.random() * 40,
                    opacity: 0.1 + Math.random() * 0.2,
                    duration: 6 + Math.random() * 8,
                    delay: Math.random() * 3,
                };

                return (
                    <motion.div
                        key={`small-${i}`}
                        className="absolute rounded-full blur-md"
                        style={{
                            left: `${randomValues.left}%`,
                            top: `${randomValues.top}%`,
                            width: `${randomValues.width}px`,
                            height: `${randomValues.height}px`,
                            background: `radial-gradient(circle, rgba(255, 255, 255, ${randomValues.opacity}) 0%, transparent 70%)`,
                        }}
                        animate={{
                            x: [0, 20, -15, 0],
                            y: [0, -15, 25, 0],
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: randomValues.duration,
                            delay: randomValues.delay,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                );
            })}
        </div>
    );
}

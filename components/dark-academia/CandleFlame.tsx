"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CandleFlameProps {
    className?: string;
    size?: "sm" | "md" | "lg";
    intensity?: "low" | "medium" | "high";
}

export function CandleFlame({ className = "", size = "md", intensity = "medium" }: CandleFlameProps) {
    const [flickerOffset, setFlickerOffset] = useState(0);

    const sizeClasses = {
        sm: "w-4 h-8",
        md: "w-6 h-12",
        lg: "w-8 h-16"
    };

    const intensitySettings = {
        low: { speed: 2000, range: 2 },
        medium: { speed: 1500, range: 4 },
        high: { speed: 1000, range: 6 }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setFlickerOffset(Math.random() * intensitySettings[intensity].range - intensitySettings[intensity].range / 2);
        }, intensitySettings[intensity].speed);

        return () => clearInterval(interval);
    }, [intensity]);

    return (
        <div className={`relative ${className}`}>
            {/* Main flame */}
            <motion.div
                className={`${sizeClasses[size]} relative`}
                animate={{
                    scaleX: [1, 0.95 + Math.sin(Date.now() * 0.01) * 0.1, 1],
                    scaleY: [1, 1.1 + Math.sin(Date.now() * 0.008) * 0.15, 1],
                }}
                transition={{
                    duration: 0.1,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                {/* Inner flame (bright yellow) */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-yellow-300 via-yellow-200 to-white rounded-full opacity-90"
                    animate={{
                        x: flickerOffset * 0.5,
                        scaleY: [0.8, 1.2, 0.9],
                    }}
                    transition={{
                        duration: 0.15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Outer flame (orange glow) */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-orange-400 via-orange-300 to-yellow-200 rounded-full opacity-60 blur-sm"
                    animate={{
                        x: flickerOffset * 0.3,
                        scaleY: [1, 1.4, 1.1],
                    }}
                    transition={{
                        duration: 0.2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Candle wick glow */}
                <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-orange-600 rounded-full"
                    animate={{
                        opacity: [0.8, 1, 0.6],
                    }}
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </motion.div>

            {/* Heat distortion effect */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                    opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <div className="w-full h-full bg-gradient-to-t from-transparent via-yellow-200/20 to-transparent rounded-full blur-md" />
            </motion.div>

            {/* Ambient glow */}
            <motion.div
                className={`absolute inset-0 ${sizeClasses[size]} bg-gradient-radial from-yellow-300/30 via-orange-400/20 to-transparent rounded-full blur-lg`}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
}

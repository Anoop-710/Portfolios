"use client";

import { motion } from "framer-motion";

interface CandleFlameProps {
    className?: string;
    size?: "sm" | "md" | "lg";
    intensity?: "low" | "medium" | "high";
}

export function CandleFlame({
    className = "",
    size = "md",
    intensity = "medium"
}: CandleFlameProps) {
    const sizeClasses = {
        sm: "w-4 h-8",
        md: "w-6 h-12",
        lg: "w-8 h-16"
    };

    const intensitySettings = {
        low: {
            flickerSpeed: 2,
            glowIntensity: "0.3"
        },
        medium: {
            flickerSpeed: 1.5,
            glowIntensity: "0.5"
        },
        high: {
            flickerSpeed: 1,
            glowIntensity: "0.7"
        }
    };

    const settings = intensitySettings[intensity];

    return (
        <div className={`relative ${className}`}>
            {/* Main flame */}
            <motion.div
                className={`${sizeClasses[size]} relative`}
                animate={{
                    scaleY: [1, 1.2, 0.8, 1.1, 1],
                    scaleX: [1, 0.9, 1.1, 0.95, 1],
                    rotate: [0, -2, 2, -1, 1, 0],
                }}
                transition={{
                    duration: settings.flickerSpeed,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                {/* Flame shape */}
                <svg
                    viewBox="0 0 24 48"
                    className="w-full h-full"
                    fill="url(#flameGradient)"
                >
                    <defs>
                        <radialGradient id="flameGradient" cx="50%" cy="20%" r="80%">
                            <stop offset="0%" stopColor="#ffd700" stopOpacity="0.9" />
                            <stop offset="30%" stopColor="#ff8c00" stopOpacity="0.8" />
                            <stop offset="70%" stopColor="#ff4500" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#8b0000" stopOpacity="0.3" />
                        </radialGradient>
                    </defs>
                    <path d="M12,40 Q8,35 10,25 Q12,15 12,8 Q12,4 14,2 Q16,4 16,8 Q16,15 18,25 Q20,35 16,40 Q14,42 12,40 Z" />
                </svg>

                {/* Inner bright core */}
                <motion.div
                    className="absolute inset-1 rounded-full bg-gradient-radial from-yellow-200 via-yellow-400 to-orange-500"
                    animate={{
                        opacity: [0.8, 1, 0.6, 1],
                        scale: [0.8, 1, 0.9, 1],
                    }}
                    transition={{
                        duration: settings.flickerSpeed * 0.7,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </motion.div>

            {/* Glow effect */}
            <motion.div
                className={`absolute inset-0 ${sizeClasses[size]} bg-gradient-radial from-yellow-300/${settings.glowIntensity} via-orange-400/20 to-transparent rounded-full blur-md`}
                animate={{
                    opacity: [0.3, 0.7, 0.4, 0.8, 0.3],
                    scale: [1, 1.2, 0.9, 1.1, 1],
                }}
                transition={{
                    duration: settings.flickerSpeed * 1.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Candle wax base */}
            <motion.div
                className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-4 bg-gradient-to-b from-amber-200 to-amber-400 rounded-b-full`}
                animate={{
                    height: ["16px", "18px", "14px", "16px"],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
}

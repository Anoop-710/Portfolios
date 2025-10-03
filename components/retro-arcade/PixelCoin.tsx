"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface PixelCoinProps {
    size?: number;
    className?: string;
    animate?: boolean;
}

export function PixelCoin({ size = 24, className = "", animate = true }: PixelCoinProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className={`relative ${className}`}
            style={{ width: size, height: size }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={animate ? {
                rotate: isHovered ? [0, 90, 180, 270, 360] : 0,
                scale: isHovered ? [1, 1.2, 1] : 1,
            } : {}}
            transition={{
                duration: 0.6,
                ease: "easeInOut",
                repeat: isHovered ? Infinity : 0,
            }}
        >
            {/* Coin body */}
            <div
                className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 border-2 border-yellow-600"
                style={{
                    clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                }}
            />

            {/* Coin face - star symbol */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-yellow-800 font-bold text-xs">★</div>
            </div>

            {/* Glow effect */}
            {isHovered && (
                <motion.div
                    className="absolute inset-0 bg-yellow-400 rounded-full opacity-30"
                    initial={{ scale: 1, opacity: 0.3 }}
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.1, 0.3]
                    }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            )}

            {/* Sparkle particles */}
            {isHovered && (
                <>
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-yellow-300"
                            style={{
                                left: `${20 + 15 * Math.cos((i * 60 * Math.PI) / 180)}px`,
                                top: `${20 + 15 * Math.sin((i * 60 * Math.PI) / 180)}px`,
                                transform: 'translate(-50%, -50%)',
                            }}
                            animate={{
                                scale: [0, 1, 0],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                delay: i * 0.1,
                            }}
                        />
                    ))}
                </>
            )}
        </motion.div>
    );
}

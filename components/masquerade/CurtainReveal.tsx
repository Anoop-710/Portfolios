"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CurtainRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    curtainColor?: string;
}

export function CurtainReveal({
    children,
    className = "",
    delay = 0,
    curtainColor = "bg-gradient-to-b from-purple-900 via-purple-800 to-black"
}: CurtainRevealProps) {
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsRevealed(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {/* Left curtain */}
            <motion.div
                className={`absolute inset-0 ${curtainColor} z-10`}
                animate={{
                    x: isRevealed ? "-100%" : "0%"
                }}
                transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    delay: 0.2
                }}
            />

            {/* Right curtain */}
            <motion.div
                className={`absolute inset-0 ${curtainColor} z-10`}
                animate={{
                    x: isRevealed ? "100%" : "0%"
                }}
                transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    delay: 0.2
                }}
            />

            {/* Center reveal effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent z-5"
                animate={{
                    scaleX: isRevealed ? 0 : 1,
                    opacity: isRevealed ? 0 : 0.5
                }}
                transition={{
                    duration: 1,
                    ease: "easeOut",
                    delay: 0.5
                }}
            />

            {/* Content */}
            <motion.div
                className="relative z-0"
                animate={{
                    opacity: isRevealed ? 1 : 0,
                    y: isRevealed ? 0 : 20
                }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.8
                }}
            >
                {children}
            </motion.div>

            {/* Decorative curtain details */}
            <motion.div
                className="absolute inset-0 pointer-events-none z-20"
                animate={{
                    opacity: isRevealed ? 0 : 1
                }}
                transition={{
                    duration: 0.5,
                    delay: 0.3
                }}
            >
                {/* Curtain tassels */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-16 bg-gradient-to-b from-gold-400 to-gold-600 rounded-full opacity-60" />

                {/* Curtain folds effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-300/10 to-transparent opacity-30" />
            </motion.div>
        </div>
    );
}

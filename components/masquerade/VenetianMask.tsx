"use client";

import { motion } from "framer-motion";

interface VenetianMaskProps {
    className?: string;
    animate?: boolean;
}

export function VenetianMask({ className = "", animate = true }: VenetianMaskProps) {
    const maskAnimation = animate ? {
        rotate: [0, -2, 2, 0],
        scale: [1, 1.05, 1],
    } : {};

    return (
        <motion.div
            className={`relative ${className}`}
            animate={maskAnimation}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            <svg
                viewBox="0 0 100 60"
                className="w-full h-full drop-shadow-lg"
                fill="currentColor"
            >
                {/* Main mask shape */}
                <path
                    d="M10,30 Q10,10 30,8 Q50,5 70,8 Q90,10 90,30 Q90,45 70,48 Q50,52 30,48 Q10,45 10,30 Z"
                    className="fill-current"
                />

                {/* Eye holes */}
                <ellipse cx="35" cy="25" rx="8" ry="6" className="fill-black" />
                <ellipse cx="65" cy="25" rx="8" ry="6" className="fill-black" />

                {/* Decorative elements */}
                {/* Left side flourishes */}
                <path
                    d="M15,20 Q20,15 25,20 Q20,25 15,20"
                    className="fill-current stroke-current stroke-1"
                    strokeWidth="0.5"
                />
                <path
                    d="M15,35 Q20,40 25,35 Q20,30 15,35"
                    className="fill-current stroke-current stroke-1"
                    strokeWidth="0.5"
                />

                {/* Right side flourishes */}
                <path
                    d="M75,20 Q80,15 85,20 Q80,25 75,20"
                    className="fill-current stroke-current stroke-1"
                    strokeWidth="0.5"
                />
                <path
                    d="M75,35 Q80,40 85,35 Q80,30 75,35"
                    className="fill-current stroke-current stroke-1"
                    strokeWidth="0.5"
                />

                {/* Center decoration */}
                <circle cx="50" cy="20" r="3" className="fill-current" />
                <path
                    d="M47,23 L53,23 M50,20 L50,26"
                    className="stroke-current stroke-1"
                    strokeWidth="0.5"
                />

                {/* Bottom lace detail */}
                <path
                    d="M20,45 Q30,50 50,48 Q70,50 80,45"
                    className="fill-current stroke-current stroke-1"
                    strokeWidth="0.5"
                />

                {/* Side decorations */}
                <g className="fill-current">
                    <circle cx="25" cy="20" r="1.5" />
                    <circle cx="75" cy="20" r="1.5" />
                    <circle cx="25" cy="35" r="1.5" />
                    <circle cx="75" cy="35" r="1.5" />
                </g>
            </svg>

            {/* Golden shimmer effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-300/20 to-transparent"
                animate={{
                    x: ['-100%', '100%'],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut"
                }}
            />
        </motion.div>
    );
}

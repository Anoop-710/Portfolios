"use client";

import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

interface InkSplatterProps {
    trigger?: boolean;
    color?: string;
    size?: number;
    className?: string;
}

export default function InkSplatter({
    trigger = false,
    color = "#3b82f6",
    size = 100,
    className = ""
}: InkSplatterProps) {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleAnimation = () => {
        if (trigger) {
            setIsAnimating(true);
            setTimeout(() => setIsAnimating(false), 1000);
        }
    };

    React.useEffect(() => {
        handleAnimation();
    }, [trigger]);

    return (
        <motion.div
            className={`absolute pointer-events-none ${className}`}
            style={{
                width: size,
                height: size,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={isAnimating ? {
                scale: [0, 1.5, 2, 0],
                opacity: [0, 0.8, 0.4, 0],
                rotate: [0, 180, 360]
            } : { scale: 0, opacity: 0 }}
            transition={{
                duration: 1,
                ease: "easeOut"
            }}
        >
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                className="drop-shadow-lg"
            >
                <defs>
                    <radialGradient id={`splatterGradient-${Math.random()}`} cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor={color} stopOpacity="0.9" />
                        <stop offset="40%" stopColor={color} stopOpacity="0.6" />
                        <stop offset="80%" stopColor={color} stopOpacity="0.2" />
                        <stop offset="100%" stopColor={color} stopOpacity="0" />
                    </radialGradient>
                    <filter id={`splatterBlur-${Math.random()}`}>
                        <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Main splatter blob */}
                <circle
                    cx="50"
                    cy="50"
                    r="25"
                    fill={`url(#splatterGradient-${Math.random()})`}
                    filter={`url(#splatterBlur-${Math.random()})`}
                />

                {/* Irregular splatter shapes */}
                <path
                    d="M30 40 Q35 25 45 35 Q55 45 40 55 Q25 50 30 40"
                    fill={color}
                    opacity="0.7"
                />
                <path
                    d="M60 30 Q75 35 70 50 Q55 60 50 45 Q65 35 60 30"
                    fill={color}
                    opacity="0.6"
                />
                <path
                    d="M35 65 Q45 75 30 80 Q20 70 35 65"
                    fill={color}
                    opacity="0.5"
                />

                {/* Small droplets */}
                <circle cx="25" cy="35" r="3" fill={color} opacity="0.8" />
                <circle cx="70" cy="45" r="2" fill={color} opacity="0.7" />
                <circle cx="45" cy="75" r="2.5" fill={color} opacity="0.6" />
                <circle cx="75" cy="25" r="1.5" fill={color} opacity="0.9" />
            </svg>
        </motion.div>
    );
}

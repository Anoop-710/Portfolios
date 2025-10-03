"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface WatercolorBlotProps {
    delay?: number;
    duration?: number;
    size?: number;
    color?: string;
    className?: string;
}

export default function WatercolorBlot({
    delay = 0,
    duration = 8,
    size = 200,
    color = "rgba(147, 197, 253, 0.3)",
    className = ""
}: WatercolorBlotProps) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = () => {
            setPosition({
                x: Math.random() * 100,
                y: Math.random() * 100
            });
        };

        updatePosition();
        const interval = setInterval(updatePosition, duration * 1000);

        return () => clearInterval(interval);
    }, [duration]);

    return (
        <motion.div
            className={`absolute pointer-events-none ${className}`}
            style={{
                width: size,
                height: size,
                left: `${position.x}%`,
                top: `${position.y}%`,
                transform: 'translate(-50%, -50%)',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
                scale: [0, 1.2, 0.8, 1],
                opacity: [0, 0.6, 0.4, 0],
                rotate: [0, 180, 360]
            }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 200 200"
                className="drop-shadow-lg"
            >
                <defs>
                    <radialGradient id={`blotGradient-${Math.random()}`} cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor={color} stopOpacity="0.8" />
                        <stop offset="30%" stopColor={color} stopOpacity="0.6" />
                        <stop offset="60%" stopColor={color} stopOpacity="0.3" />
                        <stop offset="100%" stopColor={color} stopOpacity="0" />
                    </radialGradient>
                    <filter id={`blotBlur-${Math.random()}`}>
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                <ellipse
                    cx="100"
                    cy="100"
                    rx="80"
                    ry="60"
                    fill={`url(#blotGradient-${Math.random()})`}
                    filter={`url(#blotBlur-${Math.random()})`}
                    transform="rotate(-20 100 100)"
                />
                <ellipse
                    cx="100"
                    cy="100"
                    rx="60"
                    ry="80"
                    fill={`url(#blotGradient-${Math.random()})`}
                    filter={`url(#blotBlur-${Math.random()})`}
                    transform="rotate(30 100 100)"
                    opacity="0.7"
                />
            </svg>
        </motion.div>
    );
}

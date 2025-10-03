"use client";

import { motion } from "framer-motion";

export function LavaCrackOverlay() {
    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full opacity-60" viewBox="0 0 1920 1080">
                {/* Main lava cracks */}
                <motion.path
                    d="M100,200 Q300,150 500,200 Q700,250 900,200 Q1100,150 1300,200 Q1500,250 1700,200"
                    stroke="url(#crackGradient1)"
                    strokeWidth="4"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 3, delay: 0.5 }}
                />

                <motion.path
                    d="M200,400 Q400,350 600,400 Q800,450 1000,400 Q1200,350 1400,400 Q1600,450 1800,400"
                    stroke="url(#crackGradient2)"
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 3, delay: 1 }}
                />

                <motion.path
                    d="M50,600 Q250,550 450,600 Q650,650 850,600 Q1050,550 1250,600 Q1450,650 1650,600"
                    stroke="url(#crackGradient3)"
                    strokeWidth="5"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 3, delay: 1.5 }}
                />

                {/* Side cracks */}
                <motion.path
                    d="M50,100 L150,300 Q200,400 250,500"
                    stroke="url(#crackGradient1)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, delay: 2 }}
                />

                <motion.path
                    d="M1700,300 L1600,500 Q1550,600 1500,700"
                    stroke="url(#crackGradient2)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, delay: 2.5 }}
                />

                {/* Pulsating glow effects */}
                <motion.circle
                    cx="300"
                    cy="200"
                    r="8"
                    fill="url(#glowPoint1)"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0.5
                    }}
                />

                <motion.circle
                    cx="800"
                    cy="400"
                    r="6"
                    fill="url(#glowPoint2)"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1.8, 0]
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: 1
                    }}
                />

                <motion.circle
                    cx="1300"
                    cy="600"
                    r="10"
                    fill="url(#glowPoint3)"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1.2, 0]
                    }}
                    transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        delay: 1.5
                    }}
                />

                <defs>
                    <linearGradient id="crackGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#dc2626" />
                        <stop offset="30%" stopColor="#f97316" />
                        <stop offset="70%" stopColor="#fbbf24" />
                        <stop offset="100%" stopColor="#ea580c" />
                    </linearGradient>

                    <linearGradient id="crackGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f97316" />
                        <stop offset="50%" stopColor="#fbbf24" />
                        <stop offset="100%" stopColor="#dc2626" />
                    </linearGradient>

                    <linearGradient id="crackGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#fbbf24" />
                        <stop offset="50%" stopColor="#dc2626" />
                        <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>

                    <radialGradient id="glowPoint1" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#fbbf24" stopOpacity="1" />
                        <stop offset="30%" stopColor="#f97316" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
                    </radialGradient>

                    <radialGradient id="glowPoint2" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#dc2626" stopOpacity="1" />
                        <stop offset="30%" stopColor="#f97316" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
                    </radialGradient>

                    <radialGradient id="glowPoint3" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#f97316" stopOpacity="1" />
                        <stop offset="30%" stopColor="#fbbf24" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
    );
}

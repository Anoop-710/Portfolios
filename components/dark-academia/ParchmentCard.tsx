"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ParchmentCardProps {
    children: ReactNode;
    className?: string;
    title?: string;
    subtitle?: string;
    variant?: "default" | "illuminated" | "weathered";
    glowEffect?: boolean;
}

export function ParchmentCard({
    children,
    className = "",
    title,
    subtitle,
    variant = "default",
    glowEffect = false
}: ParchmentCardProps) {
    const variantStyles = {
        default: "bg-gradient-to-br from-amber-50 to-orange-100 border-amber-600",
        illuminated: "bg-gradient-to-br from-yellow-100 via-amber-50 to-orange-50 border-yellow-600 shadow-yellow-400/20",
        weathered: "bg-gradient-to-br from-stone-100 via-amber-50 to-yellow-100 border-stone-600"
    };

    const glowStyles = glowEffect ? "shadow-2xl shadow-amber-400/30" : "shadow-lg";

    return (
        <motion.div
            className={`relative p-8 rounded-lg border-2 ${variantStyles[variant]} ${glowStyles} ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{
                y: -5,
                transition: { duration: 0.3 }
            }}
        >
            {/* Parchment texture overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-200/20 to-amber-300/30 rounded-lg pointer-events-none" />

            {/* Ink blot effects */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-stone-800/10 rounded-full blur-sm" />
            <div className="absolute bottom-6 left-6 w-6 h-6 bg-amber-900/15 rounded-full blur-sm" />

            {/* Decorative border elements */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-amber-700 rounded-tl-lg" />
            <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-amber-700 rounded-tr-lg" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-amber-700 rounded-bl-lg" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-amber-700 rounded-br-lg" />

            {/* Content */}
            <div className="relative z-10">
                {title && (
                    <motion.h3
                        className="text-2xl font-bold text-amber-900 mb-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        {title}
                    </motion.h3>
                )}

                {subtitle && (
                    <motion.p
                        className="text-sm text-amber-700 mb-4 font-medium"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        {subtitle}
                    </motion.p>
                )}

                <motion.div
                    className="text-slate-800 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    {children}
                </motion.div>
            </div>

            {/* Illuminated variant special effects */}
            {variant === "illuminated" && (
                <>
                    {/* Golden illumination glow */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-yellow-200/30 via-transparent to-amber-300/20 rounded-lg"
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Sparkle effects */}
                    {Array.from({ length: 5 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                            style={{
                                left: `${20 + i * 15}%`,
                                top: `${10 + (i % 2) * 10}%`,
                            }}
                            animate={{
                                opacity: [0, 1, 0],
                                scale: [0.5, 1.5, 0.5],
                            }}
                            transition={{
                                duration: 2,
                                delay: i * 0.4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </>
            )}

            {/* Weathered variant aging effects */}
            {variant === "weathered" && (
                <>
                    {/* Age spots */}
                    <div className="absolute top-8 left-8 w-4 h-4 bg-amber-800/20 rounded-full blur-sm" />
                    <div className="absolute bottom-12 right-12 w-3 h-3 bg-stone-700/15 rounded-full blur-sm" />

                    {/* Subtle corner wear */}
                    <div className="absolute top-2 left-2 w-6 h-6 bg-gradient-to-br from-stone-300/50 to-transparent rounded-tl-lg" />
                    <div className="absolute bottom-2 right-2 w-6 h-6 bg-gradient-to-br from-stone-300/50 to-transparent rounded-br-lg" />
                </>
            )}
        </motion.div>
    );
}

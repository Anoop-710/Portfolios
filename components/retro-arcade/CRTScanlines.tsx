"use client";

import { motion } from "framer-motion";

interface CRTScanlinesProps {
    className?: string;
    opacity?: number;
    animate?: boolean;
}

export function CRTScanlines({
    className = "",
    opacity = 0.1,
    animate = true
}: CRTScanlinesProps) {
    return (
        <div className={`absolute inset-0 pointer-events-none ${className}`}>
            {/* Scan lines overlay */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `
            linear-gradient(
              transparent 0px,
              rgba(0, 255, 255, 0.03) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              transparent 0px,
              rgba(0, 255, 255, 0.03) 1px,
              transparent 1px
            )
          `,
                    backgroundSize: '100% 2px, 2px 100%',
                }}
            />

            {/* Animated scan line */}
            {animate && (
                <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent"
                    animate={{
                        top: ["-100%", "100%"],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            )}

            {/* Screen flicker effect */}
            {animate && (
                <motion.div
                    className="absolute inset-0 bg-cyan-500/5"
                    animate={{
                        opacity: [0, 0.05, 0],
                    }}
                    transition={{
                        duration: 0.1,
                        repeat: Infinity,
                        repeatDelay: Math.random() * 3 + 2,
                    }}
                />
            )}

            {/* Corner glow effects */}
            <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-radial from-cyan-400/20 to-transparent" />
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-radial from-cyan-400/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-radial from-cyan-400/20 to-transparent" />
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-radial from-cyan-400/20 to-transparent" />
        </div>
    );
}

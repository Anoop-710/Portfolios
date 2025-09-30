"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useIsMobile, useReducedMotion } from "@/lib/animations";

interface MistParticle {
    id: number;
    left: number;
    top: number;
    x: number;
    y: number;
    duration: number;
    delay: number;
}

export function Mist() {
    const [particles, setParticles] = useState<MistParticle[]>([]);
    const isMobile = useIsMobile();
    const prefersReducedMotion = useReducedMotion();

    // Reduce particle count on mobile for better performance
    const particleCount = isMobile ? 8 : 20;

    useEffect(() => {
        if (prefersReducedMotion) return;

        // Generate random particles only on client side
        const newParticles: MistParticle[] = Array.from({ length: particleCount }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            x: (Math.random() * 100 - 50) * (isMobile ? 0.5 : 1), // Reduce movement on mobile
            y: (Math.random() * 100 - 50) * (isMobile ? 0.5 : 1),
            duration: 10 + Math.random() * 10,
            delay: Math.random() * 5,
        }));
        setParticles(newParticles);
    }, [particleCount, prefersReducedMotion, isMobile]);

    if (prefersReducedMotion) {
        return (
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-100/20 via-emerald-50/10 to-transparent dark:from-emerald-900/10 dark:via-emerald-800/5" />
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-0">
            {/* Animated mist layers - reduced complexity on mobile */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-t from-emerald-100/30 via-emerald-50/20 to-transparent dark:from-emerald-900/20 dark:via-emerald-800/10"
                animate={{
                    opacity: isMobile ? [0.4, 0.6, 0.4] : [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: isMobile ? 12 : 8, // Slower on mobile for better performance
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Floating mist particles - reduced on mobile */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className={`absolute ${isMobile ? 'w-24 h-12' : 'w-32 h-16'} bg-gradient-radial from-emerald-200/20 to-transparent dark:from-emerald-700/10 rounded-full ${isMobile ? 'blur-lg' : 'blur-xl'}`}
                    style={{
                        left: `${particle.left}%`,
                        top: `${particle.top}%`,
                        willChange: "transform, opacity", // Optimize for animations
                    }}
                    animate={{
                        x: [0, particle.x],
                        y: [0, particle.y],
                        opacity: [0, 0.6, 0],
                        scale: [0.5, 1.2, 0.8],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: particle.delay,
                    }}
                />
            ))}

            {/* Additional atmospheric layer - simplified on mobile */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-transparent via-emerald-50/10 to-emerald-100/20 dark:from-transparent dark:via-emerald-900/5 dark:to-emerald-800/10"
                animate={{
                    opacity: isMobile ? [0.3, 0.5, 0.3] : [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: isMobile ? 16 : 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function ParallaxBackground() {
    const [mounted, setMounted] = useState(false);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
    const y3 = useTransform(scrollY, [0, 1000], [0, -100]);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-amber-100 via-orange-50 to-yellow-50 dark:from-slate-900 dark:via-amber-950 dark:to-orange-900" />
            </div>
        );
    }

    return (
        <div className="fixed inset-0 -z-10">
            {/* Sky gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-amber-100 via-orange-50 to-yellow-50 dark:from-slate-900 dark:via-amber-950 dark:to-orange-900" />

            {/* Animated hills - farthest back */}
            <motion.div
                style={{ y: y1 }}
                className="absolute bottom-0 left-0 right-0"
            >
                <svg
                    viewBox="0 0 1200 300"
                    className="w-full h-48 opacity-30"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,300 L0,150 L200,100 L400,80 L600,120 L800,60 L1000,90 L1200,70 L1200,300 Z"
                        fill="url(#hillGradient1)"
                    />
                    <defs>
                        <linearGradient id="hillGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#92400e" />
                            <stop offset="100%" stopColor="#78350f" />
                        </linearGradient>
                    </defs>
                </svg>
            </motion.div>

            {/* Middle hills */}
            <motion.div
                style={{ y: y2 }}
                className="absolute bottom-0 left-0 right-0"
            >
                <svg
                    viewBox="0 0 1200 300"
                    className="w-full h-56 opacity-40"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,300 L0,180 L150,140 L350,160 L550,120 L750,140 L950,100 L1200,130 L1200,300 Z"
                        fill="url(#hillGradient2)"
                    />
                    <defs>
                        <linearGradient id="hillGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#b45309" />
                            <stop offset="100%" stopColor="#92400e" />
                        </linearGradient>
                    </defs>
                </svg>
            </motion.div>

            {/* Foreground hills */}
            <motion.div
                style={{ y: y3 }}
                className="absolute bottom-0 left-0 right-0"
            >
                <svg
                    viewBox="0 0 1200 300"
                    className="w-full h-64 opacity-50"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,300 L0,220 L100,200 L300,210 L500,180 L700,200 L900,170 L1200,190 L1200,300 Z"
                        fill="url(#hillGradient3)"
                    />
                    <defs>
                        <linearGradient id="hillGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#d97706" />
                            <stop offset="100%" stopColor="#b45309" />
                        </linearGradient>
                    </defs>
                </svg>
            </motion.div>

            {/* Golden field overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-200/20 to-transparent dark:from-amber-900/20" />
        </div>
    );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function MountainLayers() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
    const y3 = useTransform(scrollY, [0, 1000], [0, -100]);
    const y4 = useTransform(scrollY, [0, 1000], [0, -50]);
    const y5 = useTransform(scrollY, [0, 1000], [0, -25]);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            {/* Layer 1 - Farthest mountains (darkest) */}
            <motion.div
                style={{ y: y1 }}
                className="absolute inset-0"
            >
                <svg
                    className="w-full h-full"
                    viewBox="0 0 1200 800"
                    preserveAspectRatio="xMidYMid slice"
                >
                    <defs>
                        <linearGradient id="mountainGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#1e293b" className="dark:hidden" />
                            <stop offset="100%" stopColor="#334155" className="dark:hidden" />
                            <stop offset="0%" stopColor="#0f172a" className="hidden dark:block" />
                            <stop offset="100%" stopColor="#1e293b" className="hidden dark:block" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M0,400 L200,200 L400,300 L600,150 L800,250 L1000,180 L1200,220 L1200,800 L0,800 Z"
                        fill="url(#mountainGradient1)"
                        opacity="0.8"
                    />
                </svg>
            </motion.div>

            {/* Layer 2 - Mid-distance mountains */}
            <motion.div
                style={{ y: y2 }}
                className="absolute inset-0"
            >
                <svg
                    className="w-full h-full"
                    viewBox="0 0 1200 800"
                    preserveAspectRatio="xMidYMid slice"
                >
                    <defs>
                        <linearGradient id="mountainGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#334155" className="dark:hidden" />
                            <stop offset="100%" stopColor="#475569" className="dark:hidden" />
                            <stop offset="0%" stopColor="#1e293b" className="hidden dark:block" />
                            <stop offset="100%" stopColor="#334155" className="hidden dark:block" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M0,500 L150,350 L300,400 L450,320 L600,380 L750,300 L900,350 L1050,280 L1200,320 L1200,800 L0,800 Z"
                        fill="url(#mountainGradient2)"
                        opacity="0.9"
                    />
                </svg>
            </motion.div>

            {/* Layer 3 - Closer mountains */}
            <motion.div
                style={{ y: y3 }}
                className="absolute inset-0"
            >
                <svg
                    className="w-full h-full"
                    viewBox="0 0 1200 800"
                    preserveAspectRatio="xMidYMid slice"
                >
                    <defs>
                        <linearGradient id="mountainGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#475569" className="dark:hidden" />
                            <stop offset="100%" stopColor="#64748b" className="dark:hidden" />
                            <stop offset="0%" stopColor="#334155" className="hidden dark:block" />
                            <stop offset="100%" stopColor="#475569" className="hidden dark:block" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M0,600 L100,480 L250,520 L400,450 L550,500 L700,430 L850,480 L1000,420 L1150,460 L1200,440 L1200,800 L0,800 Z"
                        fill="url(#mountainGradient3)"
                    />
                </svg>
            </motion.div>

            {/* Layer 4 - Foreground hills */}
            <motion.div
                style={{ y: y4 }}
                className="absolute inset-0"
            >
                <svg
                    className="w-full h-full"
                    viewBox="0 0 1200 800"
                    preserveAspectRatio="xMidYMid slice"
                >
                    <defs>
                        <linearGradient id="mountainGradient4" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#64748b" className="dark:hidden" />
                            <stop offset="100%" stopColor="#94a3b8" className="dark:hidden" />
                            <stop offset="0%" stopColor="#475569" className="hidden dark:block" />
                            <stop offset="100%" stopColor="#64748b" className="hidden dark:block" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M0,650 L80,620 L160,640 L240,610 L320,630 L400,600 L480,620 L560,590 L640,610 L720,580 L800,600 L880,570 L960,590 L1040,560 L1120,580 L1200,570 L1200,800 L0,800 Z"
                        fill="url(#mountainGradient4)"
                    />
                </svg>
            </motion.div>

            {/* Layer 5 - Closest terrain */}
            <motion.div
                style={{ y: y5 }}
                className="absolute inset-0"
            >
                <svg
                    className="w-full h-full"
                    viewBox="0 0 1200 800"
                    preserveAspectRatio="xMidYMid slice"
                >
                    <defs>
                        <linearGradient id="mountainGradient5" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#94a3b8" className="dark:hidden" />
                            <stop offset="100%" stopColor="#cbd5e1" className="dark:hidden" />
                            <stop offset="0%" stopColor="#64748b" className="hidden dark:block" />
                            <stop offset="100%" stopColor="#94a3b8" className="hidden dark:block" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M0,700 L60,690 L120,700 L180,685 L240,695 L300,680 L360,690 L420,675 L480,685 L540,670 L600,680 L660,665 L720,675 L780,660 L840,670 L900,655 L960,665 L1020,650 L1080,660 L1140,645 L1200,655 L1200,800 L0,800 Z"
                        fill="url(#mountainGradient5)"
                    />
                </svg>
            </motion.div>
        </div>
    );
}

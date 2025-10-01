'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const DuneBackground = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: (e.clientY / window.innerHeight) * 2 - 1
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Animated Sand Dunes */}
            <div className="absolute inset-0">
                {/* Layer 1 - Distant Dunes */}
                <motion.div
                    animate={{
                        x: mousePosition.x * -10,
                        y: mousePosition.y * -5,
                    }}
                    transition={{ type: "spring", stiffness: 50, damping: 30 }}
                    className="absolute bottom-0 left-0 right-0 h-1/3"
                >
                    <svg viewBox="0 0 1200 300" className="w-full h-full">
                        <motion.path
                            d="M0,150 C200,100 400,200 600,120 C800,40 1000,180 1200,100 L1200,300 L0,300 Z"
                            fill="url(#duneGradient1)"
                            animate={{
                                d: [
                                    "M0,150 C200,100 400,200 600,120 C800,40 1000,180 1200,100 L1200,300 L0,300 Z",
                                    "M0,140 C250,90 450,190 650,110 C850,30 1050,170 1200,90 L1200,300 L0,300 Z",
                                    "M0,150 C200,100 400,200 600,120 C800,40 1000,180 1200,100 L1200,300 L0,300 Z"
                                ]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <defs>
                            <linearGradient id="duneGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#F4E4BC" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#E6D3A3" stopOpacity="0.6" />
                            </linearGradient>
                        </defs>
                    </svg>
                </motion.div>

                {/* Layer 2 - Mid Dunes */}
                <motion.div
                    animate={{
                        x: mousePosition.x * -20,
                        y: mousePosition.y * -10,
                    }}
                    transition={{ type: "spring", stiffness: 40, damping: 25 }}
                    className="absolute bottom-0 left-0 right-0 h-1/2"
                >
                    <svg viewBox="0 0 1200 400" className="w-full h-full">
                        <motion.path
                            d="M0,250 C150,200 300,280 450,220 C600,160 750,240 900,180 C1050,120 1200,200 1200,200 L1200,400 L0,400 Z"
                            fill="url(#duneGradient2)"
                            animate={{
                                d: [
                                    "M0,250 C150,200 300,280 450,220 C600,160 750,240 900,180 C1050,120 1200,200 1200,200 L1200,400 L0,400 Z",
                                    "M0,240 C200,190 350,270 500,210 C650,150 800,230 950,170 C1100,110 1200,190 1200,190 L1200,400 L0,400 Z",
                                    "M0,250 C150,200 300,280 450,220 C600,160 750,240 900,180 C1050,120 1200,200 1200,200 L1200,400 L0,400 Z"
                                ]
                            }}
                            transition={{
                                duration: 12,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <defs>
                            <linearGradient id="duneGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#E6D3A3" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.7" />
                            </linearGradient>
                        </defs>
                    </svg>
                </motion.div>

                {/* Layer 3 - Foreground Dunes */}
                <motion.div
                    animate={{
                        x: mousePosition.x * -30,
                        y: mousePosition.y * -15,
                    }}
                    transition={{ type: "spring", stiffness: 30, damping: 20 }}
                    className="absolute bottom-0 left-0 right-0 h-2/3"
                >
                    <svg viewBox="0 0 1200 500" className="w-full h-full">
                        <motion.path
                            d="M0,350 C100,300 250,380 400,320 C550,260 700,340 850,280 C1000,220 1200,300 1200,300 L1200,500 L0,500 Z"
                            fill="url(#duneGradient3)"
                            animate={{
                                d: [
                                    "M0,350 C100,300 250,380 400,320 C550,260 700,340 850,280 C1000,220 1200,300 1200,300 L1200,500 L0,500 Z",
                                    "M0,340 C150,290 300,370 450,310 C600,250 750,330 900,270 C1050,210 1200,290 1200,290 L1200,500 L0,500 Z",
                                    "M0,350 C100,300 250,380 400,320 C550,260 700,340 850,280 C1000,220 1200,300 1200,300 L1200,500 L0,500 Z"
                                ]
                            }}
                            transition={{
                                duration: 15,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <defs>
                            <linearGradient id="duneGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.6" />
                                <stop offset="100%" stopColor="#B8860B" stopOpacity="0.8" />
                            </linearGradient>
                        </defs>
                    </svg>
                </motion.div>
            </div>

            {/* Mirage Effect */}
            <motion.div
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.02, 1]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-100/10 to-transparent pointer-events-none"
            />

            {/* Floating Sand Particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-amber-200/30 rounded-full"
                    animate={{
                        y: [0, -100, 0],
                        x: [0, Math.sin(i) * 50, 0],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: 8 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                    }}
                    style={{
                        left: `${10 + i * 4}%`,
                        top: `${70 + (i % 3) * 10}%`,
                    }}
                />
            ))}
        </div>
    );
};

export default DuneBackground;

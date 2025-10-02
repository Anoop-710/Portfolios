"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface DragonSilhouetteProps {
    className?: string;
}

export function DragonSilhouette({ className = "" }: DragonSilhouetteProps) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const parallaxY = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 0.8, 0.8, 0.3]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                setMousePosition({
                    x: (e.clientX - centerX) * 0.01,
                    y: (e.clientY - centerY) * 0.01,
                });
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
            {/* Main Dragon Silhouette */}
            <motion.div
                className="absolute right-0 top-1/2 transform -translate-y-1/2"
                style={{
                    x: parallaxY,
                    y: parallaxY,
                    opacity,
                }}
                animate={{
                    x: mousePosition.x,
                    y: mousePosition.y,
                }}
                transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 20,
                }}
            >
                <svg
                    width="400"
                    height="300"
                    viewBox="0 0 400 300"
                    fill="none"
                    className="opacity-20 hover:opacity-30 transition-opacity duration-500"
                >
                    {/* Dragon Body */}
                    <motion.path
                        d="M350 150 Q300 100 250 130 Q200 160 180 140 Q160 120 140 130 Q120 140 100 130 Q80 120 60 140 Q40 160 20 150 L20 180 Q40 170 60 180 Q80 190 100 180 Q120 170 140 180 Q160 190 180 180 Q200 170 220 180 Q240 190 260 180 Q280 170 300 180 Q320 190 340 180 Q360 170 380 180"
                        stroke="url(#dragonGradient)"
                        strokeWidth="2"
                        fill="rgba(139, 69, 19, 0.1)"
                        animate={{
                            d: [
                                "M350 150 Q300 100 250 130 Q200 160 180 140 Q160 120 140 130 Q120 140 100 130 Q80 120 60 140 Q40 160 20 150 L20 180 Q40 170 60 180 Q80 190 100 180 Q120 170 140 180 Q160 190 180 180 Q200 170 220 180 Q240 190 260 180 Q280 170 300 180 Q320 190 340 180 Q360 170 380 180",
                                "M350 155 Q305 105 255 135 Q205 165 185 145 Q165 125 145 135 Q125 145 105 135 Q85 125 65 145 Q45 165 25 155 L25 185 Q45 175 65 185 Q85 195 105 185 Q125 175 145 185 Q165 195 185 185 Q205 175 225 185 Q245 195 265 185 Q285 175 305 185 Q325 195 345 185 Q365 175 385 185",
                                "M350 150 Q300 100 250 130 Q200 160 180 140 Q160 120 140 130 Q120 140 100 130 Q80 120 60 140 Q40 160 20 150 L20 180 Q40 170 60 180 Q80 190 100 180 Q120 170 140 180 Q160 190 180 180 Q200 170 220 180 Q240 190 260 180 Q280 170 300 180 Q320 190 340 180 Q360 170 380 180"
                            ]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Dragon Wings */}
                    <motion.path
                        d="M200 140 Q150 100 120 120 Q100 140 90 160 Q100 180 120 170 Q140 160 160 170 Q180 180 200 170 Q220 160 240 170 Q260 180 280 170 Q300 160 320 150 Q340 140 350 130"
                        stroke="url(#dragonGradient)"
                        strokeWidth="1.5"
                        fill="rgba(139, 69, 19, 0.05)"
                        animate={{
                            d: [
                                "M200 140 Q150 100 120 120 Q100 140 90 160 Q100 180 120 170 Q140 160 160 170 Q180 180 200 170 Q220 160 240 170 Q260 180 280 170 Q300 160 320 150 Q340 140 350 130",
                                "M200 145 Q155 105 125 125 Q105 145 95 165 Q105 185 125 175 Q145 165 165 175 Q185 185 205 175 Q225 165 245 175 Q265 185 285 175 Q305 165 325 155 Q345 145 355 135",
                                "M200 140 Q150 100 120 120 Q100 140 90 160 Q100 180 120 170 Q140 160 160 170 Q180 180 200 170 Q220 160 240 170 Q260 180 280 170 Q300 160 320 150 Q340 140 350 130"
                            ]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Wing Membranes */}
                    <motion.path
                        d="M160 170 Q180 150 200 160 Q220 170 240 160 Q260 150 280 160"
                        stroke="url(#dragonGradient)"
                        strokeWidth="1"
                        fill="rgba(160, 32, 240, 0.1)"
                        opacity="0.6"
                        animate={{
                            d: [
                                "M160 170 Q180 150 200 160 Q220 170 240 160 Q260 150 280 160",
                                "M160 175 Q180 155 200 165 Q220 175 240 165 Q260 155 280 165",
                                "M160 170 Q180 150 200 160 Q220 170 240 160 Q260 150 280 160"
                            ]
                        }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Tail */}
                    <motion.path
                        d="M20 165 Q10 170 5 175 Q10 180 15 185 Q20 190 25 185 Q30 180 35 175"
                        stroke="url(#dragonGradient)"
                        strokeWidth="2"
                        fill="rgba(139, 69, 19, 0.2)"
                        animate={{
                            d: [
                                "M20 165 Q10 170 5 175 Q10 180 15 185 Q20 190 25 185 Q30 180 35 175",
                                "M20 168 Q12 173 7 178 Q12 183 17 188 Q22 193 27 188 Q32 183 37 178",
                                "M20 165 Q10 170 5 175 Q10 180 15 185 Q20 190 25 185 Q30 180 35 175"
                            ]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Gradient Definition */}
                    <defs>
                        <linearGradient id="dragonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgba(255, 107, 53, 0.8)" />
                            <stop offset="50%" stopColor="rgba(214, 48, 49, 0.6)" />
                            <stop offset="100%" stopColor="rgba(139, 69, 19, 0.4)" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Glow Effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-radial from-orange-500/10 via-red-500/5 to-transparent rounded-full blur-xl"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </motion.div>

            {/* Additional atmospheric dragons in background */}
            <motion.div
                className="absolute right-1/4 top-1/3 opacity-10"
                style={{
                    x: useTransform(scrollYProgress, [0, 1], [50, -50]),
                }}
            >
                <svg width="200" height="150" viewBox="0 0 200 150" fill="none">
                    <path
                        d="M180 75 Q150 50 120 70 Q90 90 70 75 Q50 60 30 75"
                        stroke="rgba(255, 107, 53, 0.3)"
                        strokeWidth="1"
                        fill="rgba(139, 69, 19, 0.1)"
                    />
                </svg>
            </motion.div>
        </div>
    );
}

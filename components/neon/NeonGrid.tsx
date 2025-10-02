"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function NeonGrid() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: (e.clientY / window.innerHeight) * 2 - 1,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {/* Main Grid */}
            <motion.div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255, 0, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(rgba(255, 0, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
                    backgroundSize: "50px 50px, 50px 50px, 200px 200px, 200px 200px",
                }}
                animate={{
                    backgroundPosition: [
                        "0px 0px, 0px 0px, 0px 0px, 0px 0px",
                        "50px 50px, 50px 50px, 200px 200px, 200px 200px",
                    ],
                }}
                transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                }}
            />

            {/* Animated Grid Lines */}
            <div className="absolute inset-0">
                {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                        key={`horizontal-${i}`}
                        className="absolute h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent"
                        style={{
                            top: `${i * 5}%`,
                            left: 0,
                            right: 0,
                        }}
                        animate={{
                            opacity: [0.3, 1, 0.3],
                            scaleX: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                            duration: 3 + (i * 0.1),
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: i * 0.1,
                        }}
                    />
                ))}

                {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                        key={`vertical-${i}`}
                        className="absolute w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
                        style={{
                            left: `${i * 5}%`,
                            top: 0,
                            bottom: 0,
                        }}
                        animate={{
                            opacity: [0.3, 1, 0.3],
                            scaleY: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                            duration: 3 + (i * 0.1),
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: i * 0.15,
                        }}
                    />
                ))}
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0">
                {Array.from({ length: 15 }).map((_, i) => (
                    <motion.div
                        key={`particle-${i}`}
                        className="absolute w-2 h-2 rounded-full"
                        style={{
                            background: `radial-gradient(circle, ${i % 3 === 0 ? "#ff00ff" : i % 3 === 1 ? "#00ffff" : "#ff0080"
                                }, transparent)`,
                            boxShadow: `0 0 10px ${i % 3 === 0 ? "#ff00ff" : i % 3 === 1 ? "#00ffff" : "#ff0080"
                                }`,
                        }}
                        animate={{
                            x: [
                                Math.random() * window.innerWidth,
                                Math.random() * window.innerWidth,
                                Math.random() * window.innerWidth,
                            ],
                            y: [
                                Math.random() * window.innerHeight,
                                Math.random() * window.innerHeight,
                                Math.random() * window.innerHeight,
                            ],
                            opacity: [0, 1, 0],
                            scale: [0.5, 1.5, 0.5],
                        }}
                        transition={{
                            duration: 8 + Math.random() * 4,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "loop",
                            delay: Math.random() * 5,
                        }}
                    />
                ))}
            </div>

            {/* Interactive Glow Effect */}
            <motion.div
                className="absolute w-96 h-96 rounded-full pointer-events-none"
                style={{
                    background: `radial-gradient(circle, rgba(255, 0, 255, 0.1) 0%, rgba(0, 255, 255, 0.05) 50%, transparent 70%)`,
                    left: `${50 + mousePosition.x * 20}%`,
                    top: `${50 + mousePosition.y * 20}%`,
                    transform: "translate(-50%, -50%)",
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            />
        </div>
    );
}

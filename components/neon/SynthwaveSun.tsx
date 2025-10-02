"use client";

import { motion } from "framer-motion";

export function SynthwaveSun() {
    return (
        <div className="fixed top-0 left-0 w-full h-1/2 pointer-events-none z-0">
            {/* Synthwave Sun */}
            <motion.div
                className="absolute top-10 right-10 w-32 h-32 rounded-full"
                style={{
                    background: `
            radial-gradient(circle at 30% 30%,
              #ff6b6b 0%,
              #ffa500 20%,
              #ffff00 40%,
              #ff1493 60%,
              #8a2be2 80%,
              #ff00ff 100%
            )
          `,
                    boxShadow: `
            0 0 50px #ff6b6b,
            0 0 100px #ffa500,
            0 0 150px #ffff00,
            0 0 200px #ff1493,
            0 0 250px #8a2be2,
            0 0 300px #ff00ff,
            inset 0 0 50px rgba(255, 255, 255, 0.3)
          `,
                }}
                animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 360],
                }}
                transition={{
                    scale: {
                        duration: 4,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "reverse",
                    },
                    rotate: {
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity,
                    },
                }}
            />

            {/* Sun Rays */}
            <div className="absolute top-10 right-10">
                {Array.from({ length: 12 }).map((_, i) => (
                    <motion.div
                        key={`ray-${i}`}
                        className="absolute w-1 bg-gradient-to-b from-yellow-400 via-pink-500 to-purple-600"
                        style={{
                            height: "200px",
                            left: "50%",
                            top: "50%",
                            transformOrigin: "50% 0%",
                            transform: `translateX(-50%) rotate(${i * 30}deg)`,
                        }}
                        animate={{
                            opacity: [0.3, 1, 0.3],
                            scaleY: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                            duration: 3,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: i * 0.2,
                        }}
                    />
                ))}
            </div>

            {/* Horizon Glow */}
            <motion.div
                className="absolute bottom-0 left-0 w-full h-32"
                style={{
                    background: `
            linear-gradient(to top,
              rgba(255, 0, 150, 0.8) 0%,
              rgba(255, 100, 100, 0.6) 20%,
              rgba(255, 150, 200, 0.4) 40%,
              rgba(200, 100, 255, 0.2) 60%,
              rgba(100, 150, 255, 0.1) 80%,
              transparent 100%
            )
          `,
                }}
                animate={{
                    opacity: [0.6, 1, 0.6],
                }}
                transition={{
                    duration: 6,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            />

            {/* Floating Synthwave Elements */}
            <div className="absolute inset-0">
                {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                        key={`element-${i}`}
                        className="absolute w-4 h-4"
                        style={{
                            background: `
                radial-gradient(circle,
                  ${i % 2 === 0 ? "#ff00ff" : "#00ffff"} 0%,
                  ${i % 3 === 0 ? "#ff8000" : "#8000ff"} 50%,
                  transparent 100%
                )
              `,
                            borderRadius: i % 2 === 0 ? "50%" : "0%",
                            boxShadow: `0 0 20px ${i % 2 === 0 ? "#ff00ff" : "#00ffff"}`,
                        }}
                        animate={{
                            x: [
                                `${Math.random() * 100}%`,
                                `${Math.random() * 100}%`,
                                `${Math.random() * 100}%`,
                            ],
                            y: [
                                `${Math.random() * 100}%`,
                                `${Math.random() * 100}%`,
                                `${Math.random() * 100}%`,
                            ],
                            opacity: [0, 1, 0],
                            scale: [0.5, 1.5, 0.5],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 10 + Math.random() * 5,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "loop",
                            delay: Math.random() * 3,
                        }}
                    />
                ))}
            </div>

            {/* Grid Horizon Lines */}
            <div className="absolute bottom-0 left-0 w-full">
                {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                        key={`horizon-${i}`}
                        className="absolute w-full h-px"
                        style={{
                            bottom: `${i * 20}px`,
                            background: `
                linear-gradient(90deg,
                  transparent 0%,
                  ${i % 2 === 0 ? "#ff00ff" : "#00ffff"} 20%,
                  ${i % 2 === 0 ? "#ff00ff" : "#00ffff"} 80%,
                  transparent 100%
                )
              `,
                        }}
                        animate={{
                            opacity: [0.2, 0.8, 0.2],
                            scaleX: [0.9, 1.1, 0.9],
                        }}
                        transition={{
                            duration: 4,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: i * 0.5,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

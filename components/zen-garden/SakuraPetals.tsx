"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Petal {
    id: number;
    x: number;
    delay: number;
    duration: number;
    scale: number;
    opacity: number;
}

export default function SakuraPetals() {
    const [petals, setPetals] = useState<Petal[]>([]);

    useEffect(() => {
        const generatePetals = () => {
            const newPetals: Petal[] = [];
            for (let i = 0; i < 20; i++) {
                newPetals.push({
                    id: i,
                    x: Math.random() * 100,
                    delay: Math.random() * 10,
                    duration: 8 + Math.random() * 12,
                    scale: 0.5 + Math.random() * 0.8,
                    opacity: 0.3 + Math.random() * 0.4,
                });
            }
            setPetals(newPetals);
        };

        generatePetals();
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
            {petals.map((petal) => (
                <motion.div
                    key={petal.id}
                    className="absolute"
                    style={{
                        left: `${petal.x}%`,
                        top: "-10px",
                    }}
                    initial={{ y: -50, rotate: 0, opacity: petal.opacity }}
                    animate={{
                        y: "100vh",
                        rotate: 360,
                        opacity: [petal.opacity, petal.opacity * 0.8, 0],
                    }}
                    transition={{
                        duration: petal.duration,
                        delay: petal.delay,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    <motion.div
                        animate={{
                            rotateY: [0, 180, 360],
                            scale: [petal.scale, petal.scale * 1.2, petal.scale * 0.8],
                        }}
                        transition={{
                            duration: petal.duration / 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="w-4 h-4"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="w-full h-full text-pink-300 dark:text-pink-400 drop-shadow-sm"
                        >
                            <path
                                d="M12 2C12 2 8 6 8 12C8 18 12 22 12 22C12 22 16 18 16 12C16 6 12 2 12 2Z"
                                fill="currentColor"
                                opacity="0.8"
                            />
                            <path
                                d="M12 2C12 2 16 6 16 12C16 18 12 22 12 22C12 22 8 18 8 12C8 6 12 2 12 2Z"
                                fill="currentColor"
                                opacity="0.6"
                            />
                            <path
                                d="M12 4C12 4 10 8 10 12C10 16 12 20 12 20C12 20 14 16 14 12C14 8 12 4 12 4Z"
                                fill="currentColor"
                                opacity="0.4"
                            />
                        </svg>
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
}

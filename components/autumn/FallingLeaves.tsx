"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Leaf {
    id: number;
    x: number;
    delay: number;
    duration: number;
    size: number;
    rotation: number;
    type: "maple" | "oak" | "birch";
}

export function FallingLeaves() {
    const [leaves, setLeaves] = useState<Leaf[]>([]);

    useEffect(() => {
        const leafTypes: Array<"maple" | "oak" | "birch"> = ["maple", "oak", "birch"];
        const newLeaves: Leaf[] = [];

        for (let i = 0; i < 20; i++) {
            newLeaves.push({
                id: i,
                x: Math.random() * 100,
                delay: Math.random() * 10,
                duration: 8 + Math.random() * 12,
                size: 0.5 + Math.random() * 1.5,
                rotation: Math.random() * 360,
                type: leafTypes[Math.floor(Math.random() * leafTypes.length)],
            });
        }

        setLeaves(newLeaves);
    }, []);

    const getLeafColor = (type: string) => {
        switch (type) {
            case "maple":
                return "text-red-500 dark:text-orange-400";
            case "oak":
                return "text-amber-600 dark:text-yellow-500";
            case "birch":
                return "text-yellow-400 dark:text-amber-300";
            default:
                return "text-orange-500";
        }
    };

    const getLeafShape = (type: string) => {
        switch (type) {
            case "maple":
                return "🍁";
            case "oak":
                return "🌿";
            case "birch":
                return "🍂";
            default:
                return "🍂";
        }
    };

    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            {leaves.map((leaf) => (
                <motion.div
                    key={leaf.id}
                    className={`absolute text-2xl ${getLeafColor(leaf.type)}`}
                    style={{
                        left: `${leaf.x}%`,
                        fontSize: `${leaf.size}rem`,
                    }}
                    initial={{
                        y: "-10vh",
                        x: 0,
                        rotate: leaf.rotation,
                        opacity: 0,
                    }}
                    animate={{
                        y: "110vh",
                        x: [0, 50, -30, 20, 0],
                        rotate: [leaf.rotation, leaf.rotation + 180, leaf.rotation + 360],
                        opacity: [0, 1, 1, 0.8, 0],
                    }}
                    transition={{
                        duration: leaf.duration,
                        delay: leaf.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                    }}
                >
                    {getLeafShape(leaf.type)}
                </motion.div>
            ))}
        </div>
    );
}

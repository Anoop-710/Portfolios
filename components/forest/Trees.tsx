"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useIsMobile, useReducedMotion } from "@/lib/animations";

interface TreeAnimation {
    id: number;
    y: number;
    duration: number;
    delay: number;
}

export function Trees() {
    const [treeAnimations, setTreeAnimations] = useState<TreeAnimation[]>([]);
    const isMobile = useIsMobile();
    const prefersReducedMotion = useReducedMotion();

    // Reduce tree count on mobile for better performance
    const treeCount = isMobile ? 8 : 18;

    useEffect(() => {
        if (prefersReducedMotion) return;

        // Generate random animations only on client side
        const newAnimations: TreeAnimation[] = Array.from({ length: treeCount }, (_, i) => ({
            id: i,
            y: -(Math.random() * 3 + 1) * (isMobile ? 0.5 : 1), // Reduce movement on mobile
            duration: 4 + Math.random() * 2,
            delay: Math.random(),
        }));
        setTreeAnimations(newAnimations);
    }, [treeCount, prefersReducedMotion, isMobile]);

    if (prefersReducedMotion) {
        return (
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/10 to-emerald-800/5 dark:from-emerald-950/20 dark:to-emerald-900/10" />
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-0">
            {/* Background tree silhouettes - simplified on mobile */}
            <svg
                className={`absolute inset-0 w-full h-full ${isMobile ? 'opacity-15 dark:opacity-25' : 'opacity-20 dark:opacity-30'}`}
                viewBox="0 0 1200 800"
                preserveAspectRatio="xMidYMid slice"
                style={{ willChange: "transform" }}
            >
                {/* Distant mountains/forest line */}
                <motion.path
                    d="M0,600 Q300,500 600,550 T1200,500 L1200,800 L0,800 Z"
                    fill="currentColor"
                    className="text-emerald-800 dark:text-emerald-900"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: isMobile ? 2 : 3, ease: "easeInOut" }}
                />

                {/* Tree silhouettes - reduced count on mobile */}
                {!isMobile && (
                    <>
                        {/* Back layer - desktop only */}
                        <TreeSilhouette x={100} height={200} delay={0} />
                        <TreeSilhouette x={250} height={180} delay={0.5} />
                        <TreeSilhouette x={400} height={220} delay={1} />
                        <TreeSilhouette x={600} height={190} delay={1.5} />
                        <TreeSilhouette x={800} height={210} delay={2} />
                        <TreeSilhouette x={1000} height={185} delay={2.5} />
                    </>
                )}

                {/* Middle layer - reduced on mobile */}
                <TreeSilhouette x={150} height={isMobile ? 200 : 280} delay={0.2} />
                <TreeSilhouette x={350} height={isMobile ? 240 : 320} delay={0.7} />
                <TreeSilhouette x={550} height={isMobile ? 220 : 290} delay={1.2} />
                <TreeSilhouette x={750} height={isMobile ? 230 : 310} delay={1.7} />
                {!isMobile && (
                    <TreeSilhouette x={950} height={270} delay={2.2} />
                )}

                {/* Front layer - reduced on mobile */}
                <TreeSilhouette x={50} height={isMobile ? 300 : 400} delay={0.3} />
                <TreeSilhouette x={300} height={isMobile ? 320 : 450} delay={0.8} />
                <TreeSilhouette x={500} height={isMobile ? 310 : 420} delay={1.3} />
                <TreeSilhouette x={700} height={isMobile ? 330 : 440} delay={1.8} />
                {!isMobile && (
                    <>
                        <TreeSilhouette x={900} height={400} delay={2.3} />
                        <TreeSilhouette x={1100} height={380} delay={2.8} />
                    </>
                )}
            </svg>

            {/* Parallax tree layers - simplified on mobile */}
            <motion.div
                className="absolute inset-0"
                style={{
                    background: `radial-gradient(ellipse at 20% 80%, transparent 50%, rgba(16, 185, 129, ${isMobile ? '0.05' : '0.1'}) 70%, rgba(16, 185, 129, ${isMobile ? '0.1' : '0.2'}) 80%)`,
                    willChange: "transform",
                }}
                animate={{
                    scale: isMobile ? [1, 1.02, 1] : [1, 1.05, 1],
                }}
                transition={{
                    duration: isMobile ? 30 : 20, // Much slower on mobile
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
}

function TreeSilhouette({ x, height, delay }: { x: number; height: number; delay: number }) {
    const width = height * 0.6;
    const trunkHeight = height * 0.3;
    const trunkWidth = width * 0.2;

    // Use the pre-generated animations - need to access from parent component
    // For now, use static values to avoid hydration issues
    const animation1 = { duration: 2, delay: 0 };
    const animation2 = { duration: 2.5, delay: 0.5 };
    const animation3 = { duration: 3, delay: 1 };

    return (
        <motion.g
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ delay, duration: 1.5, ease: "easeOut" }}
        >
            {/* Tree trunk */}
            <rect
                x={x + width / 2 - trunkWidth / 2}
                y={800 - trunkHeight}
                width={trunkWidth}
                height={trunkHeight}
                fill="currentColor"
                className="text-emerald-900 dark:text-emerald-950"
            />

            {/* Tree foliage - layered triangles for depth */}
            <motion.path
                d={`M${x} ${800 - trunkHeight} L${x + width / 2} ${800 - trunkHeight - height * 0.7} L${x + width} ${800 - trunkHeight} Z`}
                fill="currentColor"
                className="text-emerald-800 dark:text-emerald-900"
                animate={{
                    y: [0, -2, 0],
                }}
                transition={{
                    duration: 4 + (animation1?.duration || 2),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay + (animation1?.delay || 0),
                }}
            />

            <motion.path
                d={`M${x + width * 0.1} ${800 - trunkHeight} L${x + width / 2} ${800 - trunkHeight - height * 0.8} L${x + width * 0.9} ${800 - trunkHeight} Z`}
                fill="currentColor"
                className="text-emerald-700 dark:text-emerald-800"
                animate={{
                    y: [0, -3, 0],
                }}
                transition={{
                    duration: 5 + (animation2?.duration || 2),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay + (animation2?.delay || 0.5),
                }}
            />

            <motion.path
                d={`M${x + width * 0.2} ${800 - trunkHeight} L${x + width / 2} ${800 - trunkHeight - height} L${x + width * 0.8} ${800 - trunkHeight} Z`}
                fill="currentColor"
                className="text-emerald-600 dark:text-emerald-700"
                animate={{
                    y: [0, -1, 0],
                }}
                transition={{
                    duration: 6 + (animation3?.duration || 2),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay + (animation3?.delay || 1),
                }}
            />
        </motion.g>
    );
}

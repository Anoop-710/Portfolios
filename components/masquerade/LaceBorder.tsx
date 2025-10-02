"use client";

import { motion } from "framer-motion";

interface LaceBorderProps {
    className?: string;
    pattern?: "delicate" | "ornate" | "floral";
    animated?: boolean;
}

export function LaceBorder({
    className = "",
    pattern = "ornate",
    animated = true
}: LaceBorderProps) {
    const shimmerAnimation = animated ? {
        backgroundPosition: ["0% 0%", "100% 100%"],
    } : {};

    const patternPaths = {
        delicate: "M0,10 Q5,5 10,10 T20,10 T30,10 T40,10 T50,10 T60,10 T70,10 T80,10 T90,10 T100,10",
        ornate: "M0,15 Q8,5 15,12 Q22,20 30,12 Q38,5 45,12 Q52,20 60,12 Q68,5 75,12 Q82,20 90,12 Q98,5 100,15",
        floral: "M0,10 Q10,0 20,10 Q30,20 40,10 Q50,0 60,10 Q70,20 80,10 Q90,0 100,10"
    };

    return (
        <motion.div
            className={`relative overflow-hidden ${className}`}
            animate={shimmerAnimation}
            transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
            }}
        >
            <svg
                viewBox="0 0 100 20"
                className="w-full h-full"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="laceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="currentColor" stopOpacity="1" />
                        <stop offset="100%" stopColor="currentColor" stopOpacity="0.8" />
                    </linearGradient>
                </defs>

                {/* Main lace pattern */}
                <path
                    d={patternPaths[pattern]}
                    fill="none"
                    stroke="url(#laceGradient)"
                    strokeWidth="1.5"
                    vectorEffect="non-scaling-stroke"
                />

                {/* Decorative dots */}
                <g fill="currentColor" opacity="0.6">
                    <circle cx="10" cy="10" r="1" />
                    <circle cx="30" cy="10" r="1" />
                    <circle cx="50" cy="10" r="1" />
                    <circle cx="70" cy="10" r="1" />
                    <circle cx="90" cy="10" r="1" />
                </g>

                {/* Additional flourish elements for ornate pattern */}
                {pattern === "ornate" && (
                    <>
                        <path
                            d="M15,8 Q20,3 25,8 M35,12 Q40,7 45,12 M55,8 Q60,3 65,8 M75,12 Q80,7 85,12"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="0.8"
                            opacity="0.7"
                        />
                        <circle cx="20" cy="6" r="1" fill="currentColor" opacity="0.5" />
                        <circle cx="40" cy="14" r="1" fill="currentColor" opacity="0.5" />
                        <circle cx="60" cy="6" r="1" fill="currentColor" opacity="0.5" />
                        <circle cx="80" cy="14" r="1" fill="currentColor" opacity="0.5" />
                    </>
                )}

                {/* Floral elements for floral pattern */}
                {pattern === "floral" && (
                    <>
                        <g fill="currentColor" opacity="0.4">
                            <path d="M15,8 Q17,6 19,8 Q17,10 15,8" />
                            <path d="M35,12 Q37,10 39,12 Q37,14 35,12" />
                            <path d="M55,8 Q57,6 59,8 Q57,10 55,8" />
                            <path d="M75,12 Q77,10 79,12 Q77,14 75,12" />
                        </g>
                    </>
                )}
            </svg>

            {/* Shimmer overlay */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                    x: ['-100%', '100%'],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut"
                }}
            />
        </motion.div>
    );
}

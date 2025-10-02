"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface StainedGlassWindowProps {
    className?: string;
    animate?: boolean;
}

export function StainedGlassWindow({ className = "", animate = true }: StainedGlassWindowProps) {
    const [lightBeams, setLightBeams] = useState<number[]>([]);

    useEffect(() => {
        if (animate) {
            const interval = setInterval(() => {
                setLightBeams(prev => {
                    const newBeams = [...prev];
                    if (Math.random() > 0.7 && newBeams.length < 3) {
                        newBeams.push(Date.now());
                    }
                    return newBeams.filter(beam => Date.now() - beam < 3000);
                });
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [animate]);

    return (
        <div className={`relative ${className}`}>
            {/* Gothic Arch Frame */}
            <div className="relative w-full h-96 bg-gradient-to-b from-stone-800 via-stone-700 to-stone-900 rounded-t-full border-4 border-stone-600 shadow-2xl">
                {/* Stone texture overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-stone-500/10 to-stone-900/30 rounded-t-full" />

                {/* Gothic Arch Design */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
                    {/* Main arch */}
                    <path
                        d="M50 350 Q200 50 350 350 L350 400 L50 400 Z"
                        fill="none"
                        stroke="rgb(87 83 78)"
                        strokeWidth="3"
                        className="drop-shadow-lg"
                    />

                    {/* Arch divisions */}
                    <line x1="200" y1="80" x2="200" y2="350" stroke="rgb(87 83 78)" strokeWidth="2" />
                    <line x1="125" y1="120" x2="125" y2="320" stroke="rgb(87 83 78)" strokeWidth="1" />
                    <line x1="275" y1="120" x2="275" y2="320" stroke="rgb(87 83 78)" strokeWidth="1" />

                    {/* Rose window center */}
                    <circle cx="200" cy="200" r="40" fill="none" stroke="rgb(87 83 78)" strokeWidth="2" />
                    <circle cx="200" cy="200" r="25" fill="none" stroke="rgb(87 83 78)" strokeWidth="1" />

                    {/* Rose window petals */}
                    {Array.from({ length: 12 }).map((_, i) => (
                        <g key={i}>
                            <ellipse
                                cx={200 + Math.cos((i * 30 * Math.PI) / 180) * 32}
                                cy={200 + Math.sin((i * 30 * Math.PI) / 180) * 32}
                                rx="8"
                                ry="15"
                                fill={`hsl(${i * 30}, 70%, 60%)`}
                                className={`${animate ? 'animate-pulse' : ''}`}
                                style={{
                                    filter: animate ? 'drop-shadow(0 0 10px rgba(255,255,255,0.3))' : 'none',
                                    animationDelay: `${i * 0.2}s`
                                }}
                            />
                        </g>
                    ))}

                    {/* Stained glass panels */}
                    {/* Left section */}
                    <path d="M50 350 Q125 120 200 80 L200 350 Z" fill="rgba(59, 130, 246, 0.8)" className={animate ? 'animate-pulse' : ''} />
                    <path d="M50 350 L125 320 L125 120 Q200 50 200 80 L200 350 Z" fill="rgba(168, 85, 247, 0.8)" className={animate ? 'animate-pulse' : ''} />

                    {/* Center section */}
                    <path d="M200 80 Q200 50 200 80" fill="rgba(236, 72, 153, 0.9)" className={animate ? 'animate-pulse' : ''} />
                    <path d="M200 80 L200 350 L200 350" stroke="rgb(87 83 78)" strokeWidth="2" fill="none" />

                    {/* Right section */}
                    <path d="M350 350 Q275 120 200 80 L200 350 Z" fill="rgba(34, 197, 94, 0.8)" className={animate ? 'animate-pulse' : ''} />
                    <path d="M350 350 L275 320 L275 120 Q200 50 200 80 L200 350 Z" fill="rgba(251, 191, 36, 0.8)" className={animate ? 'animate-pulse' : ''} />

                    {/* Bottom sections */}
                    <path d="M50 350 L125 320 L200 350" fill="rgba(239, 68, 68, 0.8)" className={animate ? 'animate-pulse' : ''} />
                    <path d="M350 350 L275 320 L200 350" fill="rgba(168, 85, 247, 0.8)" className={animate ? 'animate-pulse' : ''} />
                </svg>

                {/* Light beams animation */}
                {animate && lightBeams.map((beam, index) => (
                    <motion.div
                        key={beam}
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1.2, 1.2, 0.8], rotate: 5 }}
                        transition={{ duration: 2.5, ease: "easeInOut" }}
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: `radial-gradient(ellipse at ${60 + index * 10}% 30%, rgba(255,255,255,0.6) 0%, rgba(255,215,0,0.3) 30%, transparent 70%)`,
                            animationDelay: `${index * 0.5}s`
                        }}
                    />
                ))}

                {/* Candle light glow */}
                {animate && (
                    <motion.div
                        animate={{
                            opacity: [0.3, 0.7, 0.3],
                            scale: [1, 1.05, 1]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-16 bg-gradient-radial from-yellow-300/40 via-orange-400/20 to-transparent rounded-full blur-xl"
                    />
                )}
            </div>

            {/* Stone sill */}
            <div className="w-full h-8 bg-gradient-to-b from-stone-600 to-stone-800 border-x-4 border-b-4 border-stone-600 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-stone-400/20 via-transparent to-stone-400/20" />
            </div>
        </div>
    );
}

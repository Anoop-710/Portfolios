"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface FjordBackgroundProps {
    children: React.ReactNode;
}

export function FjordBackground({ children }: FjordBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Wave animation variables
        let time = 0;
        const waves = [
            { amplitude: 20, frequency: 0.02, speed: 0.5, offset: 0 },
            { amplitude: 15, frequency: 0.03, speed: 0.7, offset: 100 },
            { amplitude: 10, frequency: 0.04, speed: 0.9, offset: 200 },
        ];

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Create gradient background (fjord-like)
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, "#1e3a8a"); // Deep blue at top
            gradient.addColorStop(0.7, "#3b82f6"); // Medium blue
            gradient.addColorStop(1, "#1e40af"); // Darker blue at bottom

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw animated waves
            ctx.strokeStyle = "rgba(59, 130, 246, 0.3)";
            ctx.lineWidth = 2;

            waves.forEach((wave, index) => {
                ctx.beginPath();
                const opacity = 0.5 - index * 0.1;

                for (let x = 0; x <= canvas.width; x += 5) {
                    const y =
                        canvas.height * 0.6 +
                        Math.sin((x * wave.frequency) + (time * wave.speed) + wave.offset) * wave.amplitude;

                    if (x === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }

                ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
                ctx.stroke();
            });

            // Add some sparkle effects (light reflections)
            for (let i = 0; i < 20; i++) {
                const x = (i * canvas.width) / 20;
                const baseY = canvas.height * 0.6;
                const waveY =
                    Math.sin((x * 0.02) + (time * 0.5)) * 15 +
                    Math.sin((x * 0.03) + (time * 0.7) + 100) * 10;

                if (Math.random() > 0.7) {
                    ctx.beginPath();
                    ctx.arc(x, baseY + waveY, 1, 0, Math.PI * 2);
                    ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
                    ctx.fill();
                }
            }

            time += 0.02;

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <div className="relative min-h-screen overflow-hidden">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
                style={{ zIndex: -1 }}
            />

            {/* Mountain silhouettes */}
            <div className="absolute inset-0">
                <svg
                    className="absolute bottom-0 left-0 w-full h-64"
                    viewBox="0 0 1200 300"
                    preserveAspectRatio="none"
                >
                    <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        d="M0,300 L0,150 L200,100 L400,80 L600,120 L800,60 L1000,90 L1200,70 L1200,300 Z"
                        fill="rgba(30, 58, 138, 0.8)"
                    />
                    <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                        d="M0,300 L0,200 L150,180 L350,160 L550,140 L750,170 L950,150 L1200,130 L1200,300 Z"
                        fill="rgba(30, 58, 138, 0.6)"
                    />
                </svg>
            </div>

            {/* Content overlay */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}

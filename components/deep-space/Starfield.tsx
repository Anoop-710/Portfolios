"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Star {
    x: number;
    y: number;
    size: number;
    opacity: number;
    twinkleSpeed: number;
}

export function Starfield() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const starsRef = useRef<Star[]>([]);
    const animationRef = useRef<number>();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createStars = () => {
            const starCount = Math.floor((canvas.width * canvas.height) / 15000); // Reduced by 90%
            starsRef.current = [];

            for (let i = 0; i < starCount; i++) {
                starsRef.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2 + 0.5,
                    opacity: Math.random() * 0.8 + 0.2,
                    twinkleSpeed: Math.random() * 0.02 + 0.01,
                });
            }
        };

        const animate = (time: number) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            starsRef.current.forEach((star, index) => {
                // Twinkling effect
                const twinkle = Math.sin(time * star.twinkleSpeed + index) * 0.3 + 0.7;
                const opacity = star.opacity * twinkle;

                // Draw star
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(147, 197, 253, ${opacity})`; // Blue star color
                ctx.fill();

                // Add glow effect for brighter stars
                if (star.size > 1.5) {
                    ctx.beginPath();
                    ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(147, 197, 253, ${opacity * 0.3})`;
                    ctx.fill();
                }
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        resizeCanvas();
        createStars();
        animationRef.current = requestAnimationFrame(animate);

        const handleResize = () => {
            resizeCanvas();
            createStars();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <motion.canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
        />
    );
}

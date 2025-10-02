"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface EmberParticle {
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    speed: number;
    drift: number;
}

interface EmberParticlesProps {
    count?: number;
    className?: string;
}

export function EmberParticles({ count = 20, className = "" }: EmberParticlesProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<EmberParticle[]>([]);
    const animationRef = useRef<number>(0);

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

        // Initialize particles
        const initParticles = () => {
            particlesRef.current = Array.from({ length: count }, (_, i) => ({
                id: i,
                x: Math.random() * canvas.width,
                y: canvas.height + Math.random() * 100,
                size: Math.random() * 3 + 1,
                opacity: Math.random() * 0.8 + 0.2,
                speed: Math.random() * 0.5 + 0.2,
                drift: (Math.random() - 0.5) * 0.3,
            }));
        };

        initParticles();

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particlesRef.current.forEach((particle) => {
                // Update particle position
                particle.y -= particle.speed;
                particle.x += particle.drift;

                // Reset particle when it goes off screen
                if (particle.y < -10) {
                    particle.y = canvas.height + 10;
                    particle.x = Math.random() * canvas.width;
                }

                // Draw ember particle
                const gradient = ctx.createRadialGradient(
                    particle.x,
                    particle.y,
                    0,
                    particle.x,
                    particle.y,
                    particle.size * 2
                );

                gradient.addColorStop(0, `rgba(255, 107, 53, ${particle.opacity})`);
                gradient.addColorStop(0.4, `rgba(214, 48, 49, ${particle.opacity * 0.8})`);
                gradient.addColorStop(1, `rgba(139, 69, 19, 0)`);

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fill();

                // Add glow effect
                ctx.shadowColor = "#ff6b35";
                ctx.shadowBlur = 10;
                ctx.fill();
                ctx.shadowBlur = 0;
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [count]);

    return (
        <>
            <canvas
                ref={canvasRef}
                className={`fixed inset-0 pointer-events-none z-0 ${className}`}
                style={{ mixBlendMode: "screen" }}
            />
            {/* Fallback animated embers for reduced motion */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                {Array.from({ length: count / 2 }, (_, i) => (
                    <motion.div
                        key={`ember-${i}`}
                        className="absolute w-1 h-1 bg-orange-500 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [-10, -100],
                            opacity: [0, 1, 1, 0],
                            scale: [0.5, 1, 1, 0.5],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: "easeOut",
                        }}
                    />
                ))}
            </div>
        </>
    );
}

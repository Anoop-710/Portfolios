"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface LiquidBlobProps {
    color: string;
    size: number;
    x: number;
    y: number;
    delay: number;
}

function LiquidBlob({ color, size, x, y, delay }: LiquidBlobProps) {
    return (
        <motion.div
            className="absolute rounded-full opacity-20 blur-xl"
            style={{
                background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
                width: size,
                height: size,
                left: x,
                top: y,
            }}
            animate={{
                scale: [1, 1.2, 0.8, 1.1, 1],
                rotate: [0, 90, 180, 270, 360],
                x: [0, 30, -20, 15, 0],
                y: [0, -25, 35, -10, 0],
            }}
            transition={{
                duration: 8,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        />
    );
}

export function LiquidMorphingBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let time = 0;
        const blobs = [
            { x: 100, y: 100, color: "#00ffff", radius: 80, offset: 0 },
            { x: 300, y: 200, color: "#00ff88", radius: 60, offset: 1 },
            { x: 500, y: 150, color: "#ff0080", radius: 90, offset: 2 },
            { x: 200, y: 300, color: "#8000ff", radius: 70, offset: 3 },
            { x: 400, y: 250, color: "#ffff00", radius: 50, offset: 4 },
        ];

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            blobs.forEach((blob, index) => {
                const currentTime = time * 0.01 + blob.offset;

                // Create morphing effect
                const x = blob.x + Math.sin(currentTime) * 50;
                const y = blob.y + Math.cos(currentTime * 0.7) * 40;
                const radius = blob.radius + Math.sin(currentTime * 1.3) * 20;

                // Create gradient
                const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
                gradient.addColorStop(0, blob.color + "40");
                gradient.addColorStop(0.5, blob.color + "20");
                gradient.addColorStop(1, blob.color + "00");

                ctx.beginPath();
                ctx.arc(x, y, radius, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();

                // Add connecting tendrils between blobs
                if (index > 0) {
                    const prevBlob = blobs[index - 1];
                    const prevX = prevBlob.x + Math.sin(currentTime + prevBlob.offset) * 50;
                    const prevY = prevBlob.y + Math.cos((currentTime + prevBlob.offset) * 0.7) * 40;

                    ctx.beginPath();
                    ctx.moveTo(prevX, prevY);
                    ctx.quadraticCurveTo(
                        (prevX + x) / 2,
                        (prevY + y) / 2 - 30,
                        x,
                        y
                    );

                    const tendrilGradient = ctx.createLinearGradient(prevX, prevY, x, y);
                    tendrilGradient.addColorStop(0, prevBlob.color + "30");
                    tendrilGradient.addColorStop(1, blob.color + "30");

                    ctx.strokeStyle = tendrilGradient;
                    ctx.lineWidth = 3;
                    ctx.stroke();
                }
            });

            time++;
            requestAnimationFrame(animate);
        };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        animate();

        return () => window.removeEventListener("resize", resizeCanvas);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
                style={{ background: 'transparent' }}
            />

            {/* Additional animated blobs */}
            <LiquidBlob color="#00ffff" size={200} x={100} y={100} delay={0} />
            <LiquidBlob color="#00ff88" size={150} x={300} y={200} delay={1} />
            <LiquidBlob color="#ff0080" size={180} x={500} y={150} delay={2} />
            <LiquidBlob color="#8000ff" size={120} x={200} y={300} delay={3} />
            <LiquidBlob color="#ffff00" size={100} x={400} y={250} delay={4} />

            {/* Background grid overlay */}
            <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%">
                    <defs>
                        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#00ffff" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>
        </div>
    );
}

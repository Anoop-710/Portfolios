"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface NeuronNode {
    id: string;
    x: number;
    y: number;
    connections: string[];
    pulseDelay: number;
}

interface Connection {
    from: string;
    to: string;
    animated: boolean;
}

export function NeuronConnections() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number>(0);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    // Create neuron nodes
    const nodes: NeuronNode[] = [
        { id: "1", x: 200, y: 150, connections: ["2", "3"], pulseDelay: 0 },
        { id: "2", x: 400, y: 100, connections: ["1", "4"], pulseDelay: 500 },
        { id: "3", x: 350, y: 250, connections: ["1", "5"], pulseDelay: 1000 },
        { id: "4", x: 600, y: 80, connections: ["2", "6"], pulseDelay: 1500 },
        { id: "5", x: 550, y: 300, connections: ["3", "6"], pulseDelay: 2000 },
        { id: "6", x: 750, y: 200, connections: ["4", "5"], pulseDelay: 2500 },
    ];

    const connections: Connection[] = [
        { from: "1", to: "2", animated: true },
        { from: "1", to: "3", animated: true },
        { from: "2", to: "4", animated: true },
        { from: "3", to: "5", animated: true },
        { from: "4", to: "6", animated: true },
        { from: "5", to: "6", animated: true },
    ];

    useEffect(() => {
        const updateDimensions = () => {
            if (canvasRef.current) {
                const rect = canvasRef.current.getBoundingClientRect();
                setDimensions({ width: rect.width, height: rect.height });
            }
        };

        updateDimensions();
        window.addEventListener("resize", updateDimensions);

        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || dimensions.width === 0) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = dimensions.width;
        canvas.height = dimensions.height;

        let time = 0;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw connections
            connections.forEach((connection) => {
                const fromNode = nodes.find(n => n.id === connection.from);
                const toNode = nodes.find(n => n.id === connection.to);

                if (fromNode && toNode) {
                    // Create animated pulse effect
                    const pulseIntensity = Math.sin(time * 0.002 + fromNode.pulseDelay * 0.001) * 0.5 + 0.5;

                    ctx.beginPath();
                    ctx.moveTo(fromNode.x, fromNode.y);
                    ctx.lineTo(toNode.x, toNode.y);

                    // Create gradient for the connection line
                    const gradient = ctx.createLinearGradient(fromNode.x, fromNode.y, toNode.x, toNode.y);
                    gradient.addColorStop(0, `rgba(0, 255, 255, ${pulseIntensity * 0.8})`);
                    gradient.addColorStop(0.5, `rgba(0, 255, 136, ${pulseIntensity * 0.6})`);
                    gradient.addColorStop(1, `rgba(255, 0, 255, ${pulseIntensity * 0.8})`);

                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = pulseIntensity * 3 + 1;
                    ctx.stroke();

                    // Draw connection particles
                    const particles = 8;
                    for (let i = 0; i < particles; i++) {
                        const progress = (time * 0.01 + i * 0.5) % (Math.PI * 2);
                        const x = fromNode.x + (toNode.x - fromNode.x) * (0.5 + Math.sin(progress) * 0.3);
                        const y = fromNode.y + (toNode.y - fromNode.y) * (0.5 + Math.cos(progress) * 0.3);

                        ctx.beginPath();
                        ctx.arc(x, y, 2, 0, Math.PI * 2);
                        ctx.fillStyle = `rgba(0, 255, 255, ${pulseIntensity})`;
                        ctx.fill();
                    }
                }
            });

            // Draw nodes
            nodes.forEach((node) => {
                const pulseIntensity = Math.sin(time * 0.003 + node.pulseDelay * 0.001) * 0.5 + 0.5;

                // Node glow
                const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 20);
                gradient.addColorStop(0, `rgba(0, 255, 255, ${pulseIntensity})`);
                gradient.addColorStop(0.5, `rgba(0, 255, 136, ${pulseIntensity * 0.5})`);
                gradient.addColorStop(1, "rgba(0, 255, 136, 0)");

                ctx.beginPath();
                ctx.arc(node.x, node.y, 20, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();

                // Node core
                ctx.beginPath();
                ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
                ctx.fillStyle = "#ffffff";
                ctx.fill();
            });

            time++;
            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [dimensions, nodes, connections]);

    return (
        <div className="absolute inset-0 pointer-events-none">
            <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{ background: 'transparent' }}
            />

            {/* Animated overlay nodes */}
            {nodes.map((node) => (
                <motion.div
                    key={node.id}
                    className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                    style={{
                        left: node.x - 4,
                        top: node.y - 4,
                    }}
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        delay: node.pulseDelay * 0.001,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}

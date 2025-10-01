"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export function ParticlesBackground() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        // Initialize tsparticles engine properly
        const initParticles = async () => {
            try {
                await initParticlesEngine(async (engine) => {
                    await loadSlim(engine);
                });
                setInit(true);
            } catch (error) {
                console.error("Failed to initialize particles:", error);
            }
        };

        initParticles();
    }, []);

    const particlesOptions = useMemo(() => ({
        background: {
            color: {
                value: "transparent",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: ["#00ffff", "#ff00ff", "#ffff00", "#ff0080", "#8000ff"],
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.1,
                width: 1,
            },
            move: {
                enable: true,
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    }), []);

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            options={particlesOptions}
            className="absolute inset-0"
        />
    );
}

// Rain effect component
export function RainEffect() {
    const rainDrops = useMemo(() =>
        Array.from({ length: 50 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            delay: Math.random() * 2,
            duration: 1 + Math.random() * 2,
        })), []
    );

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {rainDrops.map((drop) => (
                <motion.div
                    key={drop.id}
                    className="absolute w-0.5 bg-gradient-to-b from-cyan-400/60 to-cyan-600/20"
                    style={{
                        left: `${drop.x}%`,
                        height: `${20 + Math.random() * 40}px`,
                    }}
                    animate={{
                        y: ["-20px", "100vh"],
                        opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                        duration: drop.duration,
                        delay: drop.delay,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
}

// Holographic grid effect
export function HolographicGrid() {
    return (
        <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/5 to-transparent animate-pulse" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
        </div>
    );
}

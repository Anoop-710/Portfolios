"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface DustParticlesProps {
    count?: number;
    className?: string;
}

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    duration: number;
    delay: number;
}

interface EmberParticle {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
}

export function DustParticles({ count = 20, className = "" }: DustParticlesProps) {
    const [particles, setParticles] = useState<Particle[]>([]);
    const [embers, setEmbers] = useState<EmberParticle[]>([]);

    useEffect(() => {
        // Main dust particles
        const newParticles: Particle[] = Array.from({ length: count }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.6 + 0.2,
            duration: Math.random() * 10 + 15,
            delay: Math.random() * 5,
        }));
        setParticles(newParticles);

        // Ember-like particles
        const newEmbers: EmberParticle[] = Array.from({ length: 8 }, (_, i) => ({
            id: i,
            x: 20 + i * 10,
            y: 80 + Math.sin(i) * 10,
            size: Math.random() * 2 + 1,
            duration: Math.random() * 8 + 12,
            delay: Math.random() * 3,
        }));
        setEmbers(newEmbers);
    }, [count]);

    return (
        <div className={`absolute inset-0 pointer-events-none ${className}`}>
            {/* Dust particles */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-amber-200/30"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        opacity: particle.opacity,
                    }}
                    animate={{
                        y: [0, -100, -200],
                        x: [0, Math.sin(particle.id) * 20, Math.sin(particle.id) * 40],
                        opacity: [particle.opacity, particle.opacity * 0.5, 0],
                        scale: [1, 1.2, 0.8],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}

            {/* Ember-like particles */}
            {embers.map((ember) => (
                <motion.div
                    key={`ember-${ember.id}`}
                    className="absolute rounded-full bg-orange-300/40"
                    style={{
                        left: `${ember.x}%`,
                        top: `${ember.y}%`,
                        width: `${ember.size}px`,
                        height: `${ember.size}px`,
                    }}
                    animate={{
                        y: [0, -300],
                        opacity: [0, 0.8, 0.4, 0],
                        scale: [0.5, 1.5, 1, 0.5],
                    }}
                    transition={{
                        duration: ember.duration,
                        delay: ember.delay,
                        repeat: Infinity,
                        ease: "easeOut",
                    }}
                />
            ))}
        </div>
    );
}

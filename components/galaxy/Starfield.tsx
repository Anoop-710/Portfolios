"use client";

import { useEffect, useMemo, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export function Starfield() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        // Initialize tsparticles
        const initParticles = async () => {
            try {
                await loadSlim(window as never);
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
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "bubble",
                },
            },
            modes: {
                bubble: {
                    distance: 200,
                    size: 6,
                    duration: 2,
                    opacity: 0.8,
                    speed: 3,
                },
            },
        },
        particles: {
            color: {
                value: ["#ffffff", "#e2e8ff", "#c7d2fe", "#a5b4fc"],
            },
            links: {
                color: "#6366f1",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
            },
            move: {
                enable: true,
                random: true,
                speed: 0.3,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 100,
            },
            opacity: {
                value: { min: 0.1, max: 0.6 },
                animation: {
                    enable: true,
                    speed: 1,
                    sync: false,
                },
            },
            shape: {
                type: ["circle", "star"],
            },
            size: {
                value: { min: 1, max: 3 },
                animation: {
                    enable: true,
                    speed: 2,
                    sync: false,
                },
            },
        },
        detectRetina: true,
    }), []);

    if (!init) {
        return (
            <div className="fixed inset-0 z-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900" />
        );
    }

    return (
        <Particles
            id="starfield"
            options={particlesOptions}
            className="fixed inset-0 z-0"
        />
    );
}

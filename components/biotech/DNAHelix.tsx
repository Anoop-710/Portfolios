"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Line } from "@react-three/drei";
import * as THREE from "three";

interface DNAHelixProps {
    position?: [number, number, number];
    scale?: number;
}

function DNAHelixGeometry({ scale = 1 }: { scale?: number }) {
    const meshRef = useRef<THREE.Group>(null);

    // Generate DNA helix points
    const helixPoints = useMemo(() => {
        const points: THREE.Vector3[] = [];
        const numTurns = 8;
        const pointsPerTurn = 32;

        for (let i = 0; i <= numTurns * pointsPerTurn; i++) {
            const t = (i / pointsPerTurn) * Math.PI * 2;
            const y = (i / pointsPerTurn) * 2 - numTurns;
            const radius = 1.5;

            // Main helix
            points.push(new THREE.Vector3(
                Math.cos(t) * radius,
                y,
                Math.sin(t) * radius
            ));
        }

        return points;
    }, []);

    // Generate base pair connections
    const basePairs = useMemo(() => {
        const pairs: Array<{ pos1: THREE.Vector3; pos2: THREE.Vector3 }> = [];
        const numPairs = 16;

        for (let i = 0; i < numPairs; i++) {
            const t = (i / numPairs) * Math.PI * 4;
            const y = (i / numPairs) * 4 - 8;
            const radius = 1.5;

            const pos1 = new THREE.Vector3(
                Math.cos(t) * radius,
                y,
                Math.sin(t) * radius
            );

            const pos2 = new THREE.Vector3(
                Math.cos(t + Math.PI) * radius,
                y,
                Math.sin(t + Math.PI) * radius
            );

            pairs.push({ pos1, pos2 });
        }

        return pairs;
    }, []);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
        }
    });

    return (
        <group ref={meshRef} scale={scale}>
            {/* Main helix strands */}
            <Line
                points={helixPoints}
                color="#00ffff"
                lineWidth={3}
                transparent
                opacity={0.8}
            />

            {/* Second strand (offset by 180 degrees) */}
            <Line
                points={helixPoints.map(p => new THREE.Vector3(-p.x, p.y, -p.z))}
                color="#00ff88"
                lineWidth={3}
                transparent
                opacity={0.8}
            />

            {/* Base pair connections */}
            {basePairs.map((pair, index) => (
                <Line
                    key={index}
                    points={[pair.pos1, pair.pos2]}
                    color="#ffffff"
                    lineWidth={2}
                    transparent
                    opacity={0.6}
                />
            ))}

            {/* Nucleotide bases */}
            {basePairs.map((pair, index) => (
                <group key={`bases-${index}`}>
                    <Sphere position={[pair.pos1.x, pair.pos1.y, pair.pos1.z]} args={[0.3]}>
                        <meshStandardMaterial
                            color="#ff0080"
                            emissive="#ff0080"
                            emissiveIntensity={0.3}
                        />
                    </Sphere>
                    <Sphere position={[pair.pos2.x, pair.pos2.y, pair.pos2.z]} args={[0.3]}>
                        <meshStandardMaterial
                            color="#8000ff"
                            emissive="#8000ff"
                            emissiveIntensity={0.3}
                        />
                    </Sphere>
                </group>
            ))}
        </group>
    );
}

export function DNAHelix({ position = [0, 0, 0], scale = 1 }: DNAHelixProps) {
    return (
        <div className="absolute inset-0 -z-10">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 50 }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00ff88" />

                <DNAHelixGeometry scale={scale} />
            </Canvas>
        </div>
    );
}

'use client';

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    if (!init) {
        return null;
    }

    return (
        <Particles
            id="tsparticles"
            options={{
                fullScreen: false,
                particles: {
                    number: { value: 30, density: { enable: true } },
                    color: { value: ["#FFB6C1", "#E6E6FA", "#FFD700"] },
                    shape: { type: "circle" },
                    opacity: {
                        value: 0.3,
                        animation: { enable: true, speed: 1 }
                    },
                    size: {
                        value: 10,
                        animation: { enable: true, speed: 2 }
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: "top",
                        outModes: { default: "out" }
                    }
                }
            }}
        />
    );
}

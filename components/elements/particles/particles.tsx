"use client"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import React, { useCallback } from "react"

const ParticlesContainer = () => {
    const particlesInit = useCallback(async (engine: any) => {
        await loadFull(engine)
    }, [])

    const particlesLoaded = useCallback(async () => { }, [])

    return <Particles
    className={`w-full left-0 h-full absolute`}
        id="tsparticles" 
        init={particlesInit} 
        loaded={particlesLoaded}
        options={{
            fullScreen: { enable: false },
            background: {
                color: {
                    value: ""
                }
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: false,
                        mode: "push"
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse"
                    }, 
                    resize: true
                },
                modes: {
                    push: {
                        quantity: 90
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    }
                }
            },
            particles: {
                color:{
                    value:"#757575",
                },
                links: {
                    color: "#03BD94",
                    distance: 150,
                    enable: true,
                    width: 1
                },
                collisions: {
                    enable: true
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce"
                    },
                    random: false,
                    speed: 1,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                        area: 800
                    },
                    value: 80
                },
                opacity: {
                    value:0.5
                },
                shape: {
                    type: "circle"
                },
                size: {
                    value: {min:1, max:5}
                }

            }
        }}
    />
}

export default ParticlesContainer;
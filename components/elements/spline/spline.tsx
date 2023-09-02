"use client"
import { useEffect, useRef } from "react"
import { Application } from "@splinetool/runtime"

const Spline = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            console.log("a")
            const canvas = canvasRef.current!;
            const app = new Application(canvas)
            app.load("https://prod.spline.design/OB5hnGXvRaB05-mB/scene.splinecode");
        }
    }, [])
    return (
        <canvas ref={canvasRef}></canvas>
    )
}

export default Spline;









// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';

// const ThreeScene: React.FC = () => {
//     const containerRef = useRef<HTMLDivElement>(null);
//     useEffect(() => {
//         if (typeof window !== 'undefined') {
//             const scene = new THREE.Scene();
//             console.log("Hello")
//             const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//             const renderer = new THREE.WebGLRenderer();
//             renderer.setSize(window.innerWidth, window.innerHeight);
//             containerRef.current?.appendChild(renderer.domElement);
//             camera.position.z = 5;
//             const geometry = new THREE.BoxGeometry();
//             const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//             const cube = new THREE.Mesh(geometry, material);
//             scene.add(cube);

//             // Render the scene and camera
//             renderer.render(scene, camera);
//         }
//     }, []);
//     return <div ref={containerRef} />;
// };

// export default ThreeScene;
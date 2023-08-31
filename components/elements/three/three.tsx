"use client"
import { useEffect, useRef } from "react"
import styles from "./three.module.css"
import * as THREE from "three"

const Three = () => {
    const canvasRef = useRef<HTMLDivElement>(null);



    // // Camera
    // camera.position.z = 20
    // Renderer
    // const canvas = canvasRef.current!;
    useEffect(() => {
        if (typeof window !== "undefined") {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(45, 800 / 600);
            const renderer = new THREE.WebGLRenderer();
            const light = new THREE.PointLight(0xffffff,1 , 100);
            light.position.set(0, 10, 10);
            scene.add(light)

            renderer.setSize(800, 600);
            canvasRef.current?.appendChild(renderer.domElement);
            camera.position.z = 20;

            const geometry = new THREE.SphereGeometry(3, 64, 64)
            const material = new THREE.MeshStandardMaterial({
                color: "#00FF83"
            })
            const mesh = new THREE.Mesh(geometry, material)
            scene.add(camera)
            scene.add(mesh)

            renderer.render(scene, camera)

            // const geometry = new THREE.BoxGeometry();
            // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            // const cube = new THREE.Mesh(geometry, material);
            // scene.add(cube);

            // // Render the scene and camera
            // renderer.render(scene, camera);

        }
    }, [])
    return (
        <div ref={canvasRef}></div>
        // <canvas ref={canvasRef} width={"800px"} height={"800px"} id="webgl"></canvas>
    )
}

export default Three;









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
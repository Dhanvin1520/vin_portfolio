"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

function ThreeScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mount) mount.appendChild(renderer.domElement);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05 });
    const stars = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(stars);

    const cursor = { x: 0, y: 0 };
    const onMouseMove = (event) => {
      cursor.x = (event.clientX / window.innerWidth - 0.5) * 2;
      cursor.y = (event.clientY / window.innerHeight - 0.5) * -2;
    };
    window.addEventListener("mousemove", onMouseMove);

    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      const idleRotationX = Math.sin(time) * 0.1;
      const idleRotationY = Math.cos(time) * 0.1;

      stars.rotation.y += (cursor.x - stars.rotation.y) * 0.05;
      stars.rotation.x += (cursor.y - stars.rotation.x) * 0.05;

      const cursorDistance = Math.sqrt(cursor.x * cursor.x + cursor.y * cursor.y);
      if (cursorDistance < 0.1) {
        stars.rotation.x += (idleRotationX - stars.rotation.x) * 0.02;
        stars.rotation.y += (idleRotationY - stars.rotation.y) * 0.02;
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
      if (mount && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full"></div>;
}

export default ThreeScene;
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeCube = () => {
  const mountRef = useRef(null);

useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    const size = 300;
    renderer.setSize(size, size);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.OctahedronGeometry(1.5, 0);
    const material = new THREE.MeshStandardMaterial({
      color: 0x800080,
      emissive: 0x9b30ff,
      emissiveIntensity: 1.2,
      wireframe: true,
      metalness: 0.8,
      roughness: 0.2,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const light = new THREE.DirectionalLight(0xffffff, 0.8);
    light.position.set(10, 10, 5);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x1a1a40, 0.3);
    scene.add(ambientLight);

    let time = 0;

    const animate = () => {
      requestAnimationFrame(animate);

      time += 0.01;

      cube.rotation.x += 0.005;
      cube.rotation.y += 0.01;

      cube.position.y = Math.sin(time) * 0.2;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (mount && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "300px",
        height: "300px",
        margin: "0 auto",
      }}
    />
  );
};

export default ThreeCube;

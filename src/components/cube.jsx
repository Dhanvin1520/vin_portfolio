import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeCube = () => {
  const mountRef = useRef(null);

  useEffect(() => {

    const mount = mountRef.current;
const scene = new THREE.Scene();


    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;


    const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);


    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({ color: 0xFFA500 });
  const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);


  const light = new THREE.DirectionalLight(0xffffff, 7);
    light.position.set(2, 2, 5);
    scene.add(light);


    const animate = () => {
      requestAnimationFrame(animate);
  cube.rotation.x += 0.91;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();


    return () => {
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} />;
};

export default ThreeCube;
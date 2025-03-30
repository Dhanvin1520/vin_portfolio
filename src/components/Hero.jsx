"use client";

import React, { useRef, useEffect } from "react";
import ThreeScene from "./ThreeScene";

function Hero() {
  const aboutRef = useRef(null);
  const canvasRef = useRef(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.style.position = "absolute";
      canvasRef.current.style.top = "0";
      canvasRef.current.style.left = "0";
      canvasRef.current.style.width = "100vw";
      canvasRef.current.style.height = "100vh";
      canvasRef.current.style.zIndex = "-1";
    }
  }, []);

  return (
    <>
      <section className="relative h-screen w-full bg-black overflow-hidden">
        <div className="absolute inset-0">
          <ThreeScene canvasRef={canvasRef} />
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative flex flex-col items-center justify-center text-center h-full px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 drop-shadow-lg">
            Dhanvin Vadlamudi
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-md mx-auto text-white drop-shadow-md">
            Web Developer | Coder | Computer Science Student
          </p>
          <button
            onClick={scrollToAbout}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full flex items-center transition-colors shadow-lg"
          >
            Explore My Work
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
            viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </section>
      <div ref={aboutRef} id="about" className="scroll-mt-16"></div>
    </>
  );
}

export default Hero;
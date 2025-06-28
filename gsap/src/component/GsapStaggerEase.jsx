"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GsapStaggerEase = () => {
  useGSAP(() => {
    gsap.from(".stagger-box", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "bounce.out",
      stagger: 0.2, // delay between each element
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8">✨ GSAP Stagger + Ease</h1>
      <div className="flex gap-4">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="stagger-box w-20 h-20 bg-purple-500 rounded-lg shadow-lg"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default GsapStaggerEase;

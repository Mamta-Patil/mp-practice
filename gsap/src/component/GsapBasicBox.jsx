"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GsapBasicBox = () => {
  useGSAP(() => {
    // ✅ gsap.to()
    gsap.to(".box-to", {
      x: 200,
      duration: 1,
      backgroundColor: "#f59e0b", // amber-500
      rotation: 360,
      ease: "bounce.out",
    });

    // ✅ gsap.from()
    gsap.from(".box-from", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      delay: 0.3,
      ease: "back.out(1.7)",
    });

    // ✅ gsap.fromTo()
    gsap.fromTo(
      ".box-from-to",
      {
        x: -150,
        scale: 0.5,
      },
      {
        x: 150,
        scale: 1,
        duration: 1.5,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      }
    );
  }, []);

  return (
    <div className="flex flex-col items-center space-y-12 mt-24">
      <div className="box-to w-24 h-24 bg-blue-500 rounded-lg shadow-md" />
      <div className="box-from w-24 h-24 bg-pink-500 rounded-lg shadow-md" />
      <div className="box-from-to w-24 h-24 bg-green-500 rounded-lg shadow-md" />
    </div>
  );
};

export default GsapBasicBox;

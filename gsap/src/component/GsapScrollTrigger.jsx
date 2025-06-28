"use client";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {
  useGSAP(() => {
    gsap.from(".scroll-box", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".scroll-box",
        start: "top 80%",
        end: "top 40%",
        scrub: true,
        markers: true, // ✅ shows scroll start/end positions
      },
    });
  }, []);

  return (
    <div className="min-h-[200vh] bg-gray-100 py-24">
      <div className="h-[100vh] flex items-center justify-center">
        <h1 className="text-3xl font-bold">Scroll Down 👇</h1>
      </div>

      <div className="scroll-box w-32 h-32 bg-green-500 mx-auto rounded-lg shadow-lg" />

      <div className="h-[100vh] flex items-center justify-center">
        <h2 className="text-xl font-medium text-gray-700">
          Keep scrolling back up to test!
        </h2>
      </div>
    </div>
  );
};

export default GsapScrollTrigger;

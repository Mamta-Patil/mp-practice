 "use client";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const GsapScrollAdvanced = () => {
  useGSAP(() => {
    // Animate a heading using timeline and scroll trigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-section",
        start: "top center",
        end: "bottom center",
        scrub: true,
        pin: true,
        markers: true,
        toggleActions: "play pause resume reverse",
      },
    });

    tl.to(".box-1", { x: 200, opacity: 1, scale: 1.2 })
      .to(".box-2", { x: -200, opacity: 1, scale: 1.2 })
      .to(".box-3", { y: -100, opacity: 1, scale: 1.2 });
  }, []);
                                                                                                                                                                       
  return (
    <div className="min-h-[300vh] bg-white">
      <div className="h-screen flex justify-center items-center bg-gray-100">
        <h1 className="text-4xl font-bold">🧭 Scroll to Trigger Animation</h1>
      </div>

      <div className="scroll-section h-screen bg-gradient-to-br from-blue-200 to-purple-200 flex flex-col items-center justify-center space-y-12">
        <div className="box-1 w-24 h-24 bg-red-500 opacity-0 rounded-lg shadow-lg" />
        <div className="box-2 w-24 h-24 bg-green-500 opacity-0 rounded-lg shadow-lg" />
        <div className="box-3 w-24 h-24 bg-yellow-500 opacity-0 rounded-lg shadow-lg" />
      </div>

      <div className="h-screen flex justify-center items-center bg-gray-100">
        <h2 className="text-xl text-gray-600">⬆️ Scroll up to reverse</h2>
      </div>
    </div>
  );
};

export default GsapScrollAdvanced;

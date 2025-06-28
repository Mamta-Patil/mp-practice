"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GsapTimelineBox = () => {
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out", repeat: -1, yoyo: true } });

    tl.to(".box-1", { x: 200, backgroundColor: "#ec4899" }) // pink
      .to(".box-2", { y: -100, backgroundColor: "#38bdf8" }) // sky
      .to(".box-3", { scale: 1.5, backgroundColor: "#f59e0b" }); // amber
  }, []);

  return (
    <div className="flex flex-col items-center space-y-12 mt-24">
      <div className="box-1 w-24 h-24 bg-blue-500 rounded-lg shadow-md" />
      <div className="box-2 w-24 h-24 bg-green-500 rounded-lg shadow-md" />
      <div className="box-3 w-24 h-24 bg-purple-500 rounded-lg shadow-md" />
    </div>
  );
};

export default GsapTimelineBox;

"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const GsapFinalHero = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "+=100%",
        scrub: 1,
        pin: true,
        markers: true,
      },
    });

    tl.to(".hero-text", {
      text: "Hi, I'm Mamta — Full Stack Developer 💻",
      duration: 2,
      ease: "none",
    }) 
    
      .from(".hero-cards .card", {
        opacity: 0,
        y: 100,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out",
      });
  }, []);

  return (
    <div className="hero-section h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col justify-center items-center px-4">
      <h1 className="hero-text text-3xl sm:text-5xl font-bold text-center mb-12">|</h1>

      <div className="hero-cards flex gap-6 flex-wrap justify-center">
        <div className="card w-40 h-40 bg-pink-500 rounded-xl shadow-lg flex items-center justify-center text-xl font-semibold">React</div>
        <div className="card w-40 h-40 bg-green-500 rounded-xl shadow-lg flex items-center justify-center text-xl font-semibold">Node.js</div>
        <div className="card w-40 h-40 bg-blue-500 rounded-xl shadow-lg flex items-center justify-center text-xl font-semibold">MongoDB</div>
        <div className="card w-40 h-40 bg-yellow-400 rounded-xl shadow-lg flex items-center justify-center text-xl font-semibold">GSAP</div>
      </div>
    </div>
  );
};

export default GsapFinalHero;

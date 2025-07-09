"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import logo from "../../public/images/logo.svg";
import downarrow from "../../public/images/downarrow.svg";

const HomePage = () => {
  const bannerRef = useRef(null);
  const taglineRef = useRef(null);
  const headlineRef = useRef(null);
  const arrowRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {

  const moveCursor = (e) => {
    gsap.to(cursorRef.current, {
      x: e.clientX - 15,
      y: e.clientY - 15,
      duration: 0.2,
      ease: "power2.out",
    });
  };
  window.addEventListener("mousemove", moveCursor);
  return () => window.removeEventListener("mousemove", moveCursor);
}, []);

  // Text and arrow animation
  useEffect(() => {
    gsap.fromTo(
      [bannerRef.current, taglineRef.current, headlineRef.current],
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
      }
    );




    gsap.to(arrowRef.current, {
      y: -20,
      duration: 1,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });


  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        ref={cursorRef}
        className="w-96 h-96 bg-yellow-300 fixed pointer-events-none -z-50 rounded-full opacity-60 blur-3xl"
        style={{ left: 0, top: 0 }}
      ></div>

      {/* Top Banner */}
    
        <div className="bg-black">
      <div
        ref={bannerRef}
        className=" py-3 font-normal text-white text-center"
      >
        Help shape the future of digital journalism — we’re hiring!

      </div>
        </div>

      {/* Logo and Tagline */}
      <div className="flex justify-between px-20 py-8">
        <Image src={logo} height={300} width={200} alt="Logo" />
        <div ref={taglineRef} className="w-120">
          We’re building the backbone of Canadian digital media — a next-gen
          platform that gives creators the tools to thrive.
        </div>
      </div>

      {/* Headline and Arrow */}
      <div className="flex justify-between px-20 mt-20">
        <div
          ref={headlineRef}
          className="text-9xl leading-tight font-bold tracking-tight"
        >
          The Future of <br /> News Starts <br /> Here
        </div>
        <div ref={arrowRef} className="arrow mt-60">
          <Image src={downarrow} alt="Down Arrow" />
        </div>
      </div>

    </div>
  );
};

export default HomePage;

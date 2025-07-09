"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import images from "../../public/images/images.svg";

gsap.registerPlugin(ScrollTrigger);

const Card = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".card-section",
        start: "top 80%",
        toggleActions: "restart none none none",
      },
    });

    tl.fromTo(
      ".card-middle",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
    );

    tl.fromTo(
      ".card-left",
      { x: 150, opacity: 0 },
      { x: -10, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.3"
    );

    tl.fromTo(
      ".card-right",
      { x: -150, opacity: 0 },
      { x: 10, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.3"
    );
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 px-20 gap-10 card-section mt-20">
      {/* Left Card */}
      <div className="card-left bg-black rounded-3xl p-6">
        <Image src={images} alt="Logo" />
        <div className="text-white pt-40 pb-10 text-2xl">Empowering Creators.</div>
      </div>

      {/* Middle Card */}
      <div className="card-middle bg-black rounded-3xl p-6">
        <Image src={images} alt="Logo" />
        <div className="text-white pt-40 pb-10 text-2xl">Empowering Creators.</div>
      </div>

      {/* Right Card */}
      <div className="card-right bg-black rounded-3xl p-6">
        <Image src={images} alt="Logo" />
        <div className="text-white pt-40 pb-10 text-2xl">Empowering Creators.</div>
      </div>
    </div>
  );
};

export default Card;

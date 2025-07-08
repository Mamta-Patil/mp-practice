
"use client"
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import img from "../../public/images/img.svg";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ImageContent1 = () => {
     const textRef = useRef(null);

  useEffect(() => {
    const split = new SplitType(textRef.current, { types: "lines" });

    split.lines.forEach((line) => {
      line.style.display = "block";
      line.style.willChange = "transform, opacity, color";
    });

    gsap.set(split.lines, {
      opacity: 0,
      x: -60,
      color: "#9ca3af", // gray
    });

    gsap.to(split.lines, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        end: "bottom top",
        toggleActions: "restart none none none", 
      },
      opacity: 1,
      x: 0,
      color: "#000000",
      duration: 2,
      ease: "power2.out",
      stagger: 0.2,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <div className="relative w-full h-auto mb-80 top-0">
            <div className="ps-60 absolute left-96">
              <Image src={img} alt="Content Image" />
            </div>
      
            <div className="absolute top-10 left-170 z-10 px-4 w-[40rem] leading-snug overflow-hidden">
              <div
                ref={textRef}
                className="text-3xl font-medium antialiased whitespace-pre-wrap"
              >
                Post Labs is building a homegrown platform
                designed for Canadians and the future of Canadian media.
              </div>
            </div>
          </div>
    </div>
  )
}

export default ImageContent1

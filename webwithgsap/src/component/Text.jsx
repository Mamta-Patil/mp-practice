"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const Text = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const split = new SplitType(textRef.current, { types: "lines" });

    split.lines.forEach((line) => {
      // Wrap each line in a span for clip-path
      line.style.overflow = "hidden";
      const inner = document.createElement("span");
      inner.innerHTML = line.textContent;
      inner.style.display = "inline-block";
      inner.style.clipPath = "inset(0 100% 0 0)";
      inner.style.color = "#a3a3a3";
      inner.style.transition = "color 0.3s ease";
      line.textContent = "";
      line.appendChild(inner);

      // Animate clip and color
      gsap.to(inner, {
        clipPath: "inset(0 0% 0 0)",
        color: "#000",
        duration: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: line,
          start: "top 90%",
          end: "top 30%",
          scrub: true,
        },
      });
    });

    return () => {
      split.revert(); // clean up on unmount
    };
    
  }, []);

  return (
    <div className="mt-60 px-96 overflow-hidden pb-20">
      <div
        ref={textRef}
        className="text-5xl leading-relaxed text-center font-medium"
      >
        Post Labs is rethinking how digital media works for Canadians. Our
        mission is simple: make journalism profitable, sustainable, and trusted –
        built for Canadians, by Canadians.
      </div>
    </div>
  );
};

export default Text;

"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const GsapTextPlugin = () => {
    useGSAP(() => {
        // gsap.to(".text-typing", {
        //   text: "Hi, I'm Mamta — a Full-Stack Developer 💻✨",
        //   duration: 3,
        //   ease: "bounce.out",
        //   delay: 0.5,
        // });


        gsap.from(".word", {
            x: 50,
            opacity: 0,
            duration: 0.5,
            ease: "back.out(1.7)",
            stagger: 0.2,
        });


    }, []);

useEffect(() => {
  const text = "Hello GSAP Magic";
  const letters = text.split("").map((char) => {
    return `<span class="letter">${char === " " ? "&nbsp;" : char}</span>`;
  });
  document.getElementById("animated-text").innerHTML = letters.join("");

  gsap.from(".letter", {
    y: 50,
    opacity: 0,
    stagger: 0.05,
    ease: "back.out(1.7)",
  });
}, []);

    // gsap.from(".word", {
    //     y: 50,
    //     opacity: 0,
    //     duration: 0.5,
    //     ease: "back.out(1.7)",
    //     stagger: 0.2,
    // });


    return (

        // <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        //   <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 text-typing">
        //     {/* Text will be typed into here */}
        //     |
        //   </h1>
        // </div>
<div>
<div className="flex flex-wrap gap-2 text-2xl font-bold" id="text-block">
            <span className="word">I</span>
            <span className="word">am</span>
            <span className="word">a</span>
            <span className="word">GSAP</span>
            <span className="word">developer</span>
        </div>
        <div id="animated-text" className="text-3xl font-bold text-center"></div>

</div>
        

    );
};

export default GsapTextPlugin;

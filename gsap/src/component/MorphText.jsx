// "use client";
// import React, { useEffect } from "react";
// import gsap from "gsap";
// import { TextPlugin } from "gsap/TextPlugin";

// gsap.registerPlugin(TextPlugin);

// const MorphText = () => {
//     useEffect(() => {
//         const texts = ["Hello World", "We Love GSAP", "Next.js + Animations", "Morphing Text is Fun!"];
//         let index = 0;

//         const animateText = () => {
//             gsap.to(".morphText", {
//                 text: texts[index % texts.length],
//                 duration: 2,
//                 ease: "none",
//                 onComplete: () => {
//                     index++;
//                     animateText(); // loop to next text
//                 }
//             });
//         };

//         animateText(); // initial call
//     }, []);

//     return (
//         <div className="h-screen bg-black flex justify-center items-center">
//             <h1 className="morphText text-4xl text-white font-bold"></h1>
//         </div>
//     );
// };

// export default MorphText;









// "use client"
// import React, { useRef, useEffect } from 'react';
// import gsap from 'gsap';
// import { TextPlugin } from 'gsap/TextPlugin';

// gsap.registerPlugin(TextPlugin);

// const MorphText = () => {
//     const textRef = useRef(null);

//     useEffect(() => {
//         const phrases = ["Hello World 👋", "Welcome to GSAP 🚀", "Create Cool Effects ✨"];

//         let tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

//         phrases.forEach((text, i) => {
//             tl.to(textRef.current, {
//                 duration: 2,
//                 text: text,
//                 ease: "power2.inOut",
//                 delay: 1,
//             });
//         });

//     }, []);

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-black text-white text-3xl font-bold">
//             <div ref={textRef}>Starting...</div>
//         </div>
//     );

// };

// export default MorphText;



"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const DiagonalText = () => {
  const textRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      textRef.current,
      {
        y: 300,   // Start from bottom
        x: -300,  // Start from left
        opacity: 0,
      },
      {
        y: -100,   // Move upward
        x: 300,    // Move right
        opacity: 1,
        duration: 2,
        ease: "bounce",
      }
    );
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900">
      <h1
        ref={textRef}
        className="text-4xl text-white font-bold tracking-wide"
      >
        Diagonal Motion Text
      </h1>
    </div>
  );
};

export default DiagonalText;

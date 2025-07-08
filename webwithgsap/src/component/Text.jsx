// "use client";
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SplitType from "split-type";

// gsap.registerPlugin(ScrollTrigger);

// const Text = () => {
//   const textRef = useRef(null);

//   useEffect(() => {
//     // Step 1: Split text into lines
//     const split = new SplitType(textRef.current, { types: "lines" });

//     // Step 2: Animate each line's color from grey to black on scroll
//     // split.lines.forEach((line) => {
//     //   gsap.fromTo(
//     //     line,
//     //     { color: "#a3a3a3" }, // starting color: gray-400
//     //     {
//     //       color: "#000000", // target color: black
//     //       scrollTrigger: {
//     //         trigger: line,
//     //         start: "top 90%", // when line reaches near viewport top
//     //         end: "top 30%",
//     //         scrub: true,
//     //       },
//     //     }
//     //   );
//     // });
// split.lines.forEach((line, index) => {
//   if (index < 2) return; // skip first two lines

//   gsap.fromTo(
//     line,
//     { color: "#a3a3a3" },
//     {
//       color: "#000000",
//       scrollTrigger: {
//         trigger: line,
//         start: "top 90%",
//         end: "top 30%",
//         scrub: true,
//       },
//     }
//   );
// });

//     return () => {
//       split.revert(); // cleanup on unmount
//     };
//   }, []);

//   return (
//     <div className="mt-60 px-98 overflow-hidden pb-40">
//       <div
//         ref={textRef}
//         className="text-5xl leading-relaxed text-center font-medium"
//       >
//         Post Labs is rethinking how digital media works for Canadians. Our
//         mission is simple: make journalism profitable, sustainable, and trusted – built
//         for Canadians, by Canadians.
//       </div>
//     </div>
//   );
// };

// export default Text;




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

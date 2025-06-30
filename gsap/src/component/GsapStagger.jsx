"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
// import React from "react"
import React, { useRef } from "react";

const GsapStagger = () => {
  const pinkBoxRef = useRef();
  const purpleBoxRef = useRef();
  useGSAP(() => {
    gsap.to(pinkBoxRef.current, {
      x: 50,
      rotation: 360,
      // borderRadius: "100%",
      duration: 1.5,
      ease: "circ.inOut",
    });

    // Keep purple box hidden initially
    gsap.set(purpleBoxRef.current, { opacity: 0, scale: 0 });
  }, []);

  const handleClick = () => {
    // Show + animate purple box on click of pink box
    gsap.to(purpleBoxRef.current, {
      opacity: 1,
      scale: 1,
      x: 150,
      rotation: 360,
      // borderRadius: "100%",
      duration: 1.5,
      ease: "circ.inOut",
    });
  };


  //   gsap.to(".box4", {
  //     x: 150,
  //     rotation: 360,
  //     borderRadius: '100%',
  //     stagger: {
  //       amount: 1.5,
  //       grid: [2, 1],
  //       axis: "x",
  //       ease: "circ.inOut",
  //       from: "center",
  //     },

  //   })

  // }, [])



  return (
    <div className="flex gap-4 mt-20 justify-center">
      <div
        ref={pinkBoxRef}
        onClick={handleClick}
        className="h-26 w-16 bg-pink-400 rounded-lg cursor-pointer item-center pt-6 ps-1"
      > click for the next</div>
      <div
        ref={purpleBoxRef}
        className="h-26 w-16 bg-purple-400 rounded-lg"
      ></div>
    </div>

  )
}

export default GsapStagger

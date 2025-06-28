"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React from "react"

const GsapStagger = () => {
  useGSAP(() => {
    gsap.to(".box4", {
      y: 250,
      rotation: 360,
      repeat: -1,
      yoyo: true,
      borderRadius: '100%',

    stagger: {
        amount: 1.5,
        grid:[2,1],
        axis: "y",
        ease: "circ.inOut",
        from: "center",
      }

    })
  }, [])

  return (

    <div className="flex gap-4 mt-20 justify-center">
      <div className="box4 h-26 w-16 bg-pink-400 rounded-lg"></div>
      <div className="box4 h-26 w-16 bg-purple-400 rounded-lg"></div>
      <div className="box4 h-26 w-16 bg-blue-400 rounded-lg"></div>
      <div className="box4 h-26 w-16 bg-green-400 rounded-lg"></div>
      <div className="box4 h-26 w-16 bg-green-400 rounded-lg"></div>
      <div className="box4 h-26 w-16 bg-green-400 rounded-lg"></div>
      <div className="box4 h-26 w-16 bg-green-400 rounded-lg"></div>
    </div>
    
  )
}

export default GsapStagger

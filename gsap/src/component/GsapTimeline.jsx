"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React from "react"

const GsapTimeline = () => {
  useGSAP(() => {
    const tl = gsap.timeline()

    tl.to("#box1", { x: 200, duration: 1, backgroundColor: "#34d399" }) // green
      .to("#box2", { y: 100, duration: 1, backgroundColor: "#60a5fa" }) // blue
      .to("#box3", { rotation: 360, duration: 1, backgroundColor: "#f87171" }) // red
  }, [])

  return (
    <div className="flex gap-4 mt-20">
      <div id="box1" className="h-20 w-20 bg-gray-400 rounded-md"></div>
      <div id="box2" className="h-20 w-20 bg-gray-400 rounded-md"></div>
      <div id="box3" className="h-20 w-20 bg-gray-400 rounded-md"></div>
    </div>
  )
}

export default GsapTimeline

// "use client"
// import { useGSAP } from "@gsap/react"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import React from "react"

// gsap.registerPlugin(ScrollTrigger)

// const ScrollTriggerExample = () => {
//   useGSAP(() => {
//     gsap.from(".box", {
//       scrollTrigger: {
//         trigger: ".box",
//           repeat: -1,       // element to watch
//         start: "top 80%",      // when top of box hits 80% of viewport
//         toggleActions: "play none none none", // onEnter, onLeave, etc.
//       },
//       y: 100,
//       opacity: 0,
//       duration: 1,
//       ease: "power3.out",
//       stagger: 0.2,
//     })
//   }, [])

//   return (
//     <div className="space-y-24 p-10">
//       <div className="h-[100vh] flex items-center justify-center text-2xl font-bold">Scroll Down 👇</div>

//       <div className="box h-24 w-24 bg-blue-500 rounded-xl mx-auto"></div>
//       <div className="box h-24 w-24 bg-green-500 rounded-xl mx-auto"></div>
//       <div className="box h-24 w-24 bg-pink-500 rounded-xl mx-auto"></div>
//     </div>
//   )
// }

// export default ScrollTriggerExample








// "use client"
// import React from "react"
// import { useGSAP } from "@gsap/react"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger)

// const ScrollReveal = () => {
//   useGSAP(() => {
//     gsap.from(".reveal-box", {
//       scrollTrigger: {
//         trigger: ".reveal-box",      // Element to watch
//         start: "top 80%",            // When top of box hits 80% of viewport
//         toggleActions: "play none none none", // Play on enter
//       },
//       y: 100,
//       opacity: 0,
//       duration: 1,
//       ease: "power2.out",
//       stagger: 0.2,
//     })
//   }, [])

//   return (
//     <div className="min-h-screen px-6 py-20 space-y-24 bg-gray-100">
//       <h2 className="text-4xl font-bold text-center mb-16">Scroll Down 👇</h2>
//       <div className="reveal-box h-24 w-24 bg-blue-500 rounded-lg mx-auto"></div>
//       <div className="reveal-box h-24 w-24 bg-green-500 rounded-lg mx-auto"></div>
//       <div className="reveal-box h-24 w-24 bg-pink-500 rounded-lg mx-auto"></div>
//       <div className="reveal-box h-24 w-24 bg-yellow-400 rounded-lg mx-auto"></div>
//     </div>
//   )
// }

// export default ScrollReveal







// "use client"
// import React from "react"
// import { useGSAP } from "@gsap/react"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger)

// const ScrollScrub = () => {
//     useGSAP(() => {
//         gsap.to(".scroll-box", {
//             scrollTrigger: {
//                 trigger: ".scroll-box",
//                 // start: "left right",   // when box top hits bottom of screen
//                 // end: "right left",     // when box bottom hits top of screen
//                 scrub: true,           // ✅ sync animation to scroll
//                 // markers: true,         // 🔍 for debugging (remove later)
//             },
//             x: 300,
//             rotation: 360,
//             scale: 1.5,
//             ease: "none",
//         })
//     }, [])

//     return (
//         <div className="min-h-[200vh] px-6 py-20 bg-gray-100">
//             <h2 className="text-4xl font-bold text-center mb-40">Scroll Down Slowly 👇</h2>
//             <div className="scroll-box h-24 w-24 bg-indigo-500 rounded-lg mx-auto"></div>
//         </div>
//     )
// }

// export default ScrollScrub







// "use client"
// import React from "react"
// import { useGSAP } from "@gsap/react"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger)

// const ToggleActionsPlayPause = () => {
//   useGSAP(() => {
//     gsap.to(".box1", {
//       scrollTrigger: {
//         trigger: ".box1",
//         start: "top 80%",
//         end: "top 30%",
//         toggleActions: "play pause resume reverse",
//         markers: true,
//       },
//       x: 300,
//       duration: 2,
//     })
//   }, [])

//   return (
//     <div className="min-h-[200vh] bg-gray-100 px-6 py-20">
//       <h2 className="text-3xl text-center mb-20">Scroll Down Slowly 👇</h2>
//       <div className="box1 h-24 w-24 bg-blue-500 mx-auto rounded-lg"></div>
//     </div>
//   )
// }

// export default ToggleActionsPlayPause






"use client"
import React from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const ToggleActionsEffect = () => {
  useGSAP(() => {
    gsap.to(".box1", {
      scrollTrigger: {
        trigger: ".box1",
        start: "top 80%",
        end: "top 40%",
        toggleActions: "play pause resume reverse", // ✅ Now works
        markers: true
      },
    //   x: 300,
      y: 200,
      duration: 2,
    })
  }, [])

  return (
    <div className="min-h-[200vh] px-6 py-20 bg-gray-100">
      <h2 className="text-center text-3xl font-bold mb-32">Scroll to See toggleActions</h2>
      <div className="box1 h-24 w-24 bg-blue-500 rounded-lg mx-auto"></div>
    </div>
  )
}

export default ToggleActionsEffect

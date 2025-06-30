// "use client";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import React, { useRef } from "react";

// gsap.registerPlugin(ScrollTrigger);

// const FadeInOnScroll = () => {
//   const sectionRef = useRef(null);

//   useGSAP(() => {
//     gsap.from(".fade-in", {
//       scrollTrigger: {
//         trigger: ".fade-in",
//         start: "top 80%",
//         toggleActions: "play none none none",
//       },
//       y: 50,
//       opacity: 0,
//       duration: 1,
//       ease: "power2.out",
//     });
//   }, []);

//   return (
//     <section ref={sectionRef} className="min-h-screen flex justify-center items-center bg-gray-100">
//       <h1 className="fade-in text-4xl font-bold text-indigo-600">Fade In On Scroll</h1>
//     </section>
//   );
// };

// export default FadeInOnScroll;


// "use client";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import React, { useRef } from "react";

// gsap.registerPlugin(ScrollTrigger);

// const StaggeredCards = () => {
//   const containerRef = useRef(null);

//   useGSAP(() => {
//     gsap.from(".stagger-card", {
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top 80%",
//         toggleActions: "play none none none",
//       },
//       y: 100,
//       opacity: 0,
//       duration: 1,
//       stagger: 0.3,
//       ease: "power2.out",
//     });
//   }, []);

//   return (
//     <section ref={containerRef} className="py-20 bg-gray-100">
//       <h2 className="text-3xl text-center font-bold mb-10 text-indigo-600">Staggered Cards</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
//         {["One", "Two", "Three"].map((title, i) => (
//           <div key={i} className="stagger-card bg-white shadow-lg p-6 rounded-xl text-center">
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
//             <p className="text-gray-500">Each card fades in one by one as you scroll.</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default StaggeredCards;




"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const PinnedSection = () => {
  const pinRef = useRef(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: pinRef.current,
      start: "top top",        // when top of element hits top of viewport
      end: "+=100%",           // how long it stays pinned (100% of viewport height)
      pin: true,               // pin the section
      markers: true,           // helpful for debugging (can remove later)
      scrub: true              // smooth scroll behavior
    });
  }, []);

  return (
    <section>
      {/* Spacer section before pin */}
      <div className="h-screen bg-gray-100 flex items-center justify-center">
        <h2 className="text-4xl font-bold text-indigo-600">Scroll Down 👇</h2>
      </div>

      {/* Section that gets pinned */}
      <div ref={pinRef} className="h-screen bg-indigo-600 text-white flex items-center justify-center">
        <h2 className="text-4xl font-bold">I am pinned while scrolling!</h2>
      </div>

      {/* Spacer section after pin */}
      <div className="h-screen bg-gray-200 flex items-center justify-center">
        <h2 className="text-3xl font-bold text-indigo-700">Keep Scrolling ⬇️</h2>
      </div>
    </section>
  );
};

export default PinnedSection;

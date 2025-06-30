// "use client";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import React, { useRef } from "react";

// const LogoSpin = () => {
//   const logoRef = useRef(null); // Reference to the DOM element

//   useGSAP(() => {
//     gsap.to(logoRef.current, {
//       rotation: 360,
//       duration: 3,
//       repeat: -1,
//       ease: "linear",
//     });
//   }, []);

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div
//         ref={logoRef}
//         className="w-24 h-24 bg-indigo-500 rounded-full"
//       ></div>
//     </div>
//   );
// };

// export default LogoSpin;


// "use client";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// export default function LogoSpin() {
//   const el = useRef(null);

//   useEffect(() => {
//     gsap.to(el.current, {
//       x: 200,
//       duration: 2,
//       backgroundColor: "orange",
//     });
//   }, []);

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-200">
//       <div ref={el} className="w-20 h-20 bg-red-500 rounded-full"></div>
//     </div>
//   );
// }



"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const LogoSpin = () => {
  const logoRef = useRef(null);

  useGSAP(() => {
    gsap.to(logoRef.current, {
      rotation: 360,
      duration: 2,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div
        ref={logoRef}
        className="w-24 h-24 bg-indigo-500 rounded-full"
      ></div>
    </div>
  );
};

export default LogoSpin;

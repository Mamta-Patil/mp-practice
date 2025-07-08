// import React from "react";

// const Video = () => {
//   return (
//     <div className="p-10">
//       <video width="640" height="360" controls preload="none" className="w-full h-auto " autoPlay muted loop >
//         <source src="/videos/video.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// };

// export default Video;
"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const el = videoRef.current;

    gsap.fromTo(
      el,
      {
        width: "300px",
        borderRadius: "30px", // rounded-md = 6px = 0.375rem
      },
      {
        width: "100%",
        borderRadius: "0rem", // remove rounding
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);

  return (
    <div className="p-0 flex justify-center">
      <video
        ref={videoRef}
        src="/videos/video.mp4"
        controls
        autoPlay
        muted
        loop
        preload="none"
        className="h-auto"
        style={{ width: "300px", borderRadius: "0.375rem" }}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;

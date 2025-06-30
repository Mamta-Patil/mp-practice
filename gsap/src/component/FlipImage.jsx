// "use client";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import React, { useRef } from "react";

// const FlipImage = () => {
//   const imgRef = useRef();

//   useGSAP(() => {
//     gsap.to(imgRef.current, {
//       rotationX: 180,
//       repeat:-1,
//       yoyo:true,
//       duration: 1.5,
//       ease: "power2.inOut",
//     });
//   }, []);

//   return (
//     <div className="h-screen flex items-center justify-center bg-gray-900">
//       <img
//         ref={imgRef}
//         src="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-padrinan-255379.jpg&fm=jpg"
//         alt="Flip"
//         className="w-48 h-48 object-cover rounded-xl"
//         style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
//       />
//     </div>
//   );
// };

// export default FlipImage;



"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const FlipImageOnHover = () => {
  const imageRef = useRef();

  useGSAP(() => {
    const el = imageRef.current;

    const handleMouseEnter = () => {
      gsap.to(el, {
        rotationY: 180,
        duration: 1,
        ease: "power2.inOut",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        rotationY: 0,
        duration: 1,
        ease: "power2.inOut",
      });
    };

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup listeners on unmount
    
    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-slate-900">
      <img
        ref={imageRef}
        src="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-padrinan-255379.jpg&fm=jpg"
        // src="https://source.unsplash.com/200x200/?technology"
        alt="Flip"
        className="w-48 h-48 object-cover rounded-xl"
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
      />
    </div>
  );
};

export default FlipImageOnHover;

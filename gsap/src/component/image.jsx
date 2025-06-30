"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const ImageReveal = () => {
    useGSAP(() => {
        gsap.from(".image", {
            clipPath: "inset(100% 0 0 0)", // hides from top
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".image",
                start: "top 80%",
                toggleActions: "restart none none none",
            }
        });
    }, []);

    return (
        <div className="w-96 overflow-hidden mx-auto my-20">
            {/* <img className="image" src="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-padrinan-255379.jpg&fm=jpg" /> */}
            <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR132TBAD0-GhGhN8_2Xr-3obkFd4NzFbk6Hg&s" />
        </div>
    );
};

export default ImageReveal;

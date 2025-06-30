"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ColorChangeOnScroll = () => {
    const colorSectionRef = useRef(null);

    useGSAP(() => {
        gsap.to(colorSectionRef.current, {
            scrollTrigger: {
                trigger: colorSectionRef.current,
                toggleAttribute: "restart none none none",
                start: "top center",
                end: "bottom center",
                scrub: true, // smooth transition while scrolling
                // markers: true,
            },
            backgroundColor: "#CD5C5C", // changes to blue-800
            color: "#fff", // text color
        });
    }, []);

    return (
        <div>

            <div className="h-screen">
            </div>

            <section className="min-h-screen flex items-center justify-center bg-gray-200 transition-colors duration-300" ref={colorSectionRef}>
                <h2 className="text-4xl font-bold">Scroll to change my color 🎨</h2>
            </section>

            <div className="h-screen">
            </div>

        </div>

    );
};

export default ColorChangeOnScroll;

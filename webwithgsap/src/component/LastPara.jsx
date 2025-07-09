"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LastPara = () => {
    const leftDescRef = useRef(null);
    const rightTextRef = useRef(null);

    useEffect(() => {
        // Left-to-right scroll animation for left section
        const splitLeft = new SplitType(leftDescRef.current, {
            types: "words",
        });

        gsap.from(splitLeft.words, {
            y: 20,
            opacity: 0,
            x: -20,
            stagger: 0.1,
            ease: "power2.out",
            duration: 1,
            scrollTrigger: {
                trigger: leftDescRef.current,
                start: "top 85%",
                toggleActions: "restart none none none",
            },
        });

        // Right section: left-to-right word animation
        const splitRight = new SplitType(rightTextRef.current, {
            types: "words",
        });

        gsap.from(splitRight.words, {
            y: 20,
            opacity: 0,
            x: 30,
            stagger: 0.1,
            ease: "power2.out",
            duration: 1.2,
            scrollTrigger: {
                trigger: rightTextRef.current,
                start: "top 85%",
                toggleActions: "restart none none none",
            },
        });
    }, []);

    return (
        <div className="mt-160 px-26 relative h-[800px] bg-gradient-to-t from-yellow-200 py-20">
            {/* Left Section */}
            <div className="w-140">
                <span className="text-8xl">For Investors</span> <br />
                <div
                    ref={leftDescRef}
                    className="text-lg block mt-4"
                >
                    We’re raising capital to scale fast. If you’re an investor who believes in the future of independent Canadian media, we’d love to speak with you.
                    <br />
                    invest@postlabs.com
                </div>
            </div>

            {/* Right Section */}
            <div
                ref={rightTextRef}
                className="w-160 absolute top-110 right-20 text-lg pt-4 pb-20"
            >
                <span className="text-8xl block mb-4">For Builders</span> <br />
                We’re raising capital to scale fast. If you’re an investor who believes in the future of independent Canadian media, we’d love to speak with you.
                <br />
                <span className="pb-10">  invest@postlabs.com </span>
            </div>
        </div>
    );
};

export default LastPara;

"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const words = [
    {
        text: "Scale",
        video: "/videos/scale.mp4",
    },
    {
        text: "Creators",
        video: "/videos/creator.mp4",
    },
    {
        text: "Canada",
        video: "/videos/canada.mp4",
    },
];

const Video1 = () => {
    const triggerRef = useRef(null);
    const videoRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: triggerRef.current,
                start: "top top",
                end: `+=${window.innerHeight * words.length}`,
                scrub: true,
                pin: true,
                onUpdate: (self) => {
                    // ✅ Fix to prevent repeated last video
                    const index = Math.min(
                        words.length - 1,
                        Math.floor(self.progress * words.length)
                    );

                    if (index !== currentIndex) {
                        setCurrentIndex(index);
                        // ✅ Change video
                        if (videoRef.current) {
                            videoRef.current.src = words[index].video;
                            videoRef.current.load();
                            videoRef.current.play();
                        }
                    }
                },
            });
        }, triggerRef);

        return () => ctx.revert();
    }, [currentIndex]);

    return (
        <div ref={triggerRef} className="relative top-160 mt-10 h-[300vh]">
            <div className="sticky top-0 z-0">
                <video
                    ref={videoRef}
                    src={words[0].video}
                    autoPlay
                    muted
                    loop
                    preload="auto"
                    className="w-full h-screen object-cover"
                />
            </div>

            <div className="sticky top-0 z-10 flex h-screen items-center px-16">
                <div className="text-white text-6xl leading-[1.2] relative">
                    <div className="flex mb-6">
                        <span>Built for </span>
                        <span className="ps-4">{words[currentIndex].text}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video1;

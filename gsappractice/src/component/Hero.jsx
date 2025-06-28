// import { useGSAP } from '@gsap/react';
// import { useGSAP } from '@gsap/react';
"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import React from 'react'
gsap.registerPlugin(TextPlugin);


gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

    useGSAP(() => {
        gsap.to(".text-typing", {
            scrollTrigger: {
                trigger: ".text-typing",      // Element that triggers the animation
                start: "top top",
                // end: "+=500", // ✅ Scroll distance to pin
                // scrub: true,
                toggleActions: "restart none none none"
            },
            repeat: -1,
            yoyo: true,
            text: "Build Modern Web Experiences 🚀",
            duration: 3,
            ease: "bounce.out",
            delay: 0.5,
        });

    }, []);
    return (
        <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white px-6 text-center">
            <h3 className="text-4xl md:text-3xl font-bold mb-6 leading-tight text-typing" id='text-typing'>
            </h3>
        </section>
    )
}

export default Hero

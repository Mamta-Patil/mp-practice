"use client"
import { useGSAP } from '@gsap/react';
// import { useEffect } from 'react';
import gsap from 'gsap';
import { TextPlugin } from "gsap/TextPlugin";


const TextAnimation = () => {
    gsap.registerPlugin(TextPlugin);
  useGSAP(() => {

    gsap.to(".typeText", {
        text: "Typing animation with GSAP!",
        duration: 3,
        ease: "none"
    });
  }, []);

  
    // useEffect(() => {
    //     const text = "GSAP Text Animation";

    //     // const html = text.split("").map(char =>
    //     //   `<span class="letter">${char === " " ? "&nbsp;" : char}</span>`
    //     // ).join("");


    //     // const html = text.split(" ").map(word =>
    //     //     `<span class="word mr-2">${word}</span>`
    //     // ).join("");


    //     document.querySelector(".myText").innerHTML = html;

    //     // gsap.from(".letter", {
    //     //   opacity: 0,
    //     //   y: 50,
    //     //   stagger: 0.05,
    //     //   ease: "power4.out",
    //     //   duration: 1,
    //     // });

    //     // gsap.from(".word", {
    //     //     opacity: 0,
    //     //     y: 50,
    //     //     stagger: 0.2,
    //     //     ease: "power4.out",
    //     //     duration: 1
    //     // });

    // }, []);



    return (
        <div className="min-h-screen flex justify-center items-center bg-black">
            {/* <h1 className="myText text-white text-4xl font-bold"></h1> */}
            <h1 className="typeText text-white text-4xl font-bold"></h1>
        </div>
    );
};

export default TextAnimation;

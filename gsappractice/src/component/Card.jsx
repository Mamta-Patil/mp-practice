"use client";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Card = () => {
    const logoRef = useRef(null); // Reference to the DOM element

    useGSAP(() => {
        gsap.from(".box", {
            scrollTrigger: {
                trigger: ".box",      // Element that triggers the animation
                // pin:true,
                toggleActions: "restart none none none"
            },
            y: 200,
            opacity: 0,
            duration: 1,
            ease: "bounce.out",
            stagger: 0.8,
        });

        gsap.from(".box1", {
            scrollTrigger: {
                trigger: ".box1",
                toggleActions: "restart none none none",
                start: "top 80%", // optional for better timing
            },
            x: -200, // 👈 Moves boxes from the left side
            opacity: 0,
            duration: 1,
            ease: "bounce.out",
            stagger: 2,
        });

        gsap.from(".box3", {
            scrollTrigger: {
                trigger: ".box3",
                toggleActions: "restart none none none",
                start: "top 80%", // optional for better timing
            },
            x: -200, // 👈 Moves boxes from the left side
            opacity: 0,
            duration: 2,
            ease: "bounce.out",
            // stagger: 2,
        });

        gsap.from(".fade-up", {
            scrollTrigger: {
                trigger: ".text-section", // ✅ trigger section, not single <p>
                start: "top 80%",         // ✅ trigger when section hits 80% viewport height
                toggleActions: "restart none none none", // play only once
                // markers: true,            // ✅ optional: shows where trigger starts/ends
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
        });

        gsap.from(".circle", {
            scrollTrigger: {
                trigger: ".circle",
                // start: "top 80%", // animation starts when circle reaches 80% of viewport
                toggleActions: "restart none none none",
                // markers: true, // optional: show debug markers
            },
            scale: 0,       // 👈 starts from 0 (invisible size)
            opacity: 0,     // 👈 fade in
            duration: 1,    // 👈 animation time
            ease: "", // 👈 playful effect
        });

        gsap.from(".circletwo", {
            scrollTrigger: {
                trigger: ".circletwo",
                // start: "top 80%", // animation starts when circle reaches 80% of viewport
                toggleActions: "restart none none none",
                // markers: true, // optional: show debug markers
            },
            scale: 0.5,       // 👈 starts from 0 (invisible size)
            opacity: 0,     // 👈 fade in
            duration: 1,    // 👈 animation time
            ease: "", // 👈 playful effect
        });


        gsap.to(".box4", {
            x: 50,
            rotation: 360,
            repeat: -1,
            yoyo: true,
            duration: 4,
            // borderRadius: '100%',

            stagger: {
                // amount: 1.5,
                // grid: [2, 1],
                axis: "x",
                ease: "circ.inOut",
                from: "center",
            }

        })


        const boxes = gsap.utils.toArray(".box10");

        // Left box (comes from center to left)
        gsap.fromTo(
            boxes[0],
            { x: 0, opacity: 0 },

            {
                scrollTrigger: {
                    trigger: ".box10",
                    // start: "top 80%",
                    toggleActions: "restart none none none",
                },
                x: -50,
                opacity: 1,
                duration: 1.5,
                ease: "power3.out",
            },

        );

        // Right box (comes from center to right)
        gsap.fromTo(
            boxes[2],
            { x: 0, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: ".box10",
                    // start: "top 80%",
                    toggleActions: "restart none none none",
                },
                x: 50,
                opacity: 1,
                duration: 1.5,
                ease: "power3.out",
                delay: 1.6, // waits until left box animation is done
            }
        );

        gsap.to(".logo", {
            rotation: 360,
            duration: 3,
            repeat: -1,
            ease: "linear"
        });

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
        <section className="py-16 px-6 bg-gray-50">

            <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
            <div className="flex justify-center items-center h-screen">
                <div className="w-20 h-20 bg-indigo-500 rounded-full logo"></div>
            </div>

            <div className="h-screen">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto my-20">

                    <div className="max-w-sm bg-white rounded-xl shadow-md  box">

                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-gray-800">Web Development</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Custom websites built with performance and scalability in mind.
                            </p>
                            <a href="#" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                                Learn More →
                            </a>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white rounded-xl shadow-md  box">
                        {/* <img className="w-full h-48 object-cover" src="https://source.unsplash.com/400x300/?web" alt="Web" /> */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-gray-800">Web Development</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Custom websites built with performance and scalability in mind.
                            </p>
                            <a href="#" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                                Learn More →
                            </a>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white rounded-xl shadow-md  box">
                        {/* <img className="w-full h-48 object-cover" src="https://source.unsplash.com/400x300/?web" alt="Web" /> */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-gray-800">Web Development</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Custom websites built with performance and scalability in mind.
                            </p>
                            <a href="#" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                                Learn More →
                            </a>
                        </div>
                    </div>

                </div>
            </div>


            <div className="h-screen bg-[green]">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto my-20">

                    <div className="max-w-sm bg-white rounded-xl shadow-md  box1">

                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-gray-800">Web Development</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Custom websites built with performance and scalability in mind.
                            </p>
                            <a href="#" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                                Learn More →
                            </a>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white rounded-xl shadow-md  box1">
                        {/* <img className="w-full h-48 object-cover" src="https://source.unsplash.com/400x300/?web" alt="Web" /> */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-gray-800">Web Development</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Custom websites built with performance and scalability in mind.
                            </p>
                            <a href="#" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                                Learn More →
                            </a>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white rounded-xl shadow-md  box1">
                        {/* <img className="w-full h-48 object-cover" src="https://source.unsplash.com/400x300/?web" alt="Web" /> */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-gray-800">Web Development</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Custom websites built with performance and scalability in mind.
                            </p>
                            <a href="#" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                                Learn More →
                            </a>
                        </div>
                    </div>

                </div>
            </div>


            <div className="h-screen">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-40 box3">

                    <div className="max-w-sm bg-white rounded-xl shadow-md  ">

                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-gray-800">Web Development</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Custom websites built with performance and scalability in mind.
                            </p>
                            <a href="#" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                                Learn More →
                            </a>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white rounded-xl shadow-md  ">
                        {/* <img className="w-full h-48 object-cover" src="https://source.unsplash.com/400x300/?web" alt="Web" /> */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-gray-800">Web Development</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Custom websites built with performance and scalability in mind.
                            </p>
                            <a href="#" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                                Learn More →
                            </a>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white rounded-xl shadow-md  ">
                        {/* <img className="w-full h-48 object-cover" src="https://source.unsplash.com/400x300/?web" alt="Web" /> */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-gray-800">Web Development</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Custom websites built with performance and scalability in mind.
                            </p>
                            <a href="#" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                                Learn More →
                            </a>
                        </div>
                    </div>


                </div>
            </div>


            <div className="bg-[pink] m-auto text-center py-20 text-section">
                <p className="fade-up mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi consectetur nihil vitae veniam, voluptas laboriosam</p>
                <p className="fade-up mb-4"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi consectetur nihil vitae veniam, voluptas laboriosam</p>
                <p className="fade-up mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi consectetur nihil vitae veniam, voluptas laboriosam</p>
            </div>


            <div className="min-h-screen flex justify-center items-center">
                <div className="p-5 bg-red-500 rounded-full h-20 w-20 m-auto my-20 circle"></div>
            </div>


            <div className="min-h-screen flex mx-60 flex justify-around">
                <div className="p-5 bg-[gray] rounded-lg h-30 w-30  my-20 circletwo"></div>
                <div className="p-5 bg-[gray] rounded-lg h-30 w-30 my-20 circletwo"></div>
                <div className="p-5 bg-[gray] rounded-lg h-30 w-30  my-20 circletwo"></div>
            </div>

            <div className="h-screen">
                <div className="flex gap-4 mt-20 justify-center">
                    <div className="box4 h-26 w-16 bg-pink-400 rounded-lg"></div>
                    <div className="box4 h-26 w-16 bg-purple-400 rounded-lg"></div>
                    <div className="box4 h-26 w-16 bg-blue-400 rounded-lg"></div>
                    <div className="box4 h-26 w-16 bg-green-400 rounded-lg"></div>
                    <div className="box4 h-26 w-16 bg-green-400 rounded-lg"></div>
                    <div className="box4 h-26 w-16 bg-green-400 rounded-lg"></div>
                    <div className="box4 h-26 w-16 bg-green-400 rounded-lg"></div>
                </div>
            </div>

            <div className="h-screen">
                <div className="flex gap-4 mt-20 justify-center group-box">
                    <div className="box10 h-26 w-16 bg-pink-400 rounded-lg"></div>
                    <div className="box10 h-26 w-16 bg-purple-400 rounded-lg"></div>
                    <div className="box10 h-26 w-16 bg-blue-400 rounded-lg"></div>
                </div>
            </div>

            <div className="h-screen">
                <div className="w-96 overflow-hidden mx-auto my-20">
                    {/* <img className="image" src="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-padrinan-255379.jpg&fm=jpg" /> */}
                    <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR132TBAD0-GhGhN8_2Xr-3obkFd4NzFbk6Hg&s" />
                </div>
            </div>

        </section>
    )
}

export default Card

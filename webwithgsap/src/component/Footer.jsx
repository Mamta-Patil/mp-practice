"use client"
import React, { useEffect, useRef, useState } from 'react'
import logo1 from "../../public/images/logo1.svg";
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    const textRef = useRef(null);
    const containerRef = useRef(null);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const text = textRef.current;
        const container = containerRef.current;

        if (!text || !container) return; // ✅ Fix: Skip if not mounted yet

        const textWidth = text.scrollWidth;
        const containerWidth = container.offsetWidth;

        if (textWidth > containerWidth) {
            setAnimate(true);
        }

    }, []);

    return (

        <div className='relative mt-0  bg-black  h-screen text-white '>

            <div className="w-full overflow-hidden bg-black">
                <div className="seamless-scroll-wrapper text-white text-6xl font-bold">
                    <span className="mr-20">
                        Ready to Build the Future of Canadian Media? Contact Us
                    </span>
                    <span className="mr-20">
                        Ready to Build the Future of Canadian Media? Contact Us
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-2 px-16 pt-30">
                <div>
                    <Image src={logo1} height={300} width={200} alt="Logo" />

                </div>
                <div>
                    <Link href={"/"}> About </Link> <br />
                    <Link href={"/"}> Contact </Link> <br />
                    <Link href={"/"}> Privacy policy </Link> <br />
                    <Link href={"/"}> Cookies Policy </Link> <br />
                    <div className='pt-20 text-xl pb-2'>Sign Up for Our Newsletter</div>
                    <input type="text" placeholder='Email Address' className='border-b border-white outline-none w-90' />
                </div>
            </div>

            <div className='border-b border-white border-2 mt-45 w-full p-0'></div>

            <div className="flex justify-between absolute bottom-1 w-[100%] px-16">

                <div>
                    © 2025 Post Labs, Inc. All rights reserved.
                </div>
                <div>
                    Designed by HRVST.
                </div>
            </div>

        </div>
        
    )
}

export default Footer

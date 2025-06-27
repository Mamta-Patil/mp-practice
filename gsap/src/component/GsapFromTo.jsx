
"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const GsapFromTo = () => {
    useGSAP(() => {
        gsap.fromTo('#gsap-box', {
            x: 250,
            rotation: 0,
            borderRadius: '0%',
        }, 
        {
            x: 550,
            repeat: -1,
            yoyo: true,
            borderRadius: '100%',
            ease: 'bounce.in',
            rotation: 360,
            duration: 2,
        })

    }, [])

    return (
        <div className="flex items-center mt-20">
            <div className="h-20 w-20 bg-blue-500 rounded-md" id="gsap-box"></div>
        </div>
    )
}

export default GsapFromTo

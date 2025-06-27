"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { TextPlugin } from "gsap/TextPlugin"
import React from "react"

gsap.registerPlugin(TextPlugin)

const GSAPText = () => {
    useGSAP(() => {
        gsap.to("#text", {
            duration: 2,
            text: "Hello, GSAP Text Animation!",
            ease: "bounce.in",
        })


        gsap.fromTo(".para", {
            opacity: 0,
            y: 50,
        }, {
            opacity: 1,
            y: 0,
            delay: 1,
            stagger: 0.2,
        })

    }, [])

    return (
        <div className="h-screen text-center">
            <h1
                id="text"
                className="text-3xl font-bold text-blue-600"
            ></h1>
            <div className="para"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi esse blanditiis, repellat et accusantium nobis eveniet eligendi dolores, laboriosam ipsa expedita animi tempora ab molestiae tempore provident qui perferendis fugiat. </div>
            <div className="para"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi esse blanditiis, repellat et accusantium nobis eveniet eligendi dolores, laboriosam ipsa expedita animi tempora ab molestiae tempore provident qui perferendis fugiat. </div>
            <div className="para"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi esse blanditiis, repellat et accusantium nobis eveniet eligendi dolores, laboriosam ipsa expedita animi tempora ab molestiae tempore provident qui perferendis fugiat. </div>

        </div>
    )
}

export default GSAPText

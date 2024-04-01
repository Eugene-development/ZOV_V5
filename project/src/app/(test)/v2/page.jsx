
'use client'
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function index() {

    const container = useRef();

    useGSAP(() => {
        gsap.from(".box", { opacity: 0, stagger: 0.5 });
    }, { scope: container }); // <-- magic



    return (
        <div ref={container}>
            <div className="box size-10 bg-red-500">1</div>
            <div className="box size-10 bg-gray-500">2</div>
            <div className="box size-10 bg-green-500">3</div>
        </div>
    )
}

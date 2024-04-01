'use client'
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function index() {

    const container = useRef();
    const { contextSafe } = useGSAP({ scope: container }); // we can just pass in a config object as the 1st parameter to make scoping simple

    const onClickBad = () => {
        gsap.to(".bad", { y: 100 });
    };
    const onClickGood = contextSafe(() => {
        gsap.to(".good", { rotation: 180 });
    });







    return (
        <div ref={container}>
            <button onClick={onClickBad} className="bad size-10 bg-red-900"></button>
            <button onClick={onClickGood} className="good size-10 bg-yellow-800"></button>
        </div>
    )
}

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Hero = () => {
    const el = useRef(null);
    const typedInstance = useRef(null);

    useEffect(() => {
        if (el.current) {
            typedInstance.current = new Typed(el.current, {
                strings: ["Full-Stack Developer", "Building Creative Apps", "Open to Opportunities"],
                typeSpeed: 50,
                backSpeed: 30,
                loop: true,
                showCursor: true,
                cursorChar: "|",
            });
        }

        return () => typedInstance.current?.destroy();
    }, []);

    return (
        <section style={{ minHeight: "70vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h1>&gt; Hello, I'm Imperial_</h1>
            <span ref={el} style={{ fontSize: "1.5rem", color: "#00FF7F" }}></span>
        </section>
    );
};

export default Hero;

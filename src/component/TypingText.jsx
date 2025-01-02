// eslint-disable-next-line no-unused-vars
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TypingText = ({ text, className = "" }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (textRef.current) {
        const textContent = text;
        textRef.current.innerHTML = ""; // Clear original text

        // Split text into individual characters and wrap in spans
        textContent.split("").forEach((char) => {
          const charSpan = document.createElement("span");
          charSpan.classList.add("char");
          charSpan.textContent = char;
          textRef.current.appendChild(charSpan);
        });

        const chars = textRef.current.querySelectorAll(".char");

        // Animation
        gsap.from(chars, {
          duration: 0.1, // Adjust typing speed
          opacity: 0,
          y: 20,
          stagger: 0.1, // Delay between each character
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "bottom 80%", // Adjust when animation starts
            toggleActions: "play none none reverse", // Play on enter, reverse on leave
            markers: false // Set to true for debugging scroll positions
          }
        });
      }
    }, textRef);

    return () => ctx.revert();
  }, [text]);

  return (
    <p
      ref={textRef}
      className={`${className}`}
      style={{ display: "inline-block" }} // Ensures proper inline-block behavior
    ></p>
  );
};

export default TypingText;

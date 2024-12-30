// eslint-disable-next-line no-unused-vars
import React, { useRef ,useEffect} from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all';
import AnimatedTitle from './AnimatedTitle';
gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
        if (textRef.current) {
            const text = textRef.current.textContent;
            textRef.current.innerHTML = ""; // Clear original text

            // Split text into individual characters and wrap in spans
            text.split("").forEach(char => {
                const charSpan = document.createElement("span");
                charSpan.classList.add("char");
                charSpan.textContent = char;
                textRef.current.appendChild(charSpan);
            });

            const chars = textRef.current.querySelectorAll(".char");

            gsap.from(chars, {
                duration: 0.5, // Adjust typing speed
                opacity: 0,
                y: 20,
                stagger: 0.1, // Delay between each character
                ease: "power2.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%", // Adjust when animation starts
                    toggleActions: "restart none none reverse", // Play on enter, reverse on leave
                    markers: false // Set to true for debugging scroll positions
                }
            });
        }
    }, textRef);

    return () => ctx.revert();
  }, []);


    useGSAP(() => {
        const clipAnimation = gsap.timeline ({
          scrollTrigger: {
            trigger: '#clip',
            start: 'center center',
            end: '+=800 center',
            scrub: 0.9,
            pin: true,
            pinSpacing: true,
          }
        })
        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0,
        })
      })

  return (
    <div id='about' className='min-h-screen w-screen'>
      <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>

        <h2 ref={textRef} className='font-general text-sm uppercase md:text-[10px]'>
            Welcome to Zentry
        </h2>

        <AnimatedTitle
        title="Disc<b>o</b>ver the world's l<b>a</b>rgest <br/> shared <b>a</b>dventure" 
        containerClass="mt-5 !text-black text-center"/>

        <div className='about-subtext '>
            <p>The Game of Games begins-your life, now an epic MMORPG</p>
            <p className='text-gray-500'>Zentry unites every player from countless games and platforms</p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image center-img">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover "
          />
        </div>
      </div>
    
    </div>
  )
}

export default About

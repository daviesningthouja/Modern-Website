import { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const AnimatedTitle = ({title, containerClass}) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const titleAnimation = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "center bottom",
                    toggleActions: "play none none reverse",
                }
            });

            titleAnimation.to('.animated-word',{
                transitionDuration: 0.1,
                opacity:1,
                transform: 'translate3d( 0, 0, 0) rotateY(0deg) rotateX(0deg)',
                ease: 'power2.out',
                stagger:0.1,
            })
        }, containerRef)

        return () => ctx.revert();
    }, []);

  return (
    <div  ref={containerRef} className={`animated-title ${containerClass}`}>
      {title.split('<br/>').map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, idx) => (
            <span
              key={idx}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default AnimatedTitle
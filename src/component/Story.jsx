// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react'
import AnimatedTitle from './AnimatedTitle'
import gsap from 'gsap';
import Button from './button';
import TypingText from './TypingText';

const Story = () => {
    const frameRef = useRef(null);

    const handleMouseLeave = () => {
        const element = frameRef.current;
        gsap.to(element, {
            duration: 0.3,
            rotateX:25, rotateY:-5,
            ease: "power1.inOut"
        })
    }

    const handleMouseMove = (e) => {
        const {clientX, clientY} = e;
        const element = frameRef.current;

        if(!element) return;

        const rect = element.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -2;
        const rotateY = ((x - centerX) / centerX) * 2;

        gsap.to(element, {
            duration: 0.3,
            rotateX, rotateY,
            transformPerspective: 500,
            ease: "power1.inOut"
        })

    }

  return (
    <section id="story" className='min-h-dvh w-screen bg-black text-blue-50'>
        <div className='flex size-full flex-col items-center py-10 pb-24'>
            <TypingText 
                text={'the multiversal ip world'}            
                className='font-general text-sm uppercase md:text-[10px]'
                />
            <div className='relative size-full'>
            
                <AnimatedTitle
                    title="The st<b>o</b>ry of <br/> a hidden real<b>m</b>"
                    sectionId="#story"
                    containerClass={"mt-5 pointer-events-none mix-blend-difference relative z-10"}
                />
                
                <div className='story-img-container'>
                    <div className='story-img-mask'>
                        <div className='story-img-content'>
                            <img
                                ref={frameRef}
                                onMouseLeave={handleMouseLeave}
                                onMouseUp={handleMouseLeave}
                                onMouseEnter={handleMouseLeave}
                                onMouseMove={handleMouseMove}


                                src='/img/entrance.webp'
                                alt="entrance"
                                className='object-contain'
                            />
                        </div>
                    </div>

                     {/* for the rounded corner */}
                    <svg
                    className="invisible absolute size-0"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <filter id="flt_tag">
                            <feGaussianBlur
                                in="SourceGraphic"
                                stdDeviation="8"
                                result="blur"
                            />
                            <feColorMatrix
                                in="blur"
                                mode="matrix"
                                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                                result="flt_tag"
                            />
                            <feComposite
                                in="SourceGraphic"
                                in2="flt_tag"
                                operator="atop"
                            />
                            </filter>
                        </defs>
                    </svg>

                </div>
            </div>

            <div className='txt flex w-full justify-center  md:me-44 md:justify-end'>
                <div className='xs-story-txt'>
                    <p className='mt-3 max-w-sm text-center font-circular-web text-[0.95rem] leading-[20px] text-violet-50 md:text-start'>
                        Where realms converge, lies Zentry and the boundless pillar. Discover its secrets and shape your fate amidst infinite opportunities. 
                    </p>

                    <Button 
                        id="realm-btn"
                        title="discover prologue"
                        containerClass="mt-5 flex items-center py-[0.75rem] px-[10px]"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Story
 
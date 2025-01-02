// eslint-disable-next-line no-unused-vars
import React  from 'react'
import { useRef ,useEffect, useState } from 'react';
import { TiLocationArrow } from 'react-icons/ti';
import Button from './button';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
const navItems = ['Nexus' , 'Vault', 'Prologue', 'About', 'Contact'];
const Navbar = () => {
    const [isAudioPlaying, setIsAudioPlaying ] = useState(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);
    const navContainerRef = useRef(null);
    const audioElementRef = useRef(null);
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const { y: currentScrollY } = useWindowScroll();
    const toggleAudioIndicator = () => {
        setIsAudioPlaying((prev) => !prev);
        setIsIndicatorActive((prev) => !prev)
    }

    useEffect(() => {
      if(currentScrollY === 0){
        setIsNavVisible(true);
        navContainerRef.current.classList.remove("floating-nav");
      } else if(currentScrollY > lastScrollY){
        setIsNavVisible(false);
        navContainerRef.current.classList.add("floating-nav");
      } else if (currentScrollY < lastScrollY){
        setIsNavVisible(true);
        navContainerRef.current.classList.add('floating-nav');
      }
      setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY])

    useEffect(() => {
      gsap.to(navContainerRef.current,{
        y: isNavVisible ? 0 : -100,
        opacity: isNavVisible ? 1 : 0,
        duration: 0.2,
      });
    }, [isNavVisible])

   


    useEffect(() => {
      if(isAudioPlaying){
        audioElementRef.current.play();
      } else {
        audioElementRef.current.pause();
      }
    },[isAudioPlaying])
  return (
    <div ref={navContainerRef} className='fixed inset-x-0 top-[7px] z-50 h-[54.6px] border-none transition-all duration-700 sm:inset-x-3'>
      <header className='absolute top-1/2 w-full -translate-y-1/2'>
        <nav className='flex size-full items-center justify-between p-4'>
            <div className='flex items-center gap-7'>
              
                <Link to={'/profile'}>
                  <img src="/img/logo.png" alt="logo" className='w-10 rounded-full' />
                </Link>

                <Button
                    id="product-button"
                    title = "Products"
                    rightIcon ={<TiLocationArrow/>}
                    containerClass = "bg-blue-50 md:flex hidden items-center justify-center  text-[8px] font-black gap-[3.5px] py-[5px] pl-[13px] pr-[11px]"
                    
                />
            </div>

            <div className='flex  items-center leading-[0px]'>
                <div className='hidden md:block'>
                    {navItems.map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className='nav-hover-btn px-[9px] py-2 text-center '>
                            {item}                
                        </a>
                    ))}
                </div>

                <button className='ml-[2.0rem] flex items-center space-x-0.5 p-[5px] ' onClick={toggleAudioIndicator}>
                  <audio ref={audioElementRef} className='hidden' src='/audio/loop.mp3' loop/>
                    {[1,2,3,4].map((bar) => (
                      <div key={bar} className={`indicator-line ${isIndicatorActive ? 'active' : ''}`} style={{animationDelay: ` ${bar * 0.1}s` }}/>
                        
                      
                    ))}
               
                </button>
            </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar

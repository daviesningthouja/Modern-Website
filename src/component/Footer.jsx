// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaDiscord, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'

const links = [
    {href: 'https://discord.com', icon: <FaDiscord/>},
    {href: 'https://twitter.com', icon: <FaTwitter/>},
    {href: 'https://github.com/daviesningthouja/Modern-Website', icon: <FaGithub/>},
    {href: 'https://instagram.com', icon: <FaInstagram/>},


]

const Footer = () => {
  return (
    <footer className='flex h-[20dvh] w-screen items-center bg-violet-300 py-4'>
        <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-5 md:flex-row'>
            <p className='text-center text-sm font-light md:text-left'>
                &copy;Nova 2024. All rights reserved
            </p>

            <div className='flex justify-center gap-4 md:justify-start'>
                {links.map((link,index) => (
                    <a 
                    key={index} 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='text-black transition-colors duration-500 ease-in-out hover:text-white'>
                        {link.icon}
                    </a>
                ))}
            </div>

            
            <a
            href="#privacy-policy"
            className="text-center text-sm font-light hover:underline md:text-right"
            >
            Privacy Policy
            </a>
        </div>
    </footer>
  )
}

export default Footer

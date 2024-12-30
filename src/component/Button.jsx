// eslint-disable-next-line no-unused-vars
import React from 'react'

const Button = ({title, id, rightIcon, leftIcon , containerClass}) => {
  return (
    <button id={id} className={`group relative z-10 w-fit cursor-pointer gap-[3.5px] overflow-hidden rounded-full bg-violet-50  text-black ${containerClass}`}>
        {leftIcon}
        <span className='relative inline-flex overflow-hidden font-general text-[9px] uppercase'>
            <div >
                {title}
            </div>
        </span>
        {rightIcon}
        
    </button>
  )
}

export default Button

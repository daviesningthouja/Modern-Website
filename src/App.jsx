// eslint-disable-next-line no-unused-vars
import React from 'react'
import Hero from './component/Hero.jsx'
import About from './component/About.jsx'
import Navbar from './component/Navbar.jsx'
const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
    <Navbar/>
    <Hero/> 
    <About/>
    {/* className='z-0 min-h-screen bg-blue-500'/> */}
    </main>
  )
}

export default App

// eslint-disable-next-line no-unused-vars
import React from 'react'
import Hero from './component/Hero.jsx'
import About from './component/About.jsx'
import Navbar from './component/Navbar.jsx'
import Feature from './component/Feature.jsx'
import Story from './component/Story.jsx'
import Contact from './component/Contact.jsx'
import Footer from './component/Footer.jsx'
import Profile from './component/Profile.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <Router>
          <main className="relative min-h-screen w-screen overflow-x-hidden">
        <Routes>
          <Route path="/" element={
            <>
             <Navbar />
              <Hero />
              <About />
              <Feature />
              <Story />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/" element={<Hero />} />
          <Route path="/" element={<About />} />
          <Route path="/" element={<Feature />} />
          <Route path="#story" element={<Story />} />
          <Route path="#contact" element={<Contact />} /> 
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App

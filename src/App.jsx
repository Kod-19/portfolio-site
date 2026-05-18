import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-(--dark-bg) px-30 text-(--text-color) scroll-smooth'>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
    
  )
}

export default App
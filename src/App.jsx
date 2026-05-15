import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'


const App = () => {
  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-(--dark-bg) px-30 text-(--text-color) scroll-mt-24'>
        <Hero />
        <About />
      </div>
    </>
    
  )
}

export default App
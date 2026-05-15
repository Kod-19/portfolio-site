import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'


const App = () => {
  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-(--dark-bg) px-30 text-(--text-color)'>
        <Hero />
      </div>
    </>
    
  )
}

export default App
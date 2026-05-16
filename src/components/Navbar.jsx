import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center gap-10 text-(--text-color) bg-(--dark-bg) px-40 sticky top-0 z-50 backdrop-blur-md opacity-95'>
        <a href="#"><div className='font-extrabold text-2xl'>KD</div></a>
        <ul className='flex gap-15 py-7 pl-200 text-md font-medium transition-all'>
            <li className='hover:text-white duration-700'><a href='#'>Home</a></li>
            <li className='hover:text-white duration-700'><a href='#about'>About</a></li>
            <li className='hover:text-white duration-700'><a href='#projects'>Projects</a></li>
            <li className='hover:text-white duration-700'><a href='#contact'>Contact</a></li>
            <li className='hover:text-white duration-700'><a href='#payments'>Payments</a></li>
        </ul>
    </div>
  )
}

export default Navbar
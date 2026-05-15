import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center gap-10 text-(--text-color) bg-black px-40 sticky top-0 z-50'>
        <div className='font-extrabold text-2xl' href="#home">KD</div>
        <ul className='flex gap-15 py-7 pl-200 text-md font-medium transition-all'>
            <li className='hover:text-white duration-700'><a href='#'>Home</a></li>
            <li className='hover:text-white duration-700'><a href='#'>About</a></li>
            <li className='hover:text-white duration-700'><a href='#'>What I Do</a></li>
            <li className='hover:text-white duration-700'><a href='#'>Projects</a></li>
            <li className='hover:text-white duration-700'><a href='#'>Contact</a></li>
            <li className='hover:text-white duration-700'><a href='#'>Payments</a></li>
        </ul>
    </div>
  )
}

export default Navbar
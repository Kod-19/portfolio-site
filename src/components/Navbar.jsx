import React, { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <div className='sticky top-0 z-50 backdrop-blur-md opacity-95 bg-(--dark-bg)'>
      <div className='flex items-center justify-between px-4 sm:px-6 lg:px-12 xl:px-20 py-4'>
        <a href='#' onClick={() => setOpen(false)}>
          <div className='font-extrabold text-2xl italic text-(--title-color)'>KD</div>
        </a>

        {/* Desktop menu */}
        <ul className='hidden md:flex gap-10 text-md font-medium'>
          {navItems.map((item) => (
            <li key={item.href} className='hover:text-white duration-700'>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        {/* Mobile button */}
        <button
          type='button'
          className='md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 px-3 py-2 text-(--text-color)'
          aria-label='Toggle navigation'
          onClick={() => setOpen((v) => !v)}
        >
          <span className='text-lg font-bold'>{open ? '✕' : '☰'}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className='md:hidden px-4 sm:px-6 lg:px-12 xl:px-20 pb-4'>
          <ul className='flex flex-col gap-3 text-md font-medium'>
            {navItems.map((item) => (
              <li key={item.href} className='hover:text-white duration-700'>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className='block py-2'
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar

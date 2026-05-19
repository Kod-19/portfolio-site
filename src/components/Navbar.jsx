import { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className='sticky top-0 z-50 border-b border-white/5 bg-(--dark-bg)/90 text-(--text-color) backdrop-blur-xl'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-12 xl:px-20'>
        <a href='#' onClick={() => setOpen(false)} className='group inline-flex items-center gap-2'>
          <span className='h-2.5 w-2.5 rounded-full bg-(--accent-color) transition duration-300 group-hover:scale-125' />
          <span className='text-2xl font-extrabold italic text-(--title-color)'>KD</span>
        </a>

        <ul className='hidden gap-8 text-sm font-semibold md:flex lg:gap-10'>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className='relative py-2 transition duration-300 hover:text-(--title-color) after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-(--primary-color) after:transition-all after:duration-300 hover:after:w-full'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type='button'
          className='button-pop inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-(--surface-bg) text-(--text-color) md:hidden'
          aria-label='Toggle navigation'
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className='text-xl font-bold leading-none'>{open ? 'x' : '='}</span>
        </button>
      </div>

      {open && (
        <nav className='animate-fade-up mx-4 mb-4 rounded-xl border border-white/10 bg-(--surface-bg) p-3 shadow-2xl shadow-black/20 sm:mx-6 md:hidden'>
          <ul className='flex flex-col gap-1 text-sm font-semibold'>
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className='block rounded-lg px-3 py-3 transition duration-300 hover:bg-white/5 hover:text-(--title-color)'
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Navbar

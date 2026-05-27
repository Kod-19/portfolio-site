import { useState } from 'react'
import logo from '../assets/logo_optimized.png'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/#services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/#contact' },
  ]

  return (
    <header className='sticky top-0 z-50 border-b border-white/5 bg-(--dark-bg)/90 text-(--text-color) backdrop-blur-xl'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-12 xl:px-20'>
        <a href='/' onClick={() => setOpen(false)} className='group flex items-center gap-3'>
          <img
            src={logo}
            alt='KD Studios logo'
            className='h-9 w-9 rounded-full object-cover ring-1 ring-white/10 transition duration-300 group-hover:scale-105 group-hover:ring-(--accent-color)'
          />
          <span className='text-sm font-black uppercase tracking-[0.16em] text-(--title-color) sm:text-base'>
            KD Studios
          </span>
        </a>

        <ul className='hidden items-center gap-5 text-sm font-semibold md:flex lg:gap-7'>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className='relative py-2 transition duration-300 hover:text-(--title-color) after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-(--primary-color) after:transition-all after:duration-300 hover:after:w-full'>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href='/project-brief' className='button-pop inline-flex min-h-11 items-center justify-center rounded-lg bg-(--tertiary-color) px-4 py-2 text-(--title-color)'>
              Start Project
            </a>
          </li>
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
            <li>
              <a
                href='/project-brief'
                onClick={() => setOpen(false)}
                className='mt-2 block rounded-lg bg-(--tertiary-color) px-3 py-3 text-center font-bold text-(--title-color)'
              >
                Start Project
              </a>
            </li>
            <li>
              <a
                href='/payments'
                onClick={() => setOpen(false)}
                className='block rounded-lg bg-(--accent-color) px-3 py-3 text-center font-bold text-(--dark-bg) shadow-lg shadow-(--accent-color)/20 transition duration-300 hover:bg-[color-mix(in_srgb,var(--accent-color),white,85%)]'
              >
                Make Payment
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Navbar

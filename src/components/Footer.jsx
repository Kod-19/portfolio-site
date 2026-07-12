import logo from '../assets/logo_optimized.png'
import githubIcon from '../assets/github_icon.png'
import linkedInIcon from '../assets/linkedIn_icon.png'
import whatsappIcon from '../assets/whatsapp_icon.png'
import instagramIcon from '../assets/instagram_icon.png'

const footerLinks = [
  {
    title: 'Explore',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Projects', href: '/projects' },
      { label: 'Pricing', href: '/#pricing' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/#contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Websites', href: '/#pricing' },
      { label: 'E-Commerce', href: '/#pricing' },
      { label: 'Web Apps', href: '/#pricing' },
      { label: 'Mobile Apps', href: '/#pricing' },
    ],
  },
  {
    title: 'Actions',
    links: [
      { label: 'Start Project', href: '/project-brief' },
      { label: 'Make Payment', href: '/payments' },
      { label: 'View Updates', href: '/blog' },
    ],
  },
]

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Kod-19',
    icon: githubIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kwameofeidawson?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    icon: linkedInIcon,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/233595363184',
    icon: whatsappIcon,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/kdstudios._?igsh=MWR1M2N5NzRmdjVpNw%3D%3D&utm_source=qr',
    icon: instagramIcon,
  },
]

const mobileLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Blog', href: '/blog' },
]

const Footer = () => {
  return (
    <footer className='border-t border-white/5 bg-(--surface-bg) text-(--text-color)'>
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-7 px-4 py-7 sm:px-6 sm:py-10 lg:grid-cols-[1.2fr_1.8fr] lg:gap-10 lg:px-12 xl:px-20'>
        <div className='text-center sm:text-left'>
          <a href='/' className='inline-flex items-center justify-center gap-3 sm:justify-start'>
            <img
              src={logo}
              alt='KD Studios logo'
              className='h-10 w-10 rounded-full object-cover ring-1 ring-white/10 sm:h-11 sm:w-11'
            />
            <span className='text-sm font-black uppercase tracking-[0.16em] text-(--title-color) sm:text-base'>
              KD Studios
            </span>
          </a>
          <p className='mx-auto max-w-sm pt-3 text-sm font-medium leading-6 sm:mx-0 sm:max-w-md sm:pt-5 sm:leading-7'>
            Websites, web apps, e-commerce stores, and mobile app experiences for growing brands.
          </p>

          <div className='flex justify-center gap-3 pt-5 sm:justify-start sm:pt-6'>
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={item.label}
                className='button-pop flex h-10 w-10 items-center justify-center rounded-lg border border-(--card-border) bg-(--dark-bg) sm:h-11 sm:w-11'
              >
                <img className='h-5 w-5 object-contain sm:h-6 sm:w-6' src={item.icon} alt='' aria-hidden='true' />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label='Footer mobile links' className='sm:hidden'>
          <ul className='flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm font-semibold'>
            {mobileLinks.map((link) => (
              <li key={link.href}>
                <a className='text-(--text-color) transition hover:text-(--primary-color)' href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className='hidden grid-cols-1 gap-6 sm:grid sm:grid-cols-3 sm:gap-8'>
          {footerLinks.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className='text-sm font-black uppercase tracking-[0.16em] text-(--title-color)'>{group.title}</h2>
              <ul className='space-y-3 pt-4 text-sm font-semibold'>
                {group.links.map((link) => (
                  <li key={link.href + link.label}>
                    <a className='transition hover:text-(--primary-color)' href={link.href}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className='border-t border-white/5 px-4 py-5 text-sm font-medium sm:px-6 lg:px-12 xl:px-20'>
        <div className='mx-auto flex max-w-7xl flex-col-reverse gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left'>
          <p>Copyright {new Date().getFullYear()} KD Studios. All rights reserved.</p>
          <a className='text-(--primary-color) transition hover:text-(--accent-color)' href='tel:+233595363184'>
            +233 59 536 3184
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

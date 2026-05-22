import profile_pic from '../assets/profile_pic.jpg'

const profileActions = [
  {
    title: 'Website Builds',
    desc: 'Clean business sites, portfolios, and landing pages.',
    href: '/project-brief',
  },
  {
    title: 'Web Apps',
    desc: 'Responsive tools with frontend and backend logic.',
    href: '#projects',
  },
  {
    title: 'Launch Support',
    desc: 'Deployment, fixes, updates, and ongoing care.',
    href: '#contact',
  },
]

const Hero = () => {
  return (
    <section className='grid min-h-[calc(100vh-76px)] grid-cols-1 items-center gap-9 pt-8 sm:gap-12 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-24'>
      <div className='order-2 flex flex-col text-center lg:order-1 lg:text-left animate-fade-up'>
        <p className='text-xs font-bold uppercase tracking-[0.18em] text-(--primary-color) sm:text-sm'>
          Designing digital experiences that feel <strong>simple</strong>, <strong>fast</strong>, and <strong>meaningful</strong>
        </p>
        <h1 className='max-w-3xl pt-7 text-4xl font-black leading-tight text-(--title-color) sm:text-5xl lg:text-6xl'>
          Designing digital experiences that feel sharp, fast, and personal.
        </h1>
        <p className='mx-auto max-w-2xl pt-6 text-base font-medium leading-8 text-(--text-color) sm:text-lg lg:mx-0'>
          I build modern web apps that are clean, responsive, and focused on real user needs.
        </p>
        <p className='mx-auto max-w-2xl pt-5 text-base font-medium leading-8 text-(--text-color) sm:text-lg lg:mx-0'>
          I'm a full-stack web developer who enjoys turning ideas into real, working products. I focus on building fast, responsive, and user-friendly applications using modern tools like React, Node.js, Express, MongoDB, and Tailwind CSS. My goal is to create digital experiences that don't just look good, but actually feel smooth and easy to use.
        </p>
        <div className='flex flex-col justify-center gap-3 pt-9 font-bold text-(--title-color) sm:flex-row sm:gap-4 lg:justify-start'>
          <a
            href='#projects'
            className='button-pop inline-flex min-h-12 items-center justify-center rounded-lg bg-(--tertiary-color) px-5 py-3 text-sm sm:text-base'
          >
            View Projects
          </a>
          <a
            href='#contact'
            className='button-pop inline-flex min-h-12 items-center justify-center rounded-lg border border-(--card-border) bg-(--surface-bg) px-5 py-3 text-sm text-(--title-color) sm:text-base'
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className='order-1 flex flex-col items-center lg:order-2 animate-fade-up'>
        <div className='animate-float-soft rounded-full border border-white/10 bg-(--surface-bg) p-2 shadow-2xl shadow-sky-500/10 sm:p-3'>
          <img className='aspect-square w-40 rounded-full object-cover sm:w-56 lg:w-72' src={profile_pic} alt='KD Studios founder Kwame Dawson' />
        </div>
        <div className='pt-5 text-center sm:pt-7'>
          <p className='text-xl font-bold text-(--title-color) sm:text-2xl'>
            KD Studios
          </p>
          <p className='text-base font-medium text-(--text-color) sm:text-lg'>
            Led by Kwame Dawson
          </p>
          <p className='text-base font-medium text-(--text-color) sm:text-lg'>
            Full Stack Web Development
          </p>
        </div>
        <div className='grid w-full max-w-xl grid-cols-1 gap-3 pt-6 text-left sm:grid-cols-3 sm:pt-10'>
          {profileActions.map((action) => (
            <a
              key={action.title}
              href={action.href}
              className='interactive-card group rounded-lg p-4 transition'
            >
              <p className='text-sm font-bold text-(--title-color)'>{action.title}</p>
              <p className='pt-2 text-xs font-medium leading-5 text-(--text-color)'>{action.desc}</p>
              <span className='mt-3 inline-flex text-xs font-bold uppercase tracking-[0.14em] text-(--primary-color) transition group-hover:text-(--accent-color)'>
                Explore
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero

import { useCallback, useEffect, useRef, useState } from 'react';
import nodeIcon from '../assets/nodejs_icon.png';
import reactIcon from '../assets/react_icon.png';
import jsIcon from '../assets/javascript_icon.png';
import expressIcon from '../assets/express_icon.png';
import mongoIcon from '../assets/mongodb_icon.png';
import tailwindIcon from '../assets/tailwindcss_icon.png';
import githubIcon1 from '../assets/github_icon1.png';
import vercelIcon from '../assets/vercel_icon.png';
import firebaseIcon from '../assets/firebase_icon.png';
import Title from './Title';
import Cards from './Cards';

const techStack = [
    {
        name: 'Node.js',
        desc: 'Backend runtime',
        icon: nodeIcon,
        iconClass: 'h-7 w-7 sm:h-10 sm:w-10',
        accent: 'from-green-400/20 to-green-500/5',
    },
    {
        name: 'React',
        desc: 'Frontend library',
        icon: reactIcon,
        iconClass: 'h-7 w-7 sm:h-9 sm:w-9',
        accent: 'from-cyan-400/20 to-blue-500/5',
    },
    {
        name: 'JavaScript',
        desc: 'Core language',
        icon: jsIcon,
        iconClass: 'h-7 w-7 sm:h-9 sm:w-9',
        accent: 'from-yellow-300/20 to-yellow-500/5',
    },
    {
        name: 'Express',
        desc: 'API framework',
        icon: expressIcon,
        iconClass: 'h-6 w-6 sm:h-8 sm:w-8',
        accent: 'from-slate-300/15 to-slate-500/5',
    },
    {
        name: 'MongoDB',
        desc: 'Database',
        icon: mongoIcon,
        iconClass: 'h-7 w-7 sm:h-10 sm:w-10',
        accent: 'from-emerald-400/20 to-emerald-500/5',
    },
    {
        name: 'Tailwind CSS',
        desc: 'Styling system',
        icon: tailwindIcon,
        iconClass: 'h-7 w-7 sm:h-10 sm:w-10',
        accent: 'from-sky-400/20 to-cyan-500/5',
    },
    {
        name: 'GitHub',
        desc: 'Version control',
        icon: githubIcon1,
        iconClass: 'h-7 w-7 sm:h-10 sm:w-10',
        accent: 'from-zinc-300/20 to-zinc-500/5',
    },
    {
        name: 'Vercel',
        desc: 'Deployment platform',
        icon: vercelIcon,
        iconClass: 'h-7 w-7 sm:h-9 sm:w-9',
        accent: 'from-gray-300/20 to-gray-500/5',
    },
    {
        name: 'Firebase',
        desc: 'Backend services',
        icon: firebaseIcon,
        iconClass: 'h-7 w-7 sm:h-9 sm:w-9',
        accent: 'from-orange-300/20 to-orange-500/5',
    },
];

const About = () => {
  const techScrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateTechScrollControls = useCallback(() => {
    const scrollArea = techScrollRef.current;

    if (!scrollArea) {
        return;
    }

    const maxScrollLeft = scrollArea.scrollWidth - scrollArea.clientWidth;

    setCanScrollLeft(scrollArea.scrollLeft > 1);
    setCanScrollRight(scrollArea.scrollLeft < maxScrollLeft - 1);
  }, []);

  useEffect(() => {
    updateTechScrollControls();

    window.addEventListener('resize', updateTechScrollControls);

    return () => {
        window.removeEventListener('resize', updateTechScrollControls);
    };
  }, [updateTechScrollControls]);

  const scrollTechStack = (direction) => {
    const scrollArea = techScrollRef.current;

    if (!scrollArea) {
        return;
    }

    scrollArea.scrollBy({
        left: direction * scrollArea.clientWidth * 0.75,
        behavior: 'smooth',
    });
  };

  return (
    <section id='about'>
        <Title title='about me' />
        <div className='grid grid-cols-1 gap-12 pt-12 sm:pt-16 lg:grid-cols-2 lg:gap-14'>
            <div className='flex flex-col'>
                <h2 className='max-w-xl text-3xl font-bold leading-tight text-(--title-color) sm:text-4xl'>A focused creator building for the web</h2>
                <p className='pt-7 text-base font-medium leading-8 text-(--text-color) sm:text-lg'>
                    I'm a developer who enjoys learning by building. Instead of just watching tutorials, I prefer working on real projects that challenge me to think and improve. Over time, I've grown from understanding basic JavaScript to building full-stack applications that connect frontend interfaces with powerful backend systems.
                </p>
                <p className='pt-6 text-base font-medium leading-8 text-(--text-color) sm:text-lg'>
                    I care about clean code, good design, and creating projects that solve real problems. Every project I build helps me grow stronger as a developer and move closer to building impactful digital products.
                </p>
                <div className='grid grid-cols-1 gap-4 pt-10 sm:grid-cols-2'>
                    <Cards 
                        title='Modern Frontend Experiences'
                        desc='Building responsive and modern user interfaces that feel smooth and easy to use.'
                    />
                    <Cards 
                        title='Simple User Experience'
                        desc='Designing clean and user-friendly layouts that improve user interaction.'
                    />
                    <Cards 
                        title='Responsive websites'
                        desc='Websites that work perfectly on mobile, tablet, and desktop devices.'
                    />
                    <Cards 
                        title='Website Maintenance'
                        desc='Providing updates, fixes, and support to keep websites running smoothly.'
                    />
                </div>
            </div>

            <div className='flex flex-col'>
                <div className='max-w-xl'>
                    <h2 className='text-3xl font-bold text-(--title-color) sm:text-4xl'>Tech Stack</h2>
                    <p className='pt-6 text-base font-medium leading-8 text-(--text-color) sm:text-lg'>
                        These are the tools I use to turn ideas into polished web experiences, from responsive interfaces to backend logic and database management.
                    </p>
                </div>

                <div className='flex items-center justify-between pt-6 sm:hidden'>
                    <p className='text-xs font-semibold uppercase tracking-[0.14em] text-(--primary-color)'>Swipe tools</p>
                    <div className='flex gap-2'>
                        <button
                            type='button'
                            onClick={() => scrollTechStack(-1)}
                            disabled={!canScrollLeft}
                            className='button-pop flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-lg font-bold text-(--title-color) disabled:cursor-not-allowed disabled:opacity-35'
                            aria-label='Scroll tech stack left'
                        >
                            &larr;
                        </button>
                        <button
                            type='button'
                            onClick={() => scrollTechStack(1)}
                            disabled={!canScrollRight}
                            className='button-pop flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-lg font-bold text-(--title-color) disabled:cursor-not-allowed disabled:opacity-35'
                            aria-label='Scroll tech stack right'
                        >
                            &rarr;
                        </button>
                    </div>
                </div>

                <div ref={techScrollRef} onScroll={updateTechScrollControls} className="flex snap-x snap-mandatory scroll-smooth gap-3 overflow-x-auto overscroll-x-contain pt-4 pb-16 [-ms-overflow-style:none] scrollbar-none sm:grid sm:snap-none sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:pt-10 lg:pt-16 xl:grid-cols-3 [&::-webkit-scrollbar]:hidden">
                    {techStack.map((tech) => (
                        <div
                            key={tech.name}
                            className={`interactive-card group flex min-w-20 shrink-0 snap-start flex-col items-center rounded-lg bg-linear-to-br ${tech.accent} p-3 text-center sm:min-w-0 sm:items-start sm:p-5 sm:text-left`}
                        >
                            <div className='flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-white/95 shadow-inner transition duration-300 group-hover:border-(--tertiary-color) sm:h-14 sm:w-14'>
                                <img className={`${tech.iconClass} max-sm:h-6 max-sm:w-6 object-contain drop-shadow-sm`} src={tech.icon} alt={tech.name} />
                            </div>
                            <p className='pt-2 text-xs font-bold leading-tight text-(--title-color) sm:pt-5 sm:text-lg'>{tech.name}</p>
                            <p className='hidden pt-2 text-xs font-medium uppercase tracking-[0.14em] text-(--primary-color) sm:block sm:text-sm'>{tech.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default About

import React from 'react'
import nodeIcon from '../assets/nodejs_icon.png';
import reactIcon from '../assets/react_icon.png';
import jsIcon from '../assets/javascript_icon.png';
import expressIcon from '../assets/express_icon.png';
import mongoIcon from '../assets/mongodb_icon.png';
import tailwindIcon from '../assets/tailwindcss_icon.png';
import githubIcon from '../assets/github_icon.png';
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
        iconClass: 'w-10 h-10',
        accent: 'from-green-400/20 to-green-500/5',
    },
    {
        name: 'React',
        desc: 'Frontend library',
        icon: reactIcon,
        iconClass: 'w-9 h-9',
        accent: 'from-cyan-400/20 to-blue-500/5',
    },
    {
        name: 'JavaScript',
        desc: 'Core language',
        icon: jsIcon,
        iconClass: 'w-9 h-9',
        accent: 'from-yellow-300/20 to-yellow-500/5',
    },
    {
        name: 'Express',
        desc: 'API framework',
        icon: expressIcon,
        iconClass: 'w-8 h-8',
        accent: 'from-slate-300/15 to-slate-500/5',
    },
    {
        name: 'MongoDB',
        desc: 'Database',
        icon: mongoIcon,
        iconClass: 'w-10 h-10',
        accent: 'from-emerald-400/20 to-emerald-500/5',
    },
    {
        name: 'Tailwind CSS',
        desc: 'Styling system',
        icon: tailwindIcon,
        iconClass: 'w-10 h-10',
        accent: 'from-sky-400/20 to-cyan-500/5',
    },
    {
        name: 'GitHub',
        desc: 'Version control',
        icon: githubIcon1,
        iconClass: 'w-10 h-10',
        accent: 'from-zinc-300/20 to-zinc-500/5',
    },
    {
        name: 'Vercel',
        desc: 'Deployment platform',
        icon: vercelIcon,
        iconClass: 'w-9 h-9',
        accent: 'from-gray-300/20 to-gray-500/5',
    },
    {
        name: 'Firebase',
        desc: 'Backend services',
        icon: firebaseIcon,
        iconClass: 'w-9 h-9',
        accent: 'from-orange-300/20 to-orange-500/5',
    },
];

const About = () => {
  return (
    <div id='about'>
        <Title title='about me' />
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-14 pt-20'>
            <div className='flex flex-col'>
                <p className='text-3xl text-(--title-color) font-bold'>A focused creator building for the web</p>
                <p className='font-medium text-(--text-color) pt-10 text-lg'>
                    I'm a developer who enjoys learning by building. Instead of just watching tutorials, I prefer working on real projects that challenge me to think and improve. Over time, I've grown from understanding basic JavaScript to building full-stack applications that connect frontend interfaces with powerful backend systems.
                </p>
                <p className='font-medium text-(--text-color) pt-10 pb-20 text-lg'>
                    I care about clean code, good design, and creating projects that solve real problems. Every project I build helps me grow stronger as a developer and move closer to building impactful digital products.
                </p>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
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
                    <p className='text-3xl text-(--title-color) font-bold'>Tech Stack</p>
                    <p className='text-(--text-color) font-medium text-lg leading-8 pt-6'>
                        These are the tools I use to turn ideas into polished web experiences, from responsive interfaces to backend logic and database management.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 pt-30 pb-20">
                    {techStack.map((tech) => (
                        <div
                            key={tech.name}
                            className={`group rounded-md border border-(--card-border) bg-linear-to-br ${tech.accent} bg-(--card-bg) p-5 transition duration-300 hover:-translate-y-1 hover:border-(--tertiary-color) hover:shadow-[0_18px_40px_rgba(31,140,255,0.12)]`}
                        >
                            <div className='flex h-14 w-14 items-center justify-center rounded-md border border-white/20 bg-white/95 shadow-inner transition duration-300 group-hover:border-(--tertiary-color)'>
                                <img className={`${tech.iconClass} object-contain drop-shadow-sm`} src={tech.icon} alt={tech.name} />
                            </div>
                            <p className='pt-5 text-lg font-bold text-(--title-color)'>{tech.name}</p>
                            <p className='pt-2 text-sm font-medium uppercase tracking-[0.14em] text-(--primary-color)'>{tech.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default About

import React from 'react'
import nodeIcon from '../assets/nodejs_icon.png';
import reactIcon from '../assets/react_icon.png';
import jsIcon from '../assets/javascript_icon.png';
import expressIcon from '../assets/express_icon.png';
import mongoIcon from '../assets/mongodb_icon.png';
import tailwindIcon from '../assets/tailwindcss_icon.png';
import Title from './Title';
import Cards from './Cards';

const About = () => {
  return (
    <div id='about'>
        <Title title='about me' />
        <div className='grid grid-cols-2 pt-20'>
            <div className='flex flex-col'>
                <p className='text-3xl text-(--title-color) font-bold'>A focused creator building for the web</p>
                <p className='font-medium text-(--text-color) pt-10 text-lg'>
                    I’m a developer who enjoys learning by building. Instead of just watching tutorials, I prefer working on real projects that challenge me to think and improve. Over time, I’ve grown from understanding basic JavaScript to building full-stack applications that connect frontend interfaces with powerful backend systems.
                </p>
                <p className='font-medium text-(--text-color) pt-10 pb-20 text-lg'>
                    I care about clean code, good design, and creating projects that solve real problems. Every project I build helps me grow stronger as a developer and move closer to building impactful digital products.
                </p>
                <div className='grid grid-cols-2 gap-4'>
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

            <div className='flex flex-col items-center'>
                <p className='text-3xl text-(--title-color) font-bold'>Tech Stack</p>

                    <div className=''>
                        <p className='text-(--text-color) font-medium text-lg text-ellipsis pl-30 pb-4 pt-10'>
                            These are the technologies I use to bring ideas to life — from responsive frontend interfaces to secure backend systems and database management.
                        </p>
                    </div>

                <div className="grid grid-cols-3 gap-4 pt-15 pb-20">

                    <div className="bg-green-500 text-black uppercase font-bold px-4 py-2 text-center flex items-center gap-4">
                        <img className='w-10 h-10' src={nodeIcon} alt="Node.js" />
                        Node.js
                    </div>

                    <div className="bg-blue-500 text-white font-bold uppercase px-4 py-2 text-center flex items-center gap-4">
                        <img className='w-8 h-8' src={reactIcon} alt="React" />
                        React
                    </div>

                    <div className="bg-yellow-500 text-black px-4 py-2 text-center flex items-center font-bold gap-4">
                        <img className='' src={jsIcon} alt="JavaScript" />
                        JavaScript
                    </div>

                    <div className="bg-gray-700 text-white px-4 py-2 text-center flex items-center font-bold gap-4">
                        <img className='w-7 h-7' src={expressIcon} alt="Express" />
                        Express
                    </div>

                    <div className="bg-green-700 text-white px-4 py-2 text-center flex items-center font-bold gap-4">
                        <img className='w-10 h-10' src={mongoIcon} alt="MongoDB" />
                        MongoDB
                    </div>

                    <div className="bg-blue-500 text-white px-4 py-2 text-center flex items-center font-bold gap-4">
                        <img className='w-10 h-10' src={tailwindIcon} alt="Tailwind CSS" />
                        Tailwind CSS
                    </div>
                    

                </div>
            </div>
        </div>
    </div>
  )
}

export default About
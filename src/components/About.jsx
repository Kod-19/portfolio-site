import React from 'react'
import nodeIcon from '../assets/nodejs_icon.png';
import reactIcon from '../assets/react_icon.png';
import jsIcon from '../assets/javascript_icon.png';
import expressIcon from '../assets/express_icon.png';
import mongoIcon from '../assets/mongodb_icon.png';
import tailwindIcon from '../assets/tailwindcss_icon.png';

const About = () => {
  return (
    <>
        <h3 className='pt-50 font-medium uppercase text-(--primary-color)'>About Me</h3>
        <div className='grid grid-cols-2 pt-20'>
            <div className='flex flex-col'>
                <p className='text-3xl text-(--title-color) font-bold'>A focused creator for useful, memorable web products.</p>
                <p className='font-medium text-(--text-color) pt-10 text-lg'>
                    I combine visual design, front-end craft, and product thinking to turn rough ideas into interfaces people can understand quickly and enjoy using.
                </p>
            </div>

            <div className='flex flex-col items-center'>
                <p className='text-2xl text-(--title-color) font-bold'>Tech Stack</p>
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
    </>
  )
}

export default About
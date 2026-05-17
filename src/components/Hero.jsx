import React from 'react'
import profile_pic from '../assets/profile_pic.jpg'

const Hero = () => {
  return (
    <div className='grid grid-cols-2 pt-45'>
        <div className='flex flex-col'>
            <p className='uppercase text-(--primary-color) text-medium'>
                Designing digital experiences that feel <strong>simple</strong>, <strong>fast</strong>, and <strong>meaningful</strong>
            </p>
            <p className='text-(--title-color) font-bold text-3xl pt-20'>
                Designing digital experiences that feel sharp, fast, and personal.
            </p>
            <p className='text-(--text-color) font-medium text-lg pt-10'>
                I build modern web apps that are clean, responsive, and focused on real user needs.
            </p>
            <p className='text-(--text-color) font-medium text-lg pt-10'>
                I’m a full-stack web developer who enjoys turning ideas into real, working products. I focus on building fast, responsive, and user-friendly applications using modern tools like React, Node.js, Express, MongoDB, and Tailwind CSS. My goal is to create digital experiences that don’t just look good, but actually feel smooth and easy to use.
            </p>
            <div className='flex pt-20 gap-4 text-(--title-color) font-medium transition-all'>
                <a href='#projects'><button className='bg-(--tertiary-color) px-5 py-3 rounded-lg cursor-pointer hover:scale-105 duration-100'>View Projects</button></a>
                <a href='#contact'><button className='bg-(--card-bg) px-5 py-3 rounded-lg border border-gray-400 cursor-pointer hover:scale-105 duration-100'>Contact Me</button></a>
            </div>
        </div>

        <div className='flex flex-col items-center'>
            <div>
                <img className='w-75 rounded-full' src={profile_pic} alt="" />
                <p className='text-(--title-color) font-bold text-2xl text-center pt-10'>Kwame Dawson</p>
                <p className='text-(--text-color) font-medium text-lg text-center'>Full Stack Web Developer</p>
            </div>
            <div className='flex items-center pt-23 gap-5 transition-all'>
                <div className='hover:border-blue-300 border hover:translate-y-1 hover:text-(--primary-color) rounded-md bg-(--card-bg) items-center py-2 px-6 text-(--tertiary-color) font-bold duration-300 text-sm'>
                    <p>3+ yrs</p>
                </div>
                <div className='hover:border-blue-300 border hover:translate-y-1 hover:text-(--primary-color) rounded-md bg-(--card-bg) items-center py-2 px-6 text-(--tertiary-color) font-bold duration-300 text-sm'>
                    <p>7+ projects</p>
                </div>
                <div className='hover:border-blue-300 border hover:translate-y-1 hover:text-(--primary-color) rounded-md bg-(--card-bg) items-center py-2 px-6 text-(--tertiary-color) font-bold duration-300 text-sm'>
                    <p>100% quality</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Hero
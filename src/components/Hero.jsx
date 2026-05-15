import React from 'react'
import profile_pic from '../assets/profile_pic.jpg'

const Hero = () => {
  return (
    <div className='grid grid-cols-2 pt-45'>
        <div className='flex flex-col'>
            <p className='uppercase text-(--primary-color) text-medium'>Available for freelance projects</p>
            <p className='text-(--title-color) font-bold text-3xl pt-20'>
                Designing digital experiences that feel sharp, fast, and personal.
            </p>
            <p className='text-(--text-color) font-medium text-lg pt-10'>
                A modern portfolio concept for a creative developer/designer, built around clean sections, strong project storytelling, responsive navigation, and a polished blue-black identity.
            </p>
            <div className='flex pt-20 gap-4 text-(--title-color) font-medium'>
                <button className='bg-(--tertiary-color) px-5 py-3 rounded-lg'>View Projects</button>
                <button className='bg-(--dark-bg-color) px-5 py-3 rounded-lg border border-gray-400'>Contact Me</button>
            </div>
        </div>

        <div className='flex flex-col items-center'>
            <div>
                <img className='w-75 rounded-full hover:scale-105 duration-200 transition-all' src={profile_pic} alt="" />
                <p className='text-(--title-color) font-bold text-2xl text-center pt-10'>Kwame Dawson</p>
                <p className='text-(--text-color) font-medium text-lg text-center'>Full Stack Developer - MERN Stack</p>
            </div>
        </div>
    </div>
  )
}

export default Hero
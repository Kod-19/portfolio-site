import React from 'react'
import profile_pic from '../assets/profile_pic.jpg'
import linkedInIcon from '../assets/linkedIn_icon.png';
import githubIcon from '../assets/github_icon.png';
import snapchatIcon from '../assets/snapchat_icon.png';
import whatsappIcon from '../assets/whatsapp_icon.png';

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
                <a href='#contact'><button className='bg-(--dark-bg-color) px-5 py-3 rounded-lg border border-gray-400 cursor-pointer hover:scale-105 duration-100'>Contact Me</button></a>
            </div>
        </div>

        <div className='flex flex-col items-center'>
            <div>
                <img className='w-75 rounded-full hover:scale-105 duration-100' src={profile_pic} alt="" />
                <p className='text-(--title-color) font-bold text-2xl text-center pt-10'>Kwame Dawson</p>
                <p className='text-(--text-color) font-medium text-lg text-center'>Full Stack Developer - MERN Stack</p>
            </div>
            <div className='flex gap-9 pt-23'>
                <a href="https://www.linkedin.com/in/kwameofeidawson?utm_source=share_via&utm_content=profile&utm_medium=member_ios"><img className='w-9 h-9' src={linkedInIcon} alt="LinkedIn" /></a>
                <a href="https://github.com/Kod-19"><img className='w-9 h-9' src={githubIcon} alt="GitHub" /></a>
                <a href="https://snapchat.com/t/UFDTyOJG"><img className='w-9 h-9' src={snapchatIcon} alt="Snapchat" /></a>
                <a href="https://wa.me/0505734529"><img className='w-9 h-9' src={whatsappIcon} alt="WhatsApp" /></a>
            </div>
        </div>
    </div>
  )
}

export default Hero
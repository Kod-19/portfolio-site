import React from 'react'
import Title from './Title'
import ProjectCard from './ProjectCard'
import demo1 from '../assets/demo1.png'
import demo2 from '../assets/demo2.png'

const Projects = () => {
  return (
    <div className='' id='projects'>
        <Title title='My Projects' />

        <div className='pt-10'>
            <p className='text-(--text-color) font-medium text-lg text-ellipsis w-full md:w-2/3'>
                Here are some of the projects I've worked on, showcasing my skills in full stack development and my ability to create responsive and user-friendly applications.
            </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 pt-10'>
             <ProjectCard
                img={demo1} 
                title='Recipe Planner' 
                desc='A simple recipe management app to organize and plan your meals.'
                demoLink='https://peaceful-success-production-37b3.up.railway.app/' 
            />
             <ProjectCard
                img={demo2} 
                title='KanFlow' 
                desc='A productivity app to manage and track your daily tasks.'
                demoLink='https://kan-flow-ivory.vercel.app/' 
            />
        </div>
    </div>
  )
}

export default Projects
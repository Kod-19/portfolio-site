import React from 'react'

const ProjectCard = ({title, desc, img, demoLink}) => {
  return (
    <div className='bg-(--card-bg) rounded-md border-l-4 border-(--tertiary-color) py-5 px-4 hover:translate-y-1 hover:border-sky-200 transition-all duration-300'>
        <img className='w-full h-32 sm:h-40 object-cover rounded-md hover:scale-100' src={img} alt={title} />
        <p className='text-xl text-(--title-color) font-bold py-4 px-4'>{title}</p>
        <p className='text-lg font-medium text-(--text-color) py-4 px-4'>{desc}</p>
        {demoLink && (
            <a href={demoLink} target='_blank' rel='noopener noreferrer' className='pl-4 text-(--tertiary-color) hover:text-(--primary-color) underline'>
                View Demo
            </a>
        )}
    </div>
  )
}

export default ProjectCard
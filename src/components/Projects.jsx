import Title from './Title'
import ProjectCard from './ProjectCard'
import { featuredProjects } from '../data/projects'

const Projects = () => {
  return (
    <section id='projects'>
      <Title title='My Projects' />

      <div className='pt-8 sm:pt-10'>
        <p className='max-w-3xl text-base font-medium leading-8 text-(--text-color) sm:text-lg'>
          Here are some of the projects I've worked on, showcasing my skills in full stack development and my ability to create responsive and user-friendly applications.
        </p>
      </div>

      <div className='grid grid-cols-1 gap-6 pt-10 md:grid-cols-2 lg:gap-10'>
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      <div className='pt-8'>
        <a
          href='/projects'
          className='button-pop inline-flex min-h-12 items-center justify-center rounded-lg border border-(--card-border) bg-(--surface-bg) px-5 py-3 text-sm font-bold text-(--title-color) sm:text-base'
        >
          View More Projects
        </a>
      </div>
    </section>
  )
}

export default Projects


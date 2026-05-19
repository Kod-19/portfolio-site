import Title from './Title'
import ProjectCard from './ProjectCard'
import demo1 from '../assets/demo1.png'
import demo2 from '../assets/demo2.png'

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
    </section>
  )
}

export default Projects


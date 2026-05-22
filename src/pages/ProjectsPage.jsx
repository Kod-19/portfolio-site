import Title from '../components/Title'
import ProjectCard from '../components/ProjectCard'
import { allProjects } from '../data/projects'

const ProjectsPage = () => {
  return (
    <main className='min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(102,227,255,0.12),transparent_34%),radial-gradient(circle_at_85%_10%,rgba(255,209,102,0.08),transparent_28%),var(--dark-bg)] text-(--text-color) font-sans selection:bg-sky-400/25'>
      <div className='mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-12 xl:px-20'>
        <section className='pt-8 sm:pt-12'>
          <Title title='Project Library' />

          <div className='grid grid-cols-1 gap-8 pt-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-14'>
            <div>
              <h1 className='max-w-3xl text-4xl font-black leading-tight text-(--title-color) sm:text-5xl'>
                More of what I have been building.
              </h1>
            </div>
            <p className='max-w-3xl text-base font-medium leading-8 text-(--text-color) sm:text-lg'>
              This page collects live projects, experiments, and work-in-progress ideas so visitors can get a broader look at my development practice beyond the featured homepage section.
            </p>
          </div>

          <div className='flex flex-col gap-3 pt-8 font-bold sm:flex-row'>
            <a
              href='/'
              className='button-pop inline-flex min-h-12 items-center justify-center rounded-lg bg-(--tertiary-color) px-5 py-3 text-sm text-(--title-color) sm:text-base'
            >
              Back to Home
            </a>
            <a
              href='/#contact'
              className='button-pop inline-flex min-h-12 items-center justify-center rounded-lg border border-(--card-border) bg-(--surface-bg) px-5 py-3 text-sm text-(--title-color) sm:text-base'
            >
              Get in Touch
            </a>
          </div>

          <div className='grid grid-cols-1 gap-6 pt-12 md:grid-cols-2 xl:grid-cols-3'>
            {allProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default ProjectsPage

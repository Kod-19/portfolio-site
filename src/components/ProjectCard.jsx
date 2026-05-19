const ProjectCard = ({ title, desc, img, demoLink }) => {
  return (
    <article className='interactive-card group flex h-full flex-col rounded-lg border-l-4 border-l-(--tertiary-color) p-4 sm:p-5'>
      <div className='overflow-hidden rounded-lg border border-white/10'>
        <img className='h-44 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-56' src={img} alt={title} />
      </div>
      <h3 className='px-1 pt-5 text-xl font-bold text-(--title-color) sm:text-2xl'>{title}</h3>
      <p className='flex-1 px-1 py-4 text-base font-medium leading-7 text-(--text-color) sm:text-lg'>{desc}</p>
      {demoLink && (
        <a
          href={demoLink}
          target='_blank'
          rel='noopener noreferrer'
          className='button-pop mt-auto inline-flex min-h-11 w-fit items-center justify-center rounded-lg border border-(--card-border) bg-(--surface-bg) px-4 py-2 text-sm font-bold text-(--primary-color)'
        >
          View Demo
        </a>
      )}
    </article>
  )
}

export default ProjectCard


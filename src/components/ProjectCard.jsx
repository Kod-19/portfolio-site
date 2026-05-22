const ProjectCard = ({ title, desc, img, imgFit = 'cover', imgPosition = 'center', demoLink, tags = [], status }) => {
  const isInProgress = status?.toLowerCase() === 'in progress'

  return (
    <article className='interactive-card group flex h-full flex-col rounded-lg border-l-4 border-l-(--tertiary-color) p-4 sm:p-5'>
      {img ? (
        <div className='overflow-hidden rounded-lg border border-white/10 bg-(--surface-bg)'>
          <img
            className='h-44 w-full transition duration-500 group-hover:scale-105 sm:h-56'
            src={img}
            alt={title}
            style={{ objectFit: imgFit, objectPosition: imgPosition }}
          />
        </div>
      ) : (
        <div className='flex h-44 items-center justify-center rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(102,227,255,0.14),rgba(255,209,102,0.08)),var(--surface-bg)] sm:h-56'>
          <span className='px-5 text-center text-2xl font-black text-(--title-color)'>{title}</span>
        </div>
      )}
      {status && (
        <p className='px-1 pt-5 text-xs font-bold uppercase tracking-[0.16em] text-(--primary-color)'>
          {status}
        </p>
      )}
      <h3 className='px-1 pt-3 text-xl font-bold text-(--title-color) sm:text-2xl'>{title}</h3>
      <p className='flex-1 px-1 py-4 text-base font-medium leading-7 text-(--text-color) sm:text-lg'>{desc}</p>
      {tags.length > 0 && (
        <div className='flex flex-wrap gap-2 px-1 pb-5'>
          {tags.map((tag) => (
            <span key={tag} className='rounded-lg border border-(--card-border) bg-(--surface-bg) px-3 py-1 text-xs font-bold text-(--text-color)'>
              {tag}
            </span>
          ))}
        </div>
      )}
      {demoLink && !isInProgress && (
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


const Cards = ({ title, desc }) => {
  return (
    <article className='interactive-card group h-full rounded-lg border-l-4 border-l-(--tertiary-color) p-5 sm:p-6'>
      <div className='relative'>
        <div className='mb-5 h-1.5 w-12 rounded-full bg-[linear-gradient(90deg,var(--primary-color),var(--accent-color))] transition-all duration-300 group-hover:w-20' />
        <h4 className='text-lg font-bold leading-snug text-(--title-color) sm:text-xl'>
          {title}
        </h4>
        <p className='pt-4 text-sm font-medium leading-7 text-(--text-color) sm:text-base'>
          {desc}
        </p>
      </div>
    </article>
  )
}

export default Cards

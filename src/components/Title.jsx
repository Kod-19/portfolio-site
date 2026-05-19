const Title = ({title}) => {
  return (
    <div>
        <h3 className='pt-20 text-sm font-bold uppercase tracking-[0.18em] text-(--primary-color) sm:pt-28'>
          {title}
        </h3>
        <div className='mt-3 h-px w-full bg-[linear-gradient(90deg,var(--primary-color),rgba(255,255,255,0.08),transparent)]' />
    </div>
  )
}

export default Title

import Title from './Title'

const steps = [
  {
    number: '01',
    title: 'Share the idea',
    desc: 'Send the project brief with your goals, timeline, budget range, and important features.',
  },
  {
    number: '02',
    title: 'Plan the build',
    desc: 'We shape the pages, flows, design direction, and technical setup before development starts.',
  },
  {
    number: '03',
    title: 'Build and launch',
    desc: 'Your project is designed, developed, tested on key screen sizes, then prepared for launch.',
  },
]

const Process = () => {
  return (
    <section>
      <Title title='How It Works' />

      <div className='grid grid-cols-1 gap-5 pt-8 md:grid-cols-3'>
        {steps.map((step) => (
          <article key={step.number} className='rounded-lg border border-(--card-border) bg-(--card-bg) p-5'>
            <p className='text-sm font-black text-(--primary-color)'>{step.number}</p>
            <h2 className='pt-4 text-xl font-black text-(--title-color)'>{step.title}</h2>
            <p className='pt-3 text-sm font-medium leading-7 text-(--text-color)'>{step.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Process

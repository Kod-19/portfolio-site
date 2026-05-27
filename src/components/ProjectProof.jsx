import Title from './Title'

const caseStudies = [
  {
    title: "Beckery's",
    type: 'Client website',
    result: 'A responsive bakery website that gives customers a clean place to view the brand and take action quickly.',
    details: ['Mobile-first layout', 'Clear product presentation', 'Fast deployment on Vercel'],
  },
  {
    title: 'KanFlow',
    type: 'Productivity tool',
    result: 'A task management interface built around simple workflows, clean visual hierarchy, and everyday productivity.',
    details: ['Dashboard-style UI', 'Reusable components', 'Responsive task layout'],
  },
  {
    title: 'Portfolio Website',
    type: 'Business platform',
    result: 'A conversion-focused portfolio with services, pricing, project brief, payments, and blog updates in one system.',
    details: ['Service positioning', 'Pricing flow', 'Lead capture'],
  },
]

const trustPoints = [
  'Clear project scope before development starts',
  'Responsive layouts checked across screen sizes',
  'Launch support for hosting, payments, and updates',
]

const ProjectProof = () => {
  return (
    <section id='proof'>
      <Title title='Project Proof' />

      <div className='grid grid-cols-1 gap-8 pt-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12'>
        <div>
          <h2 className='max-w-2xl text-3xl font-black leading-tight text-(--title-color) sm:text-4xl'>
            Real builds, clearer outcomes.
          </h2>
          <p className='pt-5 text-base font-medium leading-8 text-(--text-color) sm:text-lg'>
            Every project is shaped around a practical goal: helping the user understand, act, book, buy, or manage something faster.
          </p>
          <div className='space-y-3 pt-6'>
            {trustPoints.map((point) => (
              <p key={point} className='rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-bold text-(--title-color)'>
                {point}
              </p>
            ))}
          </div>
        </div>

        <div className='grid grid-cols-1 gap-5'>
          {caseStudies.map((item) => (
            <article key={item.title} className='interactive-card rounded-lg p-5 sm:p-6'>
              <p className='text-xs font-black uppercase tracking-[0.16em] text-(--primary-color)'>{item.type}</p>
              <h3 className='pt-3 text-2xl font-black text-(--title-color)'>{item.title}</h3>
              <p className='pt-3 text-sm font-medium leading-7 text-(--text-color) sm:text-base'>{item.result}</p>
              <div className='flex flex-wrap gap-2 pt-5'>
                {item.details.map((detail) => (
                  <span key={detail} className='rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-bold text-(--text-color)'>
                    {detail}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectProof

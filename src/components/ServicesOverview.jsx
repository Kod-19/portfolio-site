import Title from './Title'

const services = [
  {
    title: 'Business Websites',
    desc: 'Clean, responsive websites for brands that need a professional online presence.',
  },
  {
    title: 'E-Commerce Stores',
    desc: 'Online stores with products, payments, checkout, and customer notifications.',
  },
  {
    title: 'Custom Web Apps',
    desc: 'Dashboards, booking systems, portals, and tools built around real workflows.',
  },
  {
    title: 'Mobile Apps',
    desc: 'React Native app development for MVPs, business tools, and mobile-first ideas.',
  },
]

const ServicesOverview = () => {
  return (
    <section id='services'>
      <Title title='Services' />

      <div className='grid grid-cols-1 gap-4 pt-8 sm:grid-cols-2 lg:grid-cols-4'>
        {services.map((service) => (
          <article key={service.title} className='interactive-card rounded-lg p-5'>
            <h2 className='text-xl font-black text-(--title-color)'>{service.title}</h2>
            <p className='pt-3 text-sm font-medium leading-7 text-(--text-color)'>{service.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ServicesOverview

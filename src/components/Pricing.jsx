import Title from './Title'

const currency = 'GH\u20B5'

const planGroups = [
  {
    title: 'Website Development',
    plans: [
      {
        name: 'Starter Website',
        price: `Starting from ${currency}1,500`,
        summary: 'Great for businesses that simply need a strong online presence.',
        perfectFor: ['Small businesses', 'Startups', 'Personal brands', 'Freelancers'],
        includes: [
          'Modern responsive website',
          'Up to 5 pages',
          'WhatsApp integration',
          'Contact forms',
          'Mobile-friendly design',
          'Basic SEO setup',
        ],
        delivery: '5-10 working days',
      },
      {
        name: 'Business Website',
        price: `Starting from ${currency}3,500`,
        summary: 'Ideal for businesses that want a more premium and professional online image.',
        badge: 'Popular',
        perfectFor: ['Growing businesses', 'Restaurants', 'Gyms', 'Salons', 'Agencies', 'Schools'],
        includes: [
          'Custom UI/UX design',
          'Up to 10 pages',
          'Booking/contact systems',
          'Social media integration',
          'Speed optimization',
          'Google Maps integration',
          'SEO optimization',
        ],
        delivery: '1-3 weeks',
      },
      {
        name: 'E-Commerce Website',
        price: `Starting from ${currency}6,500`,
        summary: 'Built for businesses ready to start selling online.',
        perfectFor: ['Online stores', 'Fashion brands', 'Gadget shops', 'Beauty businesses'],
        includes: [
          'Online store setup',
          'Paystack & Mobile Money integration',
          'Shopping cart & checkout',
          'Product management',
          'Order management dashboard',
          'Customer notifications',
        ],
        delivery: '2-4 weeks',
      },
    ],
  },
  {
    title: 'Mobile App Development',
    plans: [
      {
        name: 'Starter Mobile App',
        price: `Starting from ${currency}5,000`,
        summary: 'Good for businesses entering the mobile app space without overspending.',
        perfectFor: ['Booking apps', 'Appointment systems', 'Simple business apps', 'MVP startups'],
        includes: [
          'Android app',
          'Clean mobile UI',
          'Login/signup',
          'Basic backend',
          'Play Store preparation',
        ],
        delivery: '3-5 weeks',
      },
      {
        name: 'Business Mobile App',
        price: `Starting from ${currency}10,000`,
        summary: 'Ideal for businesses looking for a scalable mobile platform.',
        badge: 'Scalable',
        perfectFor: ['Delivery services', 'Fitness apps', 'School platforms', 'Customer management apps'],
        includes: [
          'Android + iPhone support',
          'Payment integration',
          'Notifications',
          'Admin dashboard',
          'User accounts',
          'Analytics integration',
        ],
        delivery: '1-2 months',
      },
    ],
  },
  {
    title: 'Custom Web & Mobile Systems',
    plans: [
      {
        name: 'Custom Systems',
        price: 'Custom Quote',
        summary: 'For platforms with advanced workflows, integrations, and business logic.',
        perfectFor: ['Startups', 'SaaS platforms', 'Enterprise systems', 'Fintech ideas', 'Marketplace platforms'],
        includes: [
          'Uber-like apps',
          'Custom dashboards',
          'Multi-vendor systems',
          'School portals',
          'Logistics systems',
        ],
        delivery: 'Depends on features, integrations, complexity, and timeline',
      },
    ],
  },
]

const DetailList = ({ title, items }) => (
  <div>
    <h4 className='text-xs font-black uppercase tracking-[0.16em] text-(--primary-color)'>{title}</h4>
    <ul className='grid gap-2 pt-3 text-sm font-medium leading-6 text-(--text-color)'>
      {items.map((item) => (
        <li key={item} className='flex gap-3'>
          <span className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-(--accent-color)' aria-hidden='true' />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
)

const PricingCard = ({ plan }) => (
  <article className='interactive-card flex h-full flex-col rounded-lg p-5 sm:p-6'>
    <div className='flex flex-wrap items-start justify-between gap-3'>
      <div>
        <h3 className='text-2xl font-black leading-tight text-(--title-color)'>{plan.name}</h3>
        <p className='pt-3 text-xl font-black text-(--primary-color) sm:text-2xl'>{plan.price}</p>
      </div>
      {plan.badge && (
        <span className='rounded-full border border-(--accent-color)/40 bg-(--accent-color)/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-(--accent-color)'>
          {plan.badge}
        </span>
      )}
    </div>

    <p className='pt-4 text-sm font-medium leading-7 text-(--text-color)'>{plan.summary}</p>

    <div className='grid flex-1 gap-6 pt-6'>
      <DetailList title='Perfect for' items={plan.perfectFor} />
      <DetailList title='Includes' items={plan.includes} />
    </div>

    <div className='mt-6 rounded-lg border border-white/10 bg-white/[0.03] p-4'>
      <p className='text-xs font-black uppercase tracking-[0.16em] text-(--primary-color)'>Delivery</p>
      <p className='pt-2 text-sm font-bold text-(--title-color)'>{plan.delivery}</p>
    </div>

    <a
      href='/project-brief'
      className='button-pop mt-6 inline-flex min-h-12 items-center justify-center rounded-lg bg-(--tertiary-color) px-5 py-3 text-sm font-bold text-(--title-color)'
    >
      Request This Plan
    </a>
  </article>
)

const Pricing = () => {
  return (
    <section id='pricing'>
      <Title title='Pricing Plans' />

      <div className='pt-8 sm:pt-10'>
        <p className='max-w-3xl text-base font-medium leading-8 text-(--text-color) sm:text-lg'>
          Choose the package that fits your current stage. Final pricing may change based on features, integrations, and timeline.
        </p>
      </div>

      <div className='space-y-12 pt-10'>
        {planGroups.map((group) => (
          <div key={group.title}>
            <h2 className='text-2xl font-black text-(--title-color) sm:text-3xl'>{group.title}</h2>
            <div className='grid grid-cols-1 gap-5 pt-5 md:grid-cols-2 xl:grid-cols-3'>
              {group.plans.map((plan) => (
                <PricingCard key={plan.name} plan={plan} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing

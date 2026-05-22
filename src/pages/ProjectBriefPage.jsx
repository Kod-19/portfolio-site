import { useState } from 'react'
import { useForm } from 'react-hook-form'
import useWeb3Forms from '@web3forms/react'

import Title from '../components/Title'

const fieldClass = 'w-full rounded-lg border border-(--card-border) bg-(--dark-bg) px-4 py-3 text-(--title-color) outline-none transition focus:border-(--primary-color) focus:ring-2 focus:ring-sky-400/20'
const labelClass = 'block pb-2 text-sm font-bold text-(--title-color)'
const helpClass = 'pt-2 text-sm font-medium leading-6 text-(--text-color)'

const siteTypes = [
  'Portfolio site',
  'Booking site',
  'Landing page',
  'Business website',
  'E-commerce store',
  'Blog or content site',
  'Web app',
  'Not sure yet',
]

const featureOptions = [
  'Contact form',
  'Booking calendar',
  'Online payments',
  'Product or service listings',
  'Photo/video gallery',
  'Blog or articles',
  'User accounts',
  'Admin dashboard',
  'Social media links',
  'Analytics setup',
]

const pageOptions = [
  'Home',
  'About',
  'Services',
  'Projects or portfolio',
  'Booking',
  'Shop',
  'Blog',
  'Contact',
  'FAQ',
]

const ProjectBriefPage = () => {
  const { register, reset, handleSubmit } = useForm()
  const [result, setResult] = useState(null)

  const accessKey = '88eec560-64b0-4d12-9c75-26e6f360bdbd'

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: 'KD Studios',
      subject: 'Project Brief',
    },
    onSuccess: (msg) => {
      setResult(msg)
      reset()
    },
    onError: (msg) => {
      setResult(msg)
    },
  })

  return (
    <main className='min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(102,227,255,0.12),transparent_34%),radial-gradient(circle_at_85%_10%,rgba(255,209,102,0.08),transparent_28%),var(--dark-bg)] text-(--text-color) font-sans selection:bg-sky-400/25'>
      <div className='mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-12 xl:px-20'>
        <section className='pt-8 sm:pt-12'>
          <Title title='Start a Project' />

          <div className='grid grid-cols-1 gap-10 pt-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14'>
            <aside className='lg:sticky lg:top-28 lg:self-start'>
              <h1 className='max-w-3xl text-4xl font-black leading-tight text-(--title-color) sm:text-5xl'>
                Tell me what your website should do.
              </h1>
              <p className='pt-6 text-base font-medium leading-8 text-(--text-color) sm:text-lg'>
                Share the idea, the goals, and the features you already have in mind. Clear answers help me understand the project faster and suggest the right structure for your site.
              </p>

              <div className='interactive-card mt-8 rounded-lg p-5'>
                <h2 className='text-lg font-bold text-(--title-color)'>Helpful Guidelines</h2>
                <ul className='space-y-3 pt-4 text-sm font-medium leading-6 text-(--text-color)'>
                  <li>Write in simple words. You do not need technical terms.</li>
                  <li>Mention the main action visitors should take, such as book, call, buy, read, or submit a form.</li>
                  <li>Add examples of websites you like if you have any.</li>
                  <li>If you are unsure about something, choose “Not sure yet” and explain it in the notes.</li>
                </ul>
              </div>

              <div className='flex flex-col gap-3 pt-8 font-bold sm:flex-row lg:flex-col'>
                <a
                  href='/'
                  className='button-pop inline-flex min-h-12 items-center justify-center rounded-lg border border-(--card-border) bg-(--surface-bg) px-5 py-3 text-sm text-(--title-color) sm:text-base'
                >
                  Back to Home
                </a>
                <a
                  href='/projects'
                  className='button-pop inline-flex min-h-12 items-center justify-center rounded-lg border border-(--card-border) bg-(--surface-bg) px-5 py-3 text-sm text-(--title-color) sm:text-base'
                >
                  View My Work
                </a>
              </div>
            </aside>

            <form onSubmit={handleSubmit(onSubmit)} className='interactive-card rounded-lg p-5 sm:p-6 lg:p-8' autoComplete='on'>
              <input type='hidden' value='Website Project Brief' {...register('form_type')} />

              <div>
                <h2 className='text-2xl font-bold text-(--title-color)'>Your Details</h2>
                <p className={helpClass}>This helps me know who the project is for and how to reply.</p>
              </div>

              <div className='grid grid-cols-1 gap-5 pt-6 md:grid-cols-2'>
                <div>
                  <label className={labelClass} htmlFor='name'>Full name</label>
                  <input id='name' type='text' className={fieldClass} placeholder='Your name' autoComplete='name' {...register('name', { required: true })} />
                </div>
                <div>
                  <label className={labelClass} htmlFor='email'>Email address</label>
                  <input id='email' type='email' className={fieldClass} placeholder='you@example.com' autoComplete='email' {...register('email', { required: true })} />
                </div>
                <div>
                  <label className={labelClass} htmlFor='phone'>Phone or WhatsApp</label>
                  <input id='phone' type='tel' className={fieldClass} placeholder='+233 ...' autoComplete='tel' inputMode='tel' {...register('phone')} />
                </div>
                <div>
                  <label className={labelClass} htmlFor='business-name'>Business or brand name</label>
                  <input id='business-name' type='text' className={fieldClass} placeholder='Name of the business, brand, or idea' autoComplete='organization' {...register('business_name')} />
                </div>
              </div>

              <div className='mt-10 border-t border-white/10 pt-8'>
                <h2 className='text-2xl font-bold text-(--title-color)'>Project Basics</h2>
                <p className={helpClass}>Choose the closest match. You can describe anything custom in the notes.</p>
              </div>

              <div className='grid grid-cols-1 gap-5 pt-6 md:grid-cols-2'>
                <div>
                  <label className={labelClass} htmlFor='site-type'>What type of site do you need?</label>
                  <select id='site-type' className={fieldClass} defaultValue='' {...register('site_type', { required: true })}>
                    <option value='' disabled>Select a site type</option>
                    {siteTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass} htmlFor='timeline'>When would you like it ready?</label>
                  <select id='timeline' className={fieldClass} defaultValue='' {...register('timeline')}>
                    <option value='' disabled>Select a timeline</option>
                    <option value='As soon as possible'>As soon as possible</option>
                    <option value='Within 2 weeks'>Within 2 weeks</option>
                    <option value='Within 1 month'>Within 1 month</option>
                    <option value='1-3 months'>1-3 months</option>
                    <option value='Flexible'>Flexible</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass} htmlFor='budget'>Estimated budget</label>
                  <select id='budget' className={fieldClass} defaultValue='' {...register('budget')}>
                    <option value='' disabled>Select a budget range</option>
                    <option value='Still deciding'>Still deciding</option>
                    <option value='Small starter project'>Small starter project</option>
                    <option value='Standard business site'>Standard business site</option>
                    <option value='Larger custom build'>Larger custom build</option>
                    <option value='Need guidance'>Need guidance</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass} htmlFor='current-website'>Current website, if any</label>
                  <input id='current-website' type='url' className={fieldClass} placeholder='https://...' autoComplete='url' inputMode='url' {...register('current_website')} />
                </div>
              </div>

              <div className='mt-10 border-t border-white/10 pt-8'>
                <h2 className='text-2xl font-bold text-(--title-color)'>Pages and Features</h2>
                <p className={helpClass}>Select anything you expect the website to include. It is okay if this changes later.</p>
              </div>

              <fieldset className='pt-6'>
                <legend className={labelClass}>Pages you may need</legend>
                <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3'>
                  {pageOptions.map((page) => (
                    <label key={page} className='flex min-h-12 items-center gap-3 rounded-lg border border-(--card-border) bg-(--dark-bg) px-4 py-3 text-sm font-semibold text-(--text-color)'>
                      <input type='checkbox' value={page} className='h-4 w-4 accent-(--tertiary-color)' {...register('pages_needed')} />
                      {page}
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className='pt-8'>
                <legend className={labelClass}>Features you may need</legend>
                <div className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
                  {featureOptions.map((feature) => (
                    <label key={feature} className='flex min-h-12 items-center gap-3 rounded-lg border border-(--card-border) bg-(--dark-bg) px-4 py-3 text-sm font-semibold text-(--text-color)'>
                      <input type='checkbox' value={feature} className='h-4 w-4 accent-(--tertiary-color)' {...register('features_needed')} />
                      {feature}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className='mt-10 border-t border-white/10 pt-8'>
                <h2 className='text-2xl font-bold text-(--title-color)'>Project Direction</h2>
                <p className={helpClass}>These answers help shape the layout, tone, and user experience.</p>
              </div>

              <div className='space-y-5 pt-6'>
                <div>
                  <label className={labelClass} htmlFor='main-goal'>What is the main goal of the site?</label>
                  <textarea id='main-goal' className={`${fieldClass} min-h-28 resize-y`} placeholder='Example: I want visitors to see my services and book a consultation.' autoComplete='on' {...register('main_goal', { required: true })} />
                </div>
                <div>
                  <label className={labelClass} htmlFor='audience'>Who is the website for?</label>
                  <textarea id='audience' className={`${fieldClass} min-h-24 resize-y`} placeholder='Example: Small business owners, students, event clients, restaurant customers...' autoComplete='on' {...register('target_audience')} />
                </div>
                <div>
                  <label className={labelClass} htmlFor='style'>How should the site look and feel?</label>
                  <textarea id='style' className={`${fieldClass} min-h-24 resize-y`} placeholder='Example: Clean and modern, bold and colorful, luxury, playful, simple and professional...' autoComplete='on' {...register('design_style')} />
                </div>
                <div>
                  <label className={labelClass} htmlFor='references'>Websites or brands you like</label>
                  <textarea id='references' className={`${fieldClass} min-h-24 resize-y`} placeholder='Paste links or describe what you like about them.' autoComplete='on' {...register('references')} />
                </div>
                <div>
                  <label className={labelClass} htmlFor='content-ready'>Do you already have content ready?</label>
                  <select id='content-ready' className={fieldClass} defaultValue='' {...register('content_ready')}>
                    <option value='' disabled>Select an answer</option>
                    <option value='Yes, I have text and images'>Yes, I have text and images</option>
                    <option value='Some content is ready'>Some content is ready</option>
                    <option value='I need help with content'>I need help with content</option>
                    <option value='Not sure yet'>Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass} htmlFor='extra-notes'>Anything else I should know?</label>
                  <textarea id='extra-notes' className={`${fieldClass} min-h-32 resize-y`} placeholder='Add extra details, special requirements, questions, or things you are unsure about.' autoComplete='on' {...register('extra_notes')} />
                </div>
              </div>

              <button type='submit' className='button-pop mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-(--tertiary-color) px-5 py-3 font-bold text-(--title-color) sm:w-auto'>
                Send Project Brief
              </button>
              {result && <span className='block pt-4 text-sm font-medium text-(--primary-color) sm:inline sm:pl-4 sm:pt-0'>{result}</span>}
            </form>
          </div>
        </section>
      </div>
    </main>
  )
}

export default ProjectBriefPage

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import useWeb3Forms from '@web3forms/react'

import Title from './Title'
import linkedInIcon from '../assets/linkedIn_icon.png'
import githubIcon from '../assets/github_icon.png'
import snapchatIcon from '../assets/snapchat_icon.png'
import whatsappIcon from '../assets/whatsapp_icon.png'
import instagramIcon from '../assets/instagram_icon.png'
import phoneIcon from '../assets/phone_icon.png'

const Contact = () => {
  const { register, reset, handleSubmit } = useForm()
  const [result, setResult] = useState(null)

  const accessKey = '88eec560-64b0-4d12-9c75-26e6f360bdbd'

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: 'Kwame Dawson Portfolio',
      subject: 'Message From Customer',
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
    <section>
      <Title title='Contact Me' />
      <div id='contact' className='grid grid-cols-1 gap-10 pb-20 pt-8 lg:grid-cols-2 lg:gap-14'>
        <div className='pt-10'>
          <h2 className='text-3xl font-bold text-(--title-color) sm:text-4xl'>Let's Connect</h2>
          <p className='pt-7 text-base font-medium leading-8 text-(--text-color) sm:text-lg'>
            Feel free to reach out for collaborations, project ideas, or just to say hello. I'm always open to discussing new opportunities.
          </p>
          <div className='interactive-card mt-8 rounded-lg p-5'>
            <h3 className='text-xl font-bold text-(--title-color)'>Already have a website idea?</h3>
            <p className='pt-3 text-sm font-medium leading-7 text-(--text-color) sm:text-base'>
              If you know you need a portfolio, booking site, landing page, business website, or custom web app, fill out a short project brief so I can understand your goals, features, timeline, and style before we talk.
            </p>
            <a
              href='/project-brief'
              className='button-pop mt-5 inline-flex min-h-12 items-center justify-center rounded-lg bg-(--tertiary-color) px-5 py-3 text-sm font-bold text-(--title-color) sm:text-base'
            >
              Start a Website Project Brief
            </a>
          </div>
          <p className='pt-9 text-xs font-bold uppercase tracking-[0.18em] text-(--primary-color) sm:text-sm'>
            Active on various social media platforms
          </p>
          <div className='flex flex-wrap gap-4 pt-8'>
            <a
             className='button-pop flex h-12 w-12 items-center justify-center rounded-lg border border-(--card-border) bg-(--surface-bg)' target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/kwameofeidawson?utm_source=share_via&utm_content=profile&utm_medium=member_ios'><img className='h-7 w-7' src={linkedInIcon} alt='LinkedIn' />
            </a>
            <a
             className='button-pop flex h-12 w-12 items-center justify-center rounded-lg border border-(--card-border) bg-(--surface-bg)' target='_blank' rel='noopener noreferrer' href='https://github.com/Kod-19'><img className='h-7 w-7' src={githubIcon} alt='GitHub' />
            </a>
            <a
             className='button-pop flex h-12 w-12 items-center justify-center rounded-lg border border-(--card-border) bg-(--surface-bg)' target='_blank' rel='noopener noreferrer' href='https://snapchat.com/t/UFDTyOJG'><img className='h-7 w-7' src={snapchatIcon} alt='Snapchat' />
            </a>
            <a
             className='button-pop flex h-12 w-12 items-center justify-center rounded-lg border border-(--card-border) bg-(--surface-bg)' target='_blank' rel='noopener noreferrer' href='https://wa.me/0595363184'><img className='h-7 w-7' src={whatsappIcon} alt='WhatsApp' />
            </a>
            <a
             className='button-pop flex h-12 w-12 items-center justify-center rounded-lg border border-(--card-border) bg-(--surface-bg)' target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/kwame.dawson?igsh=MWR1M2N5NzRmdjVpNw%3D%3D&utm_source=qr'><img className='h-7 w-7' src={instagramIcon} alt='Instagram' />
            </a>
          </div>

          <p className='flex items-center gap-2 pt-9 font-semibold text-(--title-color)'>
            <img className='h-6 w-6 shrink-0' src={phoneIcon} alt='' aria-hidden='true' />
            <span>Call me:{' '}</span>
            <a className='inline-flex min-h-11 items-center text-(--primary-color) underline-offset-4 transition hover:underline focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--primary-color)' href='tel:+233595363184'>
              +233 59 536 3184
            </a>
          </p>
        </div>

        <div className='pt-10'>
          <h2 className='text-3xl font-bold text-(--title-color) sm:text-4xl'>Send a Message</h2>

          <div className='interactive-card mt-8 w-full rounded-lg p-5 sm:p-6'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type='text'
                id='first-name'
                className='w-full rounded-lg border border-(--card-border) bg-(--dark-bg) px-4 py-3 text-(--title-color) outline-none transition focus:border-(--primary-color) focus:ring-2 focus:ring-sky-400/20'
                placeholder='First Name'
                {...register('first-name', { required: true })}
              />
              <input
                type='text'
                id='other-names'
                className='mt-5 w-full rounded-lg border border-(--card-border) bg-(--dark-bg) px-4 py-3 text-(--title-color) outline-none transition focus:border-(--primary-color) focus:ring-2 focus:ring-sky-400/20'
                placeholder='Other Names'
                {...register('other-names')}
              />
              <input
                type='email'
                id='email'
                className='mt-5 w-full rounded-lg border border-(--card-border) bg-(--dark-bg) px-4 py-3 text-(--title-color) outline-none transition focus:border-(--primary-color) focus:ring-2 focus:ring-sky-400/20'
                placeholder='Your Email'
                {...register('email', { required: true })}
              />
              <textarea
                id='message'
                placeholder='Write Your Message'
                className='mt-5 min-h-36 w-full resize-y rounded-lg border border-(--card-border) bg-(--dark-bg) px-4 py-3 text-(--title-color) outline-none transition focus:border-(--primary-color) focus:ring-2 focus:ring-sky-400/20'
                {...register('message', { required: true })}
              />
              <button type='submit' className='button-pop mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-(--tertiary-color) px-5 py-3 font-bold text-(--title-color) sm:w-auto'>
                Submit
              </button>
              {result && <span className='block pt-4 text-sm font-medium text-(--primary-color) sm:inline sm:pl-4 sm:pt-0'>{result}</span>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

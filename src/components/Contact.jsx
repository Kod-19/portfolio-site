import { useState } from 'react'
import { useForm } from 'react-hook-form'

import Title from './Title'
import linkedInIcon from '../assets/linkedIn_icon.png'
import githubIcon from '../assets/github_icon.png'
import whatsappIcon from '../assets/whatsapp_icon.png'
import instagramIcon from '../assets/instagram_icon.png'
import phoneIcon from '../assets/phone_icon.png'

const Contact = () => {
  const { register, reset, handleSubmit } = useForm()
  const [result, setResult] = useState(null)

  const whatsappNumber = '233595363184'

  const onSubmit = (data) => {
    const messageLines = [
      'New message from KD Studios website:',
      `Name: ${data['first-name'] || 'N/A'}`,
      `Email: ${data.email || 'N/A'}`,
      `Message: ${data.message || 'N/A'}`,
    ]

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageLines.join('\n'))}`
    window.open(whatsappUrl, '_blank')
    setResult('WhatsApp chat opened. Send the message to complete the submission.')
    reset()
  }

  return (
    <section>
      <Title title='Contact Me' />
      <div id='contact' className='grid grid-cols-1 gap-8 pb-20 pt-8 lg:grid-cols-2 lg:gap-14'>
        <div className='pt-6 sm:pt-10'>
          <h2 className='text-3xl font-bold text-(--title-color) sm:text-4xl'>Let's Connect</h2>
          <p className='pt-5 text-base font-medium leading-8 text-(--text-color) sm:text-lg'>
            Ready to build a website, store, custom web app, or mobile app idea? Send a message or start with a short project brief.
          </p>
          <div className='mt-7 flex flex-col gap-3 font-bold sm:flex-row'>
            <a
              href='/project-brief'
              className='button-pop inline-flex min-h-12 items-center justify-center rounded-lg bg-(--tertiary-color) px-5 py-3 text-sm text-(--title-color) sm:text-base'
            >
              Start Project Brief
            </a>
            <a
              href='/payments'
              className='button-pop inline-flex min-h-12 items-center justify-center rounded-lg bg-(--accent-color) px-5 py-3 text-sm font-black text-(--dark-bg) shadow-xl shadow-(--accent-color)/20 sm:text-base'
            >
              Make Payment
            </a>
          </div>

          <div className='flex flex-wrap gap-4 pt-8'>
            <a
             className='button-pop flex h-12 w-12 items-center justify-center rounded-lg border border-(--card-border) bg-(--surface-bg)' target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/kwameofeidawson?utm_source=share_via&utm_content=profile&utm_medium=member_ios'><img className='h-7 w-7' src={linkedInIcon} alt='LinkedIn' />
            </a>
            <a
             className='button-pop flex h-12 w-12 items-center justify-center rounded-lg border border-(--card-border) bg-(--surface-bg)' target='_blank' rel='noopener noreferrer' href='https://github.com/Kod-19'><img className='h-7 w-7' src={githubIcon} alt='GitHub' />
            </a>
            <a
             className='button-pop flex h-12 w-12 items-center justify-center rounded-lg border border-(--card-border) bg-(--surface-bg)' target='_blank' rel='noopener noreferrer' href='https://wa.me/233595363184'><img className='h-7 w-7' src={whatsappIcon} alt='WhatsApp' />
            </a>
            <a
             className='button-pop flex h-12 w-12 items-center justify-center rounded-lg border border-(--card-border) bg-(--surface-bg)' target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/kdstudios._?igsh=MWR1M2N5NzRmdjVpNw%3D%3D&utm_source=qr'><img className='h-7 w-7' src={instagramIcon} alt='Instagram' />
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

        <div className='pt-6 sm:pt-10'>
          <h2 className='text-3xl font-bold text-(--title-color) sm:text-4xl'>Send a Message</h2>

          <div className='interactive-card mt-8 w-full rounded-lg p-5 sm:p-6'>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete='on'>
              <input
                type='text'
                id='first-name'
                className='w-full rounded-lg border border-(--card-border) bg-(--dark-bg) px-4 py-3 text-(--title-color) outline-none transition focus:border-(--primary-color) focus:ring-2 focus:ring-sky-400/20'
                placeholder='First Name'
                autoComplete='given-name'
                {...register('first-name', { required: true })}
              />
              <input
                type='email'
                id='email'
                className='mt-5 w-full rounded-lg border border-(--card-border) bg-(--dark-bg) px-4 py-3 text-(--title-color) outline-none transition focus:border-(--primary-color) focus:ring-2 focus:ring-sky-400/20'
                placeholder='Your Email'
                autoComplete='email'
                {...register('email', { required: true })}
              />
              <textarea
                id='message'
                placeholder='Write Your Message'
                className='mt-5 min-h-36 w-full resize-y rounded-lg border border-(--card-border) bg-(--dark-bg) px-4 py-3 text-(--title-color) outline-none transition focus:border-(--primary-color) focus:ring-2 focus:ring-sky-400/20'
                autoComplete='on'
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

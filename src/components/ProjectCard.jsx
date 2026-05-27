import { useState } from 'react'

const ProjectCard = ({ title, desc, img, imgFit = 'cover', imgPosition = 'center', demoLink, tags = [], status, caseStudy, details = [] }) => {
  const [showCaseStudy, setShowCaseStudy] = useState(false)
  const isInProgress = status?.toLowerCase() === 'in progress'

  const renderCaseStudy = () => {
    if (!caseStudy) return null

    const challenge = (caseStudy.match(/Challenge:\s*([\s\S]*?)(?=Approach:|Result:|$)/i) || [])[1]?.trim()
    const approach = (caseStudy.match(/Approach:\s*([\s\S]*?)(?=Result:|$)/i) || [])[1]?.trim()
    const result = (caseStudy.match(/Result:\s*([\s\S]*)$/i) || [])[1]?.trim()

    return (
      <>
        {challenge && (
          <p className='text-sm text-(--text-color)'>
            <strong>Challenge:</strong> {challenge}
          </p>
        )}
        {approach && (
          <p className='text-sm text-(--text-color)'>
            <strong>Approach:</strong> {approach}
          </p>
        )}
        {result && (
          <p className='text-sm text-(--text-color)'>
            <strong>Result:</strong> {result}
          </p>
        )}
      </>
    )
  }

  return (
    <article className='interactive-card group flex h-full flex-col rounded-lg p-4 sm:p-5'>
      {img ? (
        <div className='flex h-44 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-(--surface-bg) sm:h-56'>
          <img
            className='max-h-full max-w-full transition duration-500 group-hover:scale-105'
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
      <h3 className='px-1 pt-3 text-xl font-black text-(--title-color) sm:text-2xl'>{title}</h3>
      <p className='flex-1 px-1 py-4 text-sm font-medium leading-7 text-(--text-color) sm:text-base'>{desc}</p>
      {tags.length > 0 && (
        <div className='flex flex-wrap gap-2 px-1 pb-5'>
          {tags.map((tag) => (
            <span key={tag} className='rounded-full border border-(--card-border) bg-(--surface-bg) px-3 py-1 text-xs font-bold text-(--text-color)'>
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className='mt-3 flex w-full gap-3 sm:w-auto'>
        {demoLink && !isInProgress && (
          <a
            href={demoLink}
            target='_blank'
            rel='noopener noreferrer'
            className='button-pop inline-flex min-h-11 items-center justify-center rounded-lg border border-(--card-border) bg-(--surface-bg) px-4 py-2 text-sm font-bold text-(--primary-color) sm:w-fit'
          >
            View Demo
          </a>
        )}

        <button
          type='button'
          onClick={() => setShowCaseStudy((v) => !v)}
          aria-expanded={showCaseStudy}
          className='button-pop mt-auto inline-flex min-h-11 items-center justify-center rounded-lg bg-(--tertiary-color) px-4 py-2 text-sm font-bold text-(--title-color) sm:w-fit cursor-pointer'
        >
          {showCaseStudy ? 'Hide Case Study' : 'Case Study'}
        </button>
      </div>
      {showCaseStudy && (
        <div className='mt-4 rounded-b-lg border-t border-white/6 pt-4'>
          <div className='space-y-3'>

                  {caseStudy ? renderCaseStudy() : <p className='text-sm text-(--text-color)'>No additional case study details available.</p>}

                  {details && details.length > 0 && (
                    <ul className='list-disc pl-5 pt-2 text-sm text-(--text-color)'>
                      {details.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  )}
          </div>
        </div>
      )}
    </article>
  )
}

export default ProjectCard


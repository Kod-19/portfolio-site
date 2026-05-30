import { Analytics } from "@vercel/analytics/react"
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServicesOverview from './components/ServicesOverview'
import Projects from './components/Projects'
import Pricing from './components/Pricing'
import BlogPreview from './components/BlogPreview'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectsPage from './pages/ProjectsPage'
import ProjectBriefPage from './pages/ProjectBriefPage'
import PaymentPage from './pages/PaymentPage'
import BlogPage from './pages/BlogPage'


const App = () => {
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/'
  const isProjectsPage = currentPath === '/projects'
  const isProjectBriefPage = currentPath === '/project-brief'
  const isPaymentPage = currentPath === '/payments'
  const isBlogPage = currentPath === '/blog'

  useEffect(() => {
    // Scroll to an element id while accounting for a sticky header height.
    const scrollToHash = (hash) => {
      try {
        const id = hash || (window.location.hash ? window.location.hash.slice(1) : '')
        if (!id) return
        const el = document.getElementById(id)
        if (!el) return

        // Measure header height (supports responsive header heights)
        const header = document.querySelector('header')
        const headerHeight = header ? header.offsetHeight : 0

        const rect = el.getBoundingClientRect()
        const top = window.scrollY + rect.top - headerHeight - 12 // 12px extra padding

        window.scrollTo({ top, behavior: 'smooth' })
      } catch (err) {
        // ignore
      }
    }

    // Expose for other components (Navbar) to call directly when on the same page
    window.__scrollToHash = scrollToHash

    // Attempt to scroll shortly after render (handles navigation to '/#id')
    const t = setTimeout(() => scrollToHash(), 60)
    const onHash = () => setTimeout(() => scrollToHash(), 60)
    window.addEventListener('hashchange', onHash)
    return () => {
      clearTimeout(t)
      window.removeEventListener('hashchange', onHash)
      try {
        // cleanup exposed function
        if (window.__scrollToHash) delete window.__scrollToHash
      } catch (e) {}
    }
  }, [currentPath])

  return (
    <>
      <Navbar />
      {isProjectBriefPage ? (
        <ProjectBriefPage />
      ) : isProjectsPage ? (
        <ProjectsPage />
      ) : isPaymentPage ? (
        <PaymentPage />
      ) : isBlogPage ? (
        <BlogPage />
      ) : (
        <div className='min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(102,227,255,0.12),transparent_34%),radial-gradient(circle_at_85%_10%,rgba(255,209,102,0.08),transparent_28%),var(--dark-bg)] text-(--text-color) font-sans selection:bg-sky-400/25'>
          <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-20'>
            <Hero />
            <ServicesOverview />
            <Projects />
            <Pricing />
            <BlogPreview />
            <Process />
            <Contact />
          </div>
        </div>
      )}
      <Footer />
      <Analytics />
    </>

  )
}

export default App

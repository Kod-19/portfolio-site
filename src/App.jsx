import { Analytics } from "@vercel/analytics/react"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectsPage from './pages/ProjectsPage'
import ProjectBriefPage from './pages/ProjectBriefPage'
import PaymentPage from './pages/PaymentPage'


const App = () => {
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/'
  const isProjectsPage = currentPath === '/projects'
  const isProjectBriefPage = currentPath === '/project-brief'
  const isPaymentPage = currentPath === '/payments'

  return (
    <>
      <Navbar />
      {isProjectBriefPage ? (
        <ProjectBriefPage />
      ) : isProjectsPage ? (
        <ProjectsPage />
      ) : isPaymentPage ? (
        <PaymentPage />
      ) : (
        <div className='min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(102,227,255,0.12),transparent_34%),radial-gradient(circle_at_85%_10%,rgba(255,209,102,0.08),transparent_28%),var(--dark-bg)] text-(--text-color) font-sans selection:bg-sky-400/25'>
          <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-20'>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </div>
        </div>
      )}
      <Footer />
    </>

  )
}

export default App

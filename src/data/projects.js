import demo2 from '../assets/demo2.png'
import dem03 from '../assets/demo3.png'
import demo4 from '../assets/demo4.png'


export const featuredProjects = [
  {
    title: "Beckery's",
    desc: 'A fully responsive site for a small-scale baking business.',
    img: dem03,
    demoLink: 'https://beckery-s.vercel.app/',
    tags: ['React', 'Tailwind CSS', 'Vercel', 'Client'],
    status: 'Live demo',
    caseStudy: 'Challenge: the client needed a simple online storefront that loaded quickly on mobile and showcased daily products. Approach: I delivered a mobile-first responsive build with optimized image assets, clear product pages, and streamlined order CTAs. Result: faster page loads and a straightforward purchase flow that reduced friction for mobile customers.',
    details: ['Mobile-first layout', 'Optimized images and lazy loading', 'Simplified product presentation and CTAs'],
  },
  {
    title: 'KanFlow',
    desc: 'A productivity app to manage and track your daily tasks.',
    img: demo2,
    demoLink: 'https://kan-flow-ivory.vercel.app/',
    tags: ['React', 'Tailwind CSS', 'Vercel', 'Personal'],
    status: 'Live demo',
    caseStudy: 'Challenge: design a productivity tool that encourages quick task entry and low cognitive load. Approach: implemented a lightweight state model with keyboard shortcuts, persistent local storage, and a focused dashboard layout. Result: an intuitive, responsive task manager that supports rapid entry and short, repeatable workflows across devices.',
    details: ['Keyboard shortcuts for faster entry', 'Persistent local storage', 'Responsive dashboard layout'],
  },
  {
    title: 'Netflix Clone',
    desc: 'A Netflix-style UI prototype showcasing movie browsing, auth, and watchlist features.',
    img: demo4,
    demoLink: 'https://netflix-clone-seven-hazel-31.vercel.app/',
    tags: ['React', 'Tailwind CSS', 'Vercel', 'Firebase', 'Personal'],
    status: 'Live demo',
    caseStudy: 'Challenge: recreate a polished, browsable streaming UI while integrating real movie data and user accounts. Approach: built a responsive React frontend with Tailwind, consumed the TMDB API for dynamic movie metadata, and used Firebase Authentication + Firestore to manage users and persistent watchlists; implemented performant carousels, lazy-loaded assets, and a movie detail modal with trailer previews. Result: a responsive, production-feeling Netflix-like interface with secure authentication, persistent user watchlists, and smooth browsing interactions.',
    details: [
      'TMDB API integration for dynamic movie data',
      'Firebase Authentication and Firestore for accounts & watchlists',
      'Responsive carousels and grid layouts with Tailwind CSS',
      'Movie detail modal with trailers and previews',
      'Optimized images and lazy loading for performance',
      'Role: personal full-stack prototype (frontend + backend services)'
    ],
  },
]

export const otherProjects = [
  {
    title: 'Portfolio Website',
    desc: 'The personal portfolio you are viewing now, built to present my work, skills, and contact details in one polished place.',
    img: null,
    demoLink: '/',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    status: 'In progress',
  },
  {
    title: 'API Practice Builds',
    desc: 'A collection of backend experiments focused on authentication, data modeling, server routes, and clean API responses.',
    img: null,
    demoLink: '',
    tags: ['Node.js', 'Express', 'MongoDB'],
    status: 'Building',
  },
  {
    title: 'UI Component Experiments',
    desc: 'Small interface studies where I explore layouts, reusable components, responsive behavior, and smooth interaction states.',
    img: null,
    demoLink: '',
    tags: ['React', 'CSS', 'JavaScript'],
    status: 'Exploring',
  },
  {
    title: 'Full-Stack App Concepts',
    desc: 'Early product ideas being shaped into complete applications with real workflows, dashboards, and persistent data.',
    img: null,
    demoLink: '',
    tags: ['Full stack', 'Product design', 'Web apps'],
    status: 'Planning',
  },
]

export const allProjects = [...featuredProjects, ...otherProjects]

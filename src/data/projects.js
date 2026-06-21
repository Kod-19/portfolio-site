import demo2 from '../assets/demo2.png'
import dem03 from '../assets/demo3.png'
import demo4 from '../assets/demo4.png'
import demo5 from '../assets/fitforge.png'

export const featuredProjects = [
  {
    title: "Beckery's",
    desc: 'A mobile-first, fast-loading storefront for a small baking business that highlights daily specials and simplifies ordering.\nOptimized image delivery and accessible markup ensure reliable mobile performance.',
    img: dem03,
    demoLink: 'https://beckery-s.vercel.app/',
    tags: ['React', 'Tailwind CSS', 'Vercel', 'Client'],
    status: 'Live demo',
    caseStudy: 'Challenge: the client needed a simple online storefront that loaded quickly on mobile and showcased daily products. Approach: I delivered a mobile-first responsive build with optimized image assets, clear product pages, and streamlined order CTAs. Result: faster page loads and a straightforward purchase flow that reduced friction for mobile customers.\n\nImplementation: to make the site fast and maintainable I optimized image sizes and formats, added responsive srcsets and lazy loading, minimized critical CSS using Tailwind utilities, and introduced a lightweight admin workflow for updating daily offerings. Accessible markup, clear hierarchy, and prominent CTAs were prioritized to keep ordering friction low on phones.\n\nImpact & next steps: the launch produced noticeable improvements in page speed and mobile engagement. Future iterations include basic inventory indicators, a simple email capture for daily specials, and small A/B tests on CTA wording to further increase conversions.',
    details: ['Mobile-first layout', 'Optimized images and lazy loading', 'Simplified product presentation and CTAs'],
  },
  {
    title: 'FitForge',
    desc: 'A personal workout-fitness tracker aiming to make workout and exercise sessions productive.',
    img: demo5,
    demoLink: 'https://fit-forge-orpin-eta.vercel.app/',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Firebase', 'Authentication', 'Vercel', 'Personal'],
    status: 'Live demo',
    caseStudy: 'Challenge: many fitness apps are either feature-bloated or force complex setup, which made consistent logging and tracking a pain. Approach: I built FitForge as a lightweight, mobile-first React + Vite app with a modular workout builder, quick session logging (sets/reps/weight), an exercise library, timers, and simple progress visualizations. User data is secured with Firebase Authentication and persisted in Firestore, with local caching to support offline entries and CSV export for external analysis. Result: streamlined workout flows that reduce friction for logging sessions, clearer progress insights through charts and history, and a deployable demo that supports real training workflows.',
    details: [
      'Modular workout builder with reusable templates and quick-start routines',
      'Session logging: sets, reps, weights, rest timers, and timestamps',
      'Exercise library with metadata and search for fast selection',
      'Progress visualizations: strength trends and consistency calendar',
      'Firebase Authentication + Firestore for secure, persistent user data',
      'Offline-friendly caching with sync and CSV export for analysis',
      'Role: personal full-stack implementation (frontend, data, deployment)'
    ]
  },
  {
    title: 'Netflix Clone',
    desc: 'A Netflix-style UI prototype showcasing movie browsing, auth, and watchlist features.',
    img: demo4,
    demoLink: 'https://netflix-clone-seven-hazel-31.vercel.app/',
    tags: ['React', 'Tailwind CSS', 'Vercel', 'Firebase', 'Authentication', 'Personal'],
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

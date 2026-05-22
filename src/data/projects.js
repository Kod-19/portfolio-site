import demo1 from '../assets/demo1.png'
import demo2 from '../assets/demo2.png'

export const featuredProjects = [
  {
    title: 'Recipe Planner',
    desc: 'A simple recipe management app to organize and plan your meals.',
    img: demo1,
    imgFit: 'contain',
    imgPosition: 'top center',
    demoLink: 'https://peaceful-success-production-37b3.up.railway.app/',
    tags: ['React', 'Node.js', 'Express'],
    status: 'Live demo',
  },
  {
    title: 'KanFlow',
    desc: 'A productivity app to manage and track your daily tasks.',
    img: demo2,
    demoLink: 'https://kan-flow-ivory.vercel.app/',
    tags: ['React', 'Tailwind CSS', 'Vercel'],
    status: 'Live demo',
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

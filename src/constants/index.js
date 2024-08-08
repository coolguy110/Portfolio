import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  coverhunt,
  dcc,
  kelhel,
  microverse,


  wxllspace,
  age1,
  deus,
  hashgreed,
  danteai,
  totalmoto,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Software Engineer',
    company_name: 'Dante AI',
    company_state:'United Kingdom',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2022 - Apr 2023',
  },
  {
    title: 'Sotftware Engineer',
    company_name: 'AdCritter',
    company_state:'Nashville Tenessee United States',
    icon: microverse,
    iconBg: '#333333',
    date: 'May 2023 - Jun 2023',
  },
  {
    title: 'Software Engineer',
    company_name: 'Clutsh',
    company_state:'New York United States',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Aug 2022 - Oct 2023',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Big Digital',
    company_state:'Toronto On Canada',
    icon: dcc,
    iconBg: '#333333',
    date: 'Jul 2022 - Oct 2023',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'totalmoto',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'Nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'Node.js',
        color: 'green-text-gradient',
      },
      {
        name: 'Docker',
        color: 'pink-text-gradient',
      },
    ],
    image: totalmoto,
    demo: 'https://totalmoto.net',
  },
  {
    id: 'project-6',
    name: 'wxllspace',
    description: 'A comic characters list app that displays Marvel characters.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: wxllspace,
    demo: 'https://wxllspace.com ',
  },
  {
    id: 'project-2',
    name: 'age1',
    description:
      'A leaderboard list app that displays scores submitted by different players.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: age1,
    demo: 'https://age1.com/',
  },
  {
    id: 'project-3',
    name: 'deus',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: deus,
    demo: 'https://deus.finance',
  },
  {
    id: 'project-4',
    name: 'hashgreed',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: hashgreed,
    demo: 'https://hashgreed.com',
  },
  {
    id: 'project-5',
    name: 'danteai',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: danteai,
    demo: 'https://dante-ai.com',
  },
];

export { services, technologies, experiences, projects };

import { skillIcons } from '../components/icons';
import { FeaturedProject, Project } from './types';

export const titles = [
  'Full-Stack Developer',
  'Coding Hobbyist',
  'Cat Dad',
  'Debugging Expert'
];

export const resume =
  'https://drive.google.com/file/d/13cYd5A72YuYxhPj4bAr9L-fXbg0em1A8/view?usp=sharing';

export const contacts = {
  github: 'jsonFox',
  linkedin: 'jasonfox96',
  email: 'jfox0096@gmail.com'
};

export const skills: Array<keyof typeof skillIcons> = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'PostgreSQL',
  'MongoDB',
  'NodeJS',
  'Express',
  'React',
  'NextJS',
  'NestJS',
  'Jest',
  'Material-UI',
  'Prisma',
  'Vite',
  'AWS',
  'Azure DevOps'
];

export const projects: {
  featured: FeaturedProject[];
  list: Project[];
} = {
  featured: [
    {
      title: 'Niner Esports Draft League',
      tags: ['NextJS', 'PostgreSQL', 'Airtable'],
      description:
        "Custon tournament platform built for UNC Charlotte's Niner Esports.",
      live: 'https://draftleague.nineresports.org/',
      mobile: false
    },
    {
      title: 'Chopping Block',
      tags: ['React Native', 'Firebase', 'Ant Design'],
      description:
        'A helpful app that takes the hassle out of figuring out where to eat.',
      live: '',
      source: 'https://github.com/FidelHen/Chopping-Block',
      mobile: true
    }
  ],
  list: [
    {
      title: 'Blastoff',
      tags: ['Express', 'Sequelize', 'Handlebars', 'Bulma'],
      description: 'SpaceX launch information display using SpaceX API.',
      live: 'https://blastoff.herokuapp.com/',
      source: 'https://github.com/jsonfox/blastoff'
    },
    {
      title: 'Tierbuilder',
      tags: ['TypeScript', 'Redux', 'Tailwind'],
      description: 'A lightweight React clone of Tiermaker.com',
      live: 'https://jsonfox.github.io/tierbuilder/',
      source: 'https://github.com/jsonfox/tierbuilder'
    },
    {
      title: 'OneStats',
      tags: ['Electron', 'React', 'Material UI'],
      description:
        'React-based Electron application scaffolded with Vite designed to fetch and parse bulk match data from Riot API.',
      live: '',
      source: 'https://github.com/jsonfox/OneStats'
    },
    {
      title: 'Tierlisted.gg',
      tags: ['React', 'React Beautiful DnD', 'CSS'],
      description:
        'Clean and simple tier list maker for League of Legends Worlds 2022 teams with filters and rendered image/text output.',
      live: 'https://tierlisted.gg',
      source: ''
    },
    {
      title: 'Rosiebot',
      tags: ['Discordjs', 'Sequelize', 'Bootstrap', 'AWS'],
      description:
        'Your friendly neighborhood Discord c(h)atbot. Hosted on AWS.',
      live: 'https://jsonfox.github.io/rosiebot/',
      source: 'https://github.com/jsonfox/rosiebot'
    },
    {
      title: 'Password Generator',
      tags: ['HTML', 'CSS', 'JavaScript'],
      description:
        'Simple SPA to generate a secure password with the click of a button.',
      live: 'https://jsonfox.github.io/password-generator/',
      source: 'https://github.com/jsonfox/password-generator'
    }
  ]
};

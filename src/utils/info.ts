export const titles = [
  'Full-Stack Developer',
  'Comp Sci Graduate',
  'Coding Hobbyist',
  'Cat Dad'
];

export const resume =
  'https://drive.google.com/file/d/1cVI2p_qS7TgrYZrGtiM8VKw9vuuFCX1X/view?usp=share_link';

export const contacts = {
  github: 'jsonFox',
  linkedin: 'jasonfox96',
  email: 'jfox0096@gmail.com'
};

export const projects = {
  default: {
    title: '',
    tags: [],
    description: '',
    live: '',
    source: ''
  },
  featured: [
    {
      title: 'Tierbuilder',
      tags: ['TypeScript', 'Redux', 'Tailwind'],
      description: 'A lightweight React clone of Tiermaker.com',
      live: 'https://jsonfox.github.io/tierbuilder/',
      source: 'https://github.com/jsonfox/tierbuilder',
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
      title: 'Gankbait',
      tags: ['Express', 'Pug', 'OAuth2', 'MongoDB'],
      description:
        'GCP-hosted SPA for analyzing match timeline data from the Riot match-v5 API.',
      live: 'https://gankbait-36ce7.web.app/',
      source: 'https://github.com/jsonfox/gankbait'
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

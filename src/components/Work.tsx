import { Box, Stack, SimpleGrid } from '@chakra-ui/react';
import { SectionTitle, FeaturedProjectCard, ProjectCard } from './partials';
import gbUrl from '../assets/gankbait-project.png';
import cbUrl from '../assets/chopping-block-project.png';

const featuredProjects = [
  {
    imageUrl: gbUrl,
    mobile: false,
    title: 'Gankbait',
    tags: ['Serverless', 'Pug', 'OAuth2', 'MongoDB'],
    description:
      'GCP-hosted SPA for analyzing match timeline data from the Riot match-v5 API.',
    liveUrl: 'https://gankbait-36ce7.web.app/',
    sourceUrl: 'https://github.com/JtheFox/gankbait'
  },
  {
    imageUrl: cbUrl,
    mobile: true,
    title: 'Chopping Block',
    tags: ['React Native', 'Firebase Auth', 'Ant Design'],
    description:
      'A helpful app that takes the hassle out of figuring out where to eat.',
    liveUrl: '',
    sourceUrl: 'https://github.com/FidelHen/Chopping-Block'
  }
];

const projects = [
  {
    title: 'OneStats',
    tags: ['Electron', 'React', 'Material UI'],
    description:
      'React-based Electron application scaffolded with Vite designed to fetch and parse bulk match data from Riot API.',
    liveUrl: '',
    sourceUrl: 'https://github.com/jthefox/OneStats'
  },
  {
    title: 'Tierlisted.gg',
    tags: ['React', 'React Beautiful DnD', 'CSS'],
    description:
      'Clean and simple tier list maker for League of Legends Worlds 2022 teams with filters and rendered image/text output.',
    liveUrl: 'https://tierlisted.gg',
    sourceUrl: ''
  },
  {
    title: 'Rosiebot',
    tags: ['Discordjs', 'Sequelize', 'Bootstrap', 'AWS'],
    description: 'Your friendly neighborhood Discord c(h)atbot. Hosted on AWS.',
    liveUrl: 'https://jthefox.github.io/rosiebot/',
    sourceUrl: 'https://github.com/JtheFox/rosiebot'
  },
  {
    title: 'Blastoff',
    tags: ['Express', 'Sequelize', 'Handlebars', 'Bulma'],
    description: 'SpaceX launch information display using SpaceX API.',
    liveUrl: 'https://blastoff2.herokuapp.com/',
    sourceUrl: 'https://github.com/JtheFox/blastoff'
  },
  {
    title: 'Password Generator',
    tags: ['HTML', 'CSS', 'JavaScript'],
    description:
      'Simple SPA to generate a secure password with the click of a button.',
    liveUrl: 'https://jthefox.github.io/password-generator/',
    sourceUrl: 'https://github.com/JtheFox/password-generator'
  }
];

export default function Work() {
  return (
    <Box as="section" id="my-work">
      <SectionTitle text="My Work" />
      <Stack spacing={6}>
        {featuredProjects.map((p, i) => (
          <FeaturedProjectCard key={i} {...p} />
        ))}
        <SimpleGrid
          gap={{ base: 4, lg: 6, xl: 10 }}
          columns={{ base: 1, md: 2, lg: 3 }}
        >
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  );
}

import { Box, Stack, SimpleGrid } from "@chakra-ui/react";
import { SectionTitle, FeaturedProjectCard, ProjectCard } from "./partials";
import wtlUrl from '../assets/worlds-tier-list-project.png';
import cbUrl from '../assets/chopping-block-project.png';

const featuredProjects = [
  {
    imageUrl: wtlUrl,
    mobile: false,
    title: 'Worlds Tier List Maker',
    tags: ['React', 'React Beautiful DnD', 'CSS'],
    description: 'Clean and simple tier list maker for League of Legends Worlds 2022 teams with filters and rendered image/text output.',
    liveUrl: 'https://www.worlds.jthefox.com/',
    sourceUrl: '',
  },
  {
    imageUrl: cbUrl,
    mobile: true,
    title: 'Chopping Block',
    tags: ['React Native', 'Firebase Auth', 'Ant Design'],
    description: 'A helpful app that takes the hassle out of figuring out where to eat.',
    liveUrl: '',
    sourceUrl: 'https://github.com/FidelHen/Chopping-Block',
  },
]

const projects = [
  {
    title: 'Gankbait',
    tags: ['Express', 'Pug', 'Bulma', 'OAuth2', 'JWT'],
    description: 'SPA for analyzing match timeline data from the Riot League of Legends match API.',
    liveUrl: 'https://frightened-hat-colt.cyclic.app/',
    sourceUrl: 'https://github.com/JtheFox/gankbait',
  },
  {
    title: 'Rosiebot',
    tags: ['Discordjs', 'Sequelize', 'Bootstrap', 'AWS'],
    description: 'Your friendly neighborhood Discord c(h)atbot.',
    liveUrl: 'https://jthefox.github.io/rosiebot/',
    sourceUrl: 'https://github.com/JtheFox/rosiebot',
  },
  {
    title: 'Blastoff',
    tags: ['Express', 'Sequelize', 'Handlebars', 'Bulma'],
    description: 'SpaceX launch information display using SpaceX API.',
    liveUrl: 'https://blastoff2.herokuapp.com/',
    sourceUrl: 'https://github.com/JtheFox/blastoff',
  },
  {
    title: 'Password Generator',
    tags: ['HTML', 'CSS', 'JavaScript'],
    description: 'Generate a secure password with the click of a button.',
    liveUrl: 'https://jthefox.github.io/password-generator/',
    sourceUrl: 'https://github.com/JtheFox/password-generator',
  },
]

export default function Work() {
  return (
    <Box as='section' id='mywork'>
      <SectionTitle text='My Work' />
      <Stack spacing={6}>
        {featuredProjects.map((p, i) => (
          <FeaturedProjectCard key={i} {...p} />
        ))}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3, }} gap={{ base: 4, lg: 6, xl: 10 }}>
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  )
}
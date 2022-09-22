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

export default function Work() {
  return (
    <Box as='section' id='mywork'>
      <SectionTitle text='My Work' />
      <Stack spacing={6}>
        {featuredProjects.map((p, i) => (
          <FeaturedProjectCard key={i} {...p} />
        ))}
      </Stack>
      <ProjectCard />
    </Box>
  )
}
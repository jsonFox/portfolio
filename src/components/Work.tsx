import { Box } from "@chakra-ui/react";
import { SectionTitle, FeaturedProjectCard, ProjectCard } from "./partials";
import wtlUrl from '../assets/worlds-tier-list-project.png';
import cbUrl from '../assets/chopping-block-project.png';

const featuredProjects = [
  {
    title: 'Worlds Tier List Maker',
    description: 'Clean and simple tier list maker for League of Legends Worlds 2022 teams with filters and rendered image/text output.',
    imageUrl: wtlUrl,
    tags: ['React'],
    liveUrl: '',
    sourceUrl: '',
  },
  {
    title: '',
    description: '',
    imageUrl: '',
    tags: [''],
    liveUrl: '',
    sourceUrl: '',
  },
]

export default function Work() {
  return (
    <Box as='section' id='mywork'>
      <SectionTitle text='My Work' />
      {featuredProjects.map((p, i) => (
        <FeaturedProjectCard key={i} {...p} />
      ))}
      <ProjectCard />
    </Box>
  )
}
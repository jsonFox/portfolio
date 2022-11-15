import { Box, Stack, SimpleGrid } from '@chakra-ui/react';
import { SectionTitle, ProjectCard } from './partials';
import { projects } from '../utils/info';

export default function Work() {
  return (
    <Box as="section" id="work">
      <SectionTitle text="My Work" />
      <Stack spacing={6}>
        {projects.featured.map((p, i) => (
          <ProjectCard key={i} {...p} featured />
        ))}
        <SimpleGrid
          gap={{ base: 4, lg: 6, xl: 10 }}
          columns={{ base: 1, md: 2, lg: 3 }}
        >
          {projects.list.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  );
}

import { Box, Stack, Text, Button, Tag } from '@chakra-ui/react';
import { Github, ExternalLink } from '../icons';
import ProjectTitle from './ProjectTitle';

interface Props {
  title: string;
  tags: string[];
  description: string;
  liveUrl?: string;
  sourceUrl?: string;
}

export default function ProjectCard({
  title,
  tags,
  description,
  liveUrl,
  sourceUrl
}: Props) {
  return (
    <Box h="100%" p={6} bg="#0BC5EA10" borderRadius={2}>
      <Stack as="article" direction="column" h="100%" spacing={4}>
        <ProjectTitle text={title} />
        <Stack flexWrap="wrap" direction="row">
          {tags.map((tag: string) => (
            <Tag key={tag} bg={'#8899CC33'} borderRadius="0.15rem">
              {tag.replaceAll(' ', '\u00A0')}
            </Tag>
          ))}
        </Stack>
        <Text flex={1} pr={{ xl: 8 }}>
          {description}
        </Text>
        <Stack direction="row" mt="auto">
          {liveUrl && (
            <Button as="a" href={liveUrl} target="_blank" variant="project">
              <ExternalLink fontSize="1.5rem" />
              <Text ml="0.5rem" pt={1}>
                Live
              </Text>
            </Button>
          )}
          {sourceUrl && (
            <Button as="a" href={sourceUrl} target="_blank" variant="project">
              <Github fontSize="1.5rem" />
              <Text ml="0.5rem" pt={1}>
                Source
              </Text>
            </Button>
          )}
        </Stack>
      </Stack>
    </Box>
  );
}

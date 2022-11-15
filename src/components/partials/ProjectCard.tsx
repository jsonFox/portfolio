import { Box, Stack, Text, Button, Tag } from '@chakra-ui/react';
import { Github, ExternalLink } from '../icons';
import ProjectTitle from './ProjectTitle';

interface Props {
  title: string;
  tags: string[];
  description: string;
  live?: string;
  source?: string;
}

export default function ProjectCard({
  title,
  tags,
  description,
  ...urls
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
          {Object.entries(urls).map(([k, v]) =>
            !v ? null : (
              <Button key={k} as="a" href={v} target="_blank" variant="project">
                {/live/i.test(k) ? (
                  <ExternalLink fontSize="1.5rem" />
                ) : (
                  <Github fontSize="1.5rem" />
                )}
                <Text ml="0.5rem" pt={1}>
                  {/live/i.test(k) ? 'Live' : 'Source'}
                </Text>
              </Button>
            )
          )}
        </Stack>
      </Stack>
    </Box>
  );
}

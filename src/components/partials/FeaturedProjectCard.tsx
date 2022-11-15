import { Box, Stack, Flex, Text, Button, Tag } from '@chakra-ui/react';
import { Github, ExternalLink } from '../icons';
import ProjectTitle from './ProjectTitle';
import Frame from './Frame';

interface Props {
  mobile: boolean;
  title: string;
  tags: string[];
  description: string;
  live?: string;
  source?: string;
}

export default function FeaturedProjectCard({
  mobile,
  title,
  tags,
  description,
  ...urls
}: Props) {
  return (
    <Box p={4} bg="#0BC5EA10" borderRadius={4}>
      <Flex align="center" justify="space-between" wrap="wrap" direction="row">
        <Flex w={{ lg: '45%' }} minH="100%" my="auto">
          <Frame {...{ title, mobile }} />
        </Flex>
        <Stack w={{ lg: '45%' }} pr={{ lg: 8 }}>
          <Stack as="article" direction="column" spacing={4}>
            <ProjectTitle text={title} featured />
            <Stack flexWrap="wrap" direction="row">
              {tags.map((tag) => (
                <Tag key={tag} bg={'#8899CC33'} borderRadius="0.15rem">
                  {tag.replaceAll(' ', '\u00A0')}
                </Tag>
              ))}
            </Stack>
            <Text maxW={{ lg: '90%', xl: '75%' }}>{description}</Text>
            <Stack direction="row">
              {Object.entries(urls).map(([k, v]) =>
                !v ? null : (
                  <Button
                    key={k}
                    as="a"
                    href={v}
                    target="_blank"
                    variant="project"
                  >
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
        </Stack>
      </Flex>
    </Box>
  );
}

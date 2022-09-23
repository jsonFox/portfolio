import {
  Box, Stack, Flex,
  Heading, Text, Button,
  Tag, Divider,
  useColorModeValue,
} from '@chakra-ui/react';
import { Github, ExternalLink } from '../icons';

type Props = {
  title: string,
  tags: Array<string>,
  description: string,
  liveUrl?: string,
  sourceUrl?: string,
}

export default function ProjectCard({ title, tags, description, liveUrl, sourceUrl }: Props) {
  return (
    <Box bg='#0BC5EA10' p={4} borderRadius={2} >
      <Stack as='article' direction='column' spacing={4} h='100%'>
        <Heading as='h4' size='lg' display='flex'>
          {title}
          <Divider ml='0.5%' w='1.2rem' />
        </Heading>
        <Stack direction='row' flexWrap='wrap'>
          {tags.map((tag: string) => (
            <Tag key={tag} borderRadius='0.15rem' bg={'#8899CC33'}>
              {tag.replaceAll(' ', '\u00A0')}
            </Tag>
          ))}
        </Stack>
        <Text pr={{ xl: 8 }}>
          {description}
        </Text>
        <Stack direction='row'>
          {liveUrl &&
            <Button as='a' href={liveUrl} target='_blank' variant='project'>
              <ExternalLink fontSize='1.5rem' />
              <Text ml='0.5rem' pt={1}>Live</Text>
            </Button>
          }
          {sourceUrl &&
            <Button as='a' href={sourceUrl} target='_blank' variant='project'>
              <Github fontSize='1.5rem' />
              <Text ml='0.5rem' pt={1}>Source</Text>
            </Button>
          }
        </Stack>
      </Stack>
    </Box >
  )
}

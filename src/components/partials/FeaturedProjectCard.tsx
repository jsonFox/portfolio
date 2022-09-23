import { useState } from 'react';
import {
  Box, Stack, Flex,
  Text, Image, Button,
  Tag, Skeleton,
  useColorModeValue,
} from '@chakra-ui/react';
import { Circle, Github, ExternalLink } from '../icons';
import ProjectTitle from './ProjectTitle';

type Props = {
  imageUrl: string,
  mobile: boolean,
  title: string,
  tags: Array<string>,
  description: string,
  liveUrl?: string,
  sourceUrl?: string,
}

export default function FeaturedProjectCard({ imageUrl, mobile, title, tags, description, liveUrl, sourceUrl }: Props) {
  const displayProps = { imageUrl, title };
  return (
    <Box bg='#0BC5EA10' p={4} borderRadius={4}>
      <Flex
        direction='row'
        flexWrap='wrap'
        justifyContent='space-between'
        alignItems='center'
      >
        <Flex w={{ lg: '45%' }} my='auto' minH='100%'>
          {mobile ?
            <MobileDisplay {...displayProps} /> :
            <DesktopDisplay {...displayProps} />
          }
        </Flex>
        <Stack w={{ lg: '45%' }} pr={{ lg: 8 }}>
          <Stack as='article' direction='column' spacing={4}>
            <ProjectTitle text={title} featured />
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
        </Stack>
      </Flex >
    </Box >
  )
}

type displayProps = {
  imageUrl: string,
  title: string,
}

function MobileDisplay({ imageUrl, title }: displayProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const phoneBg = useColorModeValue('#F2F2F2', '#0F0F0F');
  return (
    <Box
      bg={phoneBg}
      py={{ base: 2, md: 3, lg: 4 }}
      px={1}
      borderRadius={{ base: 6, md: 8, lg: 10 }}
      overflow='hidden'
      maxW='max-content'
      m='auto'
      outline='1px solid #22222222'
    >
      <Skeleton isLoaded={isLoaded}>
        <Image
          onLoad={() => setIsLoaded(true)}
          src={imageUrl}
          alt={title}
          maxH={{ base: '150px', md: '200px', lg: '250px' }}
          w='auto'
          borderRadius={{ base: 4, md: 5, lg: 6 }}
        />
      </Skeleton>
    </Box>
  )
}

function DesktopDisplay({ imageUrl, title }: displayProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const browserBg = useColorModeValue('#E9E7E8', '#3C3D3F');
  return (
    <Box
      borderRadius={3}
      overflow='hidden'
      m='auto'
      outline='1px solid #22222222'
    >
      <Flex
        pointerEvents='none'
        minH={{ base: 3, lg: 4 }}
        bg={browserBg}
        alignItems='center'
        pl={{ base: 1, lg: 2 }}
      >
        <Stack direction='row' spacing='1.5%' alignItems='center'>
          <Circle size='2%' color='#FF6660' />
          <Circle size='2%' color='#EEBF3B' />
          <Circle size='2%' color='#34C355' />
        </Stack>
      </Flex>
      <Skeleton isLoaded={isLoaded}>
        <Image
          onLoad={() => setIsLoaded(true)}
          src={imageUrl}
          alt={title}
        />
      </Skeleton>
    </Box>
  )
}
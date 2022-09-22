import { useState } from 'react';
import {
  Box, Stack, Flex,
  Heading, Text, Image, Button,
  Tag, Skeleton,
  useColorModeValue,
} from '@chakra-ui/react';
import { Circle } from '../icons';

type Props = {
  imageUrl: string,
  desktop: boolean,
  title: string,
  description: string,
  tags: Array<string>,
  liveUrl?: string,
  sourceUrl?: string,
}

export default function FeaturedProjectCard({ imageUrl, desktop, title, description, tags, liveUrl, sourceUrl }: Props) {
  const cardBg = useColorModeValue('#0BC5EA22', 'whiteAlpha.50');
  const displayProps = { imageUrl, title }
  return (desktop ?
    <Box
      bg={cardBg}
      p={6}
      borderRadius={4}
    >
      <Stack>
        {desktop ?
          <DesktopDisplay {...displayProps} /> :
          <MobileDisplay {...displayProps} />
        }
      </Stack>
    </Box> :
    <Box>

    </Box>
  )
}

type displayProps = {
  imageUrl: string,
  title: string,
}

function MobileDisplay({ imageUrl, title }: displayProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const bgColor = useColorModeValue('#E9E7E8', '#3C3D3F');
  return (
    <Box borderRadius={5} overflow='hidden'>
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

function DesktopDisplay({ imageUrl, title }: displayProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const browserBar = useColorModeValue('#E9E7E8', '#3C3D3F');
  return (
    <Box borderRadius={5} overflow='hidden'>
      <Flex
        pointerEvents='none'
        minH={5}
        bg={browserBar}
        alignItems='center'
        px={2}
      >
        <Stack direction='row'>
          <Circle size={10} color='#FF6660' />
          <Circle size={10} color='#EEBF3B' />
          <Circle size={10} color='#34C355' />
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
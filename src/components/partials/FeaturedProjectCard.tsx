import { useState } from 'react';
import {
  Box, Stack, Flex,
  Heading, Text, Image, Button,
  Tag, Skeleton,
  useColorModeValue,
} from '@chakra-ui/react';
import BrowserBar from './BrowserBar';

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
  const [isLoaded, setIsLoaded] = useState(false);
  const cardBg = useColorModeValue('#0BC5EA22', 'whiteAlpha.50');
  return (desktop ?
    <Box
      bg={cardBg}
      p={6}
      borderRadius={4}
    >
      <Stack>
        <Box borderRadius={5} overflow='hidden'>
          <BrowserBar />
          <Skeleton isLoaded={isLoaded}>
            <Image
              onLoad={() => setIsLoaded(true)}
              src={imageUrl}
              alt={title}
            />
          </Skeleton>
        </Box>
      </Stack>
    </Box> :
    <Box>

    </Box>    
  )
}
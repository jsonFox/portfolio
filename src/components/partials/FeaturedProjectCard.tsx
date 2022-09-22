import { useState } from 'react';
import {
  Box, Stack,
  Heading, Text, Image, Button,
  Tag, Skeleton,
  useColorModeValue,
} from '@chakra-ui/react';

type Props = {
  title: string,
  description: string,
  imageUrl: string,
  tags: Array<string>,
  liveUrl?: string,
  sourceUrl?: string,
}

export default function FeaturedProjectCard({ title, description, imageUrl, tags, liveUrl, sourceUrl }: Props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const cardBg = useColorModeValue('blackAlpha.50', 'whiteAlpha.50');
  return (
    <Box
      bg={cardBg}
      p={6}
      borderRadius={4}
    >
      <Stack>
        <Skeleton isLoaded={isLoaded}>
          <Image
            onLoad={() => setIsLoaded(true)}
            src={imageUrl}
            alt={title}
          />
        </Skeleton>
      </Stack>
    </Box>
  )
}
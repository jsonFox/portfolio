import { useState } from 'react';
import {
  Box,
  Stack,
  Flex,
  Text,
  Image,
  Button,
  Tag,
  Skeleton,
  useColorModeValue
} from '@chakra-ui/react';
import { Circle, Github, ExternalLink } from '../icons';
import ProjectTitle from './ProjectTitle';

interface Props {
  imageUrl: string;
  mobile: boolean;
  title: string;
  tags: string[];
  description: string;
  liveUrl?: string;
  sourceUrl?: string;
}

export default function FeaturedProjectCard({
  imageUrl,
  mobile,
  title,
  tags,
  description,
  liveUrl,
  sourceUrl
}: Props) {
  return (
    <Box p={4} bg="#0BC5EA10" borderRadius={4}>
      <Flex align="center" justify="space-between" wrap="wrap" direction="row">
        <Flex w={{ lg: '45%' }} minH="100%" my="auto">
          {mobile ? (
            <MobileDisplay {...{ imageUrl, title }} />
          ) : (
            <DesktopDisplay {...{ imageUrl, title }} />
          )}
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
              {liveUrl && (
                <Button as="a" href={liveUrl} target="_blank" variant="project">
                  <ExternalLink fontSize="1.5rem" />
                  <Text ml="0.5rem" pt={1}>
                    Live
                  </Text>
                </Button>
              )}
              {sourceUrl && (
                <Button
                  as="a"
                  href={sourceUrl}
                  target="_blank"
                  variant="project"
                >
                  <Github fontSize="1.5rem" />
                  <Text ml="0.5rem" pt={1}>
                    Source
                  </Text>
                </Button>
              )}
            </Stack>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
}

function MobileDisplay({ imageUrl, title }: Partial<Props>) {
  const [isLoaded, setIsLoaded] = useState(false);
  const phoneBg = useColorModeValue('#F2F2F2', '#0F0F0F');

  return (
    <Box
      overflow="hidden"
      maxW="max-content"
      m="auto"
      px={1}
      py={{ base: 2, md: 3, lg: 4 }}
      bg={phoneBg}
      borderRadius={{ base: 6, md: 8, lg: 10 }}
      outline="1px solid #22222222"
    >
      <Skeleton isLoaded={isLoaded}>
        <Image
          w="auto"
          maxH={{ base: '150px', md: '200px', lg: '250px' }}
          borderRadius={{ base: 4, md: 5, lg: 6 }}
          alt={title}
          onLoad={() => setIsLoaded(true)}
          src={imageUrl}
        />
      </Skeleton>
    </Box>
  );
}

function DesktopDisplay({ imageUrl, title }: Partial<Props>) {
  const [isLoaded, setIsLoaded] = useState(false);
  const browserBg = useColorModeValue('#E9E7E8', '#3C3D3F');

  return (
    <Box
      overflow="hidden"
      m="auto"
      borderRadius={3}
      outline="1px solid #22222222"
    >
      <Flex
        align="center"
        minH={{ base: 3, lg: 4 }}
        pl={{ base: 1, lg: 2 }}
        bg={browserBg}
        pointerEvents="none"
      >
        <Stack alignItems="center" direction="row" spacing="1.5%">
          <Circle size="2%" color="#FF6660" />
          <Circle size="2%" color="#EEBF3B" />
          <Circle size="2%" color="#34C355" />
        </Stack>
      </Flex>
      <Skeleton {...{ isLoaded }}>
        <Image alt={title} onLoad={() => setIsLoaded(true)} src={imageUrl} />
      </Skeleton>
    </Box>
  );
}

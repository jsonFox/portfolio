import { useState } from 'react';
import {
  Flex,
  Box,
  Hide,
  Skeleton,
  Heading,
  Text,
  Button,
  Image
} from '@chakra-ui/react';
import Typed from 'react-typing-effect';
import { scrollTo } from '../utils/helpers';
import { titles } from '../utils/info';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const offset = { transform: 'translateY(-4em)' };

  return (
    <Flex as="section" align="center" direction="row" h="90vh" id="home">
      <Box minW={{ base: '325px', md: '60%', xl: '50%' }} {...offset}>
        <Text fontSize="2xl" variant="colored">
          🙋‍♂️ Hi, my name is
        </Text>
        <Heading as="h2" mb={1} size="4xl">
          Jason Fox
        </Heading>
        <Heading
          as="h3"
          userSelect="none"
          noOfLines={1}
          size="xl"
          variant="muted"
        >
          <Typed
            text={titles}
            typingDelay={200}
            speed={30}
            eraseSpeed={30}
            eraseDelay={1500}
          />
        </Heading>
        <Button
          mt={4}
          fontSize="lg"
          onClick={() => scrollTo('work')}
          variant="wide"
        >
          See my work
        </Button>
      </Box>
      <Hide below="sm">
        <Skeleton borderRadius="full" isLoaded={isLoaded} {...offset}>
          <Image
            w={{ base: '185px', lg: '215px' }}
            h="auto"
            borderRadius="full"
            alt="Jason Fox"
            onLoad={() => setIsLoaded(true)}
            src={new URL('../assets/portrait.png', import.meta.url).href}
          />
        </Skeleton>
      </Hide>
    </Flex>
  );
}

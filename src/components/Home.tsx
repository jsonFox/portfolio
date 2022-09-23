import { useState } from "react";
import {
  Flex, Box, Hide, Skeleton,
  Heading, Text, Button, Image
} from "@chakra-ui/react";
import ReactTypingEffect from 'react-typing-effect';
import portraitSrc from '../assets/portrait.png';
import { scrollTo } from "../utils";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const titles = [
    'Full-Stack Developer',
    'Comp Sci Graduate',
    'Cat Dad',
    'Gamer',
    'Coding Hobbyist',
  ];
  const offset = { transform: 'translateY(-4em)' }
  return (
    <Flex
      as='section'
      id='home'
      h='90vh'
      direction='row'
      alignItems='center'
    >
      <Box
        minW={{ md: '60%', lg: '50%', xl: '40%' }}
        {...offset}
      >
        <Text variant='colored' fontSize='2xl'>
          🙋‍♂️ Hi, my name is
        </Text>
        <Heading as='h2' size='4xl' mb={1}>
          Jason Fox
        </Heading>
        <Heading
          as='h3'
          variant='muted'
          size='xl'
          noOfLines={1}
          userSelect='none'
        >
          <ReactTypingEffect
            text={titles}
            typingDelay={200}
            speed={30}
            eraseSpeed={30}
            eraseDelay={1500}
          />
        </Heading>
        <Button
          variant='wide'
          onClick={() => scrollTo('mywork')}
          fontSize='lg'
          mt={4}
        >
          See my work
        </Button>
      </Box>
      <Hide below='sm'>
        <Skeleton
          isLoaded={isLoaded}
          borderRadius='full'
          {...offset}
        >
          <Image
            src={portraitSrc}
            alt='Jason Fox'
            borderRadius='full'
            w={{ base: '185px', lg: '215px' }}
            h='auto'
            onLoad={() => setIsLoaded(true)}
          />
        </Skeleton>
      </Hide>
    </Flex>
  )
}
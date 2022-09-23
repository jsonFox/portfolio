import {
  Flex, Box, Hide,
  Heading, Text, Button, Image
} from "@chakra-ui/react";
import ReactTypingEffect from 'react-typing-effect';
import portraitSrc from '../assets/portrait.png';
import { scrollTo } from "../utils";

export default function Home() {
  const titles = [
    'Full-Stack Developer',
    'Comp Sci Graduate',
    'Cat Dad',
    'Gamer',
    'Coding Hobbyist',
  ];
  return (
    <Flex
      as='section'
      id='about'
      h='90vh'
      direction='row'
      alignItems='center'
    >
      <Box
        minW={{ md: '425px', lg: '500px', xl: '50%' }}
        transform='translateY(-4em)'
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
        <Image
          src={portraitSrc}
          alt='Jason Fox'
          borderRadius='full'
          h={{ md: '185px', lg: '215px' }}
          maxH='30%'
          transform='translateY(-4em)'
        />
      </Hide>
    </Flex>
  )
}
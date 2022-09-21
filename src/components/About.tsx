import { Flex, Box, Heading, Text, Button, Image, Hide } from "@chakra-ui/react";
import ReactTypingEffect from 'react-typing-effect';
import portraitSrc from '../assets/portrait.png';
import { scrollTo } from "../utils";

export default function About() {
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
      h='100vh'
      direction='row'
      alignItems='center'
      justifyContent='space-between'
    >
      <Box transform='translateY(-8em)'>
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
          mt={4}
          onClick={() => scrollTo('mywork')}
        >
          See my work
        </Button>
      </Box>
      <Hide below='sm'>
        <Image
          src={portraitSrc}
          alt='Jason Fox'
          borderRadius='full'
          h={{ md: '175px', lg: '200px' }}
          maxH='30%'
          transform='translateY(-8em)'
        />
      </Hide>
    </Flex>
  )
}
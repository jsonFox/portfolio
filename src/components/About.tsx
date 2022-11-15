import { Box, Stack, Text, Link } from '@chakra-ui/react';
import { SectionTitle, Image } from './partials';
import { resume } from '../utils/info';

export default function About() {
  return (
    <Box as="section" id="about">
      <SectionTitle text="About Me" />
      <Stack
        wrap={{ base: 'wrap', lg: 'nowrap' }}
        direction="row"
        spacing={{ base: 0, lg: 10 }}
      >
        <Stack as="article" w={{ base: '100%', lg: '60%' }} id="about-text">
          <Text>
            I'm Jason, an improvement-driven developer who's passionate about
            what I do and committed to getting things done efficiently and
            effectively.
          </Text>
          <Text>
            I got my first taste of programming in middle school when I started
            writing programs in TI Basic on my calculator. I started out college
            as a Psychology major, and soon after changed my major to Computer
            Science, where I discovered a passion for Web Development.
          </Text>
          <Text>
            Since then, I've been specializing in JavaScript/TypeScript-based
            development as I continue to grow myself and my skills through
            constant learning and improvement.
          </Text>
          <Text>
            If you want to see more about me professionally, check out
            <span> </span>
            <Link
              fontFamily="Overpass"
              fontSize="1.1rem"
              href={resume}
              target="_blank"
            >
              my&nbsp;resume
            </Link>
            .
          </Text>
          <Text>I also have a little furball named Rosie! (Pictured here)</Text>
        </Stack>
        <Image
          w={{ base: '300px', lg: '400px' }}
          h="auto"
          borderRadius={4}
          alt="My cat rosie"
          src={new URL('../assets/rosie.jpg', import.meta.url).href}
        />
      </Stack>
    </Box>
  );
}

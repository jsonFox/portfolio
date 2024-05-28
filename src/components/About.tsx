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
            writing programs in TI Basic on my calculator. I discovered my
            passion for Web Development while pursuing my CS degree at the
            University of Charlotte.
          </Text>
          <Text>
            I specialize in TypeScript-based development, and pride myself on
            the quality of my work. I've got debugging skills that put Chat-GPT
            to shame, and I'm always looking for ways to improve.
          </Text>
          <Text>I also have a cat named Rosie! (Pictured here)</Text>
          <Text>
            If you want to see more about me professionally, check out
            <span> </span>
            <Link
              href={resume}
              style={{ textDecoration: 'underline' }}
              target="_blank"
            >
              my&nbsp;resume
            </Link>
            .
          </Text>
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

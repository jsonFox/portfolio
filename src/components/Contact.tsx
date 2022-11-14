import { Box, Stack, Link, StackProps } from '@chakra-ui/react';
import { SectionTitle } from './partials';
import { Email, Linkedin, GithubSquare } from './icons';

export default function Contact() {
  return (
    <Box as="section" id="contact-me">
      <SectionTitle text="Contact Me" />
      <Stack pl={4}>
        <Info>
          <Email size={32} />
          <Link href="mailto:jfox0096@gmail.com">jfox0096@gmail.com</Link>
        </Info>
        <Info>
          <Linkedin size={32} />
          <Link href="https://www.linkedin.com/in/jasonfox96">/jasonfox96</Link>
        </Info>
        <Info>
          <GithubSquare size={32} />
          <Link href="https://github.com/jthefox">/jthefox</Link>
        </Info>
      </Stack>
    </Box>
  );
}

function Info(props: StackProps) {
  return (
    <Stack
      {...props}
      alignItems="center"
      direction="row"
      fontSize="lg"
      spacing={6}
    />
  );
}

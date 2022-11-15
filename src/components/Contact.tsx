import { Box, Stack, Link } from '@chakra-ui/react';
import { SectionTitle } from './partials';
import { Email, Linkedin, GithubSquare } from './icons';
import { IconType } from 'react-icons/lib';
import { contacts } from '../utils/info';

export default function Contact() {
  return (
    <Box as="section" id="contact">
      <SectionTitle text="Contact Me" />
      <Stack pl={4}>{Object.entries(contacts).map(Info)}</Stack>
    </Box>
  );
}

function Info([k, v]: string[]) {
  const { Icon, href, text } = infoElements() as {
    Icon: IconType;
    href: string;
    text: string;
  };

  function infoElements() {
    switch (k) {
      case 'github':
        return {
          Icon: GithubSquare,
          href: `https://github.com/${v}`,
          text: `/${v}`
        };
      case 'linkedin':
        return {
          Icon: Linkedin,
          href: `https://linkedin.com/in/${v}`,
          text: `/${v}`
        };
      case 'email':
        return {
          Icon: Email,
          href: `mailto:${v}`,
          text: `${v}`
        };
      default:
        return {};
    }
  }

  return (
    <Stack
      key={k}
      alignItems="center"
      direction="row"
      fontSize="lg"
      spacing={6}
    >
      <Icon size={32} />
      <Link {...{ href }}>{text}</Link>
    </Stack>
  );
}

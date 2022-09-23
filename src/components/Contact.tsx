import { Box, Stack, Link } from "@chakra-ui/react";
import { SectionTitle } from "./partials";
import { Email, LinkedinSquare, GithubSquare } from "./icons";

export default function Contact() {
  return (
    <Box as='section' id='contactme'>
      <SectionTitle text='Contact Me' />
      <Stack pl={4}>
        <Info>
          <Email size={32} />
          <Link href='mailto:jfox0096@gmail.com'>jfox0096@gmail.com</Link>
        </Info>
        <Info>
          <LinkedinSquare size={32} />
          <Link href='https://www.linkedin.com/in/jasonfox96'>/jasonfox96</Link>
        </Info>
        <Info>
          <GithubSquare size={32} />
          <Link href='https://github.com/jthefox'>/jthefox</Link>
        </Info>
      </Stack>
    </Box>
  )
}

function Info({ children }: { children: JSX.Element[] }) {
  return (
    <Stack direction='row' fontSize='lg' alignItems='center' spacing={6}>
      {children}
    </Stack>
  )
}
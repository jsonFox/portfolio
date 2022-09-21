import { Box, Heading, Text } from "@chakra-ui/react"
import ReactTyped from "react-typed"

export default function About() {
  const titles = [
    'Full-Stack Developer',
    'Computer Science Grad',
    'Cat Dad',
    'Gaming Enthusiast'
  ];
  return (
    <Box as='section' id='about' h='75vh'>
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
      >
        <ReactTyped
          strings={titles}
          typeSpeed={40}
          backSpeed={20}
          startDelay={40}
          loop
        />
      </Heading>
    </Box>
  )
}
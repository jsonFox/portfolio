import { Box, Heading, Text } from "@chakra-ui/react"

export default function About() {
  return (
    <Box as='section' id='about'>
      <Text variant='colored' fontSize='2xl'>
        Hi! 🙋‍♂️ My name is
      </Text>
      <Heading as='h2' size='4xl' mb={1}>
        Jason Fox
      </Heading>
      <Heading
        as='h3'
        variant='muted'
        size='xl'
      >
        Full Stack Developer
      </Heading>
    </Box>
  )
}
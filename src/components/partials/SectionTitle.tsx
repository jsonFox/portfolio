import { Flex, Heading, Divider } from "@chakra-ui/react"

export default function SectionTitle({ text }: { text: string }) {
  return (
    <Flex mb={12}>
      <Heading as='h2' variant='section'>
        {text}
        <Divider ml='1%' w='85%' />
      </Heading>
    </Flex>
  )
}
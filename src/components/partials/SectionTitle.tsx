import { Heading } from "@chakra-ui/react"

export default function SectionTitle({ text }: { text: string }) {
  return (
    <Heading as='h2' px={4} mb={4}>
      {text}
    </Heading>
  )
}
import {
  Box, Stack,
  Text, Link, Divider,
  useColorModeValue
} from "@chakra-ui/react"

export default function Footer() {
  const dividerColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.50');
  return (
    <Box as='footer'>
      <Divider mb={4} borderColor={dividerColor} />
      <Stack direction='row' p={12}>
        <Text>
          &copy; 2022 built by Jason Fox
        </Text>
        <Text>|</Text>
        <Link href='https://github.com/jthefox/portfolio'>View source</Link>
      </Stack>
    </Box>
  )
}
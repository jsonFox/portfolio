import {
  Box, Stack,
  Text, Link, Divider,
  useColorModeValue
} from "@chakra-ui/react";
import { Logo } from "./icons";

export default function Footer() {
  const dividerColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.50');
  return (
    <Box as='footer'>
      <Divider mb={4} borderColor={dividerColor} />
      <Stack direction='row' p={12} alignItems='center'>
        <Logo fontSize='2rem' />
        <Text>
          &copy; 2022 built by Jason Fox
        </Text>
        <Text>|</Text>
        <Link href='https://github.com/jthefox/portfolio'>
          View source
        </Link>
      </Stack>
    </Box>
  )
}
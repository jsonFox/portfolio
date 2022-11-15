import { Box, Stack, Flex } from '@chakra-ui/react';
import Frame from './Frame';

interface Props {
  children: React.ReactNode;
  title: string;
  featured?: boolean;
  mobile?: boolean;
}

export default function Wrapper({ children, featured, ...props }: Props) {
  return (
    featured
      ? <Box p={4} bg="#0BC5EA10" borderRadius={4}>
        <Flex align="center" justify="space-between" wrap="wrap" direction="row">
          <Flex w={{ lg: '45%' }} minH="100%" my="auto">
            <Frame {...props} />
          </Flex>
          <Stack w={{ lg: '45%' }} pr={{ lg: 8 }}>
            {children}
          </Stack>
        </Flex>
      </Box>
      : <Box h="100%" p={6} bg="#0BC5EA10" borderRadius={2}>
        {children}
      </Box>
  )
}
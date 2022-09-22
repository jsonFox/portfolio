import { Flex, Stack, useColorModeValue } from '@chakra-ui/react';
import { Circle } from '../icons';

export default function BrowserBar() {
  const browserBar = useColorModeValue('#E9E7E8', '#3C3D3F');
  return (
    <Flex
      pointerEvents='none'
      minH={5}
      bg={browserBar}
      alignItems='center'
      px={2}
    >
      <Stack direction='row'>
        <Circle size={10} color='#FF6660' />
        <Circle size={10} color='#EEBF3B' />
        <Circle size={10} color='#34C355' />
      </Stack>
    </Flex>
  )
}
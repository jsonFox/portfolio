import { useRef } from 'react';
import {
  Flex, Stack, Show, Hide,
  Heading, Button, IconButton,
  Drawer, DrawerOverlay, DrawerContent,
  useColorMode, useDisclosure,
} from '@chakra-ui/react';
import { LightMode, DarkMode } from './icons';
import { scrollTo } from '../utils';

export default function Header({ sections }: { sections: Array<string> }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Flex
      as='header'
      justifyContent='space-between'
      position='sticky'
      zIndex='9999'
      top='0'
      h='10vh'
      maxH='75px'
      w='100%'
      px='10%'
      py={4}
    >
      <Heading as='h1'>Jason Fox</Heading>
      <Stack
        as='nav'
        direction='row'
        justifyContent='space-evenly'
        spacing={8}
      >
        <Show above='md'>
          <Stack
            as='ul'
            direction='row'
            alignItems='center'
            listStyleType='none'
            spacing={{ md: 4, lg: 6, xl: 8 }}
          >
            {sections.map((s: string, i: number) => (
              <li key={i}>
                <Button variant='nav' onClick={() => scrollTo(s.toLowerCase().replaceAll(' ', ''))}>{s}</Button>
              </li>
            ))}
          </Stack>
        </Show>
        <Hide above='md'>
          <Button variant='ghost' onClick={isOpen ? onClose : onOpen}>{isOpen ? 'X' : '='}</Button>
          <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
          >
            <DrawerOverlay />
            {/* TODO: Use getBoundingRect observer whatever to get offset */}
            <DrawerContent mt='10vh'>
              sfsdkmsl
            </DrawerContent>
          </Drawer>
        </Hide>
        <IconButton
          variant='toggle'
          aria-label='Toggle theme'
          icon={colorMode === 'light' ? <DarkMode /> : <LightMode />}
          onClick={toggleColorMode}
        />
      </Stack>
    </Flex>
  )
}
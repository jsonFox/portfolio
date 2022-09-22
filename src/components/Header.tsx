import { Flex, Stack, Heading, Button, IconButton, useColorMode } from '@chakra-ui/react';
import { LightMode, DarkMode } from './icons';
import { scrollTo } from '../utils';

export default function Header({ sections }: { sections: Array<string> }) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      as='header'
      justifyContent='space-between'
      position='sticky'
      zIndex='9999'
      top='0'
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
        <Stack
          as='ul'
          direction='row'
          alignItems='center'
          listStyleType='none'
          spacing={{md: 4, lg: 6, xl: 8}}
        >
          {sections.map((s: string, i: number) => (
            <li key={i}>
              <Button
                variant='nav'
                onClick={() => scrollTo(s.toLowerCase().replaceAll(' ', ''))}
              >
                {s}
              </Button>
            </li>
          ))}
        </Stack>
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
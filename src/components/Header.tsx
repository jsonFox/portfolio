import { Flex, Stack, Heading, Link, IconButton, useColorMode } from '@chakra-ui/react';
import { LightMode, DarkMode } from './icons';
import { Key } from 'react';

export default function Header({ sections }: { sections: Array<string> }) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      justifyContent='space-between'
      w='100vw'
      py={1}
      px='10%'
    >
      <Heading as='h1'>Jason Fox</Heading>
      <Flex justifyContent='space-evenly'>
        <Stack as='nav' direction='row' alignItems='center'>
          {sections.map((s: string, i: number) => <NavItem key={i} title={s} />)}
        </Stack>
        <IconButton
          aria-label='Toggle theme'
          icon={colorMode === 'light' ? <DarkMode /> : <LightMode />}
          onClick={toggleColorMode}
        />
      </Flex>
    </Flex>
  )
}

function NavItem({ title }: { key: Key, title: string }) {
  return (
    <div>{title}</div>
  )
}
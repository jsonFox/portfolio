import { Flex, Stack, Heading, Link, IconButton, useColorMode } from '@chakra-ui/react';
import { LightMode, DarkMode } from './icons';

export default function Header({ sections }: { sections: Array<string> }) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      as='header'
      justifyContent='space-between'
      w='100%'
      py={1}
      px='10%'
    >
      <Heading as='h1'>Jason Fox</Heading>
      <Flex as='nav' justifyContent='space-evenly'>
        <Stack as='ul' listStyleType='none' direction='row' alignItems='center'>
          {sections.map((s: string, i: number) =>
            <li key={i}><Link href={`#${s.toLowerCase().replaceAll(' ', '')}`}>{s}</Link></li>)}
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
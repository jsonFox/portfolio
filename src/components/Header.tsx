import {
  Flex, Stack, Box, Show, Hide,
  Text, Button, IconButton, Icon,
  Drawer, DrawerOverlay, DrawerContent,
  useColorMode, useColorModeValue, useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, } from '@chakra-ui/icons'
import { LightMode, DarkMode, Logo, } from './icons';
import { scrollTo } from '../utils';
import { motion, useScroll } from "framer-motion";

export default function Header({ sections }: { sections: Array<string> }) {
  const { scrollYProgress } = useScroll();
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modalBg = useColorModeValue('#F4F8FC', '#1A1C28')
  return (
    <Flex
      as='header'
      direction='column'
      position='sticky'
      zIndex='100'
      w='100%'
      top='0'
    >
      <Flex
        justifyContent='space-between'
        alignItems='center'
        h='10vh'
        w='100%'
        py={{ base: 2, md: 4 }}
        px={{ base: 2, md: '10%' }}
        maxH={{ base: '60px', md: '70px' }}
      >
        <Stack direction='row' spacing={4} alignItems='center'>
          <Hide above='md'>
            <Box
              as='button'
              aria-label='Open menu'
              onClick={onOpen}
              maxH='30px'
              sx={{ style: 'unset' }}
            >
              <HamburgerIcon h={30} w={30} />
            </Box>
            <Drawer
              isOpen={isOpen}
              placement='left'
              onClose={onClose}
            >
              <DrawerOverlay />
              <DrawerContent
                pt={4}
                pl={3}
                pr={8}
                maxW='max-content'
                bg={modalBg}
              >
                <Flex
                  as='button'
                  aria-label='Open menu'
                  onClick={onClose}
                  sx={{ style: 'unset' }}
                >
                  <CloseIcon h={25} w={25} />
                </Flex>
                <Stack
                  as='ul'
                  direction='column'
                  alignItems='flex-start'
                  listStyleType='none'
                  mt={8}
                  spacing={0}
                >
                  {sections.map((s: string, i: number) => (
                    <li key={i}>
                      <Button variant='ghost' onClick={() => scrollTo(s.toLowerCase().replaceAll(' ', ''))}>{s}</Button>
                    </li>
                  ))}
                </Stack>
              </DrawerContent>
            </Drawer>
          </Hide>
          <Flex alignItems='center'>
            <Icon
              as={Logo}
              w={{ base: '32px', md: '40px', lg: '44px', xl: '48px' }}
              h={{ base: '32px', md: '40px', lg: '44px', xl: '48px' }}
            />
            <Text
              as='h1'
              fontSize={{ base: 'lg', md: '2xl' }}
              fontFamily='"Overpass", sans-serif'
              ml={2}
              pt={1}
            >
              Jason Fox
            </Text>
          </Flex>
        </Stack>
        <Stack
          as='nav'
          direction='row'
          justifyContent='space-evenly'
          spacing={8}
          maxH='40px'
        >
          <Show above='md'>
            <Stack
              as='ul'
              direction='row'
              alignItems='center'
              listStyleType='none'
              spacing={{ md: 2, lg: 4, xl: 6 }}
            >
              {sections.map((s: string, i: number) => (
                <li key={i}>
                  <Button variant='nav' onClick={() => scrollTo(s.toLowerCase().replaceAll(' ', ''))}>{s}</Button>
                </li>
              ))}
            </Stack>
          </Show>
          <IconButton
            variant='toggle'
            aria-label='Toggle theme'
            icon={colorMode === 'light' ? <DarkMode /> : <LightMode />}
            onClick={toggleColorMode}
          />
        </Stack>
      </Flex>
      <motion.div style={{
        background: '#41C8E2',
        height: '0.1rem',
        width: '100%',
        scaleX: scrollYProgress,
      }} />
    </Flex>

  )
}
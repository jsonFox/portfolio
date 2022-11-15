import {
  Flex,
  Stack,
  Box,
  Show,
  Hide,
  Text,
  IconButton,
  Icon,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  useColorMode,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { LightMode, DarkMode, Logo } from './icons';
import { motion, useScroll } from 'framer-motion';
import { NavButton } from './partials';

interface Props {
  sections: string[];
}

export default function Header({ sections }: Props) {
  const { scrollYProgress } = useScroll();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="header"
      pos="sticky"
      zIndex="100"
      top="0"
      direction="column"
      w="100%"
    >
      <Flex
        align="center"
        justify="space-between"
        w="100%"
        h="10vh"
        maxH={{ base: '60px', md: '70px' }}
        px={{ base: 2, md: '10%' }}
        py={{ base: 2, md: 4 }}
      >
        <Stack alignItems="center" direction="row" spacing={4}>
          <MobileNav sections={sections} />
          <Flex align="center">
            <Icon
              as={Logo}
              w={{ base: '32px', md: '40px', lg: '44px', xl: '48px' }}
              h="auto"
            />
            <Text
              as="h1"
              ml={2}
              pt={1}
              fontFamily='"Overpass", sans-serif'
              fontSize={{ base: 'lg', md: '2xl' }}
            >
              Jason Fox
            </Text>
          </Flex>
        </Stack>
        <Stack
          as="nav"
          justifyContent="space-evenly"
          direction="row"
          maxH="40px"
          spacing={8}
        >
          <DesktopNav sections={sections} />
          <IconButton
            aria-label="Toggle theme"
            icon={colorMode === 'light' ? <DarkMode /> : <LightMode />}
            onClick={toggleColorMode}
            variant="toggle"
          />
        </Stack>
      </Flex>
      <motion.div
        style={{
          background: '#41C8E2',
          height: '0.1rem',
          width: '100%',
          scaleX: scrollYProgress
        }}
      />
    </Flex>
  );
}

function MobileNav({ sections }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modalBg = useColorModeValue('#F4F8FC', '#1A1C28');

  return (
    <Hide above="md">
      <Box
        as="button"
        sx={{ style: 'unset' }}
        maxH="30px"
        aria-label="Open menu"
        onClick={onOpen}
      >
        <HamburgerIcon h={30} w={30} />
      </Box>
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent maxW="max-content" pt={4} pr={8} pl={3} bg={modalBg}>
          <Flex
            as="button"
            sx={{ style: 'unset' }}
            aria-label="Open menu"
            onClick={onClose}
          >
            <CloseIcon h={25} w={25} />
          </Flex>
          <Stack
            as="ul"
            alignItems="flex-start"
            direction="column"
            mt={8}
            listStyleType="none"
            spacing={0}
          >
            {sections.map((s) => (
              <NavButton key={s} section={s} variant="ghost" />
            ))}
          </Stack>
        </DrawerContent>
      </Drawer>
    </Hide>
  );
}

function DesktopNav({ sections }: Props) {
  return (
    <Show above="md">
      <Stack
        as="ul"
        alignItems="center"
        direction="row"
        listStyleType="none"
        spacing={{ md: 2, lg: 4, xl: 6 }}
      >
        {sections.map((s) => (
          <NavButton key={s} section={s} variant="nav" />
        ))}
      </Stack>
    </Show>
  );
}

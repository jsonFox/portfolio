import { Box, Stack, Flex, Circle, useColorModeValue } from '@chakra-ui/react';
import Image from '../Image';

interface Props {
  title: string;
  mobile?: boolean;
}

export default function Frame({ title, mobile }: Props) {
  const bg = mobile
    ? useColorModeValue('#F2F2F2', '#0F0F0F')
    : useColorModeValue('#E9E7E8', '#3C3D3F');
  const imageUrl = new URL(
    `../../../assets/projects/${title.toLowerCase().replaceAll(' ', '-')}.png`,
    import.meta.url
  ).href;
  const circle = { sm: '6px', md: '8px', lg: '10px' };

  return mobile ? (
    <Box
      overflow="hidden"
      m="auto"
      px={1}
      py={{ base: 2, md: 3, lg: 4 }}
      bg={bg}
      borderRadius={{ base: 6, md: 8, lg: 10 }}
      outline="1px solid #22222222"
    >
      <Image
        w="auto"
        maxH={{ base: '150px', md: '200px', lg: '250px' }}
        borderRadius={{ base: 4, md: 5, lg: 6 }}
        alt={title}
        src={imageUrl}
      />
    </Box>
  ) : (
    <Box
      overflow="hidden"
      m="auto"
      borderRadius={3}
      outline="1px solid #22222222"
    >
      <Flex
        align="center"
        minH={{ base: 3, lg: 4 }}
        pl={{ base: 1, lg: 2 }}
        bg={bg}
        pointerEvents="none"
      >
        <Stack alignItems="center" direction="row" spacing={2}>
          <Circle bg="#FF6660" size={circle} />
          <Circle bg="#EEBF3B" size={circle} />
          <Circle bg="#34C355" size={circle} />
        </Stack>
      </Flex>
      <Image alt={title} src={imageUrl} />
    </Box>
  );
}

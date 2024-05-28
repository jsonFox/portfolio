import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';
import { SectionTitle } from './partials';
import { skillIcons } from './icons';
import { skills } from '../utils/info';

export default function Skills() {
  return (
    <Box as="section" id="skills">
      <SectionTitle text="Skills" />
      <SimpleGrid
        as="article"
        opacity={0.9}
        minChildWidth={{ base: '70px', md: '75px', lg: '80px' }}
        spacing={{ base: '20px', md: '25px', lg: '30px' }}
      >
        {skills.map((name) => {
          const Icon = skillIcons[name];
          return <SkillIcon key={name} Icon={Icon} name={name} />;
        })}
        <Text ml={4} my="auto" fontSize="xl">
          ...and more!
        </Text>
      </SimpleGrid>
    </Box>
  );
}

function SkillIcon({ Icon, name }: { Icon: IconType; name: string }) {
  return (
    <Flex as="figure" align="center" direction="column">
      {<Icon size="50px" />}
      <Text as="figcaption" mt={2} textAlign="center">
        {name}
      </Text>
    </Flex>
  );
}

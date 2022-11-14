import { Flex, Heading, Divider, HeadingProps } from '@chakra-ui/react';

interface Props extends Omit<HeadingProps, 'children'> {
  text: string;
}

export default function SectionTitle({ text, ...props }: Props) {
  return (
    <Flex mb={{ base: 8, md: 10, lg: 12 }}>
      <Heading as="h2" variant="section" {...props}>
        {text}
        <Divider w="85%" ml="1%" />
      </Heading>
    </Flex>
  );
}

import { IconType } from "react-icons/lib";
import { Flex, Text } from "@chakra-ui/react";

export default function SkillIcon({ Icon, name }: { Icon: IconType, name: string }) {
  return (
    <Flex
      as='figure'
      direction='column'
      alignItems='center'
      py={3}
    >
      {<Icon size="50px" />}
      <Text as='figcaption' textAlign='center' mt={2}>
        {name}
      </Text>
    </Flex>
  )
}
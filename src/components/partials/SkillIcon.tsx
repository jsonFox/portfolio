import { IconType } from "react-icons/lib";
import { Box } from "@chakra-ui/react";

export default function SkillIcon({ Icon, name }: { Icon: IconType, name: string }) {
  return (
    <Box maxW='max-content'>
      {<Icon size="50px" />}
      <p>{name}</p>
    </Box>
  )
}
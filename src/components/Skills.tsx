import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import { Html, Css, Javascript, Jest, Typescript, Bootstrap, Node, React, Express, Pug, Graphql, Mysql, Mongodb, Aws } from "./icons";
import { SkillIcon, SectionTitle } from "./partials";

export default function Skills() {
  return (
    <Box as='section' id='skills'>
      <SectionTitle text='Skills' />
      <SimpleGrid as='article' minChildWidth='80px' spacing='30px'>
        <SkillIcon name='HTML' Icon={Html} />
        <SkillIcon name='CSS' Icon={Css} />
        <SkillIcon name='JavaScript' Icon={Javascript} />
        <SkillIcon name='Jest' Icon={Jest} />
        <SkillIcon name='TypeScript' Icon={Typescript} />
        <SkillIcon name='Bootstrap' Icon={Bootstrap} />
        <SkillIcon name='NodeJS' Icon={Node} />
        <SkillIcon name='React' Icon={React} />
        <SkillIcon name='ExpressJS' Icon={Express} />
        <SkillIcon name='Pug' Icon={Pug} />
        <SkillIcon name='GraphQL' Icon={Graphql} />
        <SkillIcon name='MySQL' Icon={Mysql} />
        <SkillIcon name='MongoDB' Icon={Mongodb} />
        <SkillIcon name='AWS' Icon={Aws} />
        {/* <Text ml={4}>...and more!</Text> */}
      </SimpleGrid>
    </Box>
  )
}
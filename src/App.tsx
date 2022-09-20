import { Grid, GridItem } from "@chakra-ui/react";
import { Header, Intro } from "./components";

const sections: Array<string> = [
  'Intro',
  'About',
  'Skills',
  'Projects',
  'Contact'
]

function App() {
  return (
    <>
      <Grid
        gridTemplateRows={'auto repeat(1fr)'}
        gridTemplateColumns={'0.3fr 1fr 0.3fr'}
        color='blackAlpha.700'
        fontWeight='bold'
      >
        <GridItem colSpan={3}>
          <Header sections={sections} />
        </GridItem>
        <GridItem h='100vh' rowSpan={sections.length + 1} colStart={1} bg='lightyellow'>

        </GridItem>
        <GridItem h='100vh' rowSpan={sections.length + 1} colStart={3} bg='lightyellow'>

        </GridItem>
        <GridItem h='100' colStart={2} rowStart={2} bg='papayawhip'>
          <Intro />
        </GridItem>
        <GridItem h='300' colStart={2} bg='lightblue'>

        </GridItem>
        <GridItem h='100' colStart={2} bg='papayawhip'>

        </GridItem>
      </Grid>
    </>
  )
}

export default App

import { Grid, GridItem } from "@chakra-ui/react";
import { Header, About, Skills, Work, Contact, Footer } from "./components";

const sections: Array<string> = [
  'About',
  'Skills',
  'My Work',
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
          {/* Left Nav */}
        </GridItem>
        <GridItem h='100vh' rowSpan={sections.length + 1} colStart={3} bg='lightyellow'>
          {/* Right Nav */}
        </GridItem>
        <GridItem h='250' colStart={2} rowStart={2} bg='papayawhip'>
          <About />
        </GridItem>
        <GridItem h='250' colStart={2} bg='lightblue'>
          <Skills />
        </GridItem>
        <GridItem h='250' colStart={2} bg='papayawhip'>
          <Work />
        </GridItem>
        <GridItem h='250' colStart={2} bg='lightblue'>
          <Contact />
        </GridItem>
        <GridItem h='250' colStart={2} bg='papayawhip'>
          <Footer />
        </GridItem>
      </Grid>
    </>
  )
}

export default App

import { Grid, GridItem } from "@chakra-ui/react";
import { Header, About, Skills, Work, Contact, Footer } from "./components";

const sections: Array<string> = [
  'About',
  'Skills',
  'My Work',
  'Contact'
]


function App() {
  const sidebarProps = {
    rowSpan: sections.length + 1,
    h: '100%',
  }
  return (
    <Grid
      gridTemplateRows={'auto repeat(1fr)'}
      gridTemplateColumns={'0.3fr 1fr 0.3fr'}
    >
      <GridItem w='100vw' colSpan={3}>
        <Header sections={sections} />
      </GridItem>
      <GridItem
        colStart={1}
        bg='#CCFFBB'
        {...sidebarProps}
      >
        {/* Left Nav */}
      </GridItem>
      <GridItem
        colStart={3}
        bg='#CCFFBB'
        {...sidebarProps}
      >
        {/* Right Nav */}
      </GridItem>
      <GridItem h='250' colStart={2} rowStart={2} bg='#BBEEDD'>
        <About />
      </GridItem>
      <GridItem colStart={2} bg='lightblue'>
        <Skills />
      </GridItem>
      <GridItem h='250' colStart={2} bg='#BBEEDD'>
        <Work />
      </GridItem>
      <GridItem h='250' colStart={2} bg='lightblue'>
        <Contact />
      </GridItem>
      <GridItem h='250' colStart={2} bg='#BBEEDD'>
        <Footer />
      </GridItem>
    </Grid>
  )
}

export default App

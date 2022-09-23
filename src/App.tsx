import { Stack } from "@chakra-ui/react";
import {
  Header,
  Home,
  About, Skills, Work, Contact,
  Footer
} from "./components";

const sections: Array<string> = [
  'Home',
  'About',
  'Skills',
  'My Work',
  'Contact Me'
]

function App() {
  return (
    <>
      <Header sections={sections} />
      {/* Left Nav */}
      {/* Right Nav */}
      <Stack
        as='main'
        direction='column'
        w='auto'
        mx={{ md: '2vw', lg: '5vw', xl: '13vw' }}
        px={6}
        spacing={{ base: 16, md: 24, lg: 32 }}
      >
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
        <Footer />
      </Stack>
    </>
  )
}

export default App

import { Stack } from "@chakra-ui/react";
import {
  Header,
  Home, Skills, Work, Contact,
  Footer
} from "./components";

const sections: Array<string> = [
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
        mx={{ md: '2vw', lg: '5vw', xl: '15vw' }}
        px={6}
        spacing={{ base: 16, md: 24, lg: 32 }}
      >
        <Home />
        <Skills />
        <Work />
        <Contact />
        <Footer />
      </Stack>
    </>
  )
}

export default App

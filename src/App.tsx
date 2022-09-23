import { Stack } from "@chakra-ui/react";
import {
  Header,
  Home,
  About, Skills, Work, Contact,
  Footer
} from "./components";
import { motion } from "framer-motion";

function Animated({ children }: { children: JSX.Element }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.5
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}

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
      <Stack
        as='main'
        direction='column'
        w='auto'
        mx={{ md: '2vw', lg: '5vw', xl: '13vw' }}
        px={6}
        spacing={{ base: 16, md: 24, lg: 32 }}
      >
        <Animated>
          <Home />
        </Animated>
        <Animated>
          <About />
        </Animated>
        <Animated>
          <Skills />
        </Animated>
        <Animated>
          <Work />
        </Animated>
        <Animated>
          <Contact />
        </Animated>
        <Footer />
      </Stack>
    </>
  )
}

export default App;
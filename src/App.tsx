import { Stack } from '@chakra-ui/react';
import {
  Header,
  Home,
  About,
  Skills,
  Work,
  Contact,
  Footer
} from './components';
import { motion } from 'framer-motion';

const sections = [Home, About, Skills, Work, Contact];
const sectionNames = ['Home', 'About', 'Skills', 'Work', 'Contact'];

export default function App() {
  return (
    <>
      <Header sections={sectionNames} />
      <Stack
        as="main"
        direction="column"
        w="auto"
        mx={{ md: '2vw', lg: '5vw', xl: '13vw' }}
        px={6}
        spacing={{ base: 16, md: 24, lg: 32 }}
      >
        {sections.map((Section) => (
          <motion.div
            key={Section.name}
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
            <Section />
          </motion.div>
        ))}
        <Footer />
      </Stack>
    </>
  );
}

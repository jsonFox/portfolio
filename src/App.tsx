import Header from "./components/Header";

const sections: Array<string> = [
  'About',
  'Skills',
  'Projects',
  'Contact'
]

function App() {
  return (
    <>
      <Header sections={sections} />
    </>
  )
}

export default App

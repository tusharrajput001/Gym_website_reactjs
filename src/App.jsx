import { useState } from 'react'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/hero'
// import Experience from './components/Expreience/experience'
import Enroll from './components/Enroll/enroll'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Enroll/>
      {/* <Experience/> */}

    </>
  )
}

export default App

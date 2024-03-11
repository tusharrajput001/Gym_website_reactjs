import { useState } from 'react'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/hero'
import Experience from './components/Expreience/experience'
import Enroll from './components/Enroll/enroll'
import Trainers from './components/Trainers/trainers'
import Membership from './components/Membership/membership'
// import About from './components/AboutUs/about'
import Contact from './components/Contact/contact'
import Partners from './components/Partners/partners'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Enroll/>
      <Trainers/>
      <Membership/>
      <Partners/>
      <Experience/>
      {/* <About/> */}
      <Contact/>

    </>
  )
}

export default App

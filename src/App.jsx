import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero/hero';
import Enroll from './components/Enroll/enroll';
import Trainers from './components/Trainers/trainers';
import Membership from './components/Membership/membership';
import About from './components/AboutUs/about';
import Contact from './components/Contact/contact';
import Partners from './components/Partners/partners';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <div><Navbar/>
        <Routes>
          <Route path="/" element={
            <>
            <Hero/>
            <Enroll/>
            <Trainers/>
            <Membership/>
            <Partners/>
            <Contact/>
            </>
          } />
          <Route path="/About" element={<About />}/>
          {/* <Route path="/Form" element={} /> */}
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

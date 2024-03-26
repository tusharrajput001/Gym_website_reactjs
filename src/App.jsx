import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



//components
import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero/hero';
import Enroll from './components/Enroll/enroll';
import Trainers from './components/Trainers/trainers';
import Membership from './components/Membership/membership';
import About from './components/AboutUs/about';
import Contact from './components/Contact/contact';
import Partners from './components/Partners/partners';
import Form from './components/Form/form';
import Footer from './components/Footer/footer';
import Loading from './components/Loading/loading';


// css
import "./index.css"



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulating a 5-second loading time
  }, []);

  return (
    <>
      <div className='App'>
        {loading ? (
          <Loading loading={loading} />
        )  : (
          <Router>
            <div>
              <Navbar />
              <Routes>
                <Route path="/" element={
                  <>
                    <Hero />
                    <Enroll />
                    <Trainers />
                    <Membership />
                    <Partners />
                    <Contact />
                  </>
                } />
                <Route path="/About" element={<About />} />
                <Route path="/Form" element={<Form />} />
              </Routes>
              <Footer />
            </div>
          </Router>
        )}
      </div>
    </>
  );
}

export default App;

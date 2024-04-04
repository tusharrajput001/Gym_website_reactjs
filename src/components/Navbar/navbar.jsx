import React, { useState } from 'react';
import './navbar.css';
import { Link as ScrollLink } from 'react-scroll';


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    setNavbarBackground(!navbarBackground); 
  };

  return (
    <>
    <div className='navbar-color'> 


      <div className={`nav-container ${navbarBackground ? 'gray-bg' : ''}`}>
        <a href="/" className='Logo'>Radiant Gym</a>
        <div className='menu' onClick={handleMenuClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav_list ${menuOpen ? "open" : ""}`}>
          <li><ScrollLink to='Home' smooth={true} duration={500}>Home</ScrollLink></li>
          <li><ScrollLink to='Membership' smooth={true} duration={500}>Membership</ScrollLink></li>
          <li><ScrollLink to='Trainers'smooth={true} duration={500}>Trainers</ScrollLink></li>
          <li><ScrollLink to='About' smooth={true} duration={500}>About Us</ScrollLink></li>
        </ul>

        <ScrollLink to='contact' smooth={true} duration={500} className='nav_btn'>
          Contact US
        </ScrollLink>
      </div>
      
    </div>
    </>
  );
}

export default Navbar;

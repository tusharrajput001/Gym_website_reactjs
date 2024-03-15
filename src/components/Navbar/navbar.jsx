import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    setNavbarBackground(!navbarBackground); // Toggle navbar background
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
          <li><a href="/" smooth={true} duration={500}>Home</a></li>
          {/* <li><ScrollLink to='Home' smooth={true} duration={500}>Home</ScrollLink></li> */}
          <li><ScrollLink to='Membership' smooth={true} duration={500}>Membership</ScrollLink></li>
          <li><ScrollLink to='Trainers'smooth={true} duration={500}>Trainers</ScrollLink></li>
          <li><Link to='/About'>About Us</Link></li>
        </ul>

        <Link to='contact' smooth={true} duration={500} className='nav_btn'>
          Contact US
        </Link>
      </div>
      
    </div>
    </>
  );
}

export default Navbar;

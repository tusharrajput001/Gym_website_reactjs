import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';

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
          <li><Link to='Home' smooth={true} duration={500}>Home</Link></li>
          <li><Link to='Membership' smooth={true} duration={500}>Membership</Link></li>
          <li><Link to='Trainers'smooth={true} duration={500}>Trainers</Link></li>
          <li><Link to='About' smooth={true} duration={500}>About Us</Link></li>
        </ul>

        <button className='nav_btn'>
          Contact US
        </button>
      </div>
      
    </div>
    </>
  );
}

export default Navbar;

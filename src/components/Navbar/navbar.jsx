import React, { useState } from 'react';
import './navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    setNavbarBackground(!navbarBackground); // Toggle navbar background
  };

  return (
    <>
      <div className={`nav-container ${navbarBackground ? 'gray-bg' : ''}`}>
        <a href="/" className='Logo'>RadiantGym</a>
        <div className='menu' onClick={handleMenuClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav_list ${menuOpen ? "open" : ""}`}>
          <li><a href='/'>Home</a></li>
          <li><a href='#aboutus'>About Us</a></li>
          <li><a href='#membership'>Membership</a></li>
          <li><a href='#trainers'>Trainers</a></li>
        </ul>

        <button className='nav_btn'>
          Contact US
        </button>
      </div>
    </>
  );
}

export default Navbar;

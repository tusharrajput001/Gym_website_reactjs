import React from 'react'
import './footer.css'
import { Link as ScrollLink } from 'react-scroll';



function Footer() {
  return (
    <>
     <footer className='footer-sec'>
        <h1 className='footer-head'>Radiant Gym ©️</h1>
        <nav className='footer-nav'>
            <a><ScrollLink to='Home' smooth={true} duration={500}>Home</ScrollLink></a>
            <a><ScrollLink to='Membership' smooth={true} duration={500}>Membership</ScrollLink></a>
            <a><ScrollLink to='Trainers' smooth={true} duration={500}>Trainers</ScrollLink></a>
            <a><ScrollLink to='About' smooth={true} duration={500}>About Us</ScrollLink></a>
        </nav>
            <div className='foot-list'>
                        <a><i class="fa-brands fa-instagram fa-2xl icons-cols"></i></a>
                        <a><i class="fa-brands fa-facebook fa-2xl icons-cols"></i></a>
                        <a><i class="fa-brands fa-twitter fa-2xl icons-cols"></i></a>
                        <a><i class="fa-brands fa-youtube fa-2xl icons-cols"></i></a>
            </div> 
        


        <p className='copyright-sec'>© 2024 Radiant GYM. All rights reserved.</p>
    </footer>




    </>
  )
}

export default Footer
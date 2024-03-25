import React from 'react'
import './footer.css'




function Footer() {
  return (
    <>
     <footer className='footer-sec'>
        <h1 className='footer-head'>Radiant Gym ©️</h1>
        <nav className='footer-nav'>
            <a href='/'>Home</a>
            <a href='/'>Membership</a>
            <a href=''>Trainers</a>
            <a href='/about'>About Us</a>
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
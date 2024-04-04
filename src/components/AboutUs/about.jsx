import React from 'react';
import './about.css';
import AbtImg from "../../assets/abtImg.png";


function About() {
  return (
    <>
    <div className='upper-portion'>
      <div className='Ab-heading'>
        About Radiant Gym
      </div>
      <div className='Ab-para'>
        <p className='p1'>Hi! We’re a local Radiant gym in </p>
        <p className='p2'>New Delhi, Janakpuri.</p>
      </div>
      <div className='Ab-des-con'>
        <p className='Ab-des'>Radiant Gym was started by Alex and Sparky in 2023. It’s our mission to </p> 
        <p className='Ab-des'>help people in Denver get fit, stay healthy, and live life on their terms</p> 
        <p className='Ab-des'>without fitness being an obstacle.</p>

      </div>



      <div className='lower-portion'>

        <div className='Ab-form-container'>
            <h1 className='Ab-form-head'>Claim your 7 day free trial</h1>
            <input type='text' placeholder='Name'></input>
            <input type='email' placeholder='Email'></input>
            <input type='text' placeholder='Phone Number'></input>
            <input type='number' placeholder='Age'></input>
            <button className='Ab-sub-btn'>Submit</button>
        </div>

        <div className='image-container'>
          <img src={AbtImg} alt='Image'/>
        </div>

      </div>


    </div>



    </>
  )
}

export default About
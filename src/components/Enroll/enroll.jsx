import React from 'react'
import banner from '../../assets/banner1.png'
import './enroll.css'
import {Link as ScrollLink} from 'react-scroll'

function Enroll() {
  return (
    <div className='enroll-div'>
        <img className="enroll-img" src={banner} loading='lazy'/>
        <div className='text-overlay'>
            <h2>ENROLL NOW</h2>
            <p>Start your Fitness Journey At Radiant Gym Today.</p>
            <ScrollLink to="Membership" smooth={true} duration={500}>
            <button className="btn-enroll" href='https://www.google.com'><span>CLICK HERE</span></button>    
            </ScrollLink>
        </div>
        <div className='wave-enroll' id= "Trainers"> 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#D6C7AE" fillOpacity="1" d="M0,160L20,149.3C40,139,80,117,120,133.3C160,149,200,203,240,192C280,181,320,107,360,117.3C400,128,440,224,480,266.7C520,309,560,299,600,261.3C640,224,680,160,720,144C760,128,800,160,840,160C880,160,920,128,960,128C1000,128,1040,160,1080,176C1120,192,1160,192,1200,176C1240,160,1280,128,1320,122.7C1360,117,1400,139,1420,149.3L1440,160L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path></svg>
        </div>
    </div>
  )
}

export default Enroll
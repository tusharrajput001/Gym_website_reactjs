import React from 'react'
import banner from '../../assets/banner1.png'
import './enroll.css'


function Enroll() {
  return (
    <div className='enroll-div'>
        <img className="enroll-img" src={banner}/>
        <div className='text-overlay'>
            <h2>ENROLL NOW</h2>
            <p>Start your Fitness Journey At Radiant Gym Today.</p>
            <button className="btn-enroll" href='https://www.google.com'>CLICK HERE</button>    
        </div>
    </div>
  )
}

export default Enroll
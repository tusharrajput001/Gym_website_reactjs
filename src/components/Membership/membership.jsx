import React from 'react'
import './membership.css'
import MemCard from './memCard'


function Membership() {
  return (
    <>
    {/* WAVES UP */}
    <div className='waves2'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#D6C7AE" fill-opacity="1022222.22" d="M0,192L60,197.3C120,203,240,213,360,224C480,235,600,245,720,218.7C840,192,960,128,1080,117.3C1200,107,1320,149,1380,170.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
    </div>


    <div className='mem-head'>
        Membership
    </div>

    {/* WAVES DOWN */}
    <div className='waves'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#D6C7AE" fill-opacity="1" d="M0,224L40,186.7C80,149,160,75,240,80C320,85,400,171,480,202.7C560,235,640,213,720,192C800,171,880,149,960,133.3C1040,117,1120,107,1200,112C1280,117,1360,139,1400,149.3L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
    </div> 


    <div className='mem-con'>
        <MemCard plan_name={"BASIC"} plan_desc={"An Basic affordable plan."} price={"$10/m"} f1={"Free outfit"} f2={"Personal Trainer"} f3={"Unlimited access"} />
        <MemCard plan_name={"PRO"} plan_desc={"Pro plan for Professionals."} price={"$30/m"} f1={"Include all basic plan"} f2={"Free Meals  "} f3={"Free online workouts"} />
        <MemCard plan_name={"ELITE"} plan_desc={"Elite plan for Gymrats."} price={"$50/m"} f1={"Include all Pro plan"} f2={"VIP access"} f3={"Sports complex"} />
    </div>   

    
    </>


  )
}

export default Membership
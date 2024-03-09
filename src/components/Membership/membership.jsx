import React from 'react'
import './membership.css'
import MemCard from './memCard'


function Membership() {
  return (
    <>
    <div className='mem-head'>
        Membership
    </div>
    <div className='mem-con'>
        <MemCard plan_name={"BASIC"} plan_desc={"A basic and affordable plan."} price={"$10/m"} f1={"Free outfit"} f2={"Personal Trainer"} f3={"Unlimited access"} />
        <MemCard plan_name={"PRO"} plan_desc={"Pro plan for Professionals."} price={"$30/m"} f1={"Include all basic plan"} f2={"Free beverages"} f3={"Free online workouts"} />
        <MemCard plan_name={"ELITE"} plan_desc={"Elite plan for Gymrats."} price={"$50/m"} f1={"Include all Elite plan"} f2={"VIP access"} f3={"Sports complex access"} />

    </div>    
    </>


  )
}

export default Membership
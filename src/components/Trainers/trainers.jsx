import React from 'react'
import './trainers.css'
import Trcard from './trcard'
import tr1 from '../../assets/trainer1.jpg'
import tr2 from '../../assets/cohenn.jpg'
import tr3 from '../../assets/t3.jpg'





function Trainers() {
  return (
    <>
    <div id= "Trainers" className='tr-head'>Our Trainers</div>
    <p className='tr-p'>Believe in the power of a motivating group fitness community..</p>
    <div className='cards-con'>
        <Trcard tr_img={tr1} tr_name="Certified Trainer" tr_title="Mens Physique" tr_unv = "Rajveer Shishodia" tr_ig="https://www.instagram.com/rajveer_fitness_series/?hl=en" tr_fb="https://www.facebook.com/RajveerFitnessSeries/"/>
        <Trcard tr_img={tr2} tr_name="Certified Trainer" tr_title="Womens Physique" tr_unv = "Miranda Cohen" tr_ig="https://www.instagram.com/mirandacohenfit/" tr_fb="https://www.facebook.com/mirandacohen.official/"/>
        <Trcard tr_img={tr3} tr_name="Bodybuilding Champion" tr_title="Mr. Olympia 2022" tr_unv = "Chris Bumstead" tr_ig="https://www.instagram.com/cbum/" tr_fb="https://www.facebook.com/Bumstead1995/"/>
    </div>
    </>

  )
}

export default Trainers
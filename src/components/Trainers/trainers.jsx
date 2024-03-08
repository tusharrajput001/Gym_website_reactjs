import React from 'react'
import './trainers.css'
import Trcard from './trcard'
import tr1 from '../../assets/tr1.jpeg'
import tr2 from '../../assets/tr2.jpeg'
import tr3 from '../../assets/tr3.jpg'




function Trainers() {
  return (
    <>
    <div className='tr-head'>Our Trainers</div>
    <div className='cards-con'>
        <Trcard tr_img={tr3} tr_name="asd" tr_title="asd" tr_unv = "asf" />
        <Trcard tr_img={tr2} tr_name="asd" tr_title="asd" tr_unv = "asfg" />
        <Trcard tr_img={tr1} tr_name="abc" tr_title="ads" tr_unv = "asf" />
    </div>
    </>

  )
}

export default Trainers
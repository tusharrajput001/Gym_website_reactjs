import React from 'react'
import './experience.css'
import Expcard from './expcard'
import pt from '../../assets/pt.png'
import st from '../../assets/st.png'
import zumba from '../../assets/zumba.png'
import grp from '../../assets/grp.png'
import cardio from '../../assets/cardio.png'

function Experience() {
  return (
    <>
    <div>
        <h2 className='exp-head'>EXPERIENCE</h2>
    </div>

    <div className='exp-container'>
        <Expcard cardImg={cardio} cardTitle="Cardio Zone"/>
        <Expcard cardImg={zumba} cardTitle="Zumba Classes"/>
        <Expcard cardImg={grp} cardTitle="Group Exercise"/>
        <Expcard cardImg={pt} cardTitle="Personal Training"/>
        <Expcard cardImg={st} cardTitle="Strength Training"/>
        

    </div>
    </>
  )
}

export default Experience
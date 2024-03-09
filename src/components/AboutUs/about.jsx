import React from 'react'
import './about.css'
import ab_img from '../../assets/jytry.avif'

function About() {
  return (
    <>
    
     

    <div className='ab-con'>
      <div className='ab-desc-container'>
        <h1 className='ab-head'>AboutUs</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>  
      </div>
      <div className='ab-img-container'>
        <img src={ab_img} className='about_img'></img>
      </div>
    </div>

    </>
  )
}

export default About
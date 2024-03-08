import React from 'react'
import './hero.css'
import HeroImg from '../../assets/hero.jpg'

export default function Hero() {
  return (
    <div className='img-container'>
        <img src={HeroImg} className='img-hero'/>
    </div>
  )
}

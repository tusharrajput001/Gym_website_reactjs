import React from 'react';
import './hero.css';
import HeroImg from '../../assets/hero.jpg';

export default function Hero() {
  return (
    <>
      <div className='img-container'>
        <img src={HeroImg} className='img-hero' alt='hero'/>
        <div className='hero-intro'>
          <h1 className='hero-heading'>ENROLL TODAY</h1>
          
      </div>
      </div>


    </>
  );
}

import React from 'react';
import './hero.css';
import HeroImg from '../../assets/hero.jpg';

export default function Hero() {
  return (
    <>
      <div className='img-container'>
        <img src={HeroImg} className='img-hero' alt='hero'/>
        <div className='hero-intro'>
          <div className='hero-heading'>DISCOVER</div>
          <div className='hero-heading'>YOUR</div>
          <div className='hero-heading'>STRENGTH</div>
      </div>

      </div>




    </>
  );
}

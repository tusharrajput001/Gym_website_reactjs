import React, { useEffect } from 'react';
import './hero.css';
import HeroImg from '../../assets/hero.jpg';

export default function Hero() {
  useEffect(() => {
    document.querySelector('.hero-intro').classList.add('slideIn');
  }, []);

  return (
    <>
      <div className='img-container'>
        <img src={HeroImg} className='img-hero' alt='hero' />
        <div className='hero-intro'>
          <div className='hero-desc'>DISCOVER</div>
          <div className='hero-desc'>YOUR</div>
          <div className='hero-desc'>STRENGTH</div>
        </div>
      </div>
    </>
  );
}

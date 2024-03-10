import React, { useState, useEffect } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Img1 from '../../assets/image1.png';
import Img2 from '../../assets/image2.png';
import Img3 from '../../assets/image3.png';
import Img4 from '../../assets/image4.png';
import Img5 from '../../assets/image5.png';
import './partners.css';

function Partners() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % 5); 
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <h2 className='pr-head'>OUR PARTNERS</h2>
      <div className='slider-full'>
        <AwesomeSlider selected={currentIndex} bullets={false} className='img-sl-con'>
          <div><img src={Img1} alt="Image 1" /></div>
          <div><img src={Img2} alt="Image 2" /></div>
          <div><img src={Img3} alt="Image 3" /></div>
          <div><img src={Img4} alt="Image 4" /></div>
          <div><img src={Img5} alt="Image 5" /></div>
        </AwesomeSlider>
      </div>
    </>
  );
}

export default Partners;

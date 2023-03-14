import React, { useState } from 'react';
import '../scss/components/Carousel.scss';
import ArrowLeft from '../assets/ArrowLeft.png';
import ArrowRight from '../assets/ArrowRight.png';



const Carousel = ({ Pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex === 0 ? Pictures.length - 1 : currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex === Pictures.length - 1 ? 0 : currentIndex + 1);
  };



  return (
    <div className='Container'>
      <div className="carousel">
        {Pictures.map((Picture, index) => (
          <div
            key={index}
            className={`carousel-container ${index === currentIndex ? "active" : "hidden"}`}>
            <img src={Picture} alt={`PhotoNumber ${index}`} />
            <p className='NumberPictures'>{currentIndex + 1}/{Pictures.length}</p>


          </div>

        ))}

      </div>

      <div className='Button'>
        <button className='Previous' onClick={handlePrevClick}>
          <img className='ArrowPrevious' src={ArrowLeft} alt="Previous" />
        </button>
        <button className='Next' onClick={handleNextClick}>
          <img className='ArrowNext' src={ArrowRight} alt="Next" />
        </button>
      </div>

    </div>
  );
};

export default Carousel;


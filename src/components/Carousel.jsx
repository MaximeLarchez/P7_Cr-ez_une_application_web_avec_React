import React, { useState } from 'react';
import data from '../datas/data';
import '../scss/components/Carousel.scss';
import getIdFromUrl from '../Javascript/logement';
import ArrowLeft from '../assets/ArrowLeft.png';
import ArrowRight from '../assets/ArrowRight.png';

// const id = getIdFromUrl();
// const logementInfos = data.find(logement => logement.id === id)
// const NumberPictures = logementInfos.pictures.length

// console.log(NumberPictures)


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
            <img src={Picture} alt={`Image ${index}`} />
          </div>

        ))}

      </div>

      <div className='Button'>
        <button className='Previous' onClick={handlePrevClick}>
          <img src={ArrowLeft} alt="Previous" />
          </button>
        <button className='Next' onClick={handleNextClick}>
        <img src={ArrowRight} alt="Next" />
          </button>
      </div>
      <p className='NumberPictures'></p>
    </div>
  );
};

export default Carousel;


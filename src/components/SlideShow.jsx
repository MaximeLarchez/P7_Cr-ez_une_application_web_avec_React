import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel';
import '../scss/components/SlideShow.scss';
import data from '../datas/data';


const SlideShow = () => {

   
    return (
        <div className='container_carousel'>
            <Carousel className='Carousel' showIndicators={false}  >
                {data.map((slide) => (
                    <div key={slide.id}>
                        <img src={slide.pictures} alt='diaporama de photo' />
                    </div>
                ))}
            </Carousel>
        </div>

    );
};

export default SlideShow;
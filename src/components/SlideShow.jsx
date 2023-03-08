import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel';
import data from '../datas/data';
import arrowLeft from '../assets/ArrowLeft1.svg';
import arrowRight from '../assets/ArrowRight.png';



const SlideShow = () => {
    const pictures = data[1].pictures; // Mettre dans le tableau l'id ? comment faire ? 

    const Propriete = {
        duration: 100,
        transitionDuration: 200,
        autoPlay: true,
        showIndicators: false,
        infiniteLoop: true,
        prevArrow: <img src={arrowLeft} alt='Previous'/>,
        nextArrow: <img src={arrowRight} alt='Next' />,
    }

    return (
        <section className='section_Caroussel'>
            <div className='Caroussel_Container'>
                <Carousel  {...Propriete} className='Caroussel'>
                    {pictures.map((picture, index) => (
                        <img className='img_Caroussel' key={index} src={picture} alt={`Picture ${index + 1}`} />
                    ))}
                </Carousel>
            </div>
        </section>

    );
};

export default SlideShow;
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel';
import '../scss/components/SlideShow.scss';
import data from '../datas/data';
import Slider from 'react-slick';
import { Slide } from 'react-slideshow-image'




const SlideShow = () => {
    const pictures = data[1].pictures; // Mettre dans le tableau l'id ? comment faire ? 
    const Propriete ={
        duration: 2000,
        transitionDuration: 5000,
        autoPlay:true,
        showIndicators: false,
        
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
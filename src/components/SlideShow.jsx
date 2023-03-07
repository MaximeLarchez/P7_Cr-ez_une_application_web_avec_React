import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel';
import '../scss/components/SlideShow.scss';
import data from '../datas/data';
import Slider from 'react-slick';
import {Slide} from 'react-slideshow-image'

// const SlideShow = () => {


//     return (
//         <div className='container_carousel'>
//             <Carousel className='Carousel' showIndicators={false}  >
//                 {data.map((slide) => (
//                     <div key={slide.id}>
//                         <img src={slide.pictures} alt='diaporama de photo' />
//                     </div>
//                 ))}
//             </Carousel>
//         </div>

//     );
// };

// export default SlideShow;

function SlideShow() {

    return (
        <div>
            <Slider>
                
            </Slider>
            {data.map((item) => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <img src={item.cover} alt={item.title} />
                    <div >
                        {item.pictures.map((pictures) => (
                            <img key={pictures} src={item.pictures} alt={item.title} />
                        ))}
                    </div>


                </div>
            ))}


        </div>
    );
}

export default SlideShow;

// const propriete = {

// }

// const SlideShow = () => {

//     return (
//         <div className='containerSlide'>
//          <Slide {...propriete}>
//             <div className='each-slide'>
//                 <figure>
//                     <img src={data.pictures} alt="image" />
//                 </figure>
//             </div>
//         </Slide>   
//         </div>
//     );
// };

// export default SlideShow;
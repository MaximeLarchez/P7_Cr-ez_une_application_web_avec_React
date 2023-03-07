import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel';
import '../scss/components/SlideShow.scss';
import data from '../datas/data';
import Slider from 'react-slick';
import {Slide} from 'react-slideshow-image'



// export default SlideShow;

// function SlideShow() {

//     const Pictures = data[0].pictures;

//     return (
//         <div className='carrousel_block'>
//             <Slider>
                
//             </Slider>
//             {Pictures.map((pictures, index) => (
//                 <div className='carousel_content' key={item.id}>
//                     <h2>{item.title}</h2>
//                     <img src={item.cover} alt={item.title} />
//                     <div >
//                         {item.pictures.map((pictures) => (
//                             <img key={pictures} src={item.pictures} alt={item.title} />
//                         ))}
//                     </div>


//                 </div>
//             ))}


//         </div>
//     );
// }

// export default SlideShow;

// const propriete = {

// }



const SlideShow = () => {
    const pictures = data[1].pictures; // Mettre dans le tableau l'id ? comment faire ? 
  
    return (
      <div>
        <Slide>
            {/* ne fonctionne pas si je met picture.map ici */}
        </Slide>
        {pictures.map((picture, index) => (
          <img key={index} src={picture} alt={`Picture ${index + 1}`} />
        ))}
      </div>
    );
  };
  
  export default SlideShow;
import React from 'react';
import '../scss/components/Banner.scss';
import img from '../assets/img-bg-about.png';


function BannerAbout() {
    return (
        <main>
            <section className='container-img'>
                <figure className='img-bg'>
                    <img src={img} alt='Paysage Montagneux' />
                </figure>
            </section>

        </main>
    );
};





export default BannerAbout;
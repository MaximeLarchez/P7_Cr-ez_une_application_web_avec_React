import React from 'react';
import '../scss/components/Banner.scss';
import img from '../assets/img-bg-home.png';


function BannerHome() {
    return (
        <main>
            <section className='container-img'>
                <figure className='img-bg'>
                    <img src={img} alt='Paysage Montagneux' />
                </figure>
                <h1>
                    Chez vous, partout et ailleurs
                </h1>
            </section>

        </main>
    );
};

export default BannerHome;
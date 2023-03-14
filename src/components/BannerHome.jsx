import React from 'react';
import '../scss/components/BannerHome.scss';
import img from '../assets/img-bg-home.png';


function BannerHome() {
    return (
        <main>
            <section className='container-img-Home'>
                <figure className='img-bg-Home'>
                    <img src={img} alt='Paysage Montagneux' />
                    <div className='Container-h1'>
                        <h1>
                            Chez vous, partout et ailleurs
                        </h1>
                    </div>
                </figure>
                

            </section>

        </main>
    );
};

export default BannerHome;
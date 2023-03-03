import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/about.css'
import BannerAbout from '../components/BannerAbout';

const About = () => {
    return (
        <div>
            <Header />
            <BannerAbout/>
            <h1 className='About-h1'>Ceci sera la page A propos</h1>
            <Footer />
        </div>
    );
};

export default About;
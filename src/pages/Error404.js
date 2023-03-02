import React from 'react';
import '../styles/error.css';

import Header from '../components/Header';
import Footer from '../components/Footer';



const Error404 = () => {
    return (
        <div>
            <Header/>
            <h1 className='error'>404</h1>
            <p>Oups ! La page que vous demandez n'existe pas.</p>
            <Footer/>
        </div>
    );
};

export default Error404;
import React from 'react';
import '../scss/pages/error.scss';
import { NavLink } from 'react-router-dom';

import Header from '../components/Header';





const Error404 = () => {
    return (
        <div>
            <Header />
            <div className='Content_Error'>
                <h1 className='error'>404</h1>
                <p className='MessageError'>Oups ! La page que vous demandez n'existe pas.</p>
            </div>

            <NavLink to='/'>
                <p className='returnHomePage'>Retourner sur la page d'accueil</p>
            </NavLink>
        </div>
    );
};

export default Error404;
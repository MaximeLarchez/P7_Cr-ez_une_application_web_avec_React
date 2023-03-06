import React from 'react';
import logo from '../assets/logo.svg';
import '../scss/components/Header.scss';
import { NavLink } from 'react-router-dom';
import Navigation from './Navigation';

function Header() {
    return (
        <header className='Header'>
            <div className='Header-container'>
                <NavLink to='/'>
                    <figure>
                        <img src={logo} alt='logo Entreprise Kasa' />
                    </figure>
                </NavLink>
                <Navigation />
            </div>
        </header>
    );
}

export default Header;
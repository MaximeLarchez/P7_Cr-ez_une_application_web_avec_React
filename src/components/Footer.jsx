import React from 'react';
import'../scss/components/Footer.scss';
import logo from '../assets/LOGO.png'


function Footer(){
    return(
        <footer className='container-footer'>
           <figure>
                <img src={logo} alt='logo de lentreprise Kasa'/>
           </figure>
           <div className='Copyright'>
                © 2020 Kasa. All rights reserved
           </div>
        </footer>
    )
}

export default Footer;
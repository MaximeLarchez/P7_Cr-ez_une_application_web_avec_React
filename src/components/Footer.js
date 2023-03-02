import React from 'react';
import'../styles/footer.css';
import logo from '../assets/LOGO.png'


function Footer(){
    return(
        <footer className='container-footer'>
           <figure>
                <img src={logo} alt='logo de lentreprise Kasa'/>
           </figure>
           <div>
                © 2020 Kasa. All rights reserved
           </div>
        </footer>
    )
}

export default Footer;
import React from 'react';
import { NavLink } from 'react-router-dom';

// Création du composant Navigation
const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                {/* Création d'un lien de Navigation utilisant Navlink qui pointe vers la page d'accueil */}
                <NavLink to='/' className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li className='Accueil'>Accueil</li>
                </NavLink>
                {/* Création d'un lien de Navigation utilisant Navlink qui pointe vers la page About */}
                <NavLink to='/about' className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li className='About'>A propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;
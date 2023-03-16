import React from 'react';
import { useState } from 'react';
import '../scss/components/AccordeonAbout.scss'
import ArrowDown from '../assets/ArrowDown.png';
import ArrowUp from '../assets/ArrowUp.png';

// Création du composant Accordeon avec en props (title et content)
const Accordeon = ({ title, content }) => {
    // Utilisation du Hook d'état useState pour créer une variable appelée 'active' et une fonction 'setActive' qui sont définis sur false
    const [active, setActive] = useState(false)
    // Fonction fléchée qui est appelée au clique sur le titre / appel de la fonction setActive pour l'inverser de false lors du clique
    const handleToggle = (e) => {
        setActive(!active)
    }
    return (
        // Appel de la fonction handleToggle sur le titre de l'accordeon qui le fera passer du state active "true" à "false" ou inversement
        <div className={`accordeon ${active && "active"}`}>
            <div className='accordeon_Title' onClick={handleToggle}>
                {/* Insertion du titre dans dans l'accordeon ainsi que l'image de la fleche vers le haut quand accordeon ouvert sinon vers le bas si fermé */}
                <span>
                    {title}
                    <img src={active ? ArrowUp : ArrowDown} alt={active ? 'arrowUp' : 'arrowDown'} />
                </span>
            </div>
            {/* Insertion du contenue de l'accordeon */}
            <div className='accordeon_content_bg'>
                <div className='accordeon_content'>{content}</div>
            </div>

        </div>
    );
};

export default Accordeon;
import React from 'react';
import { useState } from 'react';
import '../scss/components/AccordeonAbout.scss'

import ArrowDown from '../assets/ArrowDown.png';
import ArrowUp from '../assets/ArrowUp.png';


const Accordeon = ({ title, content }) => {
    const [active, setActive] = useState(false)

    const handleToggle = (e) => {
        setActive(!active)
    }
    return (
        <div className={`accordeon ${active && "active"}`}>
            <div className='accordeon_Title' onClick={handleToggle}>
                <span>
                    {title}
                    <img src={active ? ArrowUp : ArrowDown} alt={active ? 'arrowUp' : 'arrowDown'} />
                </span>
            </div>
            <div className='accordeon_content_bg'>
                <div className='accordeon_content'>{content}</div>
            </div>

        </div>
    );
};

export default Accordeon;
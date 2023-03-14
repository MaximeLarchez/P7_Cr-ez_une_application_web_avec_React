// import React, { useEffect } from 'react';
import '../scss/components/Card.scss';
import data from '../datas/data'
import { NavLink } from 'react-router-dom';



function Card(){
    
    return(
        <section className='container-card'>
            <div className='container-card-bg'>
                {data.map((data) =>(
                    <div className="card" key={data.id}>
                        <NavLink to = {`/logement/${data.id}`}>
                            <figure className='container-card-img'>
                                <img className="img" src={data.cover}  alt="logement" /> 
                                <h2>{data.title}</h2>
                            </figure>
                        </NavLink>
                    </div>
                ))}
            </div>
                
            </section> 
    )
}
export default Card;


import React from 'react';
import '../styles/cart.css';

function Cart(){
    return(
        <section className='container-card'>
                <div className="card" key={logement.id}>
				    <img className="img" src={logement.cover} alt="logement" />
                </div>

            </section> 
    )
}
export default Cart


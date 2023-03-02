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


// import React, {useState, useEffect } from 'react';
// const Cart = (props) =>{
//     const {logement} = props;
//     const [data, setData] = useState(null);

// useEffect(() => {
// 	fetch('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json')
// 	.then((res) => {
// 		console.log(res)
// 		setData(res.data)
// 	})
// 	.then((json) => setData(json))
// 	.catch((error) => console.error(error));
	
// }, []);
// return(
//     <section className='container-card'>
//         <div className="card" key={logement.id}>
//      		<img className="img" src={logement.cover} alt="logement" />
//         </div>
//     </section>  
// )
// }
// export default Cart
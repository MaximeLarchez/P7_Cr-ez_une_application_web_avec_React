import '../scss/components/Card.scss';
import data from '../datas/data'
import { NavLink } from 'react-router-dom';



function Card(){
    
    return(
        <section className='container-card'>
            <div className='container-card-bg'>
                {/* Utilisation de map sur le fichier data */}
                {data.map((data) =>(
                    // creation d'une div qui contient la key {data.id} qui est unique basée sur l'id de chaque élément 'data'
                    <div className="card" key={data.id}>
                        <NavLink to = {`/logement/${data.id}`}>
                            <figure className='container-card-img'>
                                {/* Affichage de la propriété cover du data qui correspond a chaque id , Pareil pour le h2 */}
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


import React from 'react';
import data from '../datas/data';
import getIdFromUrl from '../Javascript/logement';
import '../scss/components/InfoLogement.scss'
import StarRating from './StarRating';



const InfoLogement = () => {
    // Appel de la fonction qui permet de récuperer l'id du logement à partir de l'URL de la page 
    const id = getIdFromUrl();
    console.log(id)
    // Variable qui cherche un élément du tableau "data" pour trouver un élément qui a un id égal à la variable 'id'
    const logementInfos = data.find(logement => logement.id === id)
    // Tableau qui contient les Tags associés au logement 
    const Tags = logementInfos.tags;
    // Objet qui contient les informations de l'hôte du logement 
    const host = logementInfos.host;
    const name = host.name;
    const profilPicture = host.picture;

    return (
        <div className='InfoContainer'>
            <h1 className='Title'>{logementInfos.title}</h1>
            <p className='Location'>{logementInfos.location}</p>
            <ul className='Container-tags'>
                {/* Méthode map qui permet de récupérer les tags associé a l'id et de crée une <li> pour chaque tags trouvé */}
                {Tags.map((tags, index) => (
                    <li key={index} className='Tags'>{tags}</li>
                ))}
            </ul>
            <div className='ContainerUserInfo'>
                <p className='HostName'>{name}</p>
                <img className='ProfilPicture' src={profilPicture} alt={name} />
            </div>
            <StarRating/>
        </div>
    );
};

export default InfoLogement;
import React from 'react';
import data from '../datas/data';
import StarActive from '../assets/StarActive.png';
import StarInactive from '../assets/StarInactive.png';
import getIdFromUrl from '../Javascript/logement';
import '../scss/components/StarRating.scss'



const StarRating = () => {
    const id = getIdFromUrl();
    // Utilisation de la methode find pour chercher l'objet rating correspondant a l'id du logement
    const RatingInfos = data.find(rating => rating.id === id)
    // Permet de recupérer le rating du logement en question 
    const Rating = RatingInfos.rating

    const MaxRating = 5;
    const FullStar = StarActive
    const EmptyStar = StarInactive
    const Stars = []

    // Crée une boucle qui ajoutera des étoiles jusqu'a 5 maximum
    for (let i = 0; i < MaxRating; i++) {
        let Star;
        // Si "i" inférieur à la valeur Rating on ajoute des étoiles pleines
        if (i < Rating) {
            Star = FullStar
            // Sinon, on ajoute des étoiles vides
        } else {
            Star = EmptyStar
        }
        // on ajoute un élément <img> au tableau Stars contenant l'image de l'étoile qui correspond à la valeur de "Star"
        Stars.push(<img key={i} src={Star} alt="star" />);
    }
    // On retourne un élément <div> contenant le tableau d'images 'Stars' qui correspond à la note du logement
    return <div className='Star'>
        {Stars}
    </div>;
};

export default StarRating;

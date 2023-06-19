import React, { useState } from 'react';
import '../scss/components/Carousel.scss';
import ArrowLeft from '../assets/ArrowLeft.png';
import ArrowRight from '../assets/ArrowRight.png';


// Création du Composant Carousel avec en props (Pictures) 
const Carousel = ({ Pictures }) => {
  
  // On initialise un état "currentIndex" à 0 à l'aide du hook "useState"
  const [currentIndex, setCurrentIndex] = useState(0);

  // On définit une fonction "handlePrevClick" qui sera appelée lorsqu'on clique sur le bouton "précédent"
  const handlePrevClick = () => {
    // on utilise le ternaire pour determiner si l'index courant est égal a 0
    // Si oui, on veut passez à la dernière image 
    // Si non, on passe simplement a l'image précédente en retirant -1 
    setCurrentIndex(currentIndex === 0 ? Pictures.length - 1 : currentIndex - 1);
  };

  // On définit une fonction "handleNextClick" qui sera appelée lorsqu'on clique sur le bouton "suivant"
  const handleNextClick = () => {
    // fonctionne de la même façon que PrevClick mais en inversé 
    setCurrentIndex(currentIndex === Pictures.length - 1 ? 0 : currentIndex + 1);
  };



  return (
    <div className='Container'>
      <div className="carousel">
        {/* On utilise .map pour parcourir chaque élément du tableau Pictures et retourner un nouveau tableau Picture et son index represente son indice dans le tableau */}
        {Pictures.map((Picture, index) => (
          <div
            // on ajoute une key unique appelé index qui est égal à l'indice de l'élément
            key={index}
            // Permet de définir si l'image est "active" ou "hidden" en fonction de si l'indice actuel correspond a l'indice de l'image affiché
            className={`carousel-container ${index === currentIndex ? "active" : "hidden"}`}>
              {/* insertion de l'image avec son indice actuelle "index" */}
            <img src={Picture} alt={`PhotoNumber ${index}`} />
            {/* Permet d'afficher le numéro de l'image actuelle par rapport au total d'image dans le tableau  */}
            <p className='NumberPictures'>{currentIndex + 1}/{Pictures.length}</p>
          </div>
        ))}
      </div>
      {/* Condition qui verifie si il y a plus d'une image dans le tableau à afficher ou pas  */}
      {Pictures.length > 1 ? (
        <div className="Button">
          {/* Ajout du bouton pour passer à l'image précedente avec dedans la fleche qui correspond à Précédent */}
          <button className="Previous" onClick={handlePrevClick}>
            <img className="ArrowPrevious" src={ArrowLeft} alt="Previous" />
          </button>
          {/* Ajout du bouton pour passer à l'image suivante avec dedans la fleche qui correspond à Suivant */}
          <button className="Next" onClick={handleNextClick}>
            <img className="ArrowNext" src={ArrowRight} alt="Next" />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Carousel;


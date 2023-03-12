import React from 'react';
import data from '../datas/data';
import Header from '../components/Header';

import Accordeon from '../components/Accordeon';
import '../scss/pages/Fiche-logement.scss';
import Footer from '../components/Footer';
import getIdFromUrl from '../Javascript/logement';
import InfoLogement from '../components/InfoLogement';

import Error404 from './Error404';
import Carousel from '../components/Carousel';


const logement = () => {
    const id = getIdFromUrl();
    const logementInfos = data.find(logement => logement.id === id)

    const equipements = 
    <ul className='Equipement-Container'>
        {logementInfos.equipments.map((equipement, index) => (
      <li key={index} className='Equipement'>
        {equipement}
      </li>
    ))}
    </ul>
    
    let Pictures = logementInfos.pictures
    const description = logementInfos.description
    const Rating = logementInfos.rating
    
    
    
    if (logementInfos !== undefined) {


        return (
            <div>
                <Header />
                <Carousel Pictures={Pictures}/>
                <InfoLogement />
                <div className='Container-Accordeon'>
                    <div className="Description"><Accordeon title='Description' content={description} /></div>
                    <div className='Equipement'><Accordeon title='Équipements' content={equipements} /></div>
                </div>
                <Footer />

             </div>

        )
    }
    else{
        <Error404/>
        console.log(id)
    }


}










export default logement;
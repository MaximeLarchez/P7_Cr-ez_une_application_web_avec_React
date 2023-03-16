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
    
    //Si logementInfos n'est pas definie le code à l'interieur ne s'executera pas sinon le code suivant s'executera 
    if (logementInfos !== undefined) {
        // Créer une variable qui contient les equipements 
        const equipements =
            <ul className='Equipement-Container'>
                {/* On utilisant map sur logementInfo.equipement */}
                {logementInfos.equipments.map((equipement, index) => (
                    <li key={index} className='Equipement'>
                        {equipement}
                    </li>
                ))}
            </ul>

        let Pictures = logementInfos.pictures
        const description = logementInfos.description

        return (
            <div>
                <Header />
                <Carousel Pictures={Pictures} />
                <InfoLogement />
                <div className='Container-Accordeon'>
                    <div className="Description"><Accordeon title='Description' content={description} /></div>
                    <div className='Equipement'><Accordeon title='Équipements' content={equipements} /></div>
                </div>
                <Footer />

            </div>

        )
    }
    else {
        return (<Error404 />)


    }


}










export default logement;
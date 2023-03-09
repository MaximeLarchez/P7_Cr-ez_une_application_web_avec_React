import React from 'react';
import data from '../datas/data';
import Header from '../components/Header';
import SlideShow from '../components/SlideShow';
import Accordeon from '../components/Accordeon';
import '../scss/pages/Fiche-logement.scss';
import Footer from '../components/Footer';
import getIdFromUrl from '../Javascript/logement';
import InfoLogement from '../components/InfoLogement';

const logement = () => {
    const id = getIdFromUrl();
    const logementInfos = data.find(logement => logement.id === id)
   
    const equipements = logementInfos.equipments
    const description = logementInfos.description
   
    return (
        <div>
            <Header />
            <SlideShow />
            <InfoLogement/>
            <div className='Container-Accordeon'>
                <div className="Description"><Accordeon  title='Description'content={description}/></div>
                <div className='Equipement'><Accordeon  title='Équipements'content={equipements}/></div>
            </div>
            <Footer/>
        </div>
    );
};

export default logement;
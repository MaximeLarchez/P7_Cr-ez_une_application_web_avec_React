import React from 'react';
import data from '../datas/data';
import getIdFromUrl from '../Javascript/logement';
import '../scss/components/InfoLogement.scss'
import StarRating from './StarRating';



const InfoLogement = () => {
    const id = getIdFromUrl();
    const logementInfos = data.find(logement => logement.id === id)
    const Tags = logementInfos.tags;
    const host = logementInfos.host;
    const name = host.name;
    const profilPicture = host.picture;

    return (
        <div className='InfoContainer'>
            <h1 className='Title'>{logementInfos.title}</h1>
            <p className='Location'>{logementInfos.location}</p>
            <ul className='Container-tags'>
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
import React from 'react';
import data from '../datas/data';
import StarActive from '../assets/StarActive.png';
import StarInactive from '../assets/StarInactive.png';
import getIdFromUrl from '../Javascript/logement';
import '../scss/components/StarRating.scss'



const StarRating = () => {
    const id = getIdFromUrl();
    const RatingInfos = data.find(rating => rating.id === id)
    const Rating = RatingInfos.rating

    const MaxRating = 5;
    const FullStar = StarActive
    const EmptyStar = StarInactive

    const Stars = []

    for (let i = 0; i < MaxRating; i++) {
        let Star;

        if (i < Rating) {
            Star = FullStar
        } else {
            Star = EmptyStar
        }

        Stars.push(<img key={i} src={Star} alt="star" />);
    }
    return <div className='Star'>
        {Stars}
    </div>;
};

export default StarRating;

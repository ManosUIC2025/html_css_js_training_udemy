import React from 'react';
import { Places } from '../../data/places';
import Card from './Card';

console.log(Places);

const CardCourse = () => {
    return (
        <>
            {/* {Places.map((place) => <Card source={place.source} title={place.title} author={place.author} />)} */}

            {/* {Places.map((place) => {
                return <Card source={place.source} title={place.title} author={place.author} />
            })} */}

            {/* spreading object as props */}
            {Places.map((place) => {
                return <Card {...place} />
            })}
        </>
    )
}

export default CardCourse
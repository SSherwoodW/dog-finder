import React from 'react';
import { useParams } from 'react-router-dom';
import DogDeets from './DogDeets';

function SelectDogDeets({ dogs }) {
    const { name } = useParams(); 

    if (name) {
        const currDog = dogs.find(
            dog => dog.name.toLowerCase() === name.toLowerCase()
        );
        return <DogDeets dog={currDog}/>
    }
    return null;
    
}

export default SelectDogDeets;
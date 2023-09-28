import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css"


function DogList({ dogs }) {
    const dogTags = dogs.map(dog => (
        <Link key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>
            <span className="dog-name">{dog.name}</span>
            <img src={dog.src} alt={dog.name} className="thumbnail"/>
        </Link>
    ));
    return (
        <div id="doggos">
            {dogTags}
        </div>
    )
}

export default DogList;
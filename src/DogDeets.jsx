import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./DogDeets.css"

function DogDeets({ dog }) {
    const { name } = useParams();
    const navigate = useNavigate();

    if (!name || !dog) {
        navigate("/dogs");
        return null;
    }

    const currentDog = dog;



    return (
        <div className="DogDeets">
            <h2>{currentDog.name}</h2>
            <img className="dog-pics" src={currentDog.src} alt={currentDog.name} />
            <h4>Age: {currentDog.age} years</h4>
            <h4>Facts:</h4>
            <ul>
                {currentDog.facts.map((fact, i) => (
                    <li key={i}>{fact}</li>
                ))}
            </ul>
            <Link to="/dogs">Return To Home Page</Link>
        </div>
    )
}

export default DogDeets;
import { useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import './App.css'
import DogList from './DogList';
import DogDeets from './DogDeets';
import SelectDogDeets from './SelectDogDeets';
import whiskey from "../public/whiskey.jpg"
import duke from "../public/duke.jpg"
import perry from "../public/perry.jpg"
import tubby from "../public/tubby.jpg"

function App({ dogs }) {
  
  const navLinks = dogs.map(dog => (
    <li key={dog.name}><NavLink to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</NavLink></li>
    
  ))

  // const routes = dogs.map(dog => (
  //   <Route key={dog.name} path={`/dogs/${dog.name.toLowerCase()}`} element={<SelectDogDeets dogs={dogs} />}>{dog.name}</Route>
  // ))
  

  return (
    <BrowserRouter>
      <nav id='navbar'>
        <ul>
          <li key={2029384203957}><NavLink to="/dogs">Home</NavLink></li>
          {navLinks}
        </ul>
      </nav>
      <Routes>
        <Route path="/dogs" element={<DogList dogs={dogs} />}></Route>
        <Route path="/dogs/:name" element={<SelectDogDeets dogs={dogs}/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;

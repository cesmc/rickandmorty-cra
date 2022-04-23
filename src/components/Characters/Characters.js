import React, { useState, useEffect } from 'react'
import './style.css';

const RICKANDMORTY_URL = 'https://rickandmortyapi.com/api/character';

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const fetchApi = () => {
    fetch(RICKANDMORTY_URL)
    .then(response => response.json())
    .then(data => setCharacters(data.results))
  }

  console.log(characters);

  useEffect(() => {
    fetchApi();
  }, [])

  return (
    <div className='Characters_main-container'>
      {characters.map(character => (
        <div className='Character_container' key={character.id}>
          <h2>{character.id}. {character.name}</h2>
          <img src={character.image} alt={character.name}></img>
          <div className='Character_container-specs'>
            <p>Gender <br/>{character.gender}</p>
            <p>Species <br/>{character.species}</p>
            <p>Status <br/>{character.status}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Characters;

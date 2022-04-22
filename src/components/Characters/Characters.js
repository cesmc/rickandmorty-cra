import React, { useState, useEffect } from 'react'

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
    <div className='Characters'>
      {characters.map(character => (
        <div className='Character_container' key={character.id}>
          <h2>{character.id}. {character.name}</h2>
          <img src={character.image} alt={character.name}></img>
          <p>{character.gender}</p>
          <p>{character.species}</p>
          <p>{character.status}</p>
          <p>{character.type}</p>
        </div>
      ))}
    </div>
  )
}

export default Characters;

import React from 'react';
import CharacterCard from './CharacterCard';
import '../stylesheets/App.scss';

const CharacterList = (props) => {
  const characterElements = props.characters.map((character) => {
    return (
      <li className='lista' key={character.id}>
        <CharacterCard character={character} />
      </li>
    );
  });

  return (
    <section>
      <ul className='cards-list'>{characterElements}</ul>
    </section>
  );
};

export default CharacterList;

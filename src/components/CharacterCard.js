import React from 'react';

const CharacterCard = (props) => {
  return (
    <article className='card'>
      <img
        className='card__img'
        src={props.character.image}
        alt={`foto de ${props.character.name}`}
        title={`foto de ${props.character.name}`}
      />
      <h4 className='card__name'>Name: {props.character.name}</h4>
      <p className='card__specie'>Specie: {props.character.species}</p>
    </article>
  );
};

export default CharacterCard;

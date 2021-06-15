import React from 'react';

const CharacterCard = (props) => {
  return (
    <article className='card'>
      <img
        className='card__img'
        src={props.charactersData.image}
        alt={`foto de ${props.charactersData.name}`}
        title={`foto de ${props.charactersData.name}`}
      />
      <h4 className='card__name'>Name: {props.charactersData.name}</h4>
      <p className='card__specie'>Specie: {props.charactersData.species}</p>
    </article>
  );
};

export default CharacterCard;

import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
  return (
    <Link to={'/character/' + props.character.id}>
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
    </Link>
  );
};

export default CharacterCard;

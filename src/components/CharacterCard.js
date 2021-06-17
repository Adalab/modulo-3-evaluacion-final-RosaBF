import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/App.scss';

const CharacterCard = (props) => {
  return (
    <Link to={'/character/' + props.character.id}>
      <article className='card-list-1'>
        <img
          className='card__img'
          src={props.character.image}
          alt={`foto de ${props.character.name}`}
          title={`foto de ${props.character.name}`}
        />
        <div className='cards__info'>
          <h4 className='cards__info--name'>Name: {props.character.name}</h4>
          <p className='cards__info--specie'>
            Specie: {props.character.species}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default CharacterCard;

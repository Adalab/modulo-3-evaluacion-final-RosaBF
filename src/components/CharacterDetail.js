import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  return (
    <div className='card'>
      <Link to='/'>Volver</Link>

      <section className='card__container'>
        <img
          className='card__img'
          src={props.character.image}
          alt={props.character.name}
        />
        <h4 className='card__title'>{props.character.name}</h4>
        <ul className='ml-1 mt-1'>
          <li>Name: {props.character.name}</li>
          <li>Specie: {props.character.species}</li>
          <li>Planeta: {props.character.location}</li>
          <li>Episodes: {props.character.episode2}</li>
          <li>Status: {props.character.status}</li>
        </ul>
      </section>
    </div>
  );
};

export default CharacterDetail;

import React from 'react';
import '../stylesheets/App.scss';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  return (
    <div className='card'>
      <Link to='/' className='link__back'>
        <button className='link__back--button'>Back</button>
      </Link>

      <section className='card__container'>
        <img
          className='card__img'
          src={props.character.image}
          alt={props.character.name}
        />

        <ul className='card__description'>
          <li className='lista'>Name: {props.character.name}</li>
          <li className='lista'>Specie: {props.character.species}</li>
          <li className='lista'>Planet: {props.character.location}</li>
          <li className='lista'>Episodes: {props.character.episode2}</li>
          <li className='lista'>Status: {props.character.status}</li>
        </ul>
      </section>
    </div>
  );
};

export default CharacterDetail;

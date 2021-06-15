import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  const userElements = props.charactersData.map((user) => {
    return (
      <li key={user.id}>
        <CharacterCard user={user} />
      </li>
    );
  });

  return (
    <section>
      <ul className='cards'>{userElements}</ul>
    </section>
  );
};

export default CharacterList;

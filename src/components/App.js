import React, { useState, useEffect } from 'react';
import '../stylesheets/App.scss';
import getDataFromApi from '../services/api';
import CharacterList from './CharacterList';

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getDataFromApi().then((allCleanData) => {
      setCharacters(allCleanData);
    });
  }, []);

  return (
    <>
      <h2 className='characters--title'>Characters</h2>
      <div className='col1'>
        <CharacterList users={characters} />
      </div>
    </>
  );
};

export default App;

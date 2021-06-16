import React, { useState, useEffect } from 'react';
import '../stylesheets/App.scss';
import getDataFromApi from '../services/api';
import CharacterList from './CharacterList';
import FilterByName from './FilterByName';
import localS from '../services/local-storaje';

const App = () => {
  const [characters, setCharacters] = useState(localS.get('characters', []));
  const [filterName, setFilterName] = useState(localS.get('filterName', ''));

  //Fetch
  useEffect(() => {
    getDataFromApi().then((characters) => {
      setCharacters(characters);
    });
  }, []);

  //Local Storage
  console.log('Guardando en lc', characters);
  useEffect(() => {
    localS.set('characters', characters);
  }, [characters]);

  useEffect(() => {
    localS.set('filterName', filterName);
  }, [filterName]);

  //HandleEvents

  const handleFilterName = (data) => {
    if (data.key === 'name') {
      setFilterName(data.value);
    }
  };
  //filters
  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterName.toLowerCase());
  });

  return (
    <>
      <h2 className='characters--title'>Characters</h2>
      <FilterByName
        filterName={filterName}
        handleFilterName={handleFilterName}
      />
      <div className='col1'>
        <CharacterList characters={filteredCharacters} />
      </div>
    </>
  );
};

export default App;

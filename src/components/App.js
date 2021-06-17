import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from '../images/logo.png';
import '../stylesheets/App.scss';
import getDataFromApi from '../services/api';
import CharacterList from './CharacterList';
import FilterByName from './FilterByName';
import localS from '../services/local-storaje';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import { logDOM } from '@testing-library/react';

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

  useEffect(() => {
    localS.set('characters', characters);
  }, [characters]);

  useEffect(() => {
    localS.set('filterName', filterName);
  }, [filterName]);

  //HandleEvents/

  const handleFilterName = (data) => {
    if (data.key === 'name') {
      setFilterName(data.value);
    }
  };
  //filters
  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterName.toLowerCase());
  });

  //render
  const renderCharacterDetail = (props) => {
    console.log('Router props', props);
    const routeCharacterId = parseInt(props.match.params.characterId);
    const foundCharacter = characters.find((character) => {
      return character.id === routeCharacterId;
    });

    if (foundCharacter !== undefined) {
      return <CharacterDetail character={foundCharacter} />;
    }
  };

  return (
    <>
      <div className='img-container'>
        <img className='title-logo' src={logo} />
      </div>

      <Switch>
        <Route exact path='/'>
          <Filters
            filterName={filterName}
            handleFilterName={handleFilterName}
          />
          <div className='col1'>
            {filteredCharacters.length > 0 ? (
              <CharacterList characters={filteredCharacters} />
            ) : (
              <p className='not-found'>Character not found</p>
            )}
          </div>
        </Route>

        <Route path='/character/:characterId' render={renderCharacterDetail} />
      </Switch>
    </>
  );
};

export default App;

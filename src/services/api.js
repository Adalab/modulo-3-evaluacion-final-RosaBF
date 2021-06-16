const getDataFromApi = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((charactersData) => {
      const characters = charactersData.results.map((character) => {
        return {
          name: character.name,
          species: character.species,
          image: character.image,
          id: character.id,
          status: character.status,
        };
      });
      console.log(characters);
      return characters;
    });
};

export default getDataFromApi;

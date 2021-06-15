const getDataFromApi = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((charactersData) => {
      const allCleanData = charactersData.results.map((character) => {
        return {
          name: character.name,
          species: character.species,
          image: character.image,
          id: character.id,
          status: character.status,
        };
      });
      console.log(allCleanData);
      return allCleanData;
    });
};

export default getDataFromApi;

import axiosConfig from '../configs/axiosConfig';

const getAllCharactersByPage = (page: number) => {
  return axiosConfig.get('/character?page=' + page);
};

const getCharacterDetails = (characterId: number) => {
  return axiosConfig.get('/character/' + characterId);
};

const getCharactersByName = (name: string) => {
  return axiosConfig.get('/character/?name=' + name);
};

const getMultipleCharacters = (characterIds: []) => {
  console.log(characterIds);
  const stringData = characterIds.map(({value}) => `${value}`).join(',');
  console.log(stringData);
  //console.log(characterIds.join(','));
  //return axiosConfig.get('/character' + JSON.stringify(characterIds));
};

export {
  getAllCharactersByPage,
  getCharacterDetails,
  getMultipleCharacters,
  getCharactersByName,
};

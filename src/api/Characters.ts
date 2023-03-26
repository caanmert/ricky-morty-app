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
  return axiosConfig.get('/character/' + characterIds + ',');
};

export {
  getAllCharactersByPage,
  getCharacterDetails,
  getMultipleCharacters,
  getCharactersByName,
};

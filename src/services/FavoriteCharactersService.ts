import {load, save} from '../utils/storage';

const getFavoriteCharacterIds = async () => {
  try {
    const favorites = (await load('favorites')) || [].toString();
    return favorites;
  } catch (err) {}
};

const deleteFavoriteCharacterById = async (id: number) => {
  try {
    const favorites = (await load('favorites')) || [];
    const data = favorites.filter((e: number) => e !== id);
    await save('favorites', data);
  } catch (err) {}
};

export {getFavoriteCharacterIds, deleteFavoriteCharacterById};

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../../app/store';
import {Character} from '../../types';
import {load} from '../../utils/storage';

const getFavoriteCharacterIds = createAsyncThunk(
  'favoriteCharacters/get',
  async () => {
    const favorites = (await load('favorites')) || [];
    return favorites;
  },
);

/* const deleteFavoriteCharacterById = createAsyncThunk(
  'favoriteCharacters/delete',
  async () => {
    const favorites = (await getFavoriteCharacterIds()) || [];
    const data = favorites.filter((e: number) => e !== id);
  },
); */

interface FavoritesState {
  favorites: Character[];
  favoriteCharacterIds: number[];
}

const initialState: FavoritesState = {
  favorites: [],
  favoriteCharacterIds: [] || getFavoriteCharacterIds(),
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    add: (state, action) => {
      state.favoriteCharacterIds.push(action.payload);
    },
    remove: (state, action) => {
      state.favoriteCharacterIds.filter(
        favorite => favorite.id !== action.payload.id,
      );
    },
  },
});

import { createReducer } from '@reduxjs/toolkit';
import { movies } from '../mocks/movies';
import { changeGenre } from './action';

export const initialState = {
  genre: 'All genres',
  movieList: movies,
};

const globalReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, ((state, action) => {
      state.genre = action.payload.genre;
    }))
});

export { globalReducer };

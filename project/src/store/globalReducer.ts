import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, setIsMoviesLoaded, setMovies } from './action';
import { TMovie } from '../types/TMovie';

export const initialState = {
  genre: 'All genres',
  movieList: new Array<TMovie>(),
  isMoviesLoaded: false,
};

const globalReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, ((state, action) => {
      state.genre = action.payload.genre;
    }))
    .addCase(setMovies, (state, action) => {
      state.movieList = action.payload.movies;
    })
    .addCase(setIsMoviesLoaded, (state, action) => {
      state.isMoviesLoaded = action.payload;
    })
});

export { globalReducer };

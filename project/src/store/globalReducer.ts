import { createReducer } from '@reduxjs/toolkit';
import { movies } from '../mocks/movies';
import { changeGenre, getAllMovies, getMoviesByGenre } from './action';
import { TMovie } from '../types/TMovie';

export const initialState = {
  genre: 'All genres',
  movieList: movies,
};

const globalReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, ((state, action) => {
      state.genre = action.payload.genre;
    }))
    .addCase(getMoviesByGenre, ((state, action) => {
      const newGenre = action.payload.genre;
      state.movieList = getMoviesByGenreHelper(newGenre, state.movieList);
    }))
    .addCase(getAllMovies, (state) => {
      state.movieList = movies;
    })
});

const getMoviesByGenreHelper = (newGenre: string, movies: TMovie[]) => {
  if (newGenre === 'All Genres') {
    return movies;
  }
  return movies.filter((m) => m.genre === newGenre);
}

export { globalReducer };

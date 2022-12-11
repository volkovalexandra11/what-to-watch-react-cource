import { createReducer } from '@reduxjs/toolkit';
import { changeAuthStatus, changeGenre, setIsMoviesLoaded, setMovies, setUser } from './action';
import { TMovie } from '../types/TMovie';
import { AppState } from '../types/TStore';
import { AuthStatus } from '../constants/constants';

export const initialState: AppState = {
  genre: 'All genres',
  movieList: new Array<TMovie>(),
  isMoviesLoaded: false,
  authStatus: AuthStatus.Unknown,
  user: null,
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
    .addCase(changeAuthStatus, (state, action) => {
        state.authStatus = action.payload.authStatus;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload.user;
    });
});

export { globalReducer };

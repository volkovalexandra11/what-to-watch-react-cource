import { createReducer } from '@reduxjs/toolkit';
import { changeAuthStatus, changeGenre, setIsMoviesLoaded, setMovies, setUser } from './action';
import { TMovie } from '../types/TMovie';
import { AppState } from '../types/TStore';
import { ALL_GENRES, AuthStatus } from '../constants/constants';

export const initialState: AppState = {
  activeGenre: ALL_GENRES,
  movieList: new Array<TMovie>(),
  isMoviesLoaded: false,
  authStatus: AuthStatus.Unknown,
  user: null,
};

const globalReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, ((state, action) => {
      state.activeGenre = action.payload.genre;
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

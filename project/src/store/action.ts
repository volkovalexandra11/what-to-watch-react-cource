import { createAction } from '@reduxjs/toolkit';
import { TMovie } from '../types/TMovie';

export const changeGenre = createAction<{ genre: string }>('changeGenre');
export const setIsMoviesLoaded = createAction<boolean>('setIsMoviesLoaded');
export const setMovies = createAction<{ movies: Array<TMovie> }>('setMovies');

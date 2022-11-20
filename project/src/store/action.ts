import { createAction } from '@reduxjs/toolkit';

export const changeGenre = createAction<{genre: string}>('changeGenre');
export const getMoviesByGenre = createAction<{genre: string}>('getMovies');
export const getAllMovies = createAction('getAllMovies');


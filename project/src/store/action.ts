import { createAction } from '@reduxjs/toolkit';

export const changeGenre = createAction<{genre: string}>('changeGenre');
export const getMoviesByGenre = createAction<{genre: string}>('getMovies');
export const getAllMovies = createAction('getAllMovies');
export const incVisibleFilmsCount = createAction('incVisibleFilmsCount');
export const resetVisibleFilmsCount = createAction('resetVisibleFilmsCount');

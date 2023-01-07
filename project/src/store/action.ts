import { createAction } from '@reduxjs/toolkit';
import { TMovie } from '../types/TMovie';
import { AppRoute, AuthStatus } from '../constants/constants';
import { TUser } from '../types/TUser';

export const changeGenre = createAction<{ genre: string }>('changeGenre');
export const setIsMoviesLoaded = createAction<boolean>('setIsMoviesLoaded');
export const setMovies = createAction<{ movies: Array<TMovie> }>('setMovies');
export const changeAuthStatus = createAction<{authStatus: AuthStatus}>('changeAuthStatus');
export const setUser = createAction<{user: TUser | null}>('setUser');
export const redirect = createAction<AppRoute>('redirect');

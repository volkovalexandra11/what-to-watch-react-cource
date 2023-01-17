import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {TMovie} from '../../types/TMovie';

export const getMovies = (state: State): TMovie[] => state[NameSpace.MainScreen].movies;
export const getPromo = (state: State): TMovie | null => state[NameSpace.MainScreen].promo;
export const getFavoriteCount = (state: State): number => state[NameSpace.MainScreen].favoriteCount;
export const getIsDataLoaded = (state: State): boolean => state[NameSpace.MainScreen].isDataLoaded;
export const getCardCount = (state: State): number => state[NameSpace.MainScreen].cardCount;
export const getFavoriteMovies = (state: State): TMovie[] => state[NameSpace.MainScreen].favoriteMovies;
export const getFilteredMovies = (state: State): TMovie[] => state[NameSpace.MainScreen].filteredMovies;

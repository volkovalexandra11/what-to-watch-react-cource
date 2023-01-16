import { NameSpace } from '../../constants/constants';
import { State } from '../../types/TStore';
import { TMovie } from '../../types/TMovie';

export const getMovies = (state: State): TMovie[] => state[NameSpace.MainScreen].movies;
export const getPromo = (state: State): TMovie | null => state[NameSpace.MainScreen].promo;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.MainScreen].isDataLoaded;
export const getFilteredMovies = (state: State): TMovie[] => state[NameSpace.MainScreen].filteredMovies;
export const getCardCount = (state: State): number => state[NameSpace.MainScreen].cardCount;
export const getFavoriteFilms = (state: State): TMovie[] => state[NameSpace.MainScreen].favoriteMovies;
export const getFavoriteCount = (state: State): number => state[NameSpace.MainScreen].favoriteCount;

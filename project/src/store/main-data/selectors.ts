import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Film} from '../../types/film';

export const getFilms = (state: State): Film[] => state[NameSpace.MainScreen].films;
export const getPromo = (state: State): Film | null => state[NameSpace.MainScreen].promo;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.MainScreen].isDataLoaded;
export const getFilteredFilms = (state: State): Film[] => state[NameSpace.MainScreen].filteredFilms;
export const getCardCount = (state: State): number => state[NameSpace.MainScreen].cardCount;
export const getFavoriteFilms = (state: State): Film[] => state[NameSpace.MainScreen].favoriteFilms;
export const getFavoriteCount = (state: State): number => state[NameSpace.MainScreen].favoriteCount;

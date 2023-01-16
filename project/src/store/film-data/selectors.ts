import {State} from '../../types/state';
import {NameSpace} from '../../const';
import {Film} from '../../types/film';
import {Comment} from '../../types/comment';

export const getFilm = (state: State): Film | null => state[NameSpace.FilmScreen].film;
export const getSimilar = (state: State): Film[] => state[NameSpace.FilmScreen].similar;
export const getComments = (state: State): Comment[] => state[NameSpace.FilmScreen].comments;
export const getFilmPageTab = (state: State): string => state[NameSpace.FilmScreen].currentFilmTab;
export const getIsFilmLoadingStatus = (state: State): boolean | null => state[NameSpace.FilmScreen].isFilmLoadingStatus;
export const getIsFilmFoundStatus = (state: State): boolean | null => state[NameSpace.FilmScreen].isFilmFoundStatus;

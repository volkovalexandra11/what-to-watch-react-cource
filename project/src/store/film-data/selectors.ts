import { State } from '../../types/TStore';
import { NameSpace } from '../../constants/constants';
import { TMovie } from '../../types/TMovie';
import { TComment } from '../../types/TComment';

export const getMovie = (state: State): TMovie | null => state[NameSpace.FilmScreen].film;
export const getSimilar = (state: State): TMovie[] => state[NameSpace.FilmScreen].similar;
export const getComments = (state: State): TComment[] => state[NameSpace.FilmScreen].comments;
export const getMoviePageTab = (state: State): string => state[NameSpace.FilmScreen].currentFilmTab;
export const getIsMovieLoadingStatus = (state: State): boolean | null => state[NameSpace.FilmScreen].isFilmLoadingStatus;
export const getIsMovieFoundStatus = (state: State): boolean | null => state[NameSpace.FilmScreen].isFilmFoundStatus;

import {State} from '../../types/state';
import {NameSpace} from '../../const';
import {TMovie} from '../../types/TMovie';
import {TComment} from '../../types/TComment';

export const getMovie = (state: State): TMovie | null => state[NameSpace.MovieScreen].movie;
export const getSimilar = (state: State): TMovie[] => state[NameSpace.MovieScreen].similar;
export const getComments = (state: State): TComment[] => state[NameSpace.MovieScreen].comments;
export const getMoviePageTab = (state: State): string => state[NameSpace.MovieScreen].currentMovieTab;
export const getIsMovieLoading = (state: State): boolean | null => state[NameSpace.MovieScreen].isMovieLoading;
export const getIsMovieFound = (state: State): boolean | null => state[NameSpace.MovieScreen].isMovieFound;

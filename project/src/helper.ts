import { TMovie } from './types/TMovie';

export const getMovieById = (movies: Array<TMovie>, movieId: number) : TMovie=> {
  return movies.filter((m) => m.id === movieId)[0];
}

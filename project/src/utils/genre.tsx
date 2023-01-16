import {Film} from '../types/film';
import {DEFAULT_GENRE} from '../types/genres';

export const filterFilmsByGenre = (films: Film[], genre: string) => {
  if(genre === DEFAULT_GENRE) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};

export const getAllGenres = (films: Film[]) => (
  [...new Set([DEFAULT_GENRE, ...films.map((film) => film.genre)])]
);

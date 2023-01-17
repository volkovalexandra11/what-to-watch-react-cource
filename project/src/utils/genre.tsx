import {TMovie} from '../types/TMovie';
import {DEFAULT_GENRE} from '../types/genres';

export const filterFilmsByGenre = (films: TMovie[], genre: string) => {
  if(genre === DEFAULT_GENRE) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};

export const getAllGenres = (films: TMovie[]) => (
  [...new Set([DEFAULT_GENRE, ...films.map((film) => film.genre)])]
);

import {Film} from './film';

export type MainData = {
  films: Film[],
  promo: Film | null,
  isDataLoaded: boolean,
  currentGenre: string,
  filteredFilms: Film[],
  cardCount: number,
  favoriteFilms: Film[],
  favoriteCount: number
};


import {TMovie} from './TMovie';

export type MainData = {
  movies: TMovie[],
  promo: TMovie | null,
  isDataLoaded: boolean,
  currentGenre: string,
  filteredMovies: TMovie[],
  cardCount: number,
  favoriteMovies: TMovie[],
  favoriteCount: number
};


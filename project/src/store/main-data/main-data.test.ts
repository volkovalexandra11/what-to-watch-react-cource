import { DEFAULT_GENRE } from '../../types/genres';
import { movies } from '../../mocks/movies';
import { fetchFavoriteMoviesAction, fetchMoviesAction, fetchPromoAction } from '../api-action';
import { mainData } from './main-data';
import {MainData} from '../../types/main-data';

const mockFilm = movies[0];
const mockFilms = movies;

describe('main-data', () => {
  let state: MainData;

  beforeEach(() => {
    state = {
      movies: [],
      filteredMovies: [],
      currentGenre: DEFAULT_GENRE,
      promo: null,
      favoriteMovies: [],
      favoriteCount: 0,
      isDataLoaded: false,
      cardCount: 0,
    };
  });

  it('without type should return initial state', () => {
    expect(mainData.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual(state);
  });

  describe('fetchFilms test', () => {
    it('load all films on setInitFilmsInfo', () => {
      expect(mainData.reducer(state, { type: fetchMoviesAction.fulfilled.type, payload: mockFilms }).movies)
        .toEqual(mockFilms);
    });
  });

  describe('fetchPromoFilm test', () => {
    it('load promo film on setPromoFilmInfo', () => {
      expect(mainData.reducer(state, { type: fetchPromoAction.fulfilled.type, payload: mockFilm }).promo)
        .toEqual(mockFilm);
    });
  });

  describe('fetchFavoriteFilms test', () => {
    it('load promo film on setPromoFilmInfo', () => {
      expect(mainData.reducer(state, { type: fetchFavoriteMoviesAction.fulfilled.type, payload: mockFilms }).favoriteMovies)
        .toEqual(mockFilms);
    });
  });
});

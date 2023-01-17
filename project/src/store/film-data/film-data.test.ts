import { movies } from '../../mocks/movies';
import { filmData } from './film-data';
import { fetchCommentsByID, fetchMovieByID, fetchSimilarByID } from '../api-action';
import { reviews } from '../../mocks/reviews';
import { TMovieData } from '../../types/t-movie-data';
import { MovieTabs } from '../../types/movie-tabs';

const mockFilm = movies[0];
const mockFilms = movies;
const mockReviews = reviews;

describe('film-data', () => {
  let state: TMovieData;

  beforeEach(() => {
    state = {
      movie: null,
      comments: [],
      similar: [],
      currentMovieTab: MovieTabs.Overview,
      isMovieFound: false,
      isMovieLoading: false
    };
  });

  it('without type should return initial state', () => {
    expect(filmData.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        film: null,
        currentFilmTab: MovieTabs.Overview,
        comments: [],
        similar: [],
        isFilmFoundStatus: null,
        isFilmLoadingStatus: true,
      });
  });

  describe('fetchFilmByID test', () => {
    it('should load film on fulfilled', () => {
      expect(filmData.reducer(state, { type: fetchMovieByID.fulfilled.type, payload: mockFilm }).movie)
        .toEqual(mockFilm);
    });
  });

  describe('fetchSimilarByID test', () => {
    it('should load similar films on fulfilled', () => {
      expect(filmData.reducer(state, { type: fetchSimilarByID.fulfilled.type, payload: mockFilms }).similar)
        .toEqual(mockFilms);
    });
  });

  describe('fetchCommentsByID test', () => {
    it('should load reviews on fulfilled', () => {
      expect(filmData.reducer(state, { type: fetchCommentsByID.fulfilled.type, payload: mockReviews }))
        .toMatchObject({
          comments: mockReviews,
        });
    });
  });
});

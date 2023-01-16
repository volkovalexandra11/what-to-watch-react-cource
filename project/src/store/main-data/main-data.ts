import { createSlice } from '@reduxjs/toolkit';
import { VISIBLE_FILMS_COUNT_STEP, NameSpace } from '../../constants/constants';
import { changePromoStatusToView, fetchFavoriteMoviesAction, fetchMoviesAction, fetchPromoAction } from '../api-action';
import { MainData } from '../../types/main-data';
import { DEFAULT_GENRE } from '../../types/genres';
import { filterMoviesByGenre } from '../../utils/genre';

const initialState: MainData = {
  movies: [],
  promo: null,
  isDataLoaded: false,
  currentGenre: DEFAULT_GENRE,
  filteredMovies: [],
  cardCount: 0,
  favoriteMovies: [],
  favoriteCount: 0
};

export const mainData = createSlice({
  name: NameSpace.MainScreen,
  initialState,
  reducers: {
    resetMainScreen: (state) => {
      state.currentGenre = DEFAULT_GENRE;
      state.filteredMovies = state.movies;
      state.cardCount = state.movies.length < VISIBLE_FILMS_COUNT_STEP ? state.movies.length : VISIBLE_FILMS_COUNT_STEP;
    },
    changeGenre: (state, action) => {
      const filteredMovies = filterMoviesByGenre(state.movies, action.payload.currentGenre);

      state.currentGenre = action.payload.currentGenre;
      state.filteredMovies = filteredMovies;
      state.cardCount = filteredMovies.length < VISIBLE_FILMS_COUNT_STEP ?
        filteredMovies.length :
        VISIBLE_FILMS_COUNT_STEP;
    },

    increaseCardCount: (state) => {
      state.cardCount = (state.cardCount + VISIBLE_FILMS_COUNT_STEP) < state.filteredMovies.length ?
        state.cardCount + VISIBLE_FILMS_COUNT_STEP :
        state.filteredMovies.length;
    },

    resetCardCount: (state) => {
      state.cardCount = state.filteredMovies.length < VISIBLE_FILMS_COUNT_STEP ?
        state.filteredMovies.length :
        VISIBLE_FILMS_COUNT_STEP;
    },

    setIsDataLoaded: (state, action) => {
      state.isDataLoaded = action.payload;
    },

    setFavoriteCount: (state, action) => {
      state.favoriteCount = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMoviesAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchMoviesAction.fulfilled, (state, action) => {
        const movies = action.payload;

        state.movies = movies;
        state.filteredMovies = movies;
        state.cardCount = movies.length < VISIBLE_FILMS_COUNT_STEP ? movies.length : 8;
        state.isDataLoaded = false;
      })
      .addCase(fetchPromoAction.fulfilled, (state, action) => {
        state.promo = action.payload;
      })
      .addCase(fetchFavoriteMoviesAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchFavoriteMoviesAction.fulfilled, (state, action) => {
        state.favoriteMovies = action.payload;
        state.favoriteCount = action.payload.length;
        state.isDataLoaded = false;
      })
      .addCase(changePromoStatusToView.fulfilled, (state, action) => {
        state.promo = action.payload;
      });
  }
});

export const {
  resetMainScreen,
  changeGenre,
  increaseCardCount,
  resetCardCount,
  setIsDataLoaded,
  setFavoriteCount
} = mainData.actions;

import { createSlice } from '@reduxjs/toolkit';
import { VISIBLE_CARDS_COUNT, NameSpace } from '../../const';
import { changeMovieStatusToView, fetchFavoriteMoviesAction, fetchMoviesAction, fetchPromoAction } from '../api-action';
import { MainData } from '../../types/main-data';
import { DEFAULT_GENRE } from '../../types/genres';
import { filterFilmsByGenre } from '../../utils/genre';

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
      state.cardCount = state.movies.length < VISIBLE_CARDS_COUNT ? state.movies.length : VISIBLE_CARDS_COUNT;
    },
    changeGenre: (state, action) => {
      const filteredMovies = filterFilmsByGenre(state.movies, action.payload.currentGenre);

      state.currentGenre = action.payload.currentGenre;
      state.filteredMovies = filteredMovies;
      state.cardCount = filteredMovies.length < VISIBLE_CARDS_COUNT ?
        filteredMovies.length :
        VISIBLE_CARDS_COUNT;
    },

    increaseCardCount: (state) => {
      state.cardCount = (state.cardCount + VISIBLE_CARDS_COUNT) < state.filteredMovies.length ?
        state.cardCount + VISIBLE_CARDS_COUNT :
        state.filteredMovies.length;
    },

    resetCardCount: (state) => {
      state.cardCount = state.filteredMovies.length < VISIBLE_CARDS_COUNT ?
        state.filteredMovies.length :
        VISIBLE_CARDS_COUNT;
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
        const films = action.payload;

        state.movies = films;
        state.filteredMovies = films;
        state.cardCount = films.length < VISIBLE_CARDS_COUNT ? films.length : 8;
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
      .addCase(changeMovieStatusToView.fulfilled, (state, action) => {
        if (action.payload.isFavorite) {
          state.favoriteCount = state.favoriteCount + 1;
        } else {
          state.favoriteCount = state.favoriteCount - 1;
        }
      });
  }
});

export const {
  resetMainScreen,
  changeGenre,
  increaseCardCount,
} = mainData.actions;

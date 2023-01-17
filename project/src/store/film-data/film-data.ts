import { createSlice } from '@reduxjs/toolkit';
import { MovieTabs } from '../../types/movie-tabs';
import { NameSpace } from '../../const';
import { changeFilmStatusToView, fetchCommentsByID, fetchFilmByID, fetchSimilarByID } from '../api-action';
import { TMovieData } from '../../types/t-movie-data';

const initialState: TMovieData = {
  movie: null,
  similar: [],
  comments: [],
  currentMovieTab: MovieTabs.Overview,
  isMovieLoading: true,
  isMovieFound: null
};

export const filmData = createSlice({
  name: NameSpace.MovieScreen,
  initialState,
  reducers: {
    changeFilmTab: (state, action) => {
      state.currentMovieTab = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmByID.pending, (state) => {
        state.isMovieLoading = true;
      })
      .addCase(fetchFilmByID.fulfilled, (state, action) => {
        state.movie = action.payload;

        state.isMovieFound = true;
        state.isMovieLoading = false;
      })
      .addCase(fetchFilmByID.rejected, (state, _) => {
        state.isMovieFound = false;
        state.isMovieFound = false;
      })
      .addCase(fetchSimilarByID.fulfilled, (state, action) => {
        state.similar = action.payload;
      })
      .addCase(fetchCommentsByID.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(changeFilmStatusToView.fulfilled, (state, action) => {
        state.movie = action.payload;
      });
  }
});

export const {
  changeFilmTab,
} = filmData.actions;

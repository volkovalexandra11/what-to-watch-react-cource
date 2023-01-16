import { createSlice } from '@reduxjs/toolkit';
import { FilmTabs } from '../../types/film-tabs';
import {
  changeMovieStatusToView,
  fetchCommentsByID,
  fetchMovieByID,
  fetchSimilarByID
} from '../api-action';
import { TMovieData } from '../../types/movie-data';
import { NameSpace } from '../../constants/constants';


const initialState: TMovieData = {
  film: null,
  similar: [],
  comments: [],
  currentFilmTab: FilmTabs.Overview,
  isFilmLoadingStatus: null,
  isFilmFoundStatus: null
};

export const filmData = createSlice({
  name: NameSpace.FilmScreen,
  initialState,
  reducers: {
    changeFilmTab: (state, action) => {
      state.currentFilmTab = action.payload;
    },
    resetFilmTab: (state) => {
      state.currentFilmTab = FilmTabs.Overview;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMovieByID.pending, (state) => {
        state.isFilmLoadingStatus = true;
      })
      .addCase(fetchMovieByID.fulfilled, (state, action) => {
        state.film = action.payload;

        state.isFilmFoundStatus = true;
        state.isFilmLoadingStatus = false;
      })
      .addCase(fetchMovieByID.rejected, (state, _) => {
        state.isFilmFoundStatus = false;
        state.isFilmLoadingStatus = false;
      })
      .addCase(fetchSimilarByID.fulfilled, (state, action) => {
        state.similar = action.payload;
      })
      .addCase(fetchCommentsByID.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(changeMovieStatusToView.fulfilled, (state, action) => {
        state.film = action.payload;
      });
  }
});

export const {
  changeFilmTab,
  resetFilmTab
} = filmData.actions;

import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/TStore'
import { APIRoute } from '../constants/constants';
import { TMovie } from '../types/TMovie';
import { setMovies, setIsMoviesLoaded } from './action';

export const fetchMoviesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setIsMoviesLoaded(false));
    const { data } = await api.get<TMovie[]>(APIRoute.Movies)
    dispatch(setMovies({ movies: data }));
    dispatch(setIsMoviesLoaded(true));
  },
);

import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/TStore';
import { APIRoute, AuthStatus } from '../constants/constants';
import { TMovie } from '../types/TMovie';
import { changeAuthStatus, setIsMoviesLoaded, setMovies, setUser } from './action';
import { TUser } from '../types/TUser';
import { TAuthData } from '../types/TAuthData';
import { dropToken, saveToken } from '../services/token-service';

export const fetchMoviesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setIsMoviesLoaded(false));
    const { data } = await api.get<TMovie[]>(APIRoute.Movies);
    dispatch(setMovies({ movies: data }));
    dispatch(setIsMoviesLoaded(true));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data: user } = await api.get<TUser>(APIRoute.Login);
      dispatch(setUser({ user }));
      dispatch(changeAuthStatus({ authStatus: AuthStatus.Auth }));
    } catch {
      dispatch(changeAuthStatus({ authStatus: AuthStatus.NoAuth }));
    }
  }
);


export const login = createAsyncThunk<void, TAuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data: user } = await api.post<TUser>(APIRoute.Login, { email, password });
    saveToken(user.token);
    dispatch(setUser({ user }));
    dispatch(changeAuthStatus({ authStatus: AuthStatus.Auth }));
  }
);

export const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dispatch(changeAuthStatus({ authStatus: AuthStatus.NoAuth }));
    dropToken();
  }
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { AxiosInstance } from 'axios';
import { dropAvatarURL } from '../services/avatar-service';
import { dropToken, saveToken } from '../services/token-service';
import { AppDispatch, State } from '../types/state';
import { TMovie } from '../types/TMovie';
import { TAuthData } from '../types/t-auth-data';
import { TUserData } from '../types/t-user-data';
import { TComment } from '../types/TComment';
import { TUserComment } from '../types/t-user-comment';
import { TMovieStatus } from '../types/t-movie-status';
import { APIRoute } from '../const';

export const fetchFilmsAction = createAsyncThunk<TMovie[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TMovie[]>(APIRoute.Movies);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk<{ avatarUrl: string, userId: number }, TAuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({ email, password }, { extra: api }) => {
    const { data: { token, avatarUrl, id } } = await api.post<TUserData>(APIRoute.Login, { email, password });
    saveToken(token);
    return { avatarUrl: avatarUrl, userId: id };
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dropAvatarURL();
  },
);

export const fetchFilmByID = createAsyncThunk<TMovie | null, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilmById',
  async (filmId: string, { extra: api }) => {
    const { data } = await api.get<TMovie>(`${APIRoute.Movies}/${filmId}`);

    return data;
  },
);

export const fetchCommentsByID = createAsyncThunk<TComment[], string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchCommentsById',
  async (filmId: string, { extra: api }) => {
    const { data } = await api.get<TComment[]>(`${APIRoute.Comments}/${filmId}`);
    return data;
  },
);

export const fetchSimilarByID = createAsyncThunk<TMovie[], string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchSimilarById',
  async (filmId: string, { extra: api }) => {
    const { data } = await api.get<TMovie[]>(`${APIRoute.Movies}/${filmId}${APIRoute.Similar}`);
    return data;
  },
);

export const postComment = createAsyncThunk<void, TUserComment, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/postCommentById',
  async ({ comment, rating, movieId }, { extra: api }) => {
    await api.post<TUserComment>(`${APIRoute.Comments}/${movieId}`, { comment, rating });
    const navigate = useNavigate();
    navigate(`${APIRoute.Movies}/${movieId}`);
  },
);

export const changeFilmStatusToView = createAsyncThunk<TMovie, TMovieStatus, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/changeFilmStatusToView',
  async ({ movieId: id, status: isFavorite }, { extra: api }) => {
    const { data } = await api.post<TMovie>(`${APIRoute.Favorite}/${id}/${isFavorite}`);

    return data;
  },
);

export const fetchFavoriteFilmsAction = createAsyncThunk<TMovie[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFavoriteFilmsAction',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TMovie[]>(APIRoute.Favorite);

    return data;
  },
);

export const fetchPromoAction = createAsyncThunk<TMovie, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchPromo',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TMovie>(APIRoute.Promo);

    return data;
  },
);


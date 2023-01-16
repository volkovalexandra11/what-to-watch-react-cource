import { createAsyncThunk } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { TMovie } from '../types/TMovie';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../constants/constants';
import { AppDispatch, State } from '../types/TStore';
import { dropToken } from '../services/token-service';
import { dropAvatarURL } from '../services/avatar-service';
import { TAuthData } from '../types/TAuthData';
import { TUser } from '../types/TUser';
import { TUserComment } from '../types/t-user-comment';
import { MovieStatus } from '../types/movie-status';
import { TComment } from '../types/TComment';


export const fetchMoviesAction = createAsyncThunk<TMovie[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TMovie[]>(APIRoute.Movies);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    await api.get(APIRoute.Login);
  },
);

export const login = createAsyncThunk<{ token: string, avatarUrl: string, userId: number }, TAuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login, password }, { extra: api }) => {
    const { data: { token, avatarUrl, id } } = await api.post<TUser>(APIRoute.Login, { login, password });
    return { token: token, avatarUrl: avatarUrl, userId: id };
  },
);

export const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dropAvatarURL();
  },
);

export const fetchMovieByID = createAsyncThunk<TMovie | null, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchTMovieById',
  async (filmId: string, { extra: api }) => {
    const { data } = await api.get<TMovie>(`${APIRoute.Movies}/${filmId}`);
    return data;
  },
);

export const fetchCommentsByID = createAsyncThunk<TComment[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCommentsById',
  async (filmId: string, { extra: api }) => {
    const { data } = await api.get<TComment[]>(`${APIRoute.Comments}/${filmId}`);
    return data;
  },
);

export const fetchSimilarByID = createAsyncThunk<TMovie[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSimilarById',
  async (filmId: string, { extra: api }) => {
    const { data } = await api.get<TMovie[]>(`${APIRoute.Movies}/${filmId}${APIRoute.Similar}`);
    return data;
  },
);

export const postComment = createAsyncThunk<void, TUserComment, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postCommentById',
  async ({ comment, rating, filmId }, { extra: api }) => {
    await api.post<TUserComment>(`${APIRoute.Comments}/${filmId}`, { comment, rating });
    const navigate = useNavigate();
    navigate(`${APIRoute.Movies}/${filmId}`);
  },
);

export const changeMovieStatusToView = createAsyncThunk<TMovie, MovieStatus, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/changeTMovieStatusToView',
  async ({ filmId: id, status: isFavorite }, { extra: api }) => {
    const { data } = await api.post<TMovie>(`${APIRoute.Favorite}/${id}/${isFavorite}`);

    return data;
  },
);

export const changePromoStatusToView = createAsyncThunk<TMovie, MovieStatus, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/changePromoStatusToView',
  async ({ filmId: id, status: isFavorite }, { extra: api }) => {
    const { data } = await api.post<TMovie>(`${APIRoute.Favorite}/${id}/${isFavorite}`);

    return data;
  },
);

export const fetchFavoriteMoviesAction = createAsyncThunk<TMovie[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavoriteTMoviesAction',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TMovie[]>(APIRoute.Favorite);

    return data;
  },
);

export const fetchPromoAction = createAsyncThunk<TMovie, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPromo',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TMovie>(APIRoute.Promo);

    return data;
  },
);

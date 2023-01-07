import { APIRoute } from '../constants/constants';
import { api } from '../store';
import { TMovie } from '../types/TMovie';
import { TReview } from '../types/TReview';

export const getMovie = async (filmId: number) => await api.get<TMovie>(`${APIRoute.Movies}/${filmId}`);

export const getSimilarMovies = async (filmId: number) => await api.get<TMovie[]>(`${APIRoute.Movies}/${filmId}/similar`);

export const getMovieReviews = async (filmId: number) => await api.get<TReview[]>(`${APIRoute.Comments}/${filmId}`);

export const postMovieReview = async (filmId: number, review: { comment: string, rating: number }) => await api.post<TReview[]>(`${APIRoute.Comments}/${filmId}`, { ...review });

export const getPromoMovie = async () => await api.get<TMovie>(APIRoute.Promo);

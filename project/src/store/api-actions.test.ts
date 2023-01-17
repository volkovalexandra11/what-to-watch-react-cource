import { configureMockStore } from '@jedmao/redux-mock-store';
import {Action} from '@reduxjs/toolkit';
import MockAdapter from 'axios-mock-adapter';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { movies } from '../mocks/movies';
import { reviews } from '../mocks/reviews';
import { createAPI } from '../services/api-service';
import { State } from '../types/state';
import {
  changeMovieStatusToView,
  checkAuthAction,
  fetchCommentsByID,
  fetchFavoriteMoviesAction,
  fetchMovieByID,
  fetchMoviesAction,
  fetchPromoAction,
  fetchSimilarByID,
  loginAction,
  logoutAction,
  postComment
} from './api-action';
import { TAuthData } from '../types/t-auth-data';
import { TUserComment } from '../types/t-user-comment';
import { TMovieStatus } from '../types/t-movie-status';

jest.mock('../services/error-handle-service.ts');

describe('async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];
  const mockFilm = movies[0];
  const mockFilms = movies;
  const mockReviews = reviews;

  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should dispatch authorization status when GET /login', async () => {
    const store = mockStore();
    mockAPI
      .onGet('/login')
      .reply(200);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      checkAuthAction.pending.type,
      checkAuthAction.fulfilled.type
    ]);
  });

  it('should dispatch login when POST /login', async () => {
    const fakeUser: TAuthData = { email: 'moonshine@mail.com', password: 'moonshine' };

    mockAPI
      .onPost('/login')
      .reply(200, { token: '12345678' });


    const store = mockStore();

    await store.dispatch(loginAction(fakeUser));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      loginAction.pending.type,
      loginAction.fulfilled.type
    ]);
  });

  it('should dispatch logout on DELETE /logout', async () => {
    mockAPI
      .onDelete('/logout')
      .reply(204);

    const store = mockStore();

    await store.dispatch(logoutAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      logoutAction.pending.type,
      logoutAction.fulfilled.type
    ]);
  });

  it('should dispatch films when GET /films', async () => {
    mockAPI
      .onGet('/films')
      .reply(200);

    const store = mockStore();

    await store.dispatch(fetchMoviesAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchMoviesAction.pending.type,
      fetchMoviesAction.fulfilled.type
    ]);
  });

  it('should dispatch promo film when GET /promo', async () => {
    mockAPI
      .onGet('/promo')
      .reply(200, mockFilm);

    const store = mockStore();

    await store.dispatch(fetchPromoAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchPromoAction.pending.type,
      fetchPromoAction.fulfilled.type
    ]);
  });

  it('should fetch film when GET /films/{id}', async () => {
    mockAPI
      .onGet('/films/1')
      .reply(200, mockFilm);

    const store = mockStore();

    await store.dispatch(fetchMovieByID('1'));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchMovieByID.pending.type,
      fetchMovieByID.fulfilled.type
    ]);
  });

  it('should fetch similar films film when GET /films/{id}/similar', async () => {
    mockAPI
      .onGet('/films/1/similar')
      .reply(200, mockFilms);

    const store = mockStore();

    await store.dispatch(fetchSimilarByID('1'));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchSimilarByID.pending.type,
      fetchSimilarByID.fulfilled.type
    ]);
  });

  it('should fetch similar films film when GET /comments/{id}', async () => {
    mockAPI
      .onGet('/comments/1')
      .reply(200, mockReviews);

    const store = mockStore();

    await store.dispatch(fetchCommentsByID('1'));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchCommentsByID.pending.type,
      fetchCommentsByID.fulfilled.type
    ]);
  });

  it('POST /comments/{id}', async () => {
    const postData: TUserComment = {
      movieId: '1',
      comment: 'i wanna die',
      rating: 8,
    };

    mockAPI
      .onPost('/comments/1', {
        comment: postData.comment,
        rating: postData.rating
      })
      .reply(200);

    const store = mockStore();

    await store.dispatch(postComment(postData));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      postComment.pending.type,
      postComment.fulfilled.type
    ]);
  });

  it('should fetch favorite films film when GET /favorite', async () => {
    mockAPI
      .onGet('/favorite')
      .reply(200, mockFilms);

    const store = mockStore();

    await store.dispatch(fetchFavoriteMoviesAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchFavoriteMoviesAction.pending.type,
      fetchFavoriteMoviesAction.fulfilled.type
    ]);
  });

  it('POST /favorite/{filmId}/{status}', async () => {
    const postData: TMovieStatus = {
      movieId: 1,
      status: 0
    };

    mockAPI
      .onPost('/favorite/1/0')
      .reply(200);

    const store = mockStore();

    await store.dispatch(changeMovieStatusToView(postData));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      changeMovieStatusToView.pending.type,
      changeMovieStatusToView.fulfilled.type
    ]);
  });
});

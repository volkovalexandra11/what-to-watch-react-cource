export const ALL_GENRES = 'ALL_GENRES';

export const VISIBLE_FILMS_COUNT_STEP = 8;

export enum APIRoute {
  Movies = '/films',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Promo = '/promo'
}

export enum AuthStatus {
  Unknown,
  Auth,
  NoAuth,
}

export enum AppRoute {
  Main = '/',
  Login = '/login',
  MyList = 'mylist',
  Film = 'films/:filmId',
  AddReview = 'review',
  Player = 'player/:filmId',
  ERROR404 = '*'
}

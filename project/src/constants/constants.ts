export const ALL_GENRES = 'All Genres';

export const VISIBLE_FILMS_COUNT_STEP = 8;

export enum APIRoute {
  Movies = '/films',
  Login = '/login',
  Logout = '/logout',
  Similar = '/similar',
  Comments = '/comments',
  Promo = '/promo',
  Favorite = '/favorite'
}

export enum AuthStatus {
  Unknown= 'unknown',
  Auth = 'auth',
  NoAuth = 'no auth',
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

export enum NameSpace {
  User = 'USER',
  MainScreen = 'MAIN',
  FilmScreen = 'FILM',
  App ='APP'
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const TIMEOUT_SHOW_ERROR = 2000;

export enum APIRoute {
  Movies = '/films',
  Login = '/login',
  Logout = '/logout',
  Similar = '/similar',
  Comments = '/comments',
  Promo = '/promo',
  Favorite = '/favorite'
}

export const VISIBLE_CARDS_COUNT = 8;

export enum NameSpace {
  User = 'USER',
  MainScreen = 'MAIN',
  MovieScreen = 'FILM',
  App ='APP'
}

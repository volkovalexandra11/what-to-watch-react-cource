import {AuthStatus} from '../const';

export const isCheckedAuth = (authorizationStatus: string): boolean =>
  authorizationStatus === AuthStatus.Unknown;

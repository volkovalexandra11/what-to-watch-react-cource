import { AuthStatus } from '../constants/constants';

export const isCheckedAuth = (authorizationStatus: string): boolean =>
  authorizationStatus === AuthStatus.Unknown;

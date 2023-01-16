import { NameSpace, AuthStatus } from '../../constants/constants';
import { State } from '../../types/TStore';

export const getAuthorizationStatus = (state: State): AuthStatus => state[NameSpace.User].authorizationStatus;
export const getAvatarUrl = (state: State): string | null => state[NameSpace.User].avatar;

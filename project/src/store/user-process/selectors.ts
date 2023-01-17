import { AuthStatus, NameSpace } from '../../const';
import { State } from '../../types/state';

export const getAuthStatus = (state: State): AuthStatus => state[NameSpace.User].authStatus;
export const getAvatarUrl = (state: State): string | null => state[NameSpace.User].avatar;

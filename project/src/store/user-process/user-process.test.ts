import { checkAuthAction, loginAction, logoutAction } from '../api-action';
import { userProcess } from './user-process';
import { AuthStatus } from '../../const';
import { UserProcess } from '../../types/state';

describe('Auth-reducer', () => {
  let state: UserProcess;

  beforeEach(() => {
    state = {
      authStatus: AuthStatus.NoAuth,
      avatar: null,
      userId: null
    };
  });

  describe('checkAuth test', () => {
    it('should update authorizationStatus to "AUTH" if checkAuth fulfilled', () => {
      expect(
        userProcess.reducer(state, {
          type: checkAuthAction.fulfilled.type,
          payload: {
            avatarUrl: 'avatarUrl',
            email: 'email',
            id: 1,
            name: 'name',
            token: 'token',
          },
        })
      ).toMatchObject({
        authorizationStatus: AuthStatus.Auth,
      });
    });

    it('should update authorizationStatus to "NO_AUTH" if checkAuth rejected', () => {
      expect(
        userProcess.reducer(state, { type: checkAuthAction.rejected.type })
      ).toMatchObject({ authorizationStatus: AuthStatus.NoAuth });
    });
  });

  describe('login test', () => {
    it('should update authorizationStatus to "AUTH" if login fulfilled', () => {
      expect(
        userProcess.reducer(state, {
          type: loginAction.fulfilled.type, payload: {
            avatarUrl: 'avatarUrl',
            email: 'email',
            id: 1,
            name: 'name',
            token: 'token'
          },
        })
      ).toMatchObject({ authorizationStatus: AuthStatus.Auth });
    });

    it('should update authorizationStatus to "NO_AUTH" if login rejected', () => {
      expect(
        userProcess.reducer(state, { type: loginAction.rejected.type })
      ).toMatchObject({ authorizationStatus: AuthStatus.NoAuth });
    });
  });

  describe('logout test', () => {
    it('should update authorizationStatus to "NO_AUTH" if logout fulfilled', () => {
      expect(
        userProcess.reducer(state, { type: logoutAction.fulfilled.type })
      ).toMatchObject({ authorizationStatus: AuthStatus.NoAuth });
    });
  });
});

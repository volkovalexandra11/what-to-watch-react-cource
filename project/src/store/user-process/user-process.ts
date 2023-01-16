import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, AuthStatus } from '../../constants/constants';
import { UserProcess } from '../../types/TStore';
import { checkAuthAction, login, logout } from '../api-action';
import { saveToken } from '../../services/token-service';
import { getAvatarURL, saveAvatarURL } from '../../services/avatar-service';

const initialState: UserProcess = {
  authorizationStatus: AuthStatus.Unknown,
  avatar: getAvatarURL(),
  userId: null
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthStatus.NoAuth;
      })
      .addCase(login.rejected, (state) => {
        state.authorizationStatus = AuthStatus.NoAuth;
      })
      .addCase(login.fulfilled, (state, action) => {
        saveToken(action.payload.token);
        state.avatar = action.payload.avatarUrl;
        saveAvatarURL(action.payload.avatarUrl);
        state.userId = action.payload.userId;
        state.authorizationStatus = AuthStatus.Auth;
      })
      .addCase(logout.fulfilled, (state, _) => {
        state.authorizationStatus = AuthStatus.NoAuth;
        state.avatar = null;
        state.userId = null;
      });
  }
});

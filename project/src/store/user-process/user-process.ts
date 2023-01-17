import { createSlice } from '@reduxjs/toolkit';
import { AuthStatus, NameSpace } from '../../const';
import { UserProcess } from '../../types/state';
import { checkAuthAction, loginAction, logoutAction } from '../api-action';
import { getAvatarURL, saveAvatarURL } from '../../services/avatar-service';

const initialState: UserProcess = {
  authStatus: AuthStatus.Unknown,
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
        state.authStatus = AuthStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authStatus = AuthStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.avatar = action.payload.avatarUrl;
        saveAvatarURL(action.payload.avatarUrl);
        state.userId = action.payload.userId;
        state.authStatus = AuthStatus.Auth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authStatus = AuthStatus.NoAuth;
        state.avatar = null;
        state.userId = null;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authStatus = AuthStatus.NoAuth;
      });
  }
});

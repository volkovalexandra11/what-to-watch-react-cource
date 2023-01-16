import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../constants/constants';

import { userProcess } from './user-process/user-process';
import { mainData } from './main-data/main-data';
import { filmData } from './film-data/film-data';
import { appProcess } from './app-process/app-process';

export const globalReducer = combineReducers({
  [NameSpace.MainScreen]: mainData.reducer,
  [NameSpace.FilmScreen]: filmData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.App]: appProcess.reducer
});

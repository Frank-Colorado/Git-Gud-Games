import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  userReducer,
  setUser,
  addUserGame,
  removeUserGame,
} from './slices/userSlice';
import {
  editUserReducer,
  setForm,
  setUsername,
  setBio,
  setAvatar,
} from './slices/editUserSlice';

import {
  gamesApi,
  useGetGamesQuery,
  useGetSearchOptionsQuery,
  useGetGameDetailsQuery,
  useGetGameScreenShotsQuery,
} from './apis/gamesApi';
import {
  dealsApi,
  useGetGameDealsQuery,
  useGetStoresQuery,
} from './apis/dealsApi';

export const store = configureStore({
  reducer: {
    user: userReducer,
    editUser: editUserReducer,
    [gamesApi.reducerPath]: gamesApi.reducer,
    [dealsApi.reducerPath]: dealsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(gamesApi.middleware)
      .concat(dealsApi.middleware);
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {
  setUser,
  addUserGame,
  removeUserGame,
  setForm,
  setUsername,
  setBio,
  setAvatar,
  useGetGamesQuery,
  useGetSearchOptionsQuery,
  useGetGameDetailsQuery,
  useGetGameScreenShotsQuery,
  useGetGameDealsQuery,
  useGetStoresQuery,
};

export type {
  GameType,
  GamesApiQueryType,
  GameScreenShotsType,
} from './apis/gamesApi';

export type { Deals } from './apis/dealsApi';

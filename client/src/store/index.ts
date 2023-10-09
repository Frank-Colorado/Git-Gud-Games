import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  userReducer,
  setUser,
  addUserGame,
  removeUserGame,
} from './slices/userSlice';
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

export {
  setUser,
  addUserGame,
  removeUserGame,
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

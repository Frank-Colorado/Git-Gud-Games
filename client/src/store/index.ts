import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userReducer } from './slices/userSlice';
import { gamesApi } from './apis/gamesApi';
import { dealsApi } from './apis/dealsApi';

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
  useGetGamesQuery,
  useGetSearchOptionsQuery,
  useGetGameDetailsQuery,
  useGetGameScreenShotsQuery,
} from './apis/gamesApi';
export type {
  GameType,
  GamesApiQueryType,
  GameScreenShotsType,
} from './apis/gamesApi';

export { useGetGameDealsQuery, useGetStoresQuery } from './apis/dealsApi';
export type { Deals } from './apis/dealsApi';

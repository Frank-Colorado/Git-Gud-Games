import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { gamesApi } from './apis/gamesApi';

export const store = configureStore({
  reducer: {
    [gamesApi.reducerPath]: gamesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(gamesApi.middleware);
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

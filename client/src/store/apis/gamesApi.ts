import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const apiKey = import.meta.env.VITE_RAWG_API_KEY;
const baseUrl = `https://api.rawg.io/api`;

export interface GameType {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  genres: { id: number; name: string; slug: string }[];
  rating: number;
}

export type GamesApiQueryType = typeof useGetGamesQuery;

const gamesApi = createApi({
  reducerPath: 'games',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Games'],
  endpoints: (builder) => ({
    getGames: builder.query<GameType[], string>({
      query: (param: string) => `/games?key=${apiKey}&platforms=4${param}`,
      transformResponse: (response: { results: GameType[] }, _meta, _arg) =>
        response.results,
    }),
    getSearchOptions: builder.query<GameType[], string>({
      query: (param: string) =>
        `/games?key=${apiKey}&page_size=5&search=${param}`,
      transformResponse: (response: { results: GameType[] }, _meta, _arg) =>
        response.results,
    }),
    getGameDetails: builder.query<GameType, string>({
      query: (gameId: string) => `/games/${gameId}?key=${apiKey}`,
      transformResponse: (response: GameType, _meta, _arg) => response,
    }),
  }),
});

export const {
  useGetGamesQuery,
  useGetSearchOptionsQuery,
  useGetGameDetailsQuery,
} = gamesApi;

export { gamesApi };

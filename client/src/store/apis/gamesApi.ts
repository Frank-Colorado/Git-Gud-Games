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

export interface GameScreenShotsType {
  id: number;
  image: string;
  hidden: boolean;
  width: number;
  height: number;
}

export interface GameDetailsType {
  id: number;
  background_image: string;
  description_raw: string;
  name: string;
  developers: { id: number; name: string }[];
  publishers: { id: number; name: string }[];
  genres: { id: number; name: string }[];
  platforms: { platform: { id: number; name: string } }[];
  rating: number;
  released: string;
  esrb_rating: { id: number; name: string } | null;
  tags: { id: number; name: string }[];
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
    getGameDetails: builder.query<GameDetailsType, string>({
      query: (gameId: string) => `/games/${gameId}?key=${apiKey}`,
      transformResponse: (response: GameDetailsType, _meta, _arg) => response,
    }),
    getGameScreenShots: builder.query<GameScreenShotsType[], string>({
      query: (gameId: string) => `/games/${gameId}/screenshots?key=${apiKey}`,
      transformResponse: (
        response: { results: GameScreenShotsType[] },
        _meta,
        _arg
      ) => response.results,
    }),
  }),
});

export const {
  useGetGamesQuery,
  useGetSearchOptionsQuery,
  useGetGameDetailsQuery,
  useGetGameScreenShotsQuery,
} = gamesApi;

export { gamesApi };

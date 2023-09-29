import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const apiKey = import.meta.env.VITE_RAWG_API_KEY;
const baseUrl = `https://api.rawg.io/api`;

export interface Game {
  id: number;
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
    getGames: builder.query<Game[], {}>({
      query: (param: string) => `/games?key=${apiKey}&platforms=4${param}`,
      transformResponse: (response: { results: Game[] }, _meta, _arg) =>
        response.results,
    }),
  }),
});

export const { useGetGamesQuery } = gamesApi;

export { gamesApi };

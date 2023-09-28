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

const gamesApi = createApi({
  reducerPath: 'games',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Games'],
  endpoints: (builder) => ({
    // This query gets games by the specified genre
    // It accepts a string as an param, and returns type Games
    getGamesByGenre: builder.query<Game[], {}>({
      query: (genre: string) =>
        `/games?key=${apiKey}&platforms=4&genres=${genre}`,
      transformResponse: (response: { results: Game[] }, _meta, _arg) =>
        response.results,
    }),
    // This query gets games by the specified search term
    // It accepts a string as an param, and returns type Games
    getGamesBySearchTerm: builder.query<Game[], string>({
      query: (searchTerm: string): string =>
        `/games?key=${apiKey}&platforms=4&search=${searchTerm}`,
      transformResponse: (response: { results: Game[] }, _meta, _arg) =>
        response.results,
    }),
  }),
});

export const { useGetGamesByGenreQuery, useGetGamesBySearchTermQuery } =
  gamesApi;

export { gamesApi };

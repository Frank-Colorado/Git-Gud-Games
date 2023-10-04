import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
const baseUrl = `https://www.cheapshark.com/api/1.0`;

type Deal = {
  storeId: string;
  dealID: string;
  price: string;
  retailPrice: string;
  savings: string;
};

export interface Deals {
  info: {
    title: string;
    steamAppID: string;
    thumb: string;
  };
  cheapestPriceEver: {
    price: string;
    date: number;
  };
  deals: Deal[];
}

interface GameResult {
  gameID: string;
}

const dealsApi = createApi({
  reducerPath: 'deals',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getGameDeals: builder.query<Deals, string>({
      async queryFn(arg, _queryApi, _extraOptions, fetchWithBQ) {
        const encodedTitle = encodeURIComponent(arg);
        const gameResult = await fetchWithBQ(
          `/games?title=${encodedTitle}&limit=1`
        );
        if (gameResult.error) {
          return { error: gameResult.error as FetchBaseQueryError };
        }
        const gameData = gameResult.data as GameResult[];
        const gameId = gameData[0].gameID;

        const result = await fetchWithBQ(`/games?id=${gameId}`);
        return result.data
          ? { data: result.data as Deals }
          : { error: result.error as FetchBaseQueryError };
      },
    }),
  }),
});

export const { useGetGameDealsQuery } = dealsApi;
export { dealsApi };

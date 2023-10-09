import { createAsyncThunk } from '@reduxjs/toolkit';
import { apolloClient } from '../../graphql/apolloClient';
import { GET_ME } from '../../graphql/queries';

export const fetchUser = createAsyncThunk('user/fetch', async () => {
  const response = useQuery(GET_ME);

  return response.data;
});

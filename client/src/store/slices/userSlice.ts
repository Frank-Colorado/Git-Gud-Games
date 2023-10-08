import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../../gql/graphql';
import { ApolloError } from '@apollo/client';

interface UserState {
  user: User;
  isLoading: boolean;
  error: ApolloError | null;
}

const initialState = {
  user: {
    _id: '',
    username: '',
    avatar: '',
    gameLibrary: [],
  },
  isLoading: false,
  error: null,
} as UserState;

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    // TODO: Add reducers for fetching user data
    // TODO: Add reducers for updating user data
    // TODO: Add reducers for adding games to user library
    // TODO: Add reducers for removing games from user library
  },
});

export const userReducer = userSlice.reducer;

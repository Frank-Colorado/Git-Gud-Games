import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, GameObject } from '../../../gql/graphql';

interface UserState {
  user: User;
}

const initialState: UserState = {
  user: {
    _id: '',
    username: '',
    avatar: '',
    gameLibrary: [],
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    addUserGame(state, action: PayloadAction<GameObject>) {
      state.user.gameLibrary.push(action.payload);
    },
    removeUserGame(state, action: PayloadAction<string>) {
      state.user.gameLibrary = state.user.gameLibrary.filter(
        (game) => game.id !== action.payload
      );
    },
  },
});

export const { setUser, addUserGame, removeUserGame } = userSlice.actions;
export const userReducer = userSlice.reducer;

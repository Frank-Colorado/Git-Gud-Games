import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EditUserState {
  username: string;
  bio: string;
  avatar: string | null;
}

const initialState: EditUserState = {
  username: '',
  bio: '',
  avatar: null,
};

const editUserSlice = createSlice({
  name: 'editUser',
  initialState,
  reducers: {
    setForm(state, action: PayloadAction<EditUserState>) {
      state.username = action.payload.username;
      state.bio = action.payload.bio;
      state.avatar = action.payload.avatar;
    },
    setUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    setBio(state, action: PayloadAction<string>) {
      state.bio = action.payload;
    },
    setAvatar(state, action: PayloadAction<string | null>) {
      state.avatar = action.payload;
    },
  },
});

export const { setForm, setUsername, setBio, setAvatar } =
  editUserSlice.actions;

export const editUserReducer = editUserSlice.reducer;

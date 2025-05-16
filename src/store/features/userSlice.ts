import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type User = {
  email: string;
  password: string;
  name: string;
  id: string;
  token: string;
};

type AuthStateType = {
  user: User | null;
  isAuth: boolean;
};

const initialState: AuthStateType = {
  user: null,
  isAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    //   if (state.user) {
    //     state.isAuth = true;
    //   }
    },
  },
});

export const { setIsAuth, setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;

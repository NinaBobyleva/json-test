import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SeminarsType = {
    id: number;
    title: string;
    description: string;
    date: string;
    time: string;
    photo: string;
  };

type SeminarsStateType = {
    seminars: SeminarsType[];
};

const initialState: SeminarsStateType = {
    seminars: [],
};

const seminarsSlice = createSlice({
    name: "seminars",
    initialState,
    reducers: {
        setSeminars: (state, action: PayloadAction<[]>) => {
            state.seminars = action.payload;
        }
    }
});


export const { setSeminars } = seminarsSlice.actions;
export const seminarsReducers = seminarsSlice.reducer;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SeminarsType = {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    photo: string;
  };

type SeminarsStateType = {
    seminars: SeminarsType[];
    id: string;
};

const initialState: SeminarsStateType = {
    seminars: [],
    id: "0",
};

const seminarsSlice = createSlice({
    name: "seminars",
    initialState,
    reducers: {
        setSeminars: (state, action: PayloadAction<[]>) => {
            state.seminars = action.payload;
        },
        setId: (state, action: PayloadAction<string>) => {
            state.id = action.payload;
        }
    }
});


export const { setSeminars, setId } = seminarsSlice.actions;
export const seminarsReducers = seminarsSlice.reducer;
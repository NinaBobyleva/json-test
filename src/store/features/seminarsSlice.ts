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
    error: string;
    isLoad: boolean;
};

const initialState: SeminarsStateType = {
    seminars: [],
    id: "",
    error: "",
    isLoad: true,
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
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        setIsLoad: (state, action: PayloadAction<boolean>) => {
            state.isLoad = action.payload;
        },
    }
});


export const { setSeminars, setId, setError, setIsLoad } = seminarsSlice.actions;
export const seminarsReducers = seminarsSlice.reducer;
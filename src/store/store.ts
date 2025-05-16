import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { seminarsReducers } from "./features/seminarsSlice"
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from "react-redux";
import { userReducer } from "./features/userSlice";

export const makeStore = () => {
    return configureStore({
        reducer: combineReducers({
            seminars: seminarsReducers,
            user: userReducer,
        }),
    });
};


export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];


export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {TypedUseSelectorHook} from 'react-redux'
import personReducer from "./features/persons/personSlice";
import cartReducer from "./features/cart/cartSlice";



export const store = configureStore({
    reducer:{
        person:personReducer,
        cart:cartReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch:() => AppDispatch = useDispatch;
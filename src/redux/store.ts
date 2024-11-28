import { configureStore } from "@reduxjs/toolkit";
import goodsSlice from './goodsSlice/goodsSlice';
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: {
        goodsSlice
    }
})

// для типизации глобального стейта для передачи
export type RootState = ReturnType<typeof store.getState>;

// для типизации useDispatch
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()
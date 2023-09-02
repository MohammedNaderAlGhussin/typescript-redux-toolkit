import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import personSlice from "./slices/personSlice";

const store = configureStore({
  reducer: {
    person: personSlice,
  },
});

/*
  Documentation:

  export type AppDispatch = typeof store.dispatch;
  export const useAppDispatch: () => AppDispatch = useDispatch;

  export type RootState = ReturnType<typeof store.getState>;
  export const useAppSelector: TypedUseSelectorHook<RootState> =
    useSelector;

  Or we can use it in a single line :
*/
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

export default store;

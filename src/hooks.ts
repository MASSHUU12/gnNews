import type { RootState, AppDispatch } from "./app/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Use throughout app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store";

// Use throughout this app instead of plain `useSelector`.
// It ensures you can use RootState type instead of `typeof store.getState`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

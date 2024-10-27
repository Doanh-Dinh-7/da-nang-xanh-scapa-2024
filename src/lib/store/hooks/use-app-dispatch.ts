import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";

// Use throughout this app instead of plain `useDispatch`.
// It ensures you can use AppDispatch type instead of `typeof store.dispatch`
export const useAppDispatch: () => AppDispatch = useDispatch;

import { useEffect } from "react";
import FontFaceObserver from "fontfaceobserver";
import { useAppDispatch } from "@store";
import { setFontLoading } from "./redux";

// Service provider in Root component
export function FontProvider({ children }: FontProviderProps) {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setFontLoading(true));

		const fonts = ["Google Sans", "Merienda One", "Quicksand"];
		const fontObservers = fonts.map((font) => new FontFaceObserver(font));
		Promise.all(fontObservers.map((fontObserver) => fontObserver.load()))
			.then(() => dispatch(setFontLoading(false)))
			.catch(() => dispatch(setFontLoading(false)));

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return children;
}

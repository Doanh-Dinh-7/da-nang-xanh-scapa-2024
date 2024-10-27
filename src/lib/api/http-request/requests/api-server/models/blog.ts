import { IBase } from "./base";

export enum BlogType {
	TEA = "Tea",
	SEED = "Seed",
	RECIPE = "Recipe",
}

export interface IBlog extends IBase {
	id: string;
	title: string;
	slug: string;
	type: BlogType;
	source: string;
	views: number;
}

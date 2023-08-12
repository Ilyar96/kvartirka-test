import { ReactNode } from "react";
import { Asteroid } from "./asteroid";

export interface InitialCartState {
	cartItems: Asteroid[];
	addToCart: (arg0: Asteroid) => void;
}

export interface SearchContextProviderProps {
	children: ReactNode;
}

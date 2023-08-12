import { Asteroid } from "@/@types/asteroid";
import { InitialCartState, SearchContextProviderProps } from "@/@types/cart";
import { FC, createContext, useState } from "react";

const initialState: InitialCartState = {
	cartItems: [],
	addToCart: () => {},
};

export const CartContext = createContext<InitialCartState>(initialState);

export const CartContextProvider: FC<SearchContextProviderProps> = ({
	children,
}) => {
	const [cartItems, setCartItems] = useState<Asteroid[]>([]);

	const addToCart = (item: Asteroid) => {
		setCartItems([...cartItems, item]);
	};

	return (
		<CartContext.Provider value={{ cartItems, addToCart }}>
			{children}
		</CartContext.Provider>
	);
};

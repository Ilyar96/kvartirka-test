import { MainBlock } from "@/components";
import { CartContext } from "@/context/CartContext";
import React, { useContext } from "react";

export const SendPage = () => {
	const { cartItems } = useContext(CartContext);
	return (
		<MainBlock
			asteroids={cartItems}
			title="Заказ отправлен!"
			isNeedCart={false}
			isNeedPaginate={false}
		/>
	);
};

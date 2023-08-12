import React, { FC, useContext } from "react";
import { Button } from "../ui";
import { CartContext } from "@/context/CartContext";
import styles from "./Cart.module.css";
import { declinationOfNum } from "../../helpers/declinationOfNum";

export const Cart: FC = () => {
	const { cartItems } = useContext(CartContext);
	const count = cartItems.length;

	return (
		<div className={styles.cart}>
			<div className={styles.header}>
				<div className={styles.title}>Корзина</div>
				<div className={styles.count}>
					{count}{" "}
					{declinationOfNum(count, ["астероид", "астероида", "астероидов"])}
				</div>
			</div>
			<Button className={styles.btn}>Отправить</Button>
		</div>
	);
};

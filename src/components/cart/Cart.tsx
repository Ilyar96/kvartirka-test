import React, { FC, useContext } from "react";
import { useRouter } from "next/router";
import { CartContext } from "@/context/CartContext";
import { Button } from "../ui";
import { declinationOfNum } from "@/helpers/declinationOfNum";
import styles from "./Cart.module.css";

export const Cart: FC = () => {
	const { push } = useRouter();
	const { cartItems } = useContext(CartContext);
	const count = cartItems.length;

	const onClick = () => {
		push("/send");
	};

	return (
		<div className={styles.cart}>
			<div className={styles.header}>
				<div className={styles.title}>Корзина</div>
				<div className={styles.count}>
					{count}{" "}
					{declinationOfNum(count, ["астероид", "астероида", "астероидов"])}
				</div>
			</div>
			<Button
				className={styles.btn}
				onClick={onClick}
				disabled={cartItems.length === 0}
			>
				Отправить
			</Button>
		</div>
	);
};

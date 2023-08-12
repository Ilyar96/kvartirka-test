import React from "react";
import styles from "./Cart.module.css";
import { Button } from "../ui";

export const Cart = () => {
	return (
		<div className={styles.cart}>
			<div className={styles.header}>
				<div className={styles.title}>Корзина</div>
				<div className={styles.count}>2 астероида</div>
			</div>
			<Button className={styles.btn}>Отправить</Button>
		</div>
	);
};

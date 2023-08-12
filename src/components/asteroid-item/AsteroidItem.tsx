import React, { FC, useContext } from "react";
import Image from "next/image";
import cn from "classnames";
import { AsteroidItemProps } from "./AsteroidItem.prop";
import { formatDate, formatDistance } from "@/helpers";
import { Button, Htag } from "../ui";
import asteroidUrl from "@/assets/img/asteroid.png";
import dangerUrl from "@/assets/img/danger.png";
import styles from "./AsteroidItem.module.css";
import { CartContext } from "@/context/CartContext";

export const AsteroidItem: FC<AsteroidItemProps> = ({
	data,
	as: Component = "li",
	className,
	measurement,
}) => {
	const { addToCart, cartItems } = useContext(CartContext);
	const date = new Date(data.close_approach_data[0].close_approach_date);
	const isSmall = data.estimated_diameter.meters.estimated_diameter_max <= 200;
	const isAddedToCart = cartItems.find((item) => item.id === data.id);

	const onClick = () => {
		addToCart(data);
	};

	return (
		<Component className={cn(styles.asteroidItem, className)} key={data.id}>
			<div className={styles.date}>{formatDate(date)}</div>
			<div className={styles.info}>
				<div className={styles.distance}>
					<span>
						{formatDistance(
							data.close_approach_data[0].miss_distance[measurement],
							measurement
						)}
					</span>
				</div>

				<div className={styles.data}>
					<Image
						className={styles.image}
						width={isSmall ? 22 : 37}
						height={isSmall ? 24 : 40}
						src={asteroidUrl}
						alt={data.name}
					/>
					<div className={styles.right}>
						<Htag className={styles.name} tag="h4">
							{data.name}
						</Htag>
						<span className={styles.diameter}>
							Ø{" "}
							{Math.ceil(data.estimated_diameter.meters.estimated_diameter_max)}{" "}
							м
						</span>
					</div>
				</div>
			</div>
			<div className={styles.bottom}>
				<Button
					className={cn(styles.btn, { [styles.added]: isAddedToCart })}
					appearance="secondary"
					size="small"
					onClick={onClick}
					disabled={isAddedToCart}
				>
					{isAddedToCart ? "В корзине" : "Заказать"}
				</Button>
				{data.is_potentially_hazardous_asteroid && (
					<Image
						className={styles.danger}
						src={dangerUrl}
						width={67}
						height={20}
						alt="Опасно"
					/>
				)}
			</div>
		</Component>
	);
};

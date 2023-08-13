import React, { FC } from "react";
import cn from "classnames";
import { ApproachItemItemProps } from "./ApproachItem.prop";
import { formatDate, formatNum } from "@/helpers";
import styles from "./ApproachItem.module.css";

export const ApproachItem: FC<ApproachItemItemProps> = ({
	data,
	as: Component = "li",
	className,
	measurement,
}) => {
	const date = new Date(data.close_approach_date);

	return (
		<Component className={cn(styles.asteroidItem, className)}>
			<div className={styles.date}>{formatDate(date)}</div>
			<div className={styles.info}>
				<div className={styles.data}>
					<div>
						<span className={styles.subtitle}>Расстояние до Земли: </span>
						{formatNum(data.miss_distance[measurement], measurement)}
					</div>

					<div>
						<span className={styles.subtitle}>Летит по орбите </span>
						{data.orbiting_body === "Earth" ? "Земли" : data.orbiting_body}
					</div>
					<div>
						<span className={styles.subtitle}>
							Скорость относительно Земли:{" "}
						</span>
						{formatNum(
							data.relative_velocity.kilometers_per_hour,
							"kilometers-per-hour"
						)}
					</div>
				</div>
			</div>
		</Component>
	);
};

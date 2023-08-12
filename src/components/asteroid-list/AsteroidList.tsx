import React, { FC, Fragment, useState } from "react";
import cn from "classnames";
import { MeasurementValue } from "@/@types/common";
import { measurementValueList } from "@/constants";
import { AsteroidListProps } from "./AsteroidList.props";
import { AsteroidItem } from "..";
import styles from "./AsteroidList.module.css";

export const AsteroidList: FC<AsteroidListProps> = ({ data }) => {
	const [measurement, setMeasurement] =
		useState<MeasurementValue>("kilometers");

	const measurementChangeHandler = (value: MeasurementValue) => () => {
		setMeasurement(value);
	};

	return (
		<div className={styles.root}>
			<div className={styles.measurement}>
				{measurementValueList.map((item, i) => (
					<Fragment key={item.value + i}>
						{i !== 0 && <span className={styles.separator}> | </span>}
						<button
							className={cn(styles.measurementValue, {
								[styles.active]: measurement === item.value,
							})}
							onClick={measurementChangeHandler(item.value)}
							type="button"
						>
							{item.label}
						</button>
					</Fragment>
				))}
			</div>

			<ul className={styles.asteroidList}>
				{data.map((asteroid) => (
					<AsteroidItem
						data={asteroid}
						measurement={measurement}
						key={asteroid.id}
					/>
				))}
			</ul>
		</div>
	);
};

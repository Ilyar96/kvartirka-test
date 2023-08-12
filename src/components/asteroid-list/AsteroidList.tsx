import React, { FC, Fragment, useEffect, useRef, useState } from "react";
import cn from "classnames";
import { MeasurementValue } from "@/@types/common";
import { measurementValueList } from "@/constants";
import { AsteroidListProps } from "./AsteroidList.props";
import { AsteroidItem } from "..";
import styles from "./AsteroidList.module.css";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Spinner } from "../ui";

export const AsteroidList: FC<AsteroidListProps> = ({
	data,
	isInfiniteScroll = false,
	changePage,
	isLastPage = false,
}) => {
	const [isLoading, setIsLoading] = useState(false);
	const [measurement, setMeasurement] =
		useState<MeasurementValue>("kilometers");
	const ref = useRef<HTMLDivElement | null>(null);
	const entry = useIntersectionObserver(ref, {});
	const isVisible = !!entry?.isIntersecting;

	useEffect(() => {
		if (!isVisible || !changePage || !isInfiniteScroll) {
			return;
		}

		setIsLoading(true);
		const timer = setTimeout(changePage, 1000);

		return () => {
			setIsLoading(false);
			clearTimeout(timer);
		};
	}, [isVisible]);

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
			<div className={styles.bottom} ref={ref} />
			{isLoading && !isLastPage && <Spinner className={styles.spinner} />}
		</div>
	);
};

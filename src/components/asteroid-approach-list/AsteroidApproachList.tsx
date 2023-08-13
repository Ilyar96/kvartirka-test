import React, { FC, useEffect, useRef, useState } from "react";
import { MeasurementValue } from "@/@types/common";
import { AsteroidApproachListProps } from "./AsteroidApproachList.props";
import { MeasurementTabs, ApproachItem } from "..";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Spinner } from "../ui";
import styles from "./AsteroidApproachList.module.css";

export const AsteroidApproachList: FC<AsteroidApproachListProps> = ({
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isVisible]);

	const measurementChangeHandler = (value: MeasurementValue) => {
		setMeasurement(value);
	};

	return (
		<div className={styles.root}>
			<MeasurementTabs
				value={measurement}
				changeValue={measurementChangeHandler}
			/>

			<ul className={styles.asteroidList}>
				{data.map((asteroid, i) => (
					<ApproachItem data={asteroid} measurement={measurement} key={i} />
				))}
			</ul>
			<div className={styles.bottom} ref={ref} />
			{isLoading && !isLastPage && <Spinner className={styles.spinner} />}
		</div>
	);
};

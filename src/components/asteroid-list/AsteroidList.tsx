import React, { FC, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { MeasurementValue } from "@/@types/common";
import { AsteroidListProps } from "./AsteroidList.props";
import { AsteroidItem, MeasurementTabs } from "..";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Spinner } from "../ui";
import styles from "./AsteroidList.module.css";

export const AsteroidList: FC<AsteroidListProps> = ({
	data,
	isInfiniteScroll = false,
	changePage,
	isLastPage = false,
}) => {
	const { pathname } = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const [measurement, setMeasurement] =
		useState<MeasurementValue>("kilometers");
	const ref = useRef<HTMLDivElement | null>(null);
	const entry = useIntersectionObserver(ref, {});
	const isVisible = !!entry?.isIntersecting;
	const isSendPage = pathname === "/send";

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

	const measurementChangeHandler = (value: MeasurementValue) => {
		setMeasurement(value);
	};

	return (
		<div className={styles.root}>
			{!isSendPage && (
				<MeasurementTabs
					value={measurement}
					changeValue={measurementChangeHandler}
				/>
			)}

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

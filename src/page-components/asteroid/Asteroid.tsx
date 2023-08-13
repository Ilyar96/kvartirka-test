import React, { FC, useState } from "react";
import Image from "next/image";
import { AsteroidProps } from "@/@types/asteroid";
import { Container, Htag } from "@/components/ui";
import dangerUrl from "@/assets/img/danger.png";
import styles from "./Asteroid.module.css";
import { AsteroidApproachList } from "../../components/asteroid-approach-list/AsteroidApproachList";

export const AsteroidPage: FC<AsteroidProps> = ({ asteroid }) => {
	const [page, setPage] = useState(1);
	const paginatedApproachList = asteroid.close_approach_data.slice(
		0,
		page * 10
	);
	const minDiameter = asteroid.estimated_diameter.meters.estimated_diameter_min;
	const maxDiameter = asteroid.estimated_diameter.meters.estimated_diameter_max;
	const isHazardous = asteroid.is_potentially_hazardous_asteroid;

	const changePage = () => {
		setPage((prev) => ++prev);
	};

	return (
		<div>
			<Container>
				<Htag tag="h1">{asteroid.name}</Htag>

				<div className={styles.size}>
					<span className={styles.sizeTitle}>Размеры: </span>
					<span className={styles.minDiameter}>{Math.ceil(minDiameter)} м</span>
					<span> - </span>
					<span className={styles.maxDiameter}>{Math.ceil(maxDiameter)} м</span>
				</div>
				{isHazardous && (
					<Image
						className={styles.danger}
						src={dangerUrl}
						width={67}
						height={20}
						alt="Опасно"
					/>
				)}

				<Htag className={styles.listTitle} tag="h2">
					Список сближения астероида:{" "}
				</Htag>
				<AsteroidApproachList
					data={paginatedApproachList}
					isInfiniteScroll={true}
					changePage={changePage}
					isLastPage={
						paginatedApproachList.length === asteroid.close_approach_data.length
					}
				/>
			</Container>
		</div>
	);
};

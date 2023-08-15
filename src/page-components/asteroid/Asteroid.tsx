import React, { FC, useState } from "react";
import Image from "next/image";
import { AsteroidProps } from "@/@types/asteroid";
import { AsteroidApproachList } from "@/components";
import { Container, Htag } from "@/components/ui";
import { ASTEROIDS_PER_PAGE } from "@/constants";
import dangerUrl from "@/assets/img/danger.png";
import styles from "./Asteroid.module.css";

export const AsteroidPage: FC<AsteroidProps> = ({ asteroid }) => {
	const [page, setPage] = useState(1);
	const paginatedApproachList = asteroid.close_approach_data.slice(
		0,
		page * ASTEROIDS_PER_PAGE
	);
	const minDiameter = asteroid.estimated_diameter.meters.estimated_diameter_min;
	const maxDiameter = asteroid.estimated_diameter.meters.estimated_diameter_max;
	const isHazardous = asteroid.is_potentially_hazardous_asteroid;

	const changePage = () => {
		setPage((prev) => ++prev);
	};

	return (
		<section>
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
		</section>
	);
};

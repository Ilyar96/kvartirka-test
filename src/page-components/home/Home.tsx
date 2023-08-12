import React, { FC, useState } from "react";
import { AsteroidList, Cart } from "@/components";
import { HomeProps } from "@/@types/common";
import { Container, Htag } from "@/components/ui";
import styles from "./Home.module.css";

export const HomePage: FC<HomeProps> = ({ asteroids }) => {
	const [page, setPage] = useState(1);
	const paginatedData = asteroids.slice(0, page * 10);

	const changePage = () => {
		setPage((prev) => ++prev);
	};

	return (
		<div className={styles.root}>
			<Container className={styles.container}>
				<div className={styles.content}>
					<Htag tag="h1">Ближайшие подлёты астероидов</Htag>
					<AsteroidList
						data={paginatedData}
						isInfiniteScroll={true}
						changePage={changePage}
						isLastPage={asteroids.length === paginatedData.length}
					/>
					<Cart />
				</div>
			</Container>
		</div>
	);
};

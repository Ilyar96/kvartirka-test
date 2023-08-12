import React, { FC } from "react";
import { AsteroidList } from "@/components";
import { HomeProps } from "@/@types/common";
import { Container, Htag } from "@/components/ui";
import styles from "./Home.module.css";

export const HomePage: FC<HomeProps> = ({ nearEarthObjects }) => {
	const asteroids = Object.values(nearEarthObjects).flat(1);

	return (
		<div className={styles.root}>
			<Container className={styles.container}>
				<div className={styles.content}>
					<Htag tag="h1">Ближайшие подлёты астероидов</Htag>
					<AsteroidList data={asteroids} />
				</div>
			</Container>
		</div>
	);
};

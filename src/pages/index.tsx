import { FC } from "react";
import { GetStaticProps } from "next";
import { HomePage } from "@/page-components";
import { withLayout } from "@/hok";
import neoAsteroidService from "@/services/neoAsteroidService";
import { HomeProps } from "@/@types/common";
import { sortNeoAsteroidListByDateCallback } from "@/helpers";
import { Asteroid } from "@/@types/asteroid";

const Home: FC<HomeProps> = ({ asteroids }) => {
	return (
		<>
			<HomePage asteroids={asteroids} />
		</>
	);
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	let asteroids: Asteroid[] = [];

	try {
		const data = await neoAsteroidService.getAll();
		asteroids = Object.values(data.near_earth_objects).flat(1);
		asteroids.sort(sortNeoAsteroidListByDateCallback);
	} catch (error) {
		console.error((error as Error).message);
	}

	return {
		props: {
			asteroids,
		},
	};
};

export default withLayout(Home);

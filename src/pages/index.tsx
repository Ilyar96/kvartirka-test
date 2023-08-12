import { FC } from "react";
import { GetStaticProps } from "next";
import { HomePage } from "../page-components/home/Home";
import { withLayout } from "@/hok";
import neoAsteroidService from "@/services/neoAsteroidService";
import { HomeProps } from "@/@types/common";
import { sortNeoAsteroidListByDateCallback } from "@/helpers";

const Home: FC<HomeProps> = ({ asteroids }) => {
	return (
		<>
			<HomePage asteroids={asteroids} />
		</>
	);
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const data = await neoAsteroidService.getAll();
	const asteroids = Object.values(data.near_earth_objects).flat(1);
	asteroids.sort(sortNeoAsteroidListByDateCallback);

	return {
		props: {
			asteroids,
		},
	};
};

export default withLayout(Home);

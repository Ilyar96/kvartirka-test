import { GetStaticProps } from "next";
import { HomePage } from "../page-components/home/Home";
// import styles from "@/styles/Home.module.css";
import { withLayout } from "@/hok";
import neoAsteroidService from "@/services/neoAsteroidService";
import { HomeProps } from "@/@types/common";
import { FC } from "react";

const Home: FC<HomeProps> = ({ nearEarthObjects }) => {
	return (
		<>
			<HomePage nearEarthObjects={nearEarthObjects} />
		</>
	);
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const data = await neoAsteroidService.getAll();

	return {
		props: {
			nearEarthObjects: data.near_earth_objects,
		},
	};
};

export default withLayout(Home);

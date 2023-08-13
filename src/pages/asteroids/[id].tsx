import React, { FC } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import neoAsteroidService from "@/services/neoAsteroidService";
import { AsteroidProps } from "@/@types/asteroid";
import { AsteroidPage } from "@/page-components";
import { withLayout } from "@/hok";

const Asteroid: FC<AsteroidProps> = ({ asteroid }) => {
	return <AsteroidPage asteroid={asteroid} />;
};

export const getServerSideProps: GetServerSideProps<AsteroidProps> = async (
	context: GetServerSidePropsContext
) => {
	const id = context.query?.id;

	if (!id || isNaN(+id)) {
		return {
			notFound: true,
		};
	}

	try {
		const asteroid = await neoAsteroidService.getById(+id);
		return { props: { asteroid } };
	} catch (error) {
		console.error((error as Error).message);
		return {
			notFound: true,
		};
	}
};

export default withLayout(Asteroid);

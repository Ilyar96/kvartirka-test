import React, { FC } from "react";
import { MainBlock } from "@/components";
import { HomeProps } from "@/@types/common";

export const HomePage: FC<HomeProps> = ({ asteroids }) => {
	return (
		<MainBlock asteroids={asteroids} title="Ближайшие подлёты астероидов" />
	);
};

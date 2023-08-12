import { Asteroid } from "@/@types/asteroid";

export const sortNeoAsteroidListByDateCallback = (a: Asteroid, b: Asteroid) =>
	a.close_approach_data[0].close_approach_date >
	b.close_approach_data[0].close_approach_date
		? 1
		: -1;

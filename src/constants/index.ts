import { Measurement } from "@/@types/common";

export const API_NASA_BASE_URL = "https://api.nasa.gov/neo/rest/v1/";
export const ASTEROIDS_PER_PAGE = 10;

export const measurementValueList: Measurement[] = [
	{
		label: "в километрах",
		value: "kilometers",
	},
	{
		label: "в лунных орбитах",
		value: "lunar",
	},
];

import { NearEarthObjects } from "./asteroid";

export interface HomeProps extends Record<string, unknown> {
	nearEarthObjects: NearEarthObjects;
}

export type MeasurementValue = "kilometers" | "lunar";

export interface Measurement {
	label: string;
	value: MeasurementValue;
}

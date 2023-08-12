import { Asteroid } from "@/@types/asteroid";
import { MeasurementValue } from "@/@types/common";

export interface AsteroidItemProps {
	as?: "li" | "div";
	className?: string;
	data: Asteroid;
	measurement: MeasurementValue;
}

import { Asteroid, CloseApproachData } from "@/@types/asteroid";
import { MeasurementValue } from "@/@types/common";

export interface ApproachItemItemProps {
	as?: "li" | "div";
	className?: string;
	data: CloseApproachData;
	measurement: MeasurementValue;
}

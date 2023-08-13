import { MeasurementValue } from "@/@types/common";

export interface MeasurementTabsProps {
	value: MeasurementValue;
	changeValue: (arg0: MeasurementValue) => void;
}

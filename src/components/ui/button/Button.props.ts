import { ReactNode } from "react";
export interface ButtonProps
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	appearance?: "primary" | "secondary";
	size?: "small" | "large";
	children: ReactNode;
}

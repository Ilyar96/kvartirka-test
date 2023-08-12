import React, { FC } from "react";
import cn from "classnames";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";

export const Button: FC<ButtonProps> = ({
	children,
	className = "",
	appearance = "primary",
	size = "large",
	...props
}) => {
	return (
		<button
			className={cn(styles.btn, className, styles[appearance], styles[size])}
			type="button"
			{...props}
		>
			{children}
		</button>
	);
};

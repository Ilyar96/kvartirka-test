import { FC } from "react";
import cn from "classnames";
import { HtagProps } from "./Htag.prop";
import styles from "./Htag.module.css";

export const Htag: FC<HtagProps> = ({
	tag: Component,
	className,
	center,
	children,
	...props
}) => {
	return (
		<Component
			className={cn(className, styles[Component], styles.title, {
				[styles.center]: center,
			})}
			{...props}
		>
			{children}
		</Component>
	);
};

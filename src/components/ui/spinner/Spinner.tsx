import { FC } from "react";
import Image from "next/image";
import cn from "classnames";
import { SpinnerProps } from "./Spinner.prop";
import spinnerUrl from "@/assets/svg/spinner.svg";
import styles from "./Spinner.module.css";

export const Spinner: FC<SpinnerProps> = ({ className = "" }) => {
	return (
		<div className={cn(styles.root, className)}>
			<Image
				className={styles.img}
				width={50}
				height={50}
				src={spinnerUrl}
				alt="Загрузка..."
			/>
		</div>
	);
};

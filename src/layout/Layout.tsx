import { FC, PropsWithChildren } from "react";
import { Header } from "./header/Header";
import styles from "./Layout.module.css";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<main className={styles.main}>{children}</main>
		</div>
	);
};

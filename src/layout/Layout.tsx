import { FC, PropsWithChildren } from "react";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import styles from "./Layout.module.css";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
		</div>
	);
};

import React from "react";
import styles from "./Footer.module.css";
import { Container } from "@/components/ui";

export const Footer = () => {
	return (
		<div className={styles.footer}>
			<Container>© Все права и планета защищены</Container>
		</div>
	);
};

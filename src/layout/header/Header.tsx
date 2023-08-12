import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui";
import logo from "@/assets/svg/logo.svg";
import styles from "./Header.module.css";

export const Header = () => {
	return (
		<header className={styles.header}>
			<Container>
				<Link className={styles.logo} href="/">
					<Image
						className={styles.image}
						width={230}
						height={35}
						src={logo}
						alt="Логотип"
						priority={true}
					/>
				</Link>
				<div className={styles.description}>
					ООО “Команда им. Б. Уиллиса”. <br />
					Взрываем астероиды с 1998 года.
				</div>
			</Container>
		</header>
	);
};

import React, { FC, useState } from "react";
import { AsteroidList, Cart } from "@/components";
import { Button, Container, Htag } from "@/components/ui";
import { MainBlockProps } from "./MainBlock.prop";
import { ASTEROIDS_PER_PAGE } from "@/constants";
import styles from "./MainBlock.module.css";

export const MainBlock: FC<MainBlockProps> = ({
	asteroids,
	title,
	isNeedCart = true,
	isNeedPaginate = true,
}) => {
	const [page, setPage] = useState(1);
	const paginatedData = asteroids.slice(0, page * ASTEROIDS_PER_PAGE);

	const changePage = () => {
		setPage((prev) => ++prev);
	};

	return (
		<section className={styles.root}>
			<Container className={styles.container}>
				<div className={styles.content}>
					{asteroids.length > 0 ? (
						<>
							<Htag tag="h1">{title}</Htag>
							<AsteroidList
								data={isNeedPaginate ? paginatedData : asteroids}
								isInfiniteScroll={true}
								changePage={changePage}
								isLastPage={asteroids.length === paginatedData.length}
							/>
						</>
					) : (
						<Htag tag="h1">Ничего не найдено</Htag>
					)}
					{isNeedCart && <Cart />}
				</div>
			</Container>
		</section>
	);
};

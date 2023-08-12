import React, { FC, useState } from "react";
import { AsteroidList, Cart } from "@/components";
import { Button, Container, Htag } from "@/components/ui";
import { MainBlockProps } from "./MainBlock.prop";
import styles from "./MainBlock.module.css";
import { useRouter } from "next/router";

export const MainBlock: FC<MainBlockProps> = ({
	asteroids,
	title,
	isNeedCart = true,
	isNeedPaginate = true,
	isSendPage = false,
}) => {
	const { back } = useRouter();
	const [page, setPage] = useState(1);
	const paginatedData = asteroids.slice(0, page * 10);

	const changePage = () => {
		setPage((prev) => ++prev);
	};

	const onClick = () => {
		back();
	};

	return (
		<div className={styles.root}>
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
							{isSendPage && (
								<Button className={styles.backBtn} onClick={onClick}>
									Вернуться назад
								</Button>
							)}
						</>
					) : (
						<Htag tag="h1">Ничего не найдено</Htag>
					)}
					{isNeedCart && <Cart />}
				</div>
			</Container>
		</div>
	);
};

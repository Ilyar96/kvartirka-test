import { Asteroid } from "@/@types/asteroid";

export interface AsteroidListProps {
	data: Asteroid[];
	isInfiniteScroll?: boolean;
	changePage?: () => void;
	isLastPage?: boolean;
}

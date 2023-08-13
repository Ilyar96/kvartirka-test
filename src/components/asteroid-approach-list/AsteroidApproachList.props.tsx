import { CloseApproachData } from "@/@types/asteroid";

export interface AsteroidApproachListProps {
	data: CloseApproachData[];
	isInfiniteScroll?: boolean;
	changePage?: () => void;
	isLastPage?: boolean;
}

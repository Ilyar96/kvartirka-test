import {
	Asteroid,
	GetAllNeoAsteroidQuery,
	GetNeoAsteroidByIdQuery,
	GetAllNeoAsteroidResponse,
} from "@/@types/asteroid";
import api from "./api";

const neoAsteroidService = {
	async getAll(params?: GetAllNeoAsteroidQuery) {
		const { data } = await api.get<GetAllNeoAsteroidResponse>("feed", {
			params,
		});
		return data;
	},
	async getById(asteroidId: GetNeoAsteroidByIdQuery["asteroid_id"]) {
		const { data } = await api.get<Asteroid>(`neo/${asteroidId}`);
		return data;
	},
};

export default neoAsteroidService;

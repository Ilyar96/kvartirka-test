import axios from "axios";
import { API_NASA_BASE_URL } from "@/constants";

const api = axios.create({
	baseURL: API_NASA_BASE_URL,
	params: { api_key: process.env.NEXT_PUBLIC_API_KEY },
});

export default api;

import useSWR from "swr";
import { fetcher } from "./fetcher";

export const useRakutenApi = () => {
	const {data, error, isLoading} = useSWR('',fetcher)
	return {
		items: data,
		isError: error,
		isLoading
	}
};

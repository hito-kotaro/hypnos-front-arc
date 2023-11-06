import useSWR from "swr";
import { fetcher } from "../fether";

export const useGetPost = (id: number) => {
  const { data, error, isLoading } = useSWR(`posts/${id}`, fetcher);
  return {
    post: data,
    isError: error,
    isLoading,
  };
};

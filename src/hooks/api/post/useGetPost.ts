import { fetcher } from "@/feature/fether";
import useSWR from "swr";

export const useGetPost = (id: number) => {
  const { data, error, isLoading } = useSWR(`posts/${id}`, fetcher);
  return {
    post: data,
    isError: error,
    isLoading,
  };
};

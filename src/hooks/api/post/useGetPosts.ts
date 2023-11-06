import { fetcher } from "@/feature/fether";
import useSWR from "swr";

export const useGetPosts = () => {
  const { data, error, isLoading } = useSWR("posts", fetcher);
  return {
    posts: data,
    isError: error,
    isLoading,
  };
};

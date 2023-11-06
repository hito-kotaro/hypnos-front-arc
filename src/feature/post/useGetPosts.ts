import useSWR from "swr";
import { fetcher } from "../fether";

export const useGetPosts = () => {
  const { data, error, isLoading } = useSWR("posts", fetcher);
  return {
    posts: data,
    isError: error,
    isLoading,
  };
};

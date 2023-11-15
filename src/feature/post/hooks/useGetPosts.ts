import useSWR from "swr";
import { fetcher } from "../fetcher";

export const useGetPosts = () => {
  const { data, error, isLoading } = useSWR("posts", fetcher);
  return {
    posts: data,
    isError: error,
    isLoading,
  };
};

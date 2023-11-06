import axios from "axios";
import useSWR from "swr";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_BASE,
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

const fetcher = async (key: string) => {
  return instance.get(key).then((res) => res.data);
};

export const usePosts = () => {
  const { data, error, isLoading } = useSWR("posts", fetcher);
  return {
    posts: data,
    isError: error,
    isLoading,
  };
};

export const usePost = (id: number) => {
  const { data, error, isLoading } = useSWR(`posts/${id}`, fetcher);
  return {
    post: data,
    isError: error,
    isLoading,
  };
};

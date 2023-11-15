import useSWR from "swr";
import { fetcher } from "../fetcher";

export const useRakutenItems = (keyword: string) => {
  const { data, error, isLoading } = useSWR(keyword, fetcher);
  return {
    rakutenItems: data,
    isError: error,
    isLoading,
  };
};

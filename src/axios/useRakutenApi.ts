import axios from "axios";
import { useState } from "react";

export const useRakutenApi = () => {
  const [isLoading, setIsLoading] = useState(false);

  const instance = axios.create({
    baseURL: "http://localhost:3001/",
    timeout: 1000,
    headers: { "Content-Type": "application/json" },
  });

  const setLoadingTrue = () => setIsLoading(true);
  const setLoadingFalse = () => setIsLoading(false);

  return { isLoading, setIsLoading, setLoadingTrue, setLoadingFalse, instance };
};

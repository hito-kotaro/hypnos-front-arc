import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_BASE,
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

export const fetcher = async (key: string) => {
  return axiosInstance.get(key).then((res) => res.data);
};

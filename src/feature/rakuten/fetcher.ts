import axios from "axios";

export const rakutenAxiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_RAKUTEN_API_BASE}/${process.env.NEXT_PUBLIC_RAKUTEN_API_VERSION}`,
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
  params: {
    format: "json",
    affiliateId: process.env.NEXT_PUBLIC_RAKUTEN_API_AFF_ID,
    applicationId: process.env.NEXT_PUBLIC_RAKUTEN_API_APP_ID,
  },
});

export const fetcher = async (keyword: string) => {
	console.log()
  return rakutenAxiosInstance
    .get("", { params: { keyword } })
    .then((res) => res.data);
};

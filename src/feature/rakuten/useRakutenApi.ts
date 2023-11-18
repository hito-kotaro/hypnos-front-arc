import { RakutenItem } from "@/types/item";
import axios from "axios";
import { useState } from "react";

export const useRakutenApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [rakutenItemList, setRakutenItemList] = useState<RakutenItem[]>([]);

  const instance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_RAKUTEN_API_BASE}/${process.env.NEXT_PUBLIC_RAKUTEN_API_VERSION}`,
    timeout: 1000,
    headers: { "Content-Type": "application/json" },
    params: {
      format: "json",
      affiliateId: process.env.NEXT_PUBLIC_RAKUTEN_API_AFF_ID,
      applicationId: process.env.NEXT_PUBLIC_RAKUTEN_API_APP_ID,
    },
  });

  const setLoadingTrue = () => setIsLoading(true);
  const setLoadingFalse = () => setIsLoading(false);

  const searchItem = async (keyword: string) => {
    setLoadingTrue();
    const result = await instance.get("", { params: { keyword } });
    const rowRakutenItemList: RakutenItem[] = result.data.Items;
    let rakutenItemList: RakutenItem[] = [];

    rowRakutenItemList.map((i: RakutenItem) => {
      /* FIXME: 楽天側で画像のURLが設定されていないアイテムはフロント側でNoImageに差し替えられるが、
				楽天側で画像のURLが設定されているが、そのURLが404になる場合が対応できていない 
				無視でよい？
			if (item.smallImageUrls.length === 0) {
				console.log(item);
			}
			*/
      rakutenItemList.push(i);
    });
    setRakutenItemList(rakutenItemList);
    setLoadingFalse();
  };

  return {
    searchItem,
    rakutenItemList,
    isLoading,
    setIsLoading,
    setLoadingTrue,
    setLoadingFalse,
    instance,
  };
};

import { RakutenItemType, RowRakutenItemType } from "@/types/itemType";
import axios from "axios";
import { useState } from "react";

export const useRakutenApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [rakutenItemList, setRakutenItemList] = useState<RakutenItemType[]>([]);

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
    const rowRakutenItemList: RowRakutenItemType[] = result.data.Items;
    let rakutenItemList: RakutenItemType[] = [];

    rowRakutenItemList.map((i: RowRakutenItemType) => {
      const item = i.Item;
      const processedrakutenItem: RakutenItemType = {
        itemCode: item.itemCode,
        itemUrl: item.affiliateUrl,
        itemImageUrl: item.smallImageUrls[0].imageUrl,
        itemName: item.itemName,
        itemPrice: item.itemPrice,
      };
      rakutenItemList.push(processedrakutenItem);
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

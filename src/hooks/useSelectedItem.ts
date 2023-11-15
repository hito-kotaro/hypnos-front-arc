import { RowRakutenItemType, SelectedItemType } from "@/types/itemType";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const useSelectedItem = () => {
  const [selectedItemList, setSelectedItemList] = useState<SelectedItemType[]>(
    [],
  );

  const pushSelectedItem = (item: RowRakutenItemType) => {
    const selectedItem: SelectedItemType = {
      itemCode: item.Item.itemCode,
      itemImageUrl: item.Item.smallImageUrls[0].imageUrl,
      itemName: item.Item.itemName,
      itemPrice: item.Item.itemPrice,
      itemUrl: item.Item.affiliateUrl,
      uuid: uuidv4(),
    };
    setSelectedItemList([...selectedItemList, selectedItem]);
  };

  const removeSelectedItem = (uuid: string) => {
    const removedList = selectedItemList.filter((item: SelectedItemType) => {
      return item.uuid !== uuid;
    });
    setSelectedItemList(removedList);
  };

  return { selectedItemList, pushSelectedItem, removeSelectedItem };
};

import { ExtendItemType } from "@/types/itemType";
import { useState } from "react";

export const useItemList = () => {
  const [itemList, setItemList] = useState<ExtendItemType[]>([]);

  const addItem = (eItem: ExtendItemType) => {
    itemList.push(eItem);
    setItemList(itemList);
  };

  const removeItem = (listId: string) => {
    const removed = itemList.filter((eItem: ExtendItemType) => {
      return eItem.listId !== listId;
    });
    setItemList(removed);
  };

  const clearItemList = () => {
    setItemList([]);
  };

  return { itemList, addItem, removeItem, clearItemList };
};

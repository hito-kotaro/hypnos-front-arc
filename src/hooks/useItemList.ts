import { ExtendItemType } from "@/types/itemType";
import { useState } from "react";

export const useItemList = () => {
  const [itemList, setItemList] = useState<ExtendItemType[]>([]);

  const addItem = (eItem: ExtendItemType) => {
    console.log(eItem);
    itemList.push(eItem);
    setItemList(itemList);
  };

  const removeItem = (listId: string) => {
    const removed = itemList.filter((eItem: ExtendItemType) => {
      return eItem.listId !== listId;
    });
    console.log(removed);
    setItemList(removed);
  };

  const clearItemList = () => {
    setItemList([]);
  };

  return { itemList, addItem, removeItem, clearItemList };
};

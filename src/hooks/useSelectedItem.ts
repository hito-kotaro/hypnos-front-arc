import { RakutenItemType, SelectedItemType } from "@/types/itemType";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const useSelectedItem = () => {
  const [selectedItemList, setSelectedItemList] = useState<SelectedItemType[]>(
    [],
  );

  const pushSelectedItem = (item: RakutenItemType) => {
    const selectedItem: SelectedItemType = {
      ...item,
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

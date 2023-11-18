import { PickedRakutenItem, RakutenItem } from "@/types/item";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const useSelectedItem = () => {
  const [pickedItemList, setPickedItemList] = useState<PickedRakutenItem[]>([]);

  const pickItem = (item: RakutenItem) => {
    const selectedItem: PickedRakutenItem = {
      ...item,
      uuid: uuidv4(),
    };
    setPickedItemList([...pickedItemList, selectedItem]);
  };

  const removeItem = (uuid: string) => {
    const removedList = pickedItemList.filter((item: PickedRakutenItem) => {
      return item.uuid !== uuid;
    });
    setPickedItemList(removedList);
  };

  return { pickedItemList, pickItem, removeItem };
};

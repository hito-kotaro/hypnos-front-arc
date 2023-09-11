import { StringLiteralLike } from "typescript";

export type BaseItemType = {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
};

export type RakutenFetchedItemType = BaseItemType & {
  itemCode: string;
	itemUrl: string
};

export type SkippedItemType = Omit<RakutenFetchedItemType,"price" >

// 登録するデータの
export type RegistedItemType = BaseItemType & {
  id: number;
	itemUrl?: string
};

export type ExtendItemType = BaseItemType & {
  listId: string;
};

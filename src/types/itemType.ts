export type BaseItemType = {
  itemName: string;
  itemImageUrl: string;
  itemPrice: number;
};

export type ItemType = BaseItemType & {
  id: number;
};

export type RakutenItemType = BaseItemType & {
  itemCode: string;
  itemUrl: string;
};

export type SelectedItemType = RakutenItemType & {
  uuid: string;
};

export type RowRakutenItemType = {
	Item:{
	itemCode: string,
	itemName: string,
	itemPrice: number,
	affiliateUrl: string,
	smallImageUrls: {imageUrl:string}[]
	}
}

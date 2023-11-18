export type BaseItemType = {
  itemName: string;
  itemImageUrl: string;
  itemPrice: number;
};

export type RakutenItemType = BaseItemType & {
  itemCode: string;
  itemUrl: string;
};

export type InsertItemType = {
  postId: number;
  itemCode: string;
  /*
   *id, post_id, itemcode
   * */
};

// 自前のDBから取得したアイテムの型
export type ItemType = {
  id: number;
  postId: number;
  itemCode: string;
};

export type SelectedItemType = RakutenItemType & {
  uuid: string;
};

export type RowRakutenItemType = {
  Item: {
    itemCode: string;
    itemName: string;
    itemPrice: number;
    affiliateUrl: string;
    smallImageUrls: { imageUrl: string }[];
  };
};

export interface RakutenItem {
  itemCode: string;
  itemName: string;
  itemPrice: number;
  affiliateUrl: string;
  smallImageUrls: {
    imageUrl: string;
  }[];
}

export interface PickedRakutenItem extends RakutenItem {
  uuid: string;
}

export interface BaseItem {
  postId: number;
  itemCode: string;
}

export interface NewItem extends BaseItem {}

export interface Item extends BaseItem {
  id: number;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
}

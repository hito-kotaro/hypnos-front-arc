import { NumberLiteralType } from "typescript";

export interface RakutenItem {
  itemCode: string;
  itemName: string;
  itemPrice: number;
  affiliateUrl: string;
  smallImageUrl: {
    imageUrls: string;
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
  created_at: Date;
  updated_at: Date | null;
  deleted_at: Date | null;
}

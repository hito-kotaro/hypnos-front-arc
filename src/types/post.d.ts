import { Interface } from "readline";

export interface BasePost {
  handleName: string;
  postTitle: string;
  postBody: string;
  postImageUrl: string;
}

export interface NewPost extends BasePost {}

export interface Post extends BasePost {
  id: number;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
}

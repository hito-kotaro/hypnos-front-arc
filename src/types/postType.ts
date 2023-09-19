export type BasePostType = {
  handleName: string;
  postTitle: string;
  postBody: string;
  postImageUrl: string;
  createdAt: Date;
};

export type NewPostType = BasePostType;

export type PostType = BasePostType & {
  id: number;
};

export type RowPostType = {
  id: number;
  handle_name: string;
  post_title: string;
  post_body: string;
  post_image_url: string;
  created_at: Date;
};

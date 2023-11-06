export type BasePostType = {
  handleName: string;
  postTitle: string;
  postBody: string;
  postImageUrl: string;
  createdAt: Date;
};

export type PostType = BasePostType & {
  id: number;
};

export type NewPostType = {
  handle_name: string;
  post_title: string;
  post_body: string;
  image_url: string;
  created_at: Date;
};

export type DBPostType = NewPostType & {
  id: number;
};

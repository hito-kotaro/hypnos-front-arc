import { DBPostType, PostType } from "@/types/postType";

export const postToSnake = (post: PostType): DBPostType => {
  return {
    id: post.id,
    handle_name: post.handleName,
    post_title: post.postBody,
    post_body: post.postBody,
    image_url: post.postImageUrl,
    created_at: post.createdAt,
  };
};

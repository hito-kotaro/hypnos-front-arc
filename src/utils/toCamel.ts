import { DBPostType, PostType } from "@/types/postType";

export const toCamelCase = (key: string) => {
  return key
    .split("_")
    .map((word: string, index: number) => {
      if (index === 0) {
        return word.toLowerCase();
      }

      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
};

export const postToCamel = (post: DBPostType): PostType => {
  return {
    id: post.id,
    postTitle: post.post_title,
    postBody: post.post_body,
    handleName: post.handle_name,
    postImageUrl: post.image_url,
    createdAt: post.created_at,
  };
};

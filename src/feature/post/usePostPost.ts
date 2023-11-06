import { NewPostType } from "@/types/postType";
import { axiosInstance } from "../fether";

export const usePostPosts = async (newPost: NewPostType) => {
  return await axiosInstance.post("posts", newPost);
};

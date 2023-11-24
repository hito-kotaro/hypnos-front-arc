import { axiosInstance } from "./fetcher";
import { NewPost } from "@/types/post";

export const registerPost = async (newPost: NewPost) => {
  return await axiosInstance.post("posts", newPost);
};

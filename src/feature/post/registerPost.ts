import { NewPostType } from "@/types/postType";
import { axiosInstance } from "./fetcher";


export const registerPost = async (newPost: NewPostType) => {
  return await axiosInstance.post("posts", newPost);
};

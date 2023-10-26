import { NewPostType, PostType, RowPostType } from "@/types/postType";
import axios from "axios";
import { useState } from "react";

export const useBackend = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [postList, setPostList] = useState<PostType[]>([]);
  const [selectedPost, setSelectedPost] = useState<PostType>();

  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_API_BASE,
    timeout: 1000,
    headers: { "Content-Type": "application/json" },
  });

  const setLoadingTrue = () => setIsLoading(true);
  const setLoadingFalse = () => setIsLoading(false);

  const fetchPosts = async () => {
    setLoadingTrue();
    const result = await instance.get("posts");
    let newPostList: PostType[] = [];
    console.log(result.data);
    result.data.map((rowPost: RowPostType) => {
      const {
        id,
        handle_name,
        post_title,
        post_body,
        post_image_url,
        created_at,
      } = rowPost;

      const post: PostType = {
        id,
        handleName: handle_name,
        postTitle: post_title,
        postBody: post_body,
        postImageUrl: post_image_url,
        createdAt: created_at,
      };
      newPostList.push(post);
    });
    setPostList(newPostList);
    setLoadingFalse();
  };

  const fetchPostById = async (postId: number) => {
    const result = await instance.get("posts", { params: { id: postId } });

    const { id, handle_name, post_title, post_body, image_url, created_at } =
      result.data[0];

    const post: PostType = {
      id,
      handleName: handle_name,
      postTitle: post_title,
      postBody: post_body,
      postImageUrl: image_url,
      createdAt: created_at,
    };
    console.log(post);
    setSelectedPost(post);
  };

  const registerNewPost = async (post: NewPostType) => {
    const result = await instance.post("posts", post);
    console.log(result);
  };

  return {
    instance,
    isLoading,
    postList,
    selectedPost,
    setLoadingTrue,
    setLoadingFalse,
    fetchPosts,
    fetchPostById,
    registerNewPost,
  };
};
